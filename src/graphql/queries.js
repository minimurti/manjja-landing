/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReports = /* GraphQL */ `
  query GetReports($id: ID!) {
    getReports(id: $id) {
      id
      vicPublicUserInfoModelID
      perpPublicUserInfoModelID
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vicPublicUserInfoModelID
        perpPublicUserInfoModelID
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReferral = /* GraphQL */ `
  query GetReferral($id: ID!) {
    getReferral(id: $id) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReferrals = /* GraphQL */ `
  query ListReferrals(
    $filter: ModelReferralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        refMakerID
        spent
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHillaryClinton = /* GraphQL */ `
  query GetHillaryClinton($id: ID!) {
    getHillaryClinton(id: $id) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listHillaryClintons = /* GraphQL */ `
  query ListHillaryClintons(
    $filter: ModelHillaryClintonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHillaryClintons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        deviceToken
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConnection = /* GraphQL */ `
  query GetConnection($id: ID!) {
    getConnection(id: $id) {
      id
      publicUserInfoModelID
      publicUserInfoModel {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      otherUserID
      isBlocked
      inMatchType
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConnections = /* GraphQL */ `
  query ListConnections(
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConnections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        otherUserID
        isBlocked
        inMatchType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      typename
      text
      attachment
      reply {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        displayName
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        recipientDeviceTokens
        recipientIDs
        createdAt
        updatedAt
        messageReplyId
        owner
        __typename
      }
      displayName
      groupOfMessagesModelID
      groupOfMessagesModel {
        id
        messageModels {
          nextToken
          __typename
        }
        publicUserInfoModels {
          nextToken
          __typename
        }
        groupName
        createdAt
        updatedAt
        __typename
      }
      senderID
      sender {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      recipientDeviceTokens
      recipientIDs
      createdAt
      updatedAt
      messageReplyId
      owner
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        displayName
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        recipientDeviceTokens
        recipientIDs
        createdAt
        updatedAt
        messageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgressTrackerMessage = /* GraphQL */ `
  query GetProgressTrackerMessage($id: ID!) {
    getProgressTrackerMessage(id: $id) {
      id
      typename
      text
      attachment
      reply {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMessageReplyId
        owner
        __typename
      }
      progressTrackerID
      progressTracker {
        id
        name
        description
        ownerPuimID
        members {
          nextToken
          __typename
        }
        invitations {
          nextToken
          __typename
        }
        prototypePercent
        prototypeComment
        marketTestingPercent
        marketTestingComment
        productMarketFitPercent
        productMarketFitComment
        fundsPercent
        fundsComment
        goToMarketPercent
        goToMarketComment
        businessModalPercent
        businessModalComment
        growthPercent
        growthComment
        messageModels {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      senderID
      sender {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      createdAt
      updatedAt
      progressTrackerMessageReplyId
      owner
      __typename
    }
  }
`;
export const listProgressTrackerMessages = /* GraphQL */ `
  query ListProgressTrackerMessages(
    $filter: ModelProgressTrackerMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgressTrackerMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMessageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSchoolModel = /* GraphQL */ `
  query GetSchoolModel($id: ID!) {
    getSchoolModel(id: $id) {
      id
      domain
      name
      shortName
      logoImageURL
      city
      state
      country
      lat
      lon
      isAdultLevel
      publicUserInfoModels {
        items {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSchoolModels = /* GraphQL */ `
  query ListSchoolModels(
    $filter: ModelSchoolModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchoolModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        domain
        name
        shortName
        logoImageURL
        city
        state
        country
        lat
        lon
        isAdultLevel
        publicUserInfoModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroupOfMessagesModel = /* GraphQL */ `
  query GetGroupOfMessagesModel($id: ID!) {
    getGroupOfMessagesModel(id: $id) {
      id
      messageModels {
        items {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        nextToken
        __typename
      }
      publicUserInfoModels {
        items {
          id
          publicUserInfoModelID
          groupOfMessagesModelID
          allowNotifications
          lastOpened
          displayName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      groupName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGroupOfMessagesModels = /* GraphQL */ `
  query ListGroupOfMessagesModels(
    $filter: ModelGroupOfMessagesModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupOfMessagesModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        messageModels {
          nextToken
          __typename
        }
        publicUserInfoModels {
          nextToken
          __typename
        }
        groupName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  query GetGroupOfMessagesModelPublicUserInfoModel($id: ID!) {
    getGroupOfMessagesModelPublicUserInfoModel(id: $id) {
      id
      publicUserInfoModelID
      publicUserInfoModel {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      groupOfMessagesModelID
      groupOfMessagesModel {
        id
        messageModels {
          nextToken
          __typename
        }
        publicUserInfoModels {
          nextToken
          __typename
        }
        groupName
        createdAt
        updatedAt
        __typename
      }
      allowNotifications
      lastOpened
      displayName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listGroupOfMessagesModelPublicUserInfoModels = /* GraphQL */ `
  query ListGroupOfMessagesModelPublicUserInfoModels(
    $filter: ModelGroupOfMessagesModelPublicUserInfoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupOfMessagesModelPublicUserInfoModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        allowNotifications
        lastOpened
        displayName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPublicUserInfoModel = /* GraphQL */ `
  query GetPublicUserInfoModel($id: ID!) {
    getPublicUserInfoModel(id: $id) {
      id
      typename
      firstName
      userDesiredSkillModels {
        items {
          id
          skillModelID
          publicUserInfoModelID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      lastName
      year
      major
      bio
      userPossessedSkillModels {
        items {
          id
          skillModelID
          publicUserInfoModelID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      lastOpenedProgressTrackerChat
      photo
      schoolmodelID
      schoolModel {
        id
        domain
        name
        shortName
        logoImageURL
        city
        state
        country
        lat
        lon
        isAdultLevel
        publicUserInfoModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      unlistedSchoolName
      lastActive
      messageModels {
        items {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        nextToken
        __typename
      }
      progressTrackerMessageModels {
        items {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        nextToken
        __typename
      }
      groupOfMessagesModels {
        items {
          id
          publicUserInfoModelID
          groupOfMessagesModelID
          allowNotifications
          lastOpened
          displayName
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      connections {
        items {
          id
          publicUserInfoModelID
          otherUserID
          isBlocked
          inMatchType
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      deviceToken
      channel
      concatedDesiredSkillIDs
      concatedPossessedSkillIDs
      dob
      isSchoolVerified
      isPhotoVerified
      lat
      lon
      progressTrackerID
      progressTracker {
        id
        name
        description
        ownerPuimID
        members {
          nextToken
          __typename
        }
        invitations {
          nextToken
          __typename
        }
        prototypePercent
        prototypeComment
        marketTestingPercent
        marketTestingComment
        productMarketFitPercent
        productMarketFitComment
        fundsPercent
        fundsComment
        goToMarketPercent
        goToMarketComment
        businessModalPercent
        businessModalComment
        growthPercent
        growthComment
        messageModels {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      progressTrackerInvitations {
        items {
          id
          progressTrackerID
          publicUserInfoModelID
          isAccepted
          isDeclined
          isOpened
          lastOpenedProgressTrackerTodos
          lastOpenedProgressTrackerChat
          createdAt
          updatedAt
          publicUserInfoModelProgressTrackerInvitationsId
          progressTrackerInvitationsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      todos {
        items {
          category
          task
          description
          progressTrackerID
          publicUserInfoModelID
          dueDate
          status
          notifyTeam
          id
          createdAt
          updatedAt
          publicUserInfoModelTodosId
          progressTrackerTodosId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      progressTrackerMembersId
      owner
      __typename
    }
  }
`;
export const listPublicUserInfoModels = /* GraphQL */ `
  query ListPublicUserInfoModels(
    $filter: ModelPublicUserInfoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicUserInfoModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgressTrackerInvitation = /* GraphQL */ `
  query GetProgressTrackerInvitation($id: ID!) {
    getProgressTrackerInvitation(id: $id) {
      id
      progressTrackerID
      progressTracker {
        id
        name
        description
        ownerPuimID
        members {
          nextToken
          __typename
        }
        invitations {
          nextToken
          __typename
        }
        prototypePercent
        prototypeComment
        marketTestingPercent
        marketTestingComment
        productMarketFitPercent
        productMarketFitComment
        fundsPercent
        fundsComment
        goToMarketPercent
        goToMarketComment
        businessModalPercent
        businessModalComment
        growthPercent
        growthComment
        messageModels {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      publicUserInfoModelID
      publicUserInfoModel {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      isAccepted
      isDeclined
      isOpened
      lastOpenedProgressTrackerTodos
      lastOpenedProgressTrackerChat
      createdAt
      updatedAt
      publicUserInfoModelProgressTrackerInvitationsId
      progressTrackerInvitationsId
      owner
      __typename
    }
  }
`;
export const listProgressTrackerInvitations = /* GraphQL */ `
  query ListProgressTrackerInvitations(
    $filter: ModelProgressTrackerInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgressTrackerInvitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        isAccepted
        isDeclined
        isOpened
        lastOpenedProgressTrackerTodos
        lastOpenedProgressTrackerChat
        createdAt
        updatedAt
        publicUserInfoModelProgressTrackerInvitationsId
        progressTrackerInvitationsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProgressTracker = /* GraphQL */ `
  query GetProgressTracker($id: ID!) {
    getProgressTracker(id: $id) {
      id
      name
      description
      ownerPuimID
      members {
        items {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        nextToken
        __typename
      }
      invitations {
        items {
          id
          progressTrackerID
          publicUserInfoModelID
          isAccepted
          isDeclined
          isOpened
          lastOpenedProgressTrackerTodos
          lastOpenedProgressTrackerChat
          createdAt
          updatedAt
          publicUserInfoModelProgressTrackerInvitationsId
          progressTrackerInvitationsId
          owner
          __typename
        }
        nextToken
        __typename
      }
      prototypePercent
      prototypeComment
      marketTestingPercent
      marketTestingComment
      productMarketFitPercent
      productMarketFitComment
      fundsPercent
      fundsComment
      goToMarketPercent
      goToMarketComment
      businessModalPercent
      businessModalComment
      growthPercent
      growthComment
      messageModels {
        items {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        nextToken
        __typename
      }
      todos {
        items {
          category
          task
          description
          progressTrackerID
          publicUserInfoModelID
          dueDate
          status
          notifyTeam
          id
          createdAt
          updatedAt
          publicUserInfoModelTodosId
          progressTrackerTodosId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listProgressTrackers = /* GraphQL */ `
  query ListProgressTrackers(
    $filter: ModelProgressTrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgressTrackers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        ownerPuimID
        members {
          nextToken
          __typename
        }
        invitations {
          nextToken
          __typename
        }
        prototypePercent
        prototypeComment
        marketTestingPercent
        marketTestingComment
        productMarketFitPercent
        productMarketFitComment
        fundsPercent
        fundsComment
        goToMarketPercent
        goToMarketComment
        businessModalPercent
        businessModalComment
        growthPercent
        growthComment
        messageModels {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      category
      task
      description
      progressTrackerID
      progressTracker {
        id
        name
        description
        ownerPuimID
        members {
          nextToken
          __typename
        }
        invitations {
          nextToken
          __typename
        }
        prototypePercent
        prototypeComment
        marketTestingPercent
        marketTestingComment
        productMarketFitPercent
        productMarketFitComment
        fundsPercent
        fundsComment
        goToMarketPercent
        goToMarketComment
        businessModalPercent
        businessModalComment
        growthPercent
        growthComment
        messageModels {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      publicUserInfoModelID
      assignee {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      dueDate
      status
      notifyTeam
      id
      createdAt
      updatedAt
      publicUserInfoModelTodosId
      progressTrackerTodosId
      owner
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category
        task
        description
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        publicUserInfoModelID
        assignee {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        dueDate
        status
        notifyTeam
        id
        createdAt
        updatedAt
        publicUserInfoModelTodosId
        progressTrackerTodosId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserDesiredSkillModel = /* GraphQL */ `
  query GetUserDesiredSkillModel($id: ID!) {
    getUserDesiredSkillModel(id: $id) {
      id
      skillModelID
      skillModel {
        id
        userDesiredSkillModels {
          nextToken
          __typename
        }
        name
        creator {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        skillGroupID
        userPossessedSkillModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        skillModelCreatorId
        __typename
      }
      publicUserInfoModelID
      publicUserInfoModel {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserDesiredSkillModels = /* GraphQL */ `
  query ListUserDesiredSkillModels(
    $filter: ModelUserDesiredSkillModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDesiredSkillModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        skillModelID
        skillModel {
          id
          name
          skillGroupID
          createdAt
          updatedAt
          skillModelCreatorId
          __typename
        }
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserPossessedSkillModel = /* GraphQL */ `
  query GetUserPossessedSkillModel($id: ID!) {
    getUserPossessedSkillModel(id: $id) {
      id
      skillModelID
      skillModel {
        id
        userDesiredSkillModels {
          nextToken
          __typename
        }
        name
        creator {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        skillGroupID
        userPossessedSkillModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        skillModelCreatorId
        __typename
      }
      publicUserInfoModelID
      publicUserInfoModel {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserPossessedSkillModels = /* GraphQL */ `
  query ListUserPossessedSkillModels(
    $filter: ModelUserPossessedSkillModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPossessedSkillModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        skillModelID
        skillModel {
          id
          name
          skillGroupID
          createdAt
          updatedAt
          skillModelCreatorId
          __typename
        }
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const connectionsByPuimID = /* GraphQL */ `
  query ConnectionsByPuimID(
    $publicUserInfoModelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    connectionsByPuimID(
      publicUserInfoModelID: $publicUserInfoModelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        otherUserID
        isBlocked
        inMatchType
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByTypeName = /* GraphQL */ `
  query MessagesByTypeName(
    $typename: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByTypeName(
      typename: $typename
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        displayName
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        recipientDeviceTokens
        recipientIDs
        createdAt
        updatedAt
        messageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByGommID = /* GraphQL */ `
  query MessagesByGommID(
    $groupOfMessagesModelID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByGommID(
      groupOfMessagesModelID: $groupOfMessagesModelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        displayName
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        recipientDeviceTokens
        recipientIDs
        createdAt
        updatedAt
        messageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByRecipientIDs = /* GraphQL */ `
  query MessagesByRecipientIDs(
    $recipientIDs: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByRecipientIDs(
      recipientIDs: $recipientIDs
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          displayName
          groupOfMessagesModelID
          senderID
          recipientDeviceTokens
          recipientIDs
          createdAt
          updatedAt
          messageReplyId
          owner
          __typename
        }
        displayName
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        recipientDeviceTokens
        recipientIDs
        createdAt
        updatedAt
        messageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const progressTrackerMessagesByTypeName = /* GraphQL */ `
  query ProgressTrackerMessagesByTypeName(
    $typename: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProgressTrackerMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    progressTrackerMessagesByTypeName(
      typename: $typename
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMessageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ptMessagesByPTID = /* GraphQL */ `
  query PtMessagesByPTID(
    $progressTrackerID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProgressTrackerMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ptMessagesByPTID(
      progressTrackerID: $progressTrackerID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        text
        attachment
        reply {
          id
          typename
          text
          attachment
          progressTrackerID
          senderID
          createdAt
          updatedAt
          progressTrackerMessageReplyId
          owner
          __typename
        }
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        senderID
        sender {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMessageReplyId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const gommPuimsByPuimID = /* GraphQL */ `
  query GommPuimsByPuimID(
    $publicUserInfoModelID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupOfMessagesModelPublicUserInfoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gommPuimsByPuimID(
      publicUserInfoModelID: $publicUserInfoModelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        groupOfMessagesModelID
        groupOfMessagesModel {
          id
          groupName
          createdAt
          updatedAt
          __typename
        }
        allowNotifications
        lastOpened
        displayName
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const puimsByLastActive = /* GraphQL */ `
  query PuimsByLastActive(
    $typename: String!
    $lastActive: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPublicUserInfoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    puimsByLastActive(
      typename: $typename
      lastActive: $lastActive
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ptInvitesByPuimID = /* GraphQL */ `
  query PtInvitesByPuimID(
    $publicUserInfoModelID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProgressTrackerInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ptInvitesByPuimID(
      publicUserInfoModelID: $publicUserInfoModelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        publicUserInfoModelID
        publicUserInfoModel {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        isAccepted
        isDeclined
        isOpened
        lastOpenedProgressTrackerTodos
        lastOpenedProgressTrackerChat
        createdAt
        updatedAt
        publicUserInfoModelProgressTrackerInvitationsId
        progressTrackerInvitationsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const todosByPTID = /* GraphQL */ `
  query TodosByPTID(
    $progressTrackerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    todosByPTID(
      progressTrackerID: $progressTrackerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        category
        task
        description
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        publicUserInfoModelID
        assignee {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        dueDate
        status
        notifyTeam
        id
        createdAt
        updatedAt
        publicUserInfoModelTodosId
        progressTrackerTodosId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeabjIsLive = /* GraphQL */ `
  query GetPeabjIsLive($id: ID!) {
    getPeabjIsLive(id: $id) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeabjIsLives = /* GraphQL */ `
  query ListPeabjIsLives(
    $filter: ModelPeabjIsLiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeabjIsLives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        yes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPeabjPassword = /* GraphQL */ `
  query GetPeabjPassword($id: ID!) {
    getPeabjPassword(id: $id) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPeabjPasswords = /* GraphQL */ `
  query ListPeabjPasswords(
    $filter: ModelPeabjPasswordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPeabjPasswords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        daPassword
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSkillGroup = /* GraphQL */ `
  query GetSkillGroup($id: ID!) {
    getSkillGroup(id: $id) {
      id
      name
      SkillModels {
        items {
          id
          name
          skillGroupID
          createdAt
          updatedAt
          skillModelCreatorId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSkillGroups = /* GraphQL */ `
  query ListSkillGroups(
    $filter: ModelSkillGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        SkillModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSkillModel = /* GraphQL */ `
  query GetSkillModel($id: ID!) {
    getSkillModel(id: $id) {
      id
      userDesiredSkillModels {
        items {
          id
          skillModelID
          publicUserInfoModelID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      name
      creator {
        id
        typename
        firstName
        userDesiredSkillModels {
          nextToken
          __typename
        }
        lastName
        year
        major
        bio
        userPossessedSkillModels {
          nextToken
          __typename
        }
        lastOpenedProgressTrackerChat
        photo
        schoolmodelID
        schoolModel {
          id
          domain
          name
          shortName
          logoImageURL
          city
          state
          country
          lat
          lon
          isAdultLevel
          createdAt
          updatedAt
          __typename
        }
        unlistedSchoolName
        lastActive
        messageModels {
          nextToken
          __typename
        }
        progressTrackerMessageModels {
          nextToken
          __typename
        }
        groupOfMessagesModels {
          nextToken
          __typename
        }
        connections {
          nextToken
          __typename
        }
        deviceToken
        channel
        concatedDesiredSkillIDs
        concatedPossessedSkillIDs
        dob
        isSchoolVerified
        isPhotoVerified
        lat
        lon
        progressTrackerID
        progressTracker {
          id
          name
          description
          ownerPuimID
          prototypePercent
          prototypeComment
          marketTestingPercent
          marketTestingComment
          productMarketFitPercent
          productMarketFitComment
          fundsPercent
          fundsComment
          goToMarketPercent
          goToMarketComment
          businessModalPercent
          businessModalComment
          growthPercent
          growthComment
          createdAt
          updatedAt
          owner
          __typename
        }
        progressTrackerInvitations {
          nextToken
          __typename
        }
        todos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        progressTrackerMembersId
        owner
        __typename
      }
      skillGroupID
      userPossessedSkillModels {
        items {
          id
          skillModelID
          publicUserInfoModelID
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      skillModelCreatorId
      __typename
    }
  }
`;
export const listSkillModels = /* GraphQL */ `
  query ListSkillModels(
    $filter: ModelSkillModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userDesiredSkillModels {
          nextToken
          __typename
        }
        name
        creator {
          id
          typename
          firstName
          lastName
          year
          major
          bio
          lastOpenedProgressTrackerChat
          photo
          schoolmodelID
          unlistedSchoolName
          lastActive
          deviceToken
          channel
          concatedDesiredSkillIDs
          concatedPossessedSkillIDs
          dob
          isSchoolVerified
          isPhotoVerified
          lat
          lon
          progressTrackerID
          createdAt
          updatedAt
          progressTrackerMembersId
          owner
          __typename
        }
        skillGroupID
        userPossessedSkillModels {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        skillModelCreatorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
