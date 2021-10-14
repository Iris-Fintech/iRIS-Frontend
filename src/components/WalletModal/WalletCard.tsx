import React from 'react';
import { connectorsByName } from '../../utils/connectors';
import Button from 'react-bootstrap/Button';

const WalletCard = ({ walletMetaInfo, activate, disabled }: any) => {
    const { title, connectorId } = walletMetaInfo;
    return (
        <div className="row mt-2">
            <div className="d-grid gap-2">
                <Button
                    disabled={disabled}
                    onClick={() => {
                        activate(connectorsByName[connectorId]);
                    }}
                    size="lg"
                    variant="outline-primary"
                >
                    {' '}
                    {title}
                </Button>
            </div>
        </div>
    );
};

export default WalletCard;
