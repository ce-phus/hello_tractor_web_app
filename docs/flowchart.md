## Hello Tractor Flow Chart

```mermaid
flowchart TD
    start([User Accesses the Platform])

    subgraph Homepage
        A[Homepage]
        A --> B[Featured Listings]
        A --> C[Popular Listings]
        A --> D[Side-Friendly Navigation]
    end

    start --> Homepage

    subgraph UserRegistration
        E[User Registration]
        E --> E1[Secure Sign-Up with Djoser]
        E1 --> E2[Email Verification \(Mailtrap\)]
        E --> E3[Easy Onboarding for Buyers & Sellers]
    end

    Homepage --> UserRegistration

    subgraph TractorListings
        F[Sellers Create Listings]
        F --> F1[Upload Photos]
        F --> F2[Add Specifications]
        F --> F3[Enter Location & Asking Price]
    end

    UserRegistration --> TractorListings

    subgraph ProfileSection
        G[Profile Section]
        G --> G1[Sellers' Details]
        G1 --> G2[License Number]
        G1 --> G3[Profile Photo]
        G1 --> G4[Gender]
        G1 --> G5[Social Accounts]

        G --> G6[Buyers' Details]
        G6 --> G7[License Number]
        G6 --> G8[Profile Photo]
        G6 --> G9[Gender]
        G6 --> G10[Social Accounts]
    end

    UserRegistration --> ProfileSection
    TractorListings --> ProfileSection

    subgraph PaymentIntegration
        H[Secure Payment \(Paystack\)]
        H --> H1[Centralized Secure Transactions]
        H --> H2[Real-Time Feedback via Email]
    end

    ProfileSection --> PaymentIntegration
    TractorListings --> PaymentIntegration

    subgraph OrderModel
        I[Order Model]
        I --> I1[Track Purchases]
        I --> I2[Order Page]
        I --> I3[Receipt Sent via Email]
    end

    PaymentIntegration --> OrderModel

    subgraph AdminPanel
        J[Admin Panel]
        J --> J1[Manage & Approve Listings]
        J --> J2[Oversee Transactions]
        J --> J3[Maintain Compliance Standards]
    end

    TractorListings --> AdminPanel
    PaymentIntegration --> AdminPanel
