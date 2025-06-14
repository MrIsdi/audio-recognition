# Audio Recognition: Open and Close Detection

This project implements audio recognition for "open" and "close" sounds, along with background noise, using deep learning with TensorFlow.js. It utilizes transfer learning from the YAMNet model to classify sounds captured through a microphone in real-time via a web interface.

## Features

*   Real-time audio classification from microphone input.
*   Detects three classes: "open", "close", and "noise".
*   Displays confidence scores for each class ("close", "open", "noise").
*   Web-based interface built with HTML, TailwindCSS, and JavaScript.
*   Uses TensorFlow.js for in-browser model inference.

## How it Works

1.  **Audio Capture:** The application captures audio from the user's microphone using `tf.data.microphone` in the browser.
2.  **Preprocessing:** The audio waveform is processed to be compatible with the model's input requirements.
3.  **Inference:** The processed audio is fed into a fine-tuned YAMNet model loaded using TensorFlow.js.
4.  **Classification:** The model outputs probabilities for three classes: "close", "open", and "noise".
5.  **Display:** The confidence scores for each class are updated in real-time on the web page.

## Usage

To run this application:

1.  Clone this repository:
    ```bash
    git clone https://github.com/MrIsdi/audio-recognition.git
    ```
2.  Navigate to the cloned directory:
    ```bash
    cd audio-recognition
    ```
3.  Open the `index.html` file in a modern web browser (e.g., Chrome, Firefox) that supports microphone access and JavaScript.
4.  When prompted by the browser, allow microphone access for the page.
5.  Click the microphone icon button (labeled "onAudio") to start audio recognition. The application will begin capturing sound and displaying the confidence levels for "close", "open", and "noise" sounds.
6.  Click the "voice" icon button (labeled "offAudio") to stop the audio recognition.

The interface will display three sections, each showing an image representing "Close", "Open", or "Noise", along with their respective confidence percentages.

## Model

The audio recognition model is based on transfer learning using YAMNet, an audio event classifier trained on the AudioSet dataset. The original YAMNet model is designed to predict 521 audio event classes. For this project, the YAMNet model has been adapted and further trained (fine-tuned) to specifically classify three distinct sound events:
*   **Close**: Sounds associated with something closing.
*   **Open**: Sounds associated with something opening.
*   **Noise**: Background sounds or any sound not classified as "open" or "close".

The fine-tuned model is saved in TensorFlow.js graph model format, consisting of `model.json` and several binary shard files (`.bin`) located in the `/model` directory. The `saved_web_model_close_open_noise_yamnet.zip` file in the repository contains these model files.

## Technologies Used

*   **HTML5**: For the basic structure of the web page.
*   **TailwindCSS**: A utility-first CSS framework for styling the interface.
*   **JavaScript**: For client-side logic and interaction.
*   **TensorFlow.js (@tensorflow/tfjs)**: An open-source hardware-accelerated JavaScript library for training and deploying machine learning models in the browser and on Node.js.
    *   `tf.data.microphone`: Used for capturing audio from the device microphone.
    *   `tf.loadGraphModel`: Used to load the pre-trained audio recognition model.

## File Structure
```
└── mrisdi-audio-recognition/
    ├── README.md                         // This README file
    ├── index.html                        // The main HTML file for the web application
    ├── saved_web_model_close_open_noise_yamnet.zip // Zip archive of the TensorFlow.js web model
    ├── images/                           // Directory for images used in index.html (not detailed in analysis but referenced)
    │   ├── bg.jpg
    │   ├── close.png
    │   ├── mic.svg
    │   ├── noise.png
    │   ├── open.png
    │   └── voice.svg
    ├── js/
    │   └── main.js                       // JavaScript file containing the core logic for audio processing and model inference
    └── model/                            // Directory containing the TensorFlow.js model files
        ├── group1-shard1of4.bin
        ├── group1-shard2of4.bin
        ├── group1-shard3of4.bin
        ├── group1-shard4of4.bin
        └── model.json                    // The model topology and weights manifest
```

## Acknowledgements

*   [Transfer learning with YAMNet for environmental sound classification](https://www.tensorflow.org/tutorials/audio/transfer_learning_audio)
*   [Tensorflow JS](https://js.tensorflow.org/api/latest/)

## Authors

*   [@MrIsdi](https://github.com/MrIsdi)
