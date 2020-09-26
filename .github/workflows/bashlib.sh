pip-install() {
  cd $GITHUB_WORKSPACE

  cache-restore pip

  echo "::group::pip install"
  pip3 install molecule docker yamllint ansible-lint
  echo "::endgroup::"

  cache-save pip
}