import React from 'react';
import { connectorsByName } from '../../utils/connectors';
import Button from 'react-bootstrap/Button';

const WalletCard = ({ walletMetaInfo, activate, disabled }: any) => {
    const { title, icon, connectorId } = walletMetaInfo;
    return (
        <div>
            <Button
                disabled={disabled}
                onClick={() => {
                    activate(connectorsByName[connectorId]);
                }}
            >
                {icon}
                <span>{title}</span>
            </Button>
        </div>
    );
};

export default WalletCard;
