import React from 'react';
import { connectorsByName } from '../../utils/connectors';
import { connectorLocalStorageKey } from './metaInfo';
import Button from 'react-bootstrap/Button';

const WalletCard = ({ walletMetaInfo, setActivatingConnector, activate, currentConnector, disabled }: any) => {
    const { title, icon, connectorId } = walletMetaInfo;
    return (
        <div>
            <Button
                disabled={!disabled}
                onClick={() => {
                    setActivatingConnector(currentConnector);
                    activate(connectorsByName[connectorId]);
                    window.localStorage.setItem(connectorLocalStorageKey, connectorId);
                }}
            >
                {icon}
                <span>{title}</span>
            </Button>
        </div>
    );
};

export default WalletCard;
