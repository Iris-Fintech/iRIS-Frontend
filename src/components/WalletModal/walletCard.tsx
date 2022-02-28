import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import useAuth from '../../hooks/useAuth';
import './index.css';

const WalletCard = ({ walletMetaInfo }: any) => {
    const { title, icon, connectorId } = walletMetaInfo;
    const { login } = useAuth();

    return (
        <div className="row mt-2">
            <div className="d-grid gap-2">
                <Button
                    // disabled={disabled}
                    onClick={() => {
                        login(connectorId);
                    }}
                    variant="custom"
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
