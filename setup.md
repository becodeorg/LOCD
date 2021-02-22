![](./resources/hugo-static-site-generator.jpg)

# Welcome to the setup of LOCD for local development.

## What you will see
- [Installing hugo](#Installing-hugo)
	- [For windows](#Windows)
	- [For Linux](#Linux)
	- [For Mac](#Mac)
- [Hugo in short](#Hugo-in-short)
- [How to use Hugo for development?](#How-to-use-Hugo-for-development?)

## Installing hugo

The setup of Hugo is fairly easy. You can find the releases [here](https://github.com/gohugoio/hugo/releases).

### Windows

For windows users the setup is already done.
Inside the repository there is a bin folder that contains the hugo.exe. This way everything *inside* the **bin** folder can use `Hugo`.
To test this, run the `hugo version` command, this should return a response.

If this is not the case, download the latest release mentioned above, and store it inside a bin folder at the location that you are planning to work.
For example `D:\Documents\Hugo\bin`

If you want to make this Hugo.exe executable anywhere on your pc, then follow these steps (only for windows 10 users.)

- Right click on the **Start** button.
- Click on **System**.
- Click on **Advanced System Settings** on the left.
- Click on the **Environment Variables…** button on the bottom.
- In the User variables section, find the row that starts with PATH (PATH will be all caps).
- Double-click on **PATH**.
- Click the **New…** button.
- Type in the folder where `hugo.exe` was extracted, which is the location of the repository's bin. (You can also place the bin folder somewhere else on your machine.) The PATH entry should be the folder where - Hugo lives and not the binary. Press Enter when you’re done typing.
- Click OK at every window to exit.

The `hugo version` command should now work anywhere.


### Linux

Linux users can fastly install Hugo by using Package Managers.

**Using Homebrew**
```
brew install hugo
```

**Using Snap packages**
```
snap install hugo
```
**Or**
```
snap install hugo --channel=extended
```
*For the extended version with sass (we currently have sass installed with the node-modules.*

**Debian package**
```
sudo apt-get install hugo
```
*I noticed this package does not give the latest version.*

To see if the installation is succesful, run `hugo version.`


### Mac

There are 3 different ways of install Hugo on a mac, I will only cover one.

**Using Homebrew**
```
brew install hugo
```
brew should have updated your path to include Hugo. You can confirm by opening a new terminal window and running a few commands:

```
$ # show the location of the hugo executable
which hugo
/usr/local/bin/hugo

# show the installed version
ls -l $( which hugo )
lrwxr-xr-x  1 mdhender admin  30 Mar 28 22:19 /usr/local/bin/hugo -> ../Cellar/hugo/0.13_1/bin/hugo

# verify that hugo runs correctly
hugo version
Hugo Static Site Generator v0.13 BuildDate: 2015-03-09T21:34:47-05:00
```


## Hugo in short

Hugo is one of the popular upcoming static site generators. Within a few commands, you have a pretty-looking website.
You don't have to be an experienced developer to use the basics of Hugo. If you only know how to write markdown and can follow the instructions given on the website, you should be able to create a decent-looking website.

**Pro's**
- Fast deployment
- Easy setup
- Open source
- constantly updated
- Live rebuild
- Has an active community

**Cons**
- To use Hugo in advanced cases you need to be experienced
- Has a build flow you need to "hack"

#### The folders explained in short.

**Archetypes folder**: Archetypes are content template files in the archetypes directory of your project that contain preconfigured front matter and possibly also a content disposition for your website’s content types. These will be used when you run `hugo new`.

**Content**: Inside the content folder your generated MarkDown files will be stored. These will be used to build the webpages from.

**Data**: The data folder will contain data's that you will use on your website. Right now we use it to structure our website to overcome the "order" that Hugo uses by default.

**Layouts**: In here you will store the HTML pages that will be used for the website, inside the _default you will find the HTML pages used by the content folder.
Index = homePage (first page of the site), section = not used for now (will probably stay that way.), single = each exercise.

The reason behind the index, section and single is the default set-up of Hugo, made to be a blog-generator, each section has its single posts.

*Partials* are smaller, context-aware components in your list and page templates that can be used economically to keep your templating DRY.

*ShortCodes* give you the option to write snippets to which you can give a value when you call it inside of your markdown files.

**Static**: Here you will store all files related to images, fonts, css, js, ....


## How to use Hugo for development?

### Live load

For now to run live-load for Hugo you have to use the:

`hugo server -D`

This will live build the static site with all draft files.

To use livereload with SASS compilation, use

`npm run sass:compile`

Later when we get out of the draft phase, we could use

`hugo server`

### Build site

To build the website, you simply run the command:

`hugo -D`

*Once again "-D" because for now we have drafts on true.*

