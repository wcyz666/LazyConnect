#LazyCMU
Automatic login to login.cmu.edu etc. (unofficial)

##Anouncement
You can get the source code of LazyCMU via its [GitHub Repo](https://github.com/wcyz666/lazyCMU).

##Installation
1. Download the source code from its [GitHub Releases](https://github.com/wcyz666/LazyCMU) page [^1]
2. Unzip the the source code
3. Go to [chrome://extensions](chrome://extensions) (type it in the address bar)
4. Check `Developer mode`
5. Click `Load unpacked extension…`
6. Select the unzipped folder

[^1] OR, clone it by

		git clone https://github.com/wcyz666/LazyCMU.git

##Bug Report or Suggestion
* Send an E-mail to <wcyz666@126.com>
* Make a new [GitHub Issue](https://github.com/wcyz666/LazyCMU/issues)

##Contribution
So you hate the cumbrous login processes. Great!
Several kinds of contributions are welcomed.

##Workflow
Here’s the most direct way to get your work merged into the project:

*Keep this in mind: Branch off from the `master` branch to start your awesome work.  Fetch and rebase the `upstream/master` branch before pull request.*


1. Fork the project
2. Clone your fork

		git clone https://github.com/<yourName>/LazyCMU.git
3. Configure remote

		git remote add upstream https://github.com/wcyz666/LazyCMU.git

4. Create a descriptively named branch, branch off from the master branch, to contain your change

		git checkout -b my_awesome_feature

5. Hack away
6. Stay updated

		git fetch upstream
		git merge upstream/master
		git push origin master
7. Rebase

		git checkout my_awesome_feature
   If necessary, rebase your commits into logical chunks, without bugs
8. Push the branch up to your own copy of fork

		git push origin my_awesome_feature

9. Create an [Pull Request](https://github.com/wcyz666/LazyCMU/pull/new/master) with a description and link to your `my_awesome_feature`branch
10. You have done so much.  Leave the hard work to me.  Enjoy being lazy.

##Finally...
Thanks!