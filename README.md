# Biblioteca digitală Alohomora

# Introducere

  Într-o eră a tehnologiei şi a inforaţiei, din ce în ce mai multe domenii şi activităţi migrează în sfera IT şi aleg soluţii inteligente pentru probleme clasice. Un astfel de caz sunt si **bibliotecile digitale**, apărute ca urmare a apariţiei ebook-urilor, ce s-au bucurat de un adevărat succes. De aceea, este mai facil să citeşti o **carte în format electronic** din punct de vedere al modului de acces la informaţie.
  O **bibliotecă digitală** este asemănătoare uneia clasice, principala diferenţă fiind că ea există doar în **spaţiul virtual**, iar în acest mod, ea putând fi practic accesată de oriunde din lume, cu ajutorul Internetului. Deoarece cărtile virtuale pot fi citite în acelaşi timp de un număr nelimtat de utilizatori, se elimină problema “împrumuturilor”, căci acestea nu se mai justifică. Mai mult, cei care folosesc biblioteca digitala își pot crea liste cu căţile preferate, şi chiar mai mult, pot primi sugestii pentru viitoarele lecturi pe baza celor precedente.
  Fie că eşti student şi cauţi materiale prin cărţi pentru diferite proiecte sau doar un simplu utilizator pasionat de lectură şi vrei să îţi îmbogăţeşti virtual propria colecţie de literatură, o bibliotecă digitală s-ar putea să fie exact de ce ai nevoie.
	Actual, pe piaţă există mai multe biblioteci digitale, precum:
  * World Digital Library - care pe lângă volume, conţine chiar şi manuscrise sau filme
  * Project Gutenberg - cu o colecţie de peste 33 000 de ebook-uri
  * Bartleby - o imensă colecţie de cărţi virtuale, de la consultanţă la poezie
  * Internet Archive - cea mai mare bibliorecă digitală pentru a descărca ebook-uri gratis

# Interfețe aplicație
![alt text](https://github.com/cezar097/alohomora-virtual-library/blob/master/mockup/home.jpg "Main page")
###### Fereastra modala pentru detalii despre un volum
![alt text](https://github.com/cezar097/alohomora-virtual-library/blob/master/mockup/modalBook.jpg "Info book")
###### Fereastra modala pentru lista de favorite
![alt text](https://github.com/cezar097/alohomora-virtual-library/blob/master/mockup/modalFavs.jpg "Favorites")

# API RESTfull
```
GET /books/?title=
```
Întoarce un JSON cu cărţi, care au titlul egal cu parametrul primit
```
GET /books/?author=
```
Întoarce un JSON cu cărţi, care au autorul egal cu parametrul primit
```
GET /users/:id/favorites
```
Întoarce un JSON cu cărţi, care au fost adăugate in colecţia unui anumit utilizator
```
POST /users/:id/favorites
```
Trimite o carte în format JSON către colecţia unui anumit utilizator
```
POST /users/:id
```
Trimite un utilizator în format JSON către lista de utilizatori a aplicaţiei

Exemplu de răspuns:
```javascript
[
	{
		"title": "Harry Potter and the Philosopher's Stone",
		"author": "J. K. Rowling",
		"synopsis": "The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to the Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
	},{
		"title": "Master and Margarita",
		"author": "Mikhail Bulgakov",
		"synopsis": "The story concerns a visit by the devil to the officially atheistic Soviet Union. The Master and Margarita combines supernatural element with satirical dark comedy and Christian philosophy, defying a singular genre. Many critics consider it to be one of the best novels of the 20th century, as well as the foremost of Soviet satires."
	}
]
```
