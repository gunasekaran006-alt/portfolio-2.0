import React from 'react';

// Added 'onRefresh' as a prop to handle button logic
function StatusModule({ user, onRefresh }) {
  return (
    <div className="p-4 border border-secondary rounded bg-dark shadow-sm">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
        
        <div className="d-flex align-items-center gap-4">
          {/* User Avatar */}
          <div className="bg-info rounded-circle d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '60px', height: '60px', fontSize: '24px' }}>
            {user.username.charAt(0)}
          </div>

          {/* User Info */}
          <div>
            <h4 className="h5 mb-1 text-light">{user.username}</h4>
            <p className="small text-secondary mb-0">{user.useremail}</p>
            <div className="mt-2">
              {user.status ? (
                <span className="badge bg-success-subtle text-success border border-success px-3">Online</span>
              ) : (
                <span className="badge bg-danger-subtle text-danger border border-danger px-3">Offline</span>
              )}
            </div>
          </div>
        </div>

        {/* 🚀 Day 41 Special: The Logic Button */}
        <button 
          onClick={onRefresh} 
          className="btn btn-outline-info btn-sm px-4"
          style={{ borderRadius: '20px' }}
        >
          <i className="bi bi-arrow-clockwise me-1"></i> Refresh System
        </button>
      </div>

      <hr className="border-secondary" />

      <div className="mt-3">
        {user.loginstatus ? (
          <p className="text-info small mb-0 fw-bold">
            <i className="bi bi-shield-check me-2"></i> Authorized Access Enabled
          </p>
        ) : (
          <p className="text-warning small mb-0 font-monospace">Please Login to Access System</p>
        )}
      </div>
    </div>
  );
}

export default StatusModule;