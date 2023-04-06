function showQuote() {
    var arrayOfQuotes = [
        {   'quote': '"Forgive me, Sasuke. There wont be a next time."',
            'author': '--Itachi Uchiha.'},

        {   'quote': '"Nothing Happened."',
            'author': '--Roronoa Zoro.'},

        {   'quote': '"No matter how weak or unworthy you feel, Keep your heart burning."',
            'author': '--Kyojuro Rengoku.'},

        {    'quote': '"1,000,000% Delaware Detroit Smaaaaaaaaaash."',
            'author': '-- Izuku Midoriya.'},

        {   'quote': '"ban-kaii."',
            'author': '--ichigo kurosaki.'}
    ];
    var randomIdex = Math.floor(Math.random() * (arrayOfQuotes.length));
    console.log(arrayOfQuotes[randomIdex]);
    document.getElementById("quoteText").innerHTML = arrayOfQuotes[randomIdex].quote;
    document.getElementById("autherName").innerHTML = arrayOfQuotes[randomIdex].author;
}