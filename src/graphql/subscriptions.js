/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onMessagesByRecID = /* GraphQL */ `
  subscription OnMessagesByRecID($recipientIDs: String!) {
    onMessagesByRecID(recipientIDs: $recipientIDs) {
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
export const onMessagesByProID = /* GraphQL */ `
  subscription OnMessagesByProID($progressTrackerID: String!) {
    onMessagesByProID(progressTrackerID: $progressTrackerID) {
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
export const onGommPuimByPuimID = /* GraphQL */ `
  subscription OnGommPuimByPuimID($publicUserInfoModelID: ID!) {
    onGommPuimByPuimID(publicUserInfoModelID: $publicUserInfoModelID) {
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
export const onCreatePublicUserInfoModel = /* GraphQL */ `
  subscription OnCreatePublicUserInfoModel($id: ID) {
    onCreatePublicUserInfoModel(id: $id) {
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
export const onUpdatePublicUserInfoModel = /* GraphQL */ `
  subscription OnUpdatePublicUserInfoModel($id: ID) {
    onUpdatePublicUserInfoModel(id: $id) {
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
export const onDeletePublicUserInfoModel = /* GraphQL */ `
  subscription OnDeletePublicUserInfoModel($id: ID) {
    onDeletePublicUserInfoModel(id: $id) {
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
export const onCreateReports = /* GraphQL */ `
  subscription OnCreateReports($filter: ModelSubscriptionReportsFilterInput) {
    onCreateReports(filter: $filter) {
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
export const onUpdateReports = /* GraphQL */ `
  subscription OnUpdateReports($filter: ModelSubscriptionReportsFilterInput) {
    onUpdateReports(filter: $filter) {
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
export const onDeleteReports = /* GraphQL */ `
  subscription OnDeleteReports($filter: ModelSubscriptionReportsFilterInput) {
    onDeleteReports(filter: $filter) {
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
export const onCreateReferral = /* GraphQL */ `
  subscription OnCreateReferral($filter: ModelSubscriptionReferralFilterInput) {
    onCreateReferral(filter: $filter) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReferral = /* GraphQL */ `
  subscription OnUpdateReferral($filter: ModelSubscriptionReferralFilterInput) {
    onUpdateReferral(filter: $filter) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReferral = /* GraphQL */ `
  subscription OnDeleteReferral($filter: ModelSubscriptionReferralFilterInput) {
    onDeleteReferral(filter: $filter) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHillaryClinton = /* GraphQL */ `
  subscription OnCreateHillaryClinton(
    $filter: ModelSubscriptionHillaryClintonFilterInput
  ) {
    onCreateHillaryClinton(filter: $filter) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHillaryClinton = /* GraphQL */ `
  subscription OnUpdateHillaryClinton(
    $filter: ModelSubscriptionHillaryClintonFilterInput
  ) {
    onUpdateHillaryClinton(filter: $filter) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHillaryClinton = /* GraphQL */ `
  subscription OnDeleteHillaryClinton(
    $filter: ModelSubscriptionHillaryClintonFilterInput
  ) {
    onDeleteHillaryClinton(filter: $filter) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateConnection = /* GraphQL */ `
  subscription OnCreateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onCreateConnection(filter: $filter) {
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
export const onUpdateConnection = /* GraphQL */ `
  subscription OnUpdateConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onUpdateConnection(filter: $filter) {
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
export const onDeleteConnection = /* GraphQL */ `
  subscription OnDeleteConnection(
    $filter: ModelSubscriptionConnectionFilterInput
  ) {
    onDeleteConnection(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onCreateMessage(filter: $filter, owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onUpdateMessage(filter: $filter, owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage(
    $filter: ModelSubscriptionMessageFilterInput
    $owner: String
  ) {
    onDeleteMessage(filter: $filter, owner: $owner) {
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
export const onCreateProgressTrackerMessage = /* GraphQL */ `
  subscription OnCreateProgressTrackerMessage(
    $filter: ModelSubscriptionProgressTrackerMessageFilterInput
    $owner: String
  ) {
    onCreateProgressTrackerMessage(filter: $filter, owner: $owner) {
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
export const onUpdateProgressTrackerMessage = /* GraphQL */ `
  subscription OnUpdateProgressTrackerMessage(
    $filter: ModelSubscriptionProgressTrackerMessageFilterInput
    $owner: String
  ) {
    onUpdateProgressTrackerMessage(filter: $filter, owner: $owner) {
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
export const onDeleteProgressTrackerMessage = /* GraphQL */ `
  subscription OnDeleteProgressTrackerMessage(
    $filter: ModelSubscriptionProgressTrackerMessageFilterInput
    $owner: String
  ) {
    onDeleteProgressTrackerMessage(filter: $filter, owner: $owner) {
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
export const onCreateSchoolModel = /* GraphQL */ `
  subscription OnCreateSchoolModel(
    $filter: ModelSubscriptionSchoolModelFilterInput
  ) {
    onCreateSchoolModel(filter: $filter) {
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
export const onUpdateSchoolModel = /* GraphQL */ `
  subscription OnUpdateSchoolModel(
    $filter: ModelSubscriptionSchoolModelFilterInput
  ) {
    onUpdateSchoolModel(filter: $filter) {
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
export const onDeleteSchoolModel = /* GraphQL */ `
  subscription OnDeleteSchoolModel(
    $filter: ModelSubscriptionSchoolModelFilterInput
  ) {
    onDeleteSchoolModel(filter: $filter) {
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
export const onCreateGroupOfMessagesModel = /* GraphQL */ `
  subscription OnCreateGroupOfMessagesModel(
    $filter: ModelSubscriptionGroupOfMessagesModelFilterInput
  ) {
    onCreateGroupOfMessagesModel(filter: $filter) {
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
export const onUpdateGroupOfMessagesModel = /* GraphQL */ `
  subscription OnUpdateGroupOfMessagesModel(
    $filter: ModelSubscriptionGroupOfMessagesModelFilterInput
  ) {
    onUpdateGroupOfMessagesModel(filter: $filter) {
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
export const onDeleteGroupOfMessagesModel = /* GraphQL */ `
  subscription OnDeleteGroupOfMessagesModel(
    $filter: ModelSubscriptionGroupOfMessagesModelFilterInput
  ) {
    onDeleteGroupOfMessagesModel(filter: $filter) {
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
export const onCreateGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  subscription OnCreateGroupOfMessagesModelPublicUserInfoModel(
    $filter: ModelSubscriptionGroupOfMessagesModelPublicUserInfoModelFilterInput
  ) {
    onCreateGroupOfMessagesModelPublicUserInfoModel(filter: $filter) {
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
export const onUpdateGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  subscription OnUpdateGroupOfMessagesModelPublicUserInfoModel(
    $filter: ModelSubscriptionGroupOfMessagesModelPublicUserInfoModelFilterInput
  ) {
    onUpdateGroupOfMessagesModelPublicUserInfoModel(filter: $filter) {
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
export const onDeleteGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  subscription OnDeleteGroupOfMessagesModelPublicUserInfoModel(
    $filter: ModelSubscriptionGroupOfMessagesModelPublicUserInfoModelFilterInput
  ) {
    onDeleteGroupOfMessagesModelPublicUserInfoModel(filter: $filter) {
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
export const onCreateProgressTrackerInvitation = /* GraphQL */ `
  subscription OnCreateProgressTrackerInvitation(
    $filter: ModelSubscriptionProgressTrackerInvitationFilterInput
    $owner: String
  ) {
    onCreateProgressTrackerInvitation(filter: $filter, owner: $owner) {
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
export const onUpdateProgressTrackerInvitation = /* GraphQL */ `
  subscription OnUpdateProgressTrackerInvitation(
    $filter: ModelSubscriptionProgressTrackerInvitationFilterInput
    $owner: String
  ) {
    onUpdateProgressTrackerInvitation(filter: $filter, owner: $owner) {
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
export const onDeleteProgressTrackerInvitation = /* GraphQL */ `
  subscription OnDeleteProgressTrackerInvitation(
    $filter: ModelSubscriptionProgressTrackerInvitationFilterInput
    $owner: String
  ) {
    onDeleteProgressTrackerInvitation(filter: $filter, owner: $owner) {
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
export const onCreateProgressTracker = /* GraphQL */ `
  subscription OnCreateProgressTracker(
    $filter: ModelSubscriptionProgressTrackerFilterInput
    $owner: String
  ) {
    onCreateProgressTracker(filter: $filter, owner: $owner) {
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
export const onUpdateProgressTracker = /* GraphQL */ `
  subscription OnUpdateProgressTracker(
    $filter: ModelSubscriptionProgressTrackerFilterInput
    $owner: String
  ) {
    onUpdateProgressTracker(filter: $filter, owner: $owner) {
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
export const onDeleteProgressTracker = /* GraphQL */ `
  subscription OnDeleteProgressTracker(
    $filter: ModelSubscriptionProgressTrackerFilterInput
    $owner: String
  ) {
    onDeleteProgressTracker(filter: $filter, owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
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
export const onCreateUserDesiredSkillModel = /* GraphQL */ `
  subscription OnCreateUserDesiredSkillModel(
    $filter: ModelSubscriptionUserDesiredSkillModelFilterInput
    $owner: String
  ) {
    onCreateUserDesiredSkillModel(filter: $filter, owner: $owner) {
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
export const onUpdateUserDesiredSkillModel = /* GraphQL */ `
  subscription OnUpdateUserDesiredSkillModel(
    $filter: ModelSubscriptionUserDesiredSkillModelFilterInput
    $owner: String
  ) {
    onUpdateUserDesiredSkillModel(filter: $filter, owner: $owner) {
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
export const onDeleteUserDesiredSkillModel = /* GraphQL */ `
  subscription OnDeleteUserDesiredSkillModel(
    $filter: ModelSubscriptionUserDesiredSkillModelFilterInput
    $owner: String
  ) {
    onDeleteUserDesiredSkillModel(filter: $filter, owner: $owner) {
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
export const onCreateUserPossessedSkillModel = /* GraphQL */ `
  subscription OnCreateUserPossessedSkillModel(
    $filter: ModelSubscriptionUserPossessedSkillModelFilterInput
    $owner: String
  ) {
    onCreateUserPossessedSkillModel(filter: $filter, owner: $owner) {
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
export const onUpdateUserPossessedSkillModel = /* GraphQL */ `
  subscription OnUpdateUserPossessedSkillModel(
    $filter: ModelSubscriptionUserPossessedSkillModelFilterInput
    $owner: String
  ) {
    onUpdateUserPossessedSkillModel(filter: $filter, owner: $owner) {
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
export const onDeleteUserPossessedSkillModel = /* GraphQL */ `
  subscription OnDeleteUserPossessedSkillModel(
    $filter: ModelSubscriptionUserPossessedSkillModelFilterInput
    $owner: String
  ) {
    onDeleteUserPossessedSkillModel(filter: $filter, owner: $owner) {
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
export const onCreatePeabjIsLive = /* GraphQL */ `
  subscription OnCreatePeabjIsLive(
    $filter: ModelSubscriptionPeabjIsLiveFilterInput
  ) {
    onCreatePeabjIsLive(filter: $filter) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeabjIsLive = /* GraphQL */ `
  subscription OnUpdatePeabjIsLive(
    $filter: ModelSubscriptionPeabjIsLiveFilterInput
  ) {
    onUpdatePeabjIsLive(filter: $filter) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeabjIsLive = /* GraphQL */ `
  subscription OnDeletePeabjIsLive(
    $filter: ModelSubscriptionPeabjIsLiveFilterInput
  ) {
    onDeletePeabjIsLive(filter: $filter) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePeabjPassword = /* GraphQL */ `
  subscription OnCreatePeabjPassword(
    $filter: ModelSubscriptionPeabjPasswordFilterInput
  ) {
    onCreatePeabjPassword(filter: $filter) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePeabjPassword = /* GraphQL */ `
  subscription OnUpdatePeabjPassword(
    $filter: ModelSubscriptionPeabjPasswordFilterInput
  ) {
    onUpdatePeabjPassword(filter: $filter) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePeabjPassword = /* GraphQL */ `
  subscription OnDeletePeabjPassword(
    $filter: ModelSubscriptionPeabjPasswordFilterInput
  ) {
    onDeletePeabjPassword(filter: $filter) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSkillGroup = /* GraphQL */ `
  subscription OnCreateSkillGroup(
    $filter: ModelSubscriptionSkillGroupFilterInput
  ) {
    onCreateSkillGroup(filter: $filter) {
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
export const onUpdateSkillGroup = /* GraphQL */ `
  subscription OnUpdateSkillGroup(
    $filter: ModelSubscriptionSkillGroupFilterInput
  ) {
    onUpdateSkillGroup(filter: $filter) {
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
export const onDeleteSkillGroup = /* GraphQL */ `
  subscription OnDeleteSkillGroup(
    $filter: ModelSubscriptionSkillGroupFilterInput
  ) {
    onDeleteSkillGroup(filter: $filter) {
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
export const onCreateSkillModel = /* GraphQL */ `
  subscription OnCreateSkillModel(
    $filter: ModelSubscriptionSkillModelFilterInput
  ) {
    onCreateSkillModel(filter: $filter) {
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
export const onUpdateSkillModel = /* GraphQL */ `
  subscription OnUpdateSkillModel(
    $filter: ModelSubscriptionSkillModelFilterInput
  ) {
    onUpdateSkillModel(filter: $filter) {
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
export const onDeleteSkillModel = /* GraphQL */ `
  subscription OnDeleteSkillModel(
    $filter: ModelSubscriptionSkillModelFilterInput
  ) {
    onDeleteSkillModel(filter: $filter) {
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
