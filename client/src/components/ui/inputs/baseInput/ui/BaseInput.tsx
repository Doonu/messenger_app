import React, { FC, useEffect, useMemo, useState } from 'react';
import { SIcon, SInput, SLabel, SLoaderSmall } from './baseInput.styled';
import { IInput, IVariantType } from '../model/IInput';
import { allVariantType } from '../lib/variantType';

const Input: FC<IInput> = ({
  border,
  type,
  height = 'inherit',
  minWidth = 'inherit',
  sizeLoading = 15,
  loading,
  ...props
}) => {
  const [variantType, setVariantType] = useState<IVariantType>();

  const generateBorderValue = useMemo(() => {
    if (border === 'left') return '0 20px 20px 0';
    if (border === 'right') return '20px 0 0 20px';
    if (border === 'none') return '5px';
    else return '20px';
  }, [border]);

  const handlePasswordIcon = () => {
    allVariantType.forEach((variant) => {
      if (variant.type !== variantType?.type) {
        setVariantType(variant);
      }
    });
  };

  useEffect(() => {
    if (type === 'password' || type === 'text')
      type === 'password' ? setVariantType(allVariantType[0]) : setVariantType(allVariantType[1]);
  }, []);

  return (
    <SLabel>
      <SInput
        border={generateBorderValue}
        autoComplete="off"
        type={variantType && variantType.type}
        height={height}
        $minWidth={minWidth}
        {...props}
      />
      {(variantType?.type === 'password' || variantType?.type === 'text') && !loading && (
        <SIcon onClick={handlePasswordIcon}>{variantType && variantType.icon}</SIcon>
      )}
      {loading && <SLoaderSmall size={sizeLoading} />}
    </SLabel>
  );
};

export default Input;
