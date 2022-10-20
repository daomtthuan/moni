import { Text, VStack } from 'native-base';
import { FunctionComponent, PropsWithoutRef } from 'react';
import { useTranslation } from 'react-i18next';

// --------------------------------------------------------------------------------
// #region - Types and Interfaces
// --------------------------------------------------------------------------------

/** SignInScreen props. */
export type SignInScreenProps = PropsWithoutRef<{}>;

/** SignInScreen component. */
export type SignInScreenComponent = FunctionComponent<SignInScreenProps>;

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// #region - Component
// --------------------------------------------------------------------------------

/**
 * SignInScreen component.
 *
 * @returns The Sign in screen component.
 */
export const SignInScreen: SignInScreenComponent = function () {
  const { t } = useTranslation();

  return (
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <Text>${t('title.signIn')}</Text>
    </VStack>
  );
};

// --------------------------------------------------------------------------------
// #endregion
// --------------------------------------------------------------------------------
