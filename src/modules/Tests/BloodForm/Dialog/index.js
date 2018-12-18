import React from 'react';
import PropTypes from 'prop-types';
import { Button, Paragraph, Dialog as PaperDialog, Portal } from 'react-native-paper';
import { View } from 'react-native';

const Dialog = ({ isVisible, hideDialog }) => (
  <View>
    <Portal>
      <PaperDialog
        visible={isVisible}
        onDismiss={hideDialog}
      >
        <PaperDialog.Title>Результаты</PaperDialog.Title>
        <PaperDialog.Content>
          <Paragraph>This is simple dialog</Paragraph>
        </PaperDialog.Content>
        <PaperDialog.Actions>
          <Button onPress={hideDialog}>Закрыть</Button>
        </PaperDialog.Actions>
      </PaperDialog>
    </Portal>
  </View>
);

Dialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideDialog: PropTypes.func.isRequired,
};

export default Dialog;
