FROM gitpod/workspace-full

# Install custom tools, runtimes, etc.
RUN brew install -g expo-cli


# For example "bastet", a command-line tetris clone:
# RUN brew install bastet
#
# More information: https://www.gitpod.io/docs/config-docker/
