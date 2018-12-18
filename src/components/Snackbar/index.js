import React, { Component } from 'react';
import { Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

const mapStateToProps = ({ snackbar }) => ({
  message: snackbar.errorMessage,
  isVisible: snackbar.isVisible,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const withSnackbar = WrappedComponent => connect(mapStateToProps, null)(class extends Component {
  render() {
    const { children, visible } = this.props;

    console.log(this.props)

    return <WrappedComponent {...this.props}>{children}</WrappedComponent>
    return (
      <View style={styles.container}>
        <WrappedComponent {...this.props}>{children}</WrappedComponent>
        <Snackbar
          visible={true}
          onDismiss={() => console.log()}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}
        >
          Something went wrong
        </Snackbar>
      </View>
    );
  }
});

export default withSnackbar;
