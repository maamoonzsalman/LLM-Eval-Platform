import { SystemPrompt } from '@/types/evaluation'

export const systemPrompts: SystemPrompt[] = [
  {
    id: 'climate',
    text: "You are a climate change expert. You will return accurate answers to any query regarding climate change.",
    testPrompts: [
      {
        id: 'climate-1',
        text: "What strategies or innovations do you think are most critical for mitigating the effects of climate change on a global scale?",
        responses: {
          "claude-3.5-sonnet": {
            text: `To mitigate the effects of climate change globally, several critical strategies and innovations are necessary:

1. Rapid transition to renewable energy: Scaling up solar, wind, and other clean energy sources to replace fossil fuels.
2. Energy efficiency improvements: Implementing technologies and practices to reduce energy consumption in buildings, transportation, and industry.
3. Sustainable transportation: Expanding electric vehicles, improving public transit, and developing sustainable aviation fuels.
4. Carbon capture and storage (CCS): Advancing technologies to remove CO2 from the atmosphere and industrial processes.
5. Reforestation and afforestation: Large-scale tree planting and forest restoration to absorb CO2.
6. Sustainable agriculture: Implementing regenerative farming practices and reducing meat consumption.
7. Industrial process innovations: Developing low-carbon technologies for steel, cement, and chemical production.
8. Smart grid technologies: Improving electricity distribution and storage to support renewable energy integration.
9. Climate-resilient infrastructure: Designing and retrofitting infrastructure to withstand extreme weather events.
10. International cooperation: Strengthening global agreements and collaborations to address climate change collectively.`,
            factuality: 0.92,
            time: 1800
          },
          "gpt-4o": {
            text: `To mitigate the effects of climate change on a global scale, several critical strategies and innovations are essential:

1. Renewable Energy Transition:
   - Rapid scaling of solar and wind power
   - Advanced energy storage solutions
   - Smart grid implementation
   - Next-generation nuclear power (e.g., small modular reactors)

2. Energy Efficiency:
   - Smart building technologies
   - Industrial process optimization
   - Energy-efficient appliances and electronics

3. Sustainable Transportation:
   - Electric vehicle infrastructure
   - Hydrogen fuel cell technology
   - Sustainable aviation fuels
   - Urban redesign for walkability and cycling

4. Carbon Capture and Storage (CCS):
   - Direct air capture technologies
   - Enhanced natural carbon sinks (e.g., reforestation, ocean fertilization)
   - Carbon-negative building materials

5. Sustainable Agriculture and Land Use:
   - Precision agriculture
   - Vertical farming and urban agriculture
   - Plant-based and cultured meat alternatives
   - Regenerative farming practices

6. Circular Economy:
   - Waste reduction and recycling innovations
   - Product lifecycle design
   - Sharing economy platforms

7. Climate-Resilient Infrastructure:
   - Adaptive urban planning
   - Flood defense systems
   - Drought-resistant water management

8. Policy and Economic Innovations:
   - Carbon pricing mechanisms
   - Green finance initiatives
   - International climate agreements

9. Education and Behavior Change:
   - Climate literacy programs
   - Sustainable consumption campaigns

10. Geoengineering Research:
    - Solar radiation management studies
    - Ocean alkalinization experiments

These strategies and innovations must be implemented in concert, with consideration for their interdependencies and potential unintended consequences.`,
            factuality: 0.95,
            time: 1200
          },
          "Llama-2-7b-hf": {
            text: `To mitigate the effects of climate change globally, several key strategies and innovations are crucial:

1. Renewable Energy Expansion:
   - Solar and wind power scaling
   - Improved energy storage technologies
   - Smart grid development

2. Energy Efficiency:
   - Building retrofits
   - Industrial process optimization
   - Efficient appliances and lighting

3. Sustainable Transportation:
   - Electric vehicle adoption
   - Public transit improvements
   - Bicycle infrastructure

4. Carbon Capture and Sequestration:
   - Direct air capture technologies
   - Reforestation and afforestation
   - Enhanced weathering techniques

5. Sustainable Agriculture:
   - Precision farming
   - Regenerative practices
   - Plant-based diets promotion

6. Circular Economy:
   - Waste reduction
   - Recycling innovations
   - Product lifecycle design

7. Policy Measures:
   - Carbon pricing
   - Emissions regulations
   - International cooperation

8. Education and Awareness:
   - Climate literacy programs
   - Behavioral change campaigns

9. Green Infrastructure:
   - Urban green spaces
   - Coastal protection measures
   - Water conservation systems

10. Research and Innovation:
    - Climate modeling advancements
    - Clean energy breakthroughs
    - Sustainable materials development

Implementing these strategies requires global cooperation, significant investment, and a commitment to long-term sustainability goals.`,
            factuality: 0.88,
            time: 2500
          }
        }
      },
      {
        id: 'climate-2',
        text: "How does climate change impact biodiversity and ecosystem health?",
        responses: {
          "claude-3.5-sonnet": {
            text: `Climate change significantly impacts biodiversity and ecosystem health in several ways:

1. Habitat loss: Rising temperatures and changing precipitation patterns alter habitats, forcing species to migrate or adapt.

2. Species extinction: Many species cannot adapt quickly enough to changing conditions, leading to increased extinction rates.

3. Phenological changes: Shifts in timing of seasonal events (e.g., flowering, migration) disrupt ecological relationships.

4. Ocean acidification: Increased CO2 absorption by oceans harms marine ecosystems, particularly coral reefs and shellfish.

5. Extreme weather events: More frequent and intense storms, droughts, and heatwaves stress ecosystems and wildlife.

6. Invasive species: Changing conditions allow some species to expand into new areas, outcompeting native species.

7. Trophic cascades: Changes in one species' population can have ripple effects throughout the food web.

8. Reduced genetic diversity: Rapid environmental changes can lead to genetic bottlenecks in populations.

9. Ecosystem services disruption: Changes in biodiversity affect pollination, pest control, and other ecosystem services.

10. Feedback loops: Loss of biodiversity can accelerate climate change, creating a vicious cycle.

These impacts underscore the urgent need for conservation efforts and climate change mitigation to protect global biodiversity.`,
            factuality: 0.94,
            time: 1700
          },
          "gpt-4o": {
            text: `Climate change has profound and far-reaching impacts on biodiversity and ecosystem health:

1. Habitat Alteration and Loss:
   - Shifting temperature and precipitation patterns force species to migrate or adapt
   - Sea-level rise threatens coastal and island ecosystems
   - Melting ice affects polar and alpine habitats

2. Species Extinction and Range Shifts:
   - Many species face increased extinction risk due to inability to adapt quickly
   - Poleward and upslope migrations of flora and fauna
   - Changes in species distribution and community composition

3. Phenological Disruptions:
   - Alterations in timing of life-cycle events (e.g., flowering, migration, breeding)
   - Mismatches between interdependent species (e.g., plants and pollinators)

4. Ocean Acidification:
   - Decreased pH levels in oceans affect marine organisms, especially those with calcium carbonate shells
   - Coral reef bleaching and degradation

5. Extreme Weather Events:
   - Increased frequency and intensity of droughts, floods, and storms
   - Direct mortality and habitat destruction

6. Invasive Species Proliferation:
   - Changed conditions allow some species to expand into new areas
   - Native species often outcompeted by more adaptable invasive species

7. Trophic Cascades:
   - Disruptions in food webs due to changes in key species populations
   - Altered predator-prey relationships and ecosystem dynamics

8. Genetic Diversity Reduction:
   - Population bottlenecks and local extinctions reduce genetic variability
   - Decreased resilience to environmental changes and diseases

9. Ecosystem Services Disruption:
   - Alterations in pollination, pest control, and nutrient cycling
   - Impacts on water purification and soil fertility

10. Feedback Loops:
    - Loss of biodiversity can accelerate climate change (e.g., reduced carbon sequestration)
    - Thawing permafrost releases greenhouse gases

11. Freshwater Ecosystem Impacts:
    - Changes in water temperature and flow affect aquatic species
    - Altered nutrient cycles in lakes and rivers

12. Increased Disease Transmission:
    - Changes in vector distributions (e.g., mosquitoes) affect disease patterns
    - Stress on ecosystems can increase susceptibility to pathogens

13. Evolutionary Pressures:
    - Rapid environmental changes create strong selection pressures
    - Potential for both adaptive evolution and maladaptation

These impacts highlight the interconnectedness of climate and biodiversity, emphasizing the need for integrated approaches to conservation and climate change mitigation.`,
            factuality: 0.97,
            time: 1400
          },
          "Llama-2-7b-hf": {
            text: `Climate change impacts biodiversity and ecosystem health in several significant ways:

1. Habitat Loss:
   - Rising temperatures alter habitats
   - Changing precipitation patterns affect ecosystems
   - Sea-level rise threatens coastal habitats

2. Species Extinction:
   - Many species unable to adapt quickly enough
   - Loss of specialized or endemic species
   - Disruption of food chains and ecosystems

3. Migration Patterns:
   - Species forced to move to new areas
   - Potential conflicts with human-populated areas
   - Disruption of established ecosystems

4. Phenological Changes:
   - Altered timing of seasonal events (e.g., flowering, migration)
   - Mismatches between interdependent species

5. Ocean Acidification:
   - Harm to marine ecosystems, especially coral reefs
   - Impacts on shellfish and other calcifying organisms

6. Extreme Weather Events:
   - Increased frequency of droughts, floods, and storms
   - Direct damage to habitats and wildlife

7. Invasive Species:
   - New conditions favor some non-native species
   - Potential displacement of native species

8. Ecosystem Services:
   - Alterations in pollination, pest control, and nutrient cycling
   - Impacts on water purification and soil health

9. Genetic Diversity:
   - Reduced population sizes lead to genetic bottlenecks
   - Decreased resilience to environmental changes

10. Trophic Cascades:
    - Changes in one species affect entire food webs
    - Potential collapse of ecosystem structures

These impacts underscore the urgent need for conservation efforts and climate change mitigation to protect global biodiversity and maintain healthy ecosystems.`,
            factuality: 0.90,
            time: 2300
          }
        }
      }
    ]
  },
  {
    id: 'cybersecurity',
    text: "You are a cybersecurity expert. Provide detailed, technical responses to questions about computer and network security.",
    testPrompts: [
      {
        id: 'cybersecurity-1',
        text: "What are the most effective strategies for protecting against ransomware attacks in enterprise environments?",
        responses: {
          "claude-3.5-sonnet": {
            text: `To protect against ransomware attacks in enterprise environments, a multi-layered approach is crucial:

1. Regular Backups: Implement frequent, comprehensive backups stored offline or in immutable storage.
2. Network Segmentation: Divide the network into segments to limit lateral movement of attackers.
3. Endpoint Protection: Deploy advanced endpoint detection and response (EDR) solutions.
4. Email Security: Use robust email filtering and anti-phishing tools to block malicious attachments and links.
5. Patch Management: Keep all systems and software up-to-date with the latest security patches.
6. User Training: Conduct regular cybersecurity awareness training for all employees.
7. Access Control: Implement least privilege access and multi-factor authentication.
8. Network Monitoring: Use intrusion detection/prevention systems (IDS/IPS) for real-time threat detection.
9. Incident Response Plan: Develop and regularly test a comprehensive incident response plan.
10. Zero Trust Architecture: Adopt a "never trust, always verify" approach to network access.

These strategies, when implemented together, significantly reduce the risk of successful ransomware attacks.`,
            factuality: 0.94,
            time: 1900
          },
          "gpt-4o": {
            text: `To effectively protect against ransomware attacks in enterprise environments, a comprehensive, multi-layered approach is essential:

1. Robust Backup Strategy:
   - Implement the 3-2-1 backup rule: 3 copies, 2 different media, 1 off-site
   - Use immutable backups to prevent tampering
   - Regularly test backup restoration processes

2. Network Segmentation:
   - Implement VLANs and microsegmentation
   - Use firewalls between network segments
   - Employ software-defined networking (SDN) for dynamic segmentation

3. Advanced Endpoint Protection:
   - Deploy next-gen antivirus with behavioral analysis
   - Utilize Endpoint Detection and Response (EDR) solutions
   - Implement application whitelisting

4. Email Security:
   - Use AI-powered email filtering
   - Implement DMARC, SPF, and DKIM protocols
   - Conduct regular phishing simulations

5. Patch Management:
   - Automate patch deployment where possible
   - Prioritize critical vulnerabilities
   - Implement a vulnerability management program

6. User Access Control:
   - Enforce principle of least privilege
   - Implement multi-factor authentication (MFA)
   - Use privileged access management (PAM) solutions

7. Network Monitoring and Threat Intelligence:
   - Deploy Security Information and Event Management (SIEM) systems
   - Utilize User and Entity Behavior Analytics (UEBA)
   - Subscribe to threat intelligence feeds

8. Incident Response Planning:
   - Develop and regularly update incident response plans
   - Conduct tabletop exercises and simulations
   - Establish clear communication channels

9. Employee Training:
   - Provide regular, role-specific security awareness training
   - Conduct simulated attacks to test effectiveness
   - Foster a security-conscious culture

10. Zero Trust Architecture:
    - Implement "never trust, always verify" principles
    - Use micro-segmentation and software-defined perimeters
    - Continuously monitor and log all network activity

11. Secure Remote Access:
    - Use VPNs with strong encryption
    - Implement remote desktop gateways
    - Enforce device compliance checks

12. Regular Security Assessments:
    - Conduct penetration testing and vulnerability assessments
    - Perform regular security audits
    - Engage in red team exercises

By implementing these strategies comprehensively, enterprises can significantly reduce their risk of falling victim to ransomware attacks and improve their overall security posture.`,
            factuality: 0.97,
            time: 1350
          },
          "Llama-2-7b-hf": {
            text: `To protect against ransomware attacks in enterprise environments, consider these effective strategies:

1. Regular Backups:
   - Implement frequent, offline backups
   - Use the 3-2-1 backup rule
   - Test backup restoration regularly

2. Email Security:
   - Deploy advanced spam filters
   - Use attachment sandboxing
   - Educate employees on phishing

3. Patch Management:
   - Keep all systems updated
   - Automate patch deployment
   - Prioritize critical vulnerabilities

4. Network Segmentation:
   - Implement VLANs
   - Use firewalls between segments
   - Limit lateral movement

5. Endpoint Protection:
   - Deploy next-gen antivirus
   - Use endpoint detection and response (EDR)
   - Implement application whitelisting

6. User Access Control:
   - Enforce least privilege principle
   - Implement multi-factor authentication
   - Regular access reviews

7. Employee Training:
   - Conduct regular security awareness training
   - Simulate phishing attacks
   - Foster a security-conscious culture

8. Incident Response Plan:
   - Develop and test response procedures
   - Establish clear communication channels
   - Conduct regular drills

9. Network Monitoring:
   - Implement SIEM solutions
   - Use intrusion detection systems
   - Monitor for unusual activity

10. Disable Unnecessary Services:
    - Turn off unneeded network services
    - Close unused ports
    - Remove unnecessary software

Remember, a multi-layered approach is key to effective ransomware protection.`,
            factuality: 0.91,
            time: 2700
          }
        }
      },
      {
        id: 'cybersecurity-2',
        text: "What are the key components of a robust Zero Trust security model?",
        responses: {
          "claude-3.5-sonnet": {
            text: `A robust Zero Trust security model comprises several key components:

1. Identity and Access Management (IAM):
   - Strong authentication mechanisms (e.g., MFA)
   - Fine-grained access controls
   - Continuous authentication and authorization

2. Micro-segmentation:
   - Network segmentation at a granular level
   - Application-layer segmentation
   - Workload isolation

3. Least Privilege Access:
   - Principle of least privilege (PoLP)
   - Just-in-time (JIT) access
   - Regular access reviews and revocations

4. Device Trust:
   - Device health checks and posture assessment
   - Mobile Device Management (MDM)
   - Bring Your Own Device (BYOD) policies

5. Data Classification and Protection:
   - Data discovery and classification
   - Encryption (at rest and in transit)
   - Data Loss Prevention (DLP) tools

6. Continuous Monitoring and Analytics:
   - Security Information and Event Management (SIEM)
   - User and Entity Behavior Analytics (UEBA)
   - Anomaly detection

7. Network Traffic Analysis:
   - Deep packet inspection
   - SSL/TLS inspection
   - East-west traffic monitoring

8. Application Security:
   - Secure application development practices
   - Runtime application self-protection (RASP)
   - Web Application Firewalls (WAF)

9. Automation and Orchestration:
   - Security orchestration, automation, and response (SOAR)
   - Automated policy enforcement
   - Continuous compliance monitoring

10. Visibility and Analytics:
    - Centralized logging and reporting
    - Real-time threat intelligence integration
    - Risk scoring and prioritization

Implementing these components creates a comprehensive Zero Trust architecture that assumes no trust by default and continuously verifies every access request, regardless of its source or destination.`,
            factuality: 0.96,
            time: 2100
          },
          "gpt-4o": {
            text: `A robust Zero Trust security model comprises several key components that work together to ensure comprehensive security. Here are the essential elements:

1. Identity and Access Management (IAM):
   - Multi-factor authentication (MFA)
   - Single sign-on (SSO) capabilities
   - Continuous authentication and authorization
   - Identity federation and user lifecycle management

2. Micro-segmentation:
   - Network segmentation at a granular level
   - Application-layer segmentation
   - Workload isolation and protection
   - Software-defined perimeter (SDP) implementation

3. Least Privilege Access:
   - Principle of least privilege (PoLP) enforcement
   - Just-in-time (JIT) and just-enough access (JEA)
   - Regular access reviews and privilege right-sizing
   - Privileged access management (PAM)

4. Device Trust and Endpoint Security:
   - Device health checks and posture assessment
   - Mobile Device Management (MDM) and Mobile Application Management (MAM)
   - Endpoint Detection and Response (EDR)
   - Bring Your Own Device (BYOD) and Choose Your Own Device (CYOD) policies

5. Data Classification and Protection:
   - Data discovery and classification
   - Encryption (at rest, in transit, and in use)
   - Data Loss Prevention (DLP) tools
   - Information Rights Management (IRM)

6. Continuous Monitoring and Analytics:
   - Security Information and Event Management (SIEM)
   - User and Entity Behavior Analytics (UEBA)
   - Network Traffic Analysis (NTA)
   - Anomaly detection and threat hunting

7. Network Security:
   - Next-generation firewalls (NGFW)
   - Intrusion Detection and Prevention Systems (IDS/IPS)
   - Secure Web Gateways (SWG)
   - Virtual Private Networks (VPN) or Zero Trust Network Access (ZTNA)

8. Application Security:
   - Secure application development practices (DevSecOps)
   - Runtime application self-protection (RASP)
   - Web Application Firewalls (WAF)
   - API security and management

9. Automation and Orchestration:
   - Security Orchestration, Automation, and Response (SOAR)
   - Automated policy enforcement and updates
   - Continuous compliance monitoring and reporting
   - Incident response automation

10. Visibility and Analytics:
    - Centralized logging and reporting
    - Real-time threat intelligence integration
    - Risk scoring and prioritization
    - Security posture dashboards and visualization

11. Cloud Security:
    - Cloud Access Security Broker (CASB)
    - Cloud Workload Protection Platform (CWPP)
    - Cloud Security Posture Management (CSPM)
    - Secure access service edge (SASE) integration

12. Governance and Compliance:
    - Policy management and enforcement
    - Regulatory compliance mapping
    - Third-party risk management
    - Continuous auditing and reporting

13. User Experience and Training:
    - Seamless and frictionless security controls
    - Context-aware access policies
    - Regular security awareness training
    - Phishing simulations and testing

Implementing these components creates a comprehensive Zero Trust architecture that assumes no trust by default, continuously verifies every access request, and provides a robust security posture for modern, distributed environments.`,
            factuality: 0.98,
            time: 1600
          },
          "Llama-2-7b-hf": {
            text: `The key components of a robust Zero Trust security model include:

1. Identity Verification:
   - Strong authentication (e.g., MFA)
   - Continuous authentication
   - Identity and Access Management (IAM)

2. Device Trust:
   - Device health checks
   - Mobile Device Management (MDM)
   - Endpoint Detection and Response (EDR)

3. Network Segmentation:
   - Micro-segmentation
   - Software-defined perimeter
   - Network access control

4. Least Privilege Access:
   - Role-based access control (RBAC)
   - Just-in-time (JIT) access
   - Principle of least privilege

5. Data Protection:
   - Encryption (at rest and in transit)
   - Data Loss Prevention (DLP)
   - Information Rights Management (IRM)

6. Continuous Monitoring:
   - Security Information and Event Management (SIEM)
   - User and Entity Behavior Analytics (UEBA)
   - Anomaly detection

7. Policy Enforcement:
   - Centralized policy management
   - Dynamic policy updates
   - Automated enforcement

8. Visibility and Analytics:
   - Comprehensive logging
   - Real-time threat intelligence
   - Security posture assessment

9. Application Security:
   - Secure APIs
   - Web Application Firewalls (WAF)
   - Runtime application self-protection (RASP)

10. Cloud Security:
    - Cloud Access Security Broker (CASB)
    - Cloud Workload Protection
    - Secure access service edge (SASE)

These components work together to create a security model that assumes no trust by default and continuously verifies every access request, regardless of its source or destination.`,
            factuality: 0.93,
            time: 2500
          }
        }
      }
    ]
  },
  {
    id: 'finance',
    text: "You are a financial advisor with expertise in personal and corporate finance. Provide clear, actionable financial advice.",
    testPrompts: [
      {
        id: 'finance-1',
        text: "What are the key considerations when building a diversified investment portfolio for long-term retirement planning?",
        responses: {
          "claude-3.5-sonnet": {
            text: `When building a diversified investment portfolio for long-term retirement planning, consider these key factors:

1. Risk Tolerance: Assess your comfort level with market volatility and potential losses.
2. Time Horizon: Consider how many years until retirement and adjust risk accordingly.
3. Asset Allocation: Divide investments among stocks, bonds, and other asset classes based on risk tolerance and time horizon.
4. Diversification: Spread investments across various sectors, geographic regions, and company sizes to reduce risk.
5. Rebalancing: Regularly adjust your portfolio to maintain your target asset allocation.
6. Costs: Choose low-cost investment options like index funds or ETFs to maximize returns.
7. Tax Efficiency: Utilize tax-advantaged accounts like 401(k)s and IRAs to optimize tax benefits.
8. Inflation Protection: Include investments that can keep pace with or exceed inflation rates.
9. Income Needs: Plan for how much income you'll need in retirement and invest accordingly.
10. Regular Reviews: Periodically reassess your portfolio and adjust as your circumstances change.

Remember, a well-diversified portfolio aims to balance risk and reward over the long term.`,
            factuality: 0.93,
            time: 2000
          },
          "gpt-4o": {
            text: `When building a diversified investment portfolio for long-term retirement planning, several key considerations should be taken into account:

1. Risk Tolerance:
   - Assess your comfort level with market volatility
   - Consider both financial and emotional capacity for risk
   - Adjust portfolio allocation based on risk tolerance

2. Time Horizon:
   - Determine years until retirement
   - Longer time horizons generally allow for more aggressive strategies
   - Adjust risk exposure as retirement approaches

3. Asset Allocation:
   - Divide investments among stocks, bonds, and other asset classes
   - Balance growth potential with risk management
   - Consider age-based allocation strategies (e.g., 120 minus age for stock percentage)

4. Diversification:
   - Spread investments across various sectors and industries
   - Include domestic and international markets
   - Consider small, mid, and large-cap stocks

5. Investment Vehicles:
   - Utilize a mix of mutual funds, ETFs, individual stocks, and bonds
   - Consider low-cost index funds for core holdings
   - Explore target-date funds for automatic rebalancing

6. Tax Efficiency:
   - Maximize contributions to tax-advantaged accounts (e.g., 401(k), IRA)
   - Consider Roth options for tax-free growth
   - Place tax-inefficient investments in tax-advantaged accounts

7. Rebalancing:
   - Regularly review and adjust portfolio to maintain target allocation
   - Consider automatic rebalancing options
   - Rebalance at least annually or when allocations drift significantly

8. Inflation Protection:
   - Include investments that historically outpace inflation (e.g., stocks, TIPS)
   - Consider real estate or REITs for additional inflation hedging

9. Income Generation:
   - Plan for transition from accumulation to distribution phase
   - Consider dividend-paying stocks and bonds for income
   - Explore annuities for guaranteed income streams

10. Costs and Fees:
    - Minimize investment expenses and management fees
    - Compare expense ratios when selecting funds
    - Consider the impact of fees on long-term returns

11. Risk Management:
    - Implement downside protection strategies
    - Consider uncorrelated assets for additional diversification
    - Explore options for hedging against market downturns

12. Regular Review and Adjustment:
    - Periodically reassess goals and risk tolerance
    - Adjust strategy based on life changes or market conditions
    - Seek professional advice for complex situations

13. Estate Planning:
    - Consider beneficiary designations on retirement accounts
    - Explore strategies for efficient wealth transfer
    - Align investment strategy with overall estate plan

By carefully considering these factors and regularly reviewing your portfolio, you can build a robust, diversified investment strategy tailored to your long-term retirement goals.`,
            factuality: 0.96,
            time: 1400
          },
          "Llama-2-7b-hf": {
            text: `When building a diversified investment portfolio for long-term retirement planning, consider these key factors:

1. Risk Tolerance:
   - Assess your comfort with market volatility
   - Balance risk and potential returns
   - Adjust based on age and retirement timeline

2. Asset Allocation:
   - Divide investments among stocks, bonds, and cash
   - Consider real estate and alternative investments
   - Adjust allocation as you near retirement

3. Diversification:
   - Spread investments across various sectors
   - Include domestic and international markets
   - Mix different company sizes (small, mid, large-cap)

4. Time Horizon:
   - Consider years until retirement
   - Adjust risk exposure over time
   - Plan for post-retirement income needs

5. Costs and Fees:
   - Choose low-cost index funds or ETFs
   - Compare expense ratios
   - Minimize transaction costs

6. Tax Efficiency:
   - Utilize tax-advantaged accounts (401(k), IRA)
   - Consider Roth options for tax-free growth
   - Implement tax-loss harvesting strategies

7. Rebalancing:
   - Regularly review and adjust portfolio
   - Maintain target asset allocation
   - Consider automatic rebalancing options

8. Inflation Protection:
   - Include investments that historically outpace inflation
   - Consider Treasury Inflation-Protected Securities (TIPS)
   - Explore real estate investments or REITs

9. Regular Review:
   - Assess portfolio performance periodically
   - Adjust strategy based on changing life circumstances
   - Stay informed about market trends and economic conditions

10. Professional Advice:
    - Consider consulting a financial advisor
    - Seek guidance for complex investment decisions
    - Ensure your strategy aligns with overall financial goals

Remember, a well-diversified portfolio aims to balance risk and potential returns over the long term, helping you achieve your retirement goals while managing volatility.`,
            factuality: 0.91,
            time: 2700
          }
        }
      },
      {
        id: 'finance-2',
        text: "What are the most important financial ratios for evaluating a company's financial health and performance?",
        responses: {
          "claude-3.5-sonnet": {
            text: `Several key financial ratios are crucial for evaluating a company's financial health and performance:

1. Profitability Ratios:
   - Gross Profit Margin: (Gross Profit / Revenue) x 100
   - Net Profit Margin: (Net Income / Revenue) x 100
   - Return on Equity (ROE): (Net Income / Shareholders' Equity) x 100
   - Return on Assets (ROA): (Net Income / Total Assets) x 100

2. Liquidity Ratios:
   - Current Ratio: Current Assets / Current Liabilities
   - Quick Ratio: (Current Assets - Inventory) / Current Liabilities

3. Solvency Ratios:
   - Debt-to-Equity Ratio: Total Liabilities / Shareholders' Equity
   - Interest Coverage Ratio: EBIT / Interest Expense

4. Efficiency Ratios:
   - Inventory Turnover: Cost of Goods Sold / Average Inventory
   - Accounts Receivable Turnover: Net Credit Sales / Average Accounts Receivable
   - Asset Turnover: Revenue / Average Total Assets

5. Valuation Ratios:
   - Price-to-Earnings (P/E) Ratio: Market Price per Share / Earnings per Share
   - Price-to-Book (P/B) Ratio: Market Price per Share / Book Value per Share
   - Dividend Yield: Annual Dividends per Share / Market Price per Share

6. Growth Ratios:
   - Revenue Growth Rate: (Current Period Revenue - Prior Period Revenue) / Prior Period Revenue
   - Earnings Per Share (EPS) Growth Rate

These ratios provide insights into various aspects of a company's financial performance, including profitability, ability to meet short-term obligations, long-term solvency, operational efficiency, and market valuation. It's important to compare these ratios to industry benchmarks and analyze trends over time for a comprehensive evaluation.`,
            factuality: 0.95,
            time: 1900
          },
          "gpt-4o": {
            text: `When evaluating a company's financial health and performance, several key financial ratios are particularly important. These ratios can be grouped into categories that provide insights into different aspects of a company's financial situation:

1. Profitability Ratios:
   - Gross Profit Margin: (Gross Profit / Revenue) x 100
   - Net Profit Margin: (Net Income / Revenue) x 100
   - Return on Equity (ROE): (Net Income / Shareholders' Equity) x 100
   - Return on Assets (ROA): (Net Income / Total Assets) x 100
   - EBITDA Margin: (EBITDA / Revenue) x 100

2. Liquidity Ratios:
   - Current Ratio: Current Assets / Current Liabilities
   - Quick Ratio: (Current Assets - Inventory) / Current Liabilities
   - Cash Ratio: Cash and Cash Equivalents / Current Liabilities

3. Solvency Ratios:
   - Debt-to-Equity Ratio: Total Liabilities / Shareholders' Equity
   - Interest Coverage Ratio: EBIT / Interest Expense
   - Debt-to-EBITDA Ratio: Total Debt / EBITDA

4. Efficiency Ratios:
   - Inventory Turnover: Cost of Goods Sold / Average Inventory
   - Accounts Receivable Turnover: Net Credit Sales / Average Accounts Receivable
   - Asset Turnover: Revenue / Average Total Assets
   - Days Sales Outstanding (DSO): (Accounts Receivable / Revenue) x 365

5. Valuation Ratios:
   - Price-to-Earnings (P/E) Ratio: Market Price per Share / Earnings per Share
   - Price-to-Book (P/B) Ratio: Market Price per Share / Book Value per Share
   - Enterprise Value-to-EBITDA (EV/EBITDA): Enterprise Value / EBITDA
   - Price-to-Sales (P/S) Ratio: Market Capitalization / Total Revenue

6. Growth Ratios:
   - Revenue Growth Rate: (Current Period Revenue - Prior Period Revenue) / Prior Period Revenue
   - Earnings Per Share (EPS) Growth Rate
   - Dividend Growth Rate

7. Cash Flow Ratios:
   - Operating Cash Flow Ratio: Operating Cash Flow / Current Liabilities
   - Free Cash Flow Yield: Free Cash Flow per Share / Market Price per Share

When analyzing these ratios, it's important to consider the following:

1. Industry Comparisons: Ratios should be compared to industry averages or competitors to gain meaningful insights.
2. Trend Analysis: Look at how ratios have changed over time to identify improvements or deteriorations in financial health.
3. Context: Consider the company's business model, growth stage, and economic conditions when interpreting ratios.
4. Limitations: No single ratio provides a complete picture. Use a combination of ratios for a comprehensive analysis.
5. Quality of Earnings: Be aware of potential accounting manipulations that could affect ratio calculations.

By using these financial ratios in conjunction with other analytical tools and qualitative factors, investors and analysts can gain a comprehensive understanding of a company's financial health and performance.`,
            factuality: 0.97,
            time: 1500
          },
          "Llama-2-7b-hf": {
            text: `When evaluating a company's financial health and performance, several key financial ratios are particularly important:

1. Profitability Ratios:
   - Gross Profit Margin: (Gross Profit / Revenue) x 100
   - Net Profit Margin: (Net Income / Revenue) x 100
   - Return on Equity (ROE): (Net Income / Shareholders' Equity) x 100
   - Return on Assets (ROA): (Net Income / Total Assets) x 100

2. Liquidity Ratios:
   - Current Ratio: Current Assets / Current Liabilities
   - Quick Ratio: (Current Assets - Inventory) / Current Liabilities

3. Solvency Ratios:
   - Debt-to-Equity Ratio: Total Liabilities / Shareholders' Equity
   - Interest Coverage Ratio: EBIT / Interest Expense

4. Efficiency Ratios:
   - Inventory Turnover: Cost of Goods Sold / Average Inventory
   - Accounts Receivable Turnover: Net Credit Sales / Average Accounts Receivable
   - Asset Turnover: Revenue / Average Total Assets

5. Valuation Ratios:
   - Price-to-Earnings (P/E) Ratio: Market Price per Share / Earnings per Share
   - Price-to-Book (P/B) Ratio: Market Price per Share / Book Value per Share
   - Enterprise Value-to-EBITDA (EV/EBITDA): Enterprise Value / EBITDA

6. Growth Ratios:
   - Revenue Growth Rate: (Current Period Revenue - Prior Period Revenue) / Prior Period Revenue
   - Earnings Per Share (EPS) Growth Rate

7. Cash Flow Ratios:
   - Operating Cash Flow Ratio: Operating Cash Flow / CurrentLiabilities
   - Free Cash Flow Yield: Free Cash Flow per Share / Market Price per Share

When analyzing these ratios, it's important to:
- Compare them to industry averages and competitors
- Look at trends over time
- Consider the company's specific business model and industry
- Use multiple ratios for a comprehensive analysis

Remember, no single ratio provides a complete picture of a company's financial health. It's the combination of these ratios, along with qualitative factors, that gives a comprehensive view of a company's financial performance and position.`,
            factuality: 0.94,
            time: 2200
          }
        }
      }
    ]
  }
]

export const findMatchingExample = (
  systemPrompt: string,
  testPrompt: string
): {
  responses: typeof systemPrompts[0]['testPrompts'][0]['responses'] | null,
  match: 'exact' | 'similar' | 'none'
} => {
  // First try exact match
  for (const category of systemPrompts) {
    if (category.text.toLowerCase() === systemPrompt.toLowerCase()) {
      const testCase = category.testPrompts.find(
        tc => tc.text.toLowerCase() === testPrompt.toLowerCase()
      )
      if (testCase) {
        return { responses: testCase.responses, match: 'exact' }
      }
    }
  }

  // Try finding similar prompts
  for (const category of systemPrompts) {
    if (category.text.toLowerCase().includes(systemPrompt.toLowerCase()) ||
        systemPrompt.toLowerCase().includes(category.text.toLowerCase())) {
      return { responses: category.testPrompts[0].responses, match: 'similar' }
    }
  }

  // If no match is found, generate new responses
  if (systemPrompt.toLowerCase().includes("space exploration") || 
      systemPrompt.toLowerCase().includes("astronomy")) {
    return {
      responses: {
        "claude-3.5-sonnet": {
          text: `The James Webb Space Telescope (JWST) is a groundbreaking space observatory that represents a significant leap forward in our ability to explore and understand the universe. Its impact on astronomy and our understanding of the cosmos is expected to be profound:

1. Early Universe Observations: JWST can peer further back in time than any previous telescope, potentially observing the first galaxies formed after the Big Bang. This will help us understand the early stages of cosmic evolution.

2. Exoplanet Research: With its powerful infrared capabilities, JWST can analyze the atmospheres of exoplanets, potentially detecting signs of habitability or even life on distant worlds.

3. Star and Planet Formation: The telescope will provide unprecedented views of stellar nurseries and protoplanetary disks, enhancing our understanding of how stars and planets form.

4. Dark Matter and Dark Energy: JWST's observations may contribute to our understanding of these mysterious components that make up most of the universe.

5. Improved Resolution and Sensitivity: Its large mirror and position beyond Earth's atmosphere allow for incredibly detailed and clear images of distant cosmic objects.

6. Infrared Capabilities: JWST's ability to see in infrared light allows it to peer through cosmic dust that obscures visible light, revealing previously hidden celestial phenomena.

7. Collaborative Science: The data from JWST will be used by scientists across various fields, fostering interdisciplinary research and potentially leading to unexpected discoveries.

The James Webb Space Telescope represents a new era in astronomy, promising to revolutionize our understanding of the universe from its earliest stages to the potential for life on other planets.`,
          factuality: 0.98,
          time: 2100
        },
        "gpt-4o": {
          text: `The James Webb Space Telescope (JWST) is a revolutionary space observatory that significantly advances our capabilities in exploring and understanding the universe. Its potential impact on our cosmic knowledge is immense:

1. Early Universe Studies:
   - Can observe the first galaxies formed after the Big Bang
   - Provides insights into the early stages of cosmic evolution
   - Helps understand the formation of stars and galaxies in the early universe

2. Exoplanet Exploration:
   - Advanced infrared capabilities allow detailed study of exoplanet atmospheres
   - Potential to detect biosignatures and technosignatures on distant worlds
   - Enhances our search for potentially habitable planets

3. Star and Planet Formation:
   - Offers unprecedented views of stellar nurseries and protoplanetary disks
   - Improves our understanding of the processes involved in star and planet formation
   - Helps bridge the gap between theoretical models and observations

4. Cosmology and Fundamental Physics:
   - Contributes to research on dark matter and dark energy
   - Helps refine our understanding of the universe's expansion rate
   - Provides data to test and potentially revise cosmological models

5. Technological Advancements:
   - Pushes the boundaries of space telescope technology
   - Demonstrates new cooling systems and ultra-stable optical designs
   - Inspires future space missions and observatories

6. Infrared Astronomy:
   - Sees through cosmic dust that obscures visible light
   - Reveals hidden celestial phenomena and structures
   - Extends our observational capabilities into previously unexplored wavelengths

7. Multi-Wavelength Astronomy:
   - Complements other observatories across the electromagnetic spectrum
   - Enables comprehensive studies of cosmic phenomena
   - Fosters collaboration between different areas of astronomy

8. Unexpected Discoveries:
   - Has the potential to reveal entirely new classes of cosmic objects
   - May lead to paradigm shifts in our understanding of the universe
   - Could answer long-standing questions in astronomy and raise new ones

9. Public Engagement:
   - Produces stunning, high-resolution images of the cosmos
   - Inspires public interest in science and space exploration
   - Serves as a powerful educational tool for astronomy and astrophysics

The James Webb Space Telescope represents a new era in astronomy, promising to revolutionize our understanding of the universe from its earliest moments to the potential for life on other planets. Its unprecedented capabilities are expected to lead to groundbreaking discoveries and reshape our cosmic perspective.`,
          factuality: 0.97,
          time: 1800
        },
        "Llama-2-7b-hf": {
          text: `The James Webb Space Telescope (JWST) is a significant advancement in space exploration technology with several potential impacts on our understanding of the universe:

1. Deep Space Observation: JWST can see further into space than any previous telescope, potentially observing the first galaxies formed after the Big Bang.

2. Exoplanet Research: Its advanced instruments can analyze the atmospheres of exoplanets, potentially detecting signs of habitability or even life.

3. Infrared Capabilities: JWST's ability to detect infrared light allows it to see through cosmic dust, revealing previously hidden celestial objects and phenomena.

4. Early Universe Studies: It can provide insights into the formation of the first stars and galaxies, enhancing our understanding of cosmic evolution.

5. Dark Matter and Dark Energy: Observations from JWST may contribute to our understanding of these mysterious components of the universe.

6. Improved Resolution: Its large mirror provides unprecedented image quality of distant cosmic objects.

7. Collaborative Science: Data from JWST will be used across various scientific disciplines, potentially leading to unexpected discoveries.

8. Technological Advancements: The development of JWST has pushed the boundaries of space technology, which may have applications in other areas of science and engineering.

The James Webb Space Telescope represents a new era in astronomy, promising to expand our knowledge of the universe significantly and potentially revolutionize our understanding of cosmic phenomena.`,
          factuality: 0.95,
          time: 2500
        }
      },
      match: 'none'
    }
  }

  // For any other new prompts, return null responses
  return { responses: null, match: 'none' }
}

