import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { useTranslation } from 'react-i18next';
import { GuestScreenProps } from '~routers/Guest';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** SignInScreen props. */
export type SignInScreenProps = PropsWithoutRef<GuestScreenProps<'SignIn'>>;

/** SignInScreen component. */
export type SignInScreenComponent = FunctionComponent<SignInScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/** SignInScreen component. */
export const SignInScreen: SignInScreenComponent = function () {
  const { t } = useTranslation();

  return (
    <VStack flex={1} alignItems="center" justifyContent="center">
      <Text>${t('title.signIn')}</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
