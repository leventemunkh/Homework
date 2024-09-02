#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>
using namespace std;

struct Game
{
	string platform, csopjatek, nev, ertekeles, mufaj, jatszhato, PStier;
};
class GameStore
{
private: int db = 719;  // az egyszerűség kedvéért az oszlopok címét is a tömbben tároltam
	   Game* tmb;
public: GameStore(string fnev)
{
	tmb = new Game[db];
	ifstream be(fnev);
	if (be.fail()) { cout << "Hibas file megnyitas"; system("pause"); exit(1); }
	for (int i = 0; i < db; i++)
	{
		getline(be, tmb[i].platform, ';');  // értelmetlen, hogy ha nincs érték
		getline(be, tmb[i].csopjatek, ';');
		getline(be, tmb[i].nev, ';');
		getline(be, tmb[i].ertekeles, ';');
		getline(be, tmb[i].mufaj, ';');
		getline(be, tmb[i].jatszhato, ';');
		getline(be, tmb[i].PStier);
	}
	be.close();
}
	  void ShowData();
	  int PS45Games();
	  void GroupRatings();
	  bool Search(string jatek);
	  string BestGame();
	  void Multiplayer();

	  ~GameStore()
	  {
		  delete[]tmb;
	  }
};
int main()
{
	string fajlnev = "ps_extra_games_input.csv";
	GameStore G(fajlnev);
	G.ShowData();
	cout << "\nPS4/PST konzollal jatszhato jatekok szama " << G.PS45Games() << endl;
	G.GroupRatings();
	cout << "\nAdja meg a keresett jatek nevet "<< endl;
	string jateknev;
	getline(cin, jateknev);
	if (G.Search(jateknev))cout << "A keresett jatek letezik" << endl;
	else cout << "A keresett jatek nem letezik" << endl;
	cout << "\nA legjobb ertekelest kapott jatek : " << G.BestGame();
	cout << "\nMultiplayer jatszhatosag : ";
	G.Multiplayer();
	return 0;
}
void GameStore::ShowData()
{
	cout.setf(ios::left);
	cout << setw(15) << tmb[0].platform << setw(15) << tmb[0].csopjatek << setw(15) << tmb[0].ertekeles << setw(15) << tmb[0].jatszhato << tmb[0].nev << endl;
	for (int i = 1; i <11; i++)
	{
		cout << setw(15) << tmb[i].platform << setw(15) << tmb[i].csopjatek << setw(15) << tmb[i].ertekeles << setw(15) << tmb[i].jatszhato << tmb[i].nev << endl;
	}
}
int GameStore::PS45Games()
{
	int num = 0;
	for (int i = 1; i < db; i++)
	{
		if ((tmb[i].platform == "PS4/PS5")&&tmb[i].ertekeles.size()>0 && stoi(tmb[i].ertekeles) >= 90)
		{                                   // tmb[i].ertekeles.size()>0 esetleg, ha üres az értékelés értéke
			cout << tmb[i].nev <<" " << tmb[i].ertekeles << endl;
			num++;
		}
	}
	return num;
}
void GameStore::GroupRatings()
{
	int ered[4] = { 0 };
	for (int i = 1; i < db; i++)
	{
		if (tmb[i].ertekeles.size() > 0)     // ha nem üres az értékelés értéke
		{
			if (stoi(tmb[i].ertekeles) > 90) ered[0]++;
			else if (stoi(tmb[i].ertekeles) > 80) ered[1]++;
					else if (stoi(tmb[i].ertekeles) > 70) ered[2]++;
							else ered[3]++;
		}
	}
	cout<<"\nJatekertekelesek:"<< "\nKivalo (91-100) : "<<ered[0] << "\nJo (81-90) : " << ered[1] << "\nJatszhato (71-80) : " << ered[2] << "\nRossz (0-70) : " << ered[3] << endl;
}
bool GameStore::Search(string jatek)
{
	int i = 1;
	while (i < db && tmb[i].nev != jatek) i++;
	if (i < db) return true;
	return false;
}
string GameStore::BestGame()
{
	int max = 1;
	for (int i = 1; i<db;i++)
    
	{
		if (tmb[i].ertekeles.size() != 0 && (stoi(tmb[i].ertekeles) > stoi(tmb[max].ertekeles)))
			max = i;
	}
	return tmb[max].nev;
}
void GameStore::Multiplayer()
{
	int ered[3] = { 0 };
	for (int i = 1; i < db; i++)
	{
		if (tmb[i].jatszhato.size() > 0)   // ha nem üres a cella értéke
		{
			if (tmb[i].jatszhato=="Online") ered[0]++;
			else if(tmb[i].jatszhato == "Local") ered[1]++;
			else if (tmb[i].jatszhato == "Both") ered[2]++;
		}
	}
	cout << "\nOnline: " << ered[0] << "\nLocal: " << ered[1] << "\nBoth: " << ered[2] << endl;
}





