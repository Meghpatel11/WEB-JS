console.log("blog.js loaded");

const makeBlog = () =>
{
    
    for (let index = 1; index < 21; index++)
    {

        let id_num = index;

        let card = $('<div class="card"></div>')
        .attr('id', 'card-' + id_num)
        .appendTo($('.flex-container'));
        
        let img = $('<img class="card-img-top">')
        .attr('id', 'img-' + id_num)
            .appendTo(card)
        
        let blog_body = $('<div class="card-body"></div>')
        .attr('id', 'body-' + id_num)
            .appendTo(card)
        
        let title = $('<h5 class="card-title"></h5>')
            .attr('id', 'card-title-blog' + id_num)
            .appendTo(blog_body);
        
        let text = $('<p class="card-text"></p>')
        .attr('id', 'card-text-' + id_num)
            .appendTo(blog_body);
        
        let footer = $('<div class="card-footer"></div>')
        .attr('id', 'card-footer-' + id_num)
            .appendTo(blog_body);
            
        let footer_text = $('<small></small>')
            .attr('id', 'footer-txt', id_num)
            .text("Blog #" + id_num)
            .appendTo(footer);
        
    }
}

const getBlogImg = () =>
{
  
    PRIMARY_KEY = '34302503-70bbdd73a9769d80875ee7dd8';
    URL_IMG = 'https://pixabay.com/api/?key=<KEY>&per_page=21';

    const urlImg = URL_IMG.replace('<KEY>', PRIMARY_KEY);
    console.log(`URL: ${urlImg}`);

    images = [];
    fetch(urlImg)
        .then((res) =>
        {
            return res.json();
        })
        .then((data) =>
        {
            console.log(data)
            for (let index = 1; index < 21; index++)
            {
                let picSrc = data['hits'][index]['webformatURL'];
                let altText = data['hits'][index]['tags'];
                 
                console.log(`URL: ${picSrc} ALT: ${altText}`);

                $('#img-' + index)
                    .attr('src', picSrc)
                    .attr('alt', altText);     
            }
        })
        .catch((err) => console.log(err));



}

const getBlogData = () =>
{
    URL_DATA = 'https://jsonplaceholder.typicode.com/posts';

    fetch(URL_DATA)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)

            for (let index = 1; index < 21; index++) {
                let blogtitle = data[index]['title'];
                let blogBody = data[index]['body'];

                console.log(`Title ${blogtitle}`)
                console.log(`body ${blogBody}`)
                
                $('#card-title-blog' + index)
                    .text(blogtitle);
                $('#card-text-' + index)
                    .text(blogBody)

            }

        })
        .catch((err) => console.log(err));
    
    

}

// getBlogData();
// getBlogImg();
makeBlog();

