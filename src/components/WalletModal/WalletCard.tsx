import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import useAuth from '../../hooks/useAuth';

const WalletCard = ({ walletMetaInfo, disabled }: any) => {
    const { title, icon, connectorId } = walletMetaInfo;
    const { login } = useAuth();
    return (
        <div className="row mt-2">
            <div className="d-grid gap-2">
                <Button
                    disabled={disabled}
                    onClick={() => {
                        login(connectorId);
                        localStorage.setItem('Wallet', connectorId);
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
