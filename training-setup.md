# Training setup

For LOCD to run properly, you will need to make the following change on every server and client machine. 

1. Install Kolibri
2. Run Kolibri. It will generate a `.kolibri/options.ini` file in the `home` folder:


| Operating system |	Location |
|-------------|-------------|
| Windows |	C:/Users/<your_username>/.kolibri/ |
| macOS |	HD/Users/<your_username>/.kolibri/ |
| Linux |	/home/<your_username>/.kolibri/ |


3. Add the following set of options at the end of the options.ini file:
````
[HTML5] 
SANDBOX = allow-scripts allow-same-origin allow-forms allow-modals allow-popups

````

4. Close Kolibri, wait a few seconds, then relaunch it. The new settings should be used now!

This needs to be done once on every machine (trainer and learner).


