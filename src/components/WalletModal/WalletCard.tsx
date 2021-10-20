import React from 'react';
import { connectorsByName } from '../../utils/connectors';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';

const WalletCard = ({ walletMetaInfo, activate, disabled }: any) => {
    const { title, icon, connectorId } = walletMetaInfo;
    return (
        <div className="row mt-2">
            <div className="d-grid gap-2">
                <Button
                    disabled={disabled}
                    onClick={() => {
                        activate(connectorsByName[connectorId]);
                    }}
                    size="lg"
                    variant="outline-light"
                    style={{ color: 'black' }}
                >
                    {' '}
                    <Row className="justify-content-center">{icon}</Row>
                    <Row className="justify-content-center">{title}</Row>
                </Button>
            </div>
        </div>
    );
};

export default WalletCard;
