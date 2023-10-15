// dependencies
const OPENAI = require('openai');
const fs = require('fs');



// init open ai
const openai = new OPENAI.OpenAI({
    apiKey: "API-KEY-HERE",
    dangerouslyAllowBrowser: true
});

// specify list of topics to generate pages for
var arr = [];
for (let i = 0; i < arr.length; i++) {
    var queryBase = `function TEMPLATEPAGE() {
        return (
            <div className='d-flex flex-column flex-fill'>
                <h1 className="align-self-center pt-4 mb-1"> title </h1>
                <h5 className="align-self-center mt-0"> subtitle </h5>
                <p className="align-self-center p-3"> content in page </p>
            </div>
        );
    }
    
    {
        title: 'template',
        path: '/template',
        icon: <IoIcons.IoIosPaper />
      }
    
    export default TEMPLATEPAGE;
    
    change the TEMPLATEPAGE to ${arr[i]} and create an educational summary of the topic in the p tag`;
    request(queryBase, arr[i]);
}

// call gpt api and save result to file
async function request(query, name) {

    const result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{'role': 'user', 'content': query}],
        max_tokens: 1000,
        });
    // console.log(result.choices[0].message.content);
    fs.writeFile(`C:\\Users\\twinb\\OneDrive\\Desktop\\school\\ai_days\\ai_hackathon\\container\\${name}.js`, result.choices[0].message.content, err => {
        if (err) {
          console.error(err);
        }
    });
}
