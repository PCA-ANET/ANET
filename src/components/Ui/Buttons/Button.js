/* eslint-disable */
import React from 'react';

const Button = props => {
  const {
    className,
    isLoading,
    label,
    variant,
    iconName,
    icon: Icon,
    disabled,
    submit,
    ...rest
  } = props;
  return (
    <ButtonStyled
      className={classNames('button-default', { [className]: className })}
      style={getStyleBtn(variant)}
      variant={variant}
      disabled={isLoading || disabled}
      type={submit ? 'submit' : 'button'}
      {...rest}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <>
          {Icon && <Icon />}
          {label}
        </>
      )}
    </ButtonStyled>
  );
};

export default Button;
