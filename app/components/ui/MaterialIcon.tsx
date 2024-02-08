import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '../../hooks/useRenderClient';
import { TypeMaterialIconName } from '../../shared/types/icon.types';

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }):JSX.Element | null => {
	const { isRenderClient } = useRenderClient();

	const IconComponent = MaterialIcons[name];
	if (isRenderClient) {
		return MaterialIcons[name] ? (
			<IconComponent />
		) : (
			<MaterialIcons.MdDragIndicator />
		);
	} else {
		return null;
	}
};

export default MaterialIcon;
