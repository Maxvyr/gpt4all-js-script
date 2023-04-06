import { GPT4All } from 'gpt4all';

const main = async (promptUser) => {
    // Instantiate GPT4All with default or custom settings
    const gpt4all = new GPT4All('gpt4all-lora-unfiltered-quantized', true); // Default is 'gpt4all-lora-quantized' model

    // Initialize and download missing files
    await gpt4all.init();

    // Open the connection with the model
    await gpt4all.open();

    const prompt = promptUser;
    // const prompt = 'You are a senior nodejs developer can you explain me more in deep, the script balise inside the package.json file and give me an example';
    console.log(`Prompt: ${prompt}`);
    const response = await gpt4all.prompt(prompt);
    console.log(`Response: ${response}`);

    // Close the connection when you're done
    gpt4all.close();
}

const args = process.argv.slice(2);

main(args[0]).catch(console.error);