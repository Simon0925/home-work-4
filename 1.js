// var handbag = {
// documents: ["Паспорт","Водительские права","Диплом ВУЗа"] ,
// accessories: ["Ключи","Билеты в кино","Лекарство"],
// getInfo = function(){

// }
// // for (var staf in handbag){
// //     delete handbag.documents
// }
// };
var handbag ={
    documents:`documents`,
    accessories:`accessories:`,
    staf:`staf`,
    keys:`keys`,
    deleteitems: function(items){
        delete this[items]

    },
    additems: function(items,val){
    this[items]=val }

}


//task 2
var LibraryBook = function (title="название книги",year="год издания " , author=" автор"){
var title=title
var year=year
var author=author
var readerName= null
var readerData= null
function giveTheBook(client, data = new Date()){
    readerName = client
    readerData = data
}
this.getBookInfo = function(){
    var book = readerName ? "выдана на руки" : "есть в наличии"
    console.info(`${author}, ${title} (${year}): ${book}`)
}
this.getTheBook = function (client, data){
    if ( readerName ) {
        this.getBookInfo ()
        return null
}
    else {
        giveTheBook ( client, data )
        return {
                title: title,
                year: year,
                author: author
}

}
this.returnBook = function(){
    readerName= null;
    readerData= null;
}
}
}
var books = []
books [0] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books [1] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )
books [3] = new LibraryBook ( "Кобзарь", "2005", "Тарас Шевченко" )
console.log ( books )

books [0].getTheBook( "Иван Сидоренко", new Date ( 2018, 6, 25 ) )
// task 3
function Constr (){

}
Constr.prototype.addProperty = function ( propName, propValue ) {
    this [ propName ] = propValue
}
var obj = new Constr;
obj.addProperty(`cat`,`dog`)
console.dir(obj)