# Drupal UI Guidelines

A workflow for parsing all the KSS comments in Drupal core, and generating a
static set of html pages to display them.

## Instructions

1. Navigate to your folder in your terminal and install the node dependencies:

    npm install

2. Clone a copy of the drupal 8 branch in your directory (for now, there is a test repo):

    git clone lewisnyman@git.drupal.org:sandbox/lewisnyman/2351493.git

3. Clone a copy of the static html files in your directory:

    git clone --branch gh-pages git@github.com:lewisnyman/drupal-ui-guidelines.git pages

4. Build the latest version of the guidelines:

    kss-node drupal/themes/seven/css pages --template styleguide-template

## Working on the guidelines

Only make modifications in the styleguide-template folder. Any changes made in the pages folder will be instantly wiped when the guidelines are rebuilt.
