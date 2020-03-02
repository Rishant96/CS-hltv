USE hltv_db;

CREATE TABLE IF NOT EXISTS Map(
    map_id INT AUTO_INCREMENT PRIMARY KEY,
    is_ct_favoured_side BOOLEAN,
    map_name VARCHAR(20) NOT NULL,
    is_active_duty BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS Team(
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    hltv_id INT NOT NULL,
    avg_player_rating DECIMAL(3,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Matchup(
    matchup_id INT PRIMARY KEY,
    stats_id INT NOT NULL,
    id_team_1 INT,
    id_team_2 INT,
    rank_team_1 INT NOT NULL,
    rank_team_2 INT NOT NULL,
    result CHAR(3) NOT NULL,
    FOREIGN KEY (id_team_1)
        REFERENCES Team (team_id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (id_team_2)
        REFERENCES Team (team_id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Matchup_Map(
    matchup_id INT,
    map_id INT,
    is_team1_starting_ct BOOLEAN NOT NULL,
    half_score VARCHAR(4) NOT NULL,
    final_score VARCHAR(5) NOT NULL,
    PRIMARY KEY (matchup_id, map_id),
    FOREIGN KEY (matchup_id)
        REFERENCES Matchup (matchup_id)
        ON UPDATE RESTRICT ON DELETE CASCADE,
    FOREIGN KEY (map_id)
        REFERENCES Map (map_id)
        ON UPDATE RESTRICT ON DELETE CASCADE
);