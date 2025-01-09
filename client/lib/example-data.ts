export const exampleData = {
  climate: {
    systemPrompt: "You are a climate change expert. You will return accurate answers to any query regarding climate change.",
    testCases: [
      {
        prompt: "What strategies or innovations do you think are most critical for mitigating the effects of climate change on a global scale?",
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
            responseTime: 1800
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
            responseTime: 1200
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
            responseTime: 2500
          }
        }
      }
    ]
  },
  cybersecurity: {
    systemPrompt: "You are a cybersecurity expert. Provide detailed, technical responses to questions about computer and network security.",
    testCases: [
      {
        prompt: "What are the most effective strategies for protecting against ransomware attacks in enterprise environments?",
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
            responseTime: 1900
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
            responseTime: 1350
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
            responseTime: 2700
          }
        }
      }
    ]
  },
  finance: {
    systemPrompt: "You are a financial advisor with expertise in personal and corporate finance. Provide clear, actionable financial advice.",
    testCases: [
      {
        prompt: "What are the key considerations when building a diversified investment portfolio for long-term retirement planning?",
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
            responseTime: 2000
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
            responseTime: 1400
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
            responseTime: 2700
          }
        }
      }
    ]
  }
}

export const findMatchingExample = (
  systemPrompt: string,
  testPrompt: string
): {
  responses: typeof exampleData.climate.testCases[0]['responses'] | null,
  match: 'exact' | 'similar' | 'none'
} => {
  // First try exact match
  for (const category of Object.values(exampleData)) {
    if (category.systemPrompt.toLowerCase() === systemPrompt.toLowerCase()) {
      const testCase = category.testCases.find(
        tc => tc.prompt.toLowerCase() === testPrompt.toLowerCase()
      )
      if (testCase) {
        return { responses: testCase.responses, match: 'exact' }
      }
    }
  }

  // Try finding similar prompts
  for (const category of Object.values(exampleData)) {
    if (category.systemPrompt.toLowerCase().includes(systemPrompt.toLowerCase()) ||
        systemPrompt.toLowerCase().includes(category.systemPrompt.toLowerCase())) {
      return { responses: category.testCases[0].responses, match: 'similar' }
    }
  }

  return { responses: null, match: 'none' }
}

