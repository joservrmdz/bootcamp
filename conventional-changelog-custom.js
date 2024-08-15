// conventional-changelog-custom.js

const parserOpts = {
  headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
  headerCorrespondence: ['type', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE'],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: ['header', 'hash']
};

const writerOpts = {
  transform: (commit) => {
    // Regular expression to match JIRA ticket numbers, e.g., JIRA-1234
    const jiraRegex = /LGB-\d+/;

    // Check if the commit subject contains a JIRA ticket number
    if (jiraRegex.test(commit.subject)) {
      return commit; // Include the commit in the changelog
    }

    return false; // Exclude the commit if it doesn't match the regex
  }
};

module.exports = {
  parserOpts,
  writerOpts
};
