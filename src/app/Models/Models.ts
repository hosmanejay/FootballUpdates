export interface Standings {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    paging: Paging
    response: Response[]
  }
  
  export interface Parameters {
    league: string
    season: string
  }
  
  export interface Paging {
    current: number
    total: number
  }
  
  export interface Response {
    league: League
  }
  
  export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    standings: Standing[][]
  }
  
  export interface Standing {
    rank: number
    team: Team
    points: number
    goalsDiff: number
    group: string
    form: string
    status: string
    description?: string
    all: All
    home: Home
    away: Away
    update: string
  }
  
  export interface Team {
    id: number
    name: string
    logo: string
  }
  
  export interface All {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
  }
  
  export interface Goals {
    for: number
    against: number
  }
  
  export interface Home {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals2
  }
  
  export interface Goals2 {
    for: number
    against: number
  }
  
  export interface Away {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals3
  }
  
  export interface Goals3 {
    for: number
    against: number
  }

  export interface countryDetails{
    name : string
    leagueName : string
  }

  export interface allFixtures {
    get?: string
    parameters?: Parameters
    errors?: any[]
    results?: number
    paging?: Paging
    response?: Response[]
  }
  
  export interface Parameters {
    league: string
    season: string
    team: string
  }
  
  export interface Paging {
    current: number
    total: number
  }
  
  export interface Response {
    fixture: Fixture
    league: League
    teams: Teams
    goals: Goals
    score: Score
  }
  
  export interface Fixture {
    id: number
    referee?: string
    timezone: string
    date: string
    timestamp: number
    periods: Periods
    venue: Venue
    status: Status
  }
  
  export interface Periods {
    first?: number
    second?: number
  }
  
  export interface Venue {
    id: number
    name: string
    city: string
  }
  
  export interface Status {
    long: string
    short: string
    elapsed?: number
  }
  
  export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    round: string
  }
  
  export interface Teams {
    home: Home
    away: Away
  }
  
  export interface Home {
    id: number
    name: string
    logo: string
    winner?: boolean
  }
  
  export interface Away {
    id: number
    name: string
    logo: string
    winner?: boolean
  }
  
  export interface Goals {
    home?: number
    away?: number
  }
  
  export interface Score {
    halftime: Halftime
    fulltime: Fulltime
    extratime: Extratime
    penalty: Penalty
  }
  
  export interface Halftime {
    home?: number
    away?: number
  }
  
  export interface Fulltime {
    home?: number
    away?: number
  }
  
  export interface Extratime {
    home: any
    away: any
  }
  
  export interface Penalty {
    home: any
    away: any
  }

  export interface GetLeague {
    get: string
    parameters: Parameters
    errors: any[]
    results: number
    paging: Paging
    response: Response[]
  }
  
  export interface Parameters {
    name: string
    country: string
    current: string
  }
  
  export interface Paging {
    current: number
    total: number
  }
  
  export interface Response {
    league: League
    country: Country
    seasons: Season[]
  }
  
  export interface League {
    id: number
    name: string
    type: string
    logo: string
  }
  
  export interface Country {
    name: string
    code: string
    flag: string
  }
  
  export interface Season {
    year: number
    start: string
    end: string
    current: boolean
    coverage: Coverage
  }
  
  export interface Coverage {
    fixtures: Fixtures
    standings: boolean
    players: boolean
    top_scorers: boolean
    top_assists: boolean
    top_cards: boolean
    injuries: boolean
    predictions: boolean
    odds: boolean
  }
  
  export interface Fixtures {
    events: boolean
    lineups: boolean
    statistics_fixtures: boolean
    statistics_players: boolean
  }
  