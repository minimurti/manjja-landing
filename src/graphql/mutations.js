/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReports = /* GraphQL */ `
  mutation CreateReports(
    $input: CreateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    createReports(input: $input, condition: $condition) {
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
export const updateReports = /* GraphQL */ `
  mutation UpdateReports(
    $input: UpdateReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    updateReports(input: $input, condition: $condition) {
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
export const deleteReports = /* GraphQL */ `
  mutation DeleteReports(
    $input: DeleteReportsInput!
    $condition: ModelReportsConditionInput
  ) {
    deleteReports(input: $input, condition: $condition) {
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
export const createReferral = /* GraphQL */ `
  mutation CreateReferral(
    $input: CreateReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    createReferral(input: $input, condition: $condition) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReferral = /* GraphQL */ `
  mutation UpdateReferral(
    $input: UpdateReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    updateReferral(input: $input, condition: $condition) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReferral = /* GraphQL */ `
  mutation DeleteReferral(
    $input: DeleteReferralInput!
    $condition: ModelReferralConditionInput
  ) {
    deleteReferral(input: $input, condition: $condition) {
      id
      refMakerID
      spent
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeabjIsLive = /* GraphQL */ `
  mutation CreatePeabjIsLive(
    $input: CreatePeabjIsLiveInput!
    $condition: ModelPeabjIsLiveConditionInput
  ) {
    createPeabjIsLive(input: $input, condition: $condition) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeabjIsLive = /* GraphQL */ `
  mutation UpdatePeabjIsLive(
    $input: UpdatePeabjIsLiveInput!
    $condition: ModelPeabjIsLiveConditionInput
  ) {
    updatePeabjIsLive(input: $input, condition: $condition) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeabjIsLive = /* GraphQL */ `
  mutation DeletePeabjIsLive(
    $input: DeletePeabjIsLiveInput!
    $condition: ModelPeabjIsLiveConditionInput
  ) {
    deletePeabjIsLive(input: $input, condition: $condition) {
      id
      yes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPeabjPassword = /* GraphQL */ `
  mutation CreatePeabjPassword(
    $input: CreatePeabjPasswordInput!
    $condition: ModelPeabjPasswordConditionInput
  ) {
    createPeabjPassword(input: $input, condition: $condition) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePeabjPassword = /* GraphQL */ `
  mutation UpdatePeabjPassword(
    $input: UpdatePeabjPasswordInput!
    $condition: ModelPeabjPasswordConditionInput
  ) {
    updatePeabjPassword(input: $input, condition: $condition) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePeabjPassword = /* GraphQL */ `
  mutation DeletePeabjPassword(
    $input: DeletePeabjPasswordInput!
    $condition: ModelPeabjPasswordConditionInput
  ) {
    deletePeabjPassword(input: $input, condition: $condition) {
      id
      daPassword
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createJobListing = /* GraphQL */ `
  mutation CreateJobListing(
    $input: CreateJobListingInput!
    $condition: ModelJobListingConditionInput
  ) {
    createJobListing(input: $input, condition: $condition) {
      id
      title
      company
      location
      deadline
      description
      likelihood
      justification
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateJobListing = /* GraphQL */ `
  mutation UpdateJobListing(
    $input: UpdateJobListingInput!
    $condition: ModelJobListingConditionInput
  ) {
    updateJobListing(input: $input, condition: $condition) {
      id
      title
      company
      location
      deadline
      description
      likelihood
      justification
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteJobListing = /* GraphQL */ `
  mutation DeleteJobListing(
    $input: DeleteJobListingInput!
    $condition: ModelJobListingConditionInput
  ) {
    deleteJobListing(input: $input, condition: $condition) {
      id
      title
      company
      location
      deadline
      description
      likelihood
      justification
      url
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateHillaryClinton = /* GraphQL */ `
  mutation UpdateHillaryClinton(
    $input: UpdateHillaryClintonInput!
    $condition: ModelHillaryClintonConditionInput
  ) {
    updateHillaryClinton(input: $input, condition: $condition) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteHillaryClinton = /* GraphQL */ `
  mutation DeleteHillaryClinton(
    $input: DeleteHillaryClintonInput!
    $condition: ModelHillaryClintonConditionInput
  ) {
    deleteHillaryClinton(input: $input, condition: $condition) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIntalentSurvey = /* GraphQL */ `
  mutation UpdateIntalentSurvey(
    $input: UpdateIntalentSurveyInput!
    $condition: ModelIntalentSurveyConditionInput
  ) {
    updateIntalentSurvey(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      schoolYear
      yearsExp
      major
      interestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIntalentSurvey = /* GraphQL */ `
  mutation DeleteIntalentSurvey(
    $input: DeleteIntalentSurveyInput!
    $condition: ModelIntalentSurveyConditionInput
  ) {
    deleteIntalentSurvey(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      schoolYear
      yearsExp
      major
      interestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createConnection = /* GraphQL */ `
  mutation CreateConnection(
    $input: CreateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    createConnection(input: $input, condition: $condition) {
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
export const updateConnection = /* GraphQL */ `
  mutation UpdateConnection(
    $input: UpdateConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    updateConnection(input: $input, condition: $condition) {
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
export const deleteConnection = /* GraphQL */ `
  mutation DeleteConnection(
    $input: DeleteConnectionInput!
    $condition: ModelConnectionConditionInput
  ) {
    deleteConnection(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createProgressTrackerMessage = /* GraphQL */ `
  mutation CreateProgressTrackerMessage(
    $input: CreateProgressTrackerMessageInput!
    $condition: ModelProgressTrackerMessageConditionInput
  ) {
    createProgressTrackerMessage(input: $input, condition: $condition) {
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
export const updateProgressTrackerMessage = /* GraphQL */ `
  mutation UpdateProgressTrackerMessage(
    $input: UpdateProgressTrackerMessageInput!
    $condition: ModelProgressTrackerMessageConditionInput
  ) {
    updateProgressTrackerMessage(input: $input, condition: $condition) {
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
export const deleteProgressTrackerMessage = /* GraphQL */ `
  mutation DeleteProgressTrackerMessage(
    $input: DeleteProgressTrackerMessageInput!
    $condition: ModelProgressTrackerMessageConditionInput
  ) {
    deleteProgressTrackerMessage(input: $input, condition: $condition) {
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
export const createSchoolModel = /* GraphQL */ `
  mutation CreateSchoolModel(
    $input: CreateSchoolModelInput!
    $condition: ModelSchoolModelConditionInput
  ) {
    createSchoolModel(input: $input, condition: $condition) {
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
export const updateSchoolModel = /* GraphQL */ `
  mutation UpdateSchoolModel(
    $input: UpdateSchoolModelInput!
    $condition: ModelSchoolModelConditionInput
  ) {
    updateSchoolModel(input: $input, condition: $condition) {
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
export const deleteSchoolModel = /* GraphQL */ `
  mutation DeleteSchoolModel(
    $input: DeleteSchoolModelInput!
    $condition: ModelSchoolModelConditionInput
  ) {
    deleteSchoolModel(input: $input, condition: $condition) {
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
export const createSkillGroup = /* GraphQL */ `
  mutation CreateSkillGroup(
    $input: CreateSkillGroupInput!
    $condition: ModelSkillGroupConditionInput
  ) {
    createSkillGroup(input: $input, condition: $condition) {
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
export const updateSkillGroup = /* GraphQL */ `
  mutation UpdateSkillGroup(
    $input: UpdateSkillGroupInput!
    $condition: ModelSkillGroupConditionInput
  ) {
    updateSkillGroup(input: $input, condition: $condition) {
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
export const deleteSkillGroup = /* GraphQL */ `
  mutation DeleteSkillGroup(
    $input: DeleteSkillGroupInput!
    $condition: ModelSkillGroupConditionInput
  ) {
    deleteSkillGroup(input: $input, condition: $condition) {
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
export const createGroupOfMessagesModel = /* GraphQL */ `
  mutation CreateGroupOfMessagesModel(
    $input: CreateGroupOfMessagesModelInput!
    $condition: ModelGroupOfMessagesModelConditionInput
  ) {
    createGroupOfMessagesModel(input: $input, condition: $condition) {
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
export const updateGroupOfMessagesModel = /* GraphQL */ `
  mutation UpdateGroupOfMessagesModel(
    $input: UpdateGroupOfMessagesModelInput!
    $condition: ModelGroupOfMessagesModelConditionInput
  ) {
    updateGroupOfMessagesModel(input: $input, condition: $condition) {
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
export const deleteGroupOfMessagesModel = /* GraphQL */ `
  mutation DeleteGroupOfMessagesModel(
    $input: DeleteGroupOfMessagesModelInput!
    $condition: ModelGroupOfMessagesModelConditionInput
  ) {
    deleteGroupOfMessagesModel(input: $input, condition: $condition) {
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
export const createGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  mutation CreateGroupOfMessagesModelPublicUserInfoModel(
    $input: CreateGroupOfMessagesModelPublicUserInfoModelInput!
    $condition: ModelGroupOfMessagesModelPublicUserInfoModelConditionInput
  ) {
    createGroupOfMessagesModelPublicUserInfoModel(
      input: $input
      condition: $condition
    ) {
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
export const updateGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  mutation UpdateGroupOfMessagesModelPublicUserInfoModel(
    $input: UpdateGroupOfMessagesModelPublicUserInfoModelInput!
    $condition: ModelGroupOfMessagesModelPublicUserInfoModelConditionInput
  ) {
    updateGroupOfMessagesModelPublicUserInfoModel(
      input: $input
      condition: $condition
    ) {
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
export const deleteGroupOfMessagesModelPublicUserInfoModel = /* GraphQL */ `
  mutation DeleteGroupOfMessagesModelPublicUserInfoModel(
    $input: DeleteGroupOfMessagesModelPublicUserInfoModelInput!
    $condition: ModelGroupOfMessagesModelPublicUserInfoModelConditionInput
  ) {
    deleteGroupOfMessagesModelPublicUserInfoModel(
      input: $input
      condition: $condition
    ) {
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
export const createPublicUserInfoModel = /* GraphQL */ `
  mutation CreatePublicUserInfoModel(
    $input: CreatePublicUserInfoModelInput!
    $condition: ModelPublicUserInfoModelConditionInput
  ) {
    createPublicUserInfoModel(input: $input, condition: $condition) {
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
export const updatePublicUserInfoModel = /* GraphQL */ `
  mutation UpdatePublicUserInfoModel(
    $input: UpdatePublicUserInfoModelInput!
    $condition: ModelPublicUserInfoModelConditionInput
  ) {
    updatePublicUserInfoModel(input: $input, condition: $condition) {
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
export const deletePublicUserInfoModel = /* GraphQL */ `
  mutation DeletePublicUserInfoModel(
    $input: DeletePublicUserInfoModelInput!
    $condition: ModelPublicUserInfoModelConditionInput
  ) {
    deletePublicUserInfoModel(input: $input, condition: $condition) {
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
export const createProgressTrackerInvitation = /* GraphQL */ `
  mutation CreateProgressTrackerInvitation(
    $input: CreateProgressTrackerInvitationInput!
    $condition: ModelProgressTrackerInvitationConditionInput
  ) {
    createProgressTrackerInvitation(input: $input, condition: $condition) {
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
export const updateProgressTrackerInvitation = /* GraphQL */ `
  mutation UpdateProgressTrackerInvitation(
    $input: UpdateProgressTrackerInvitationInput!
    $condition: ModelProgressTrackerInvitationConditionInput
  ) {
    updateProgressTrackerInvitation(input: $input, condition: $condition) {
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
export const deleteProgressTrackerInvitation = /* GraphQL */ `
  mutation DeleteProgressTrackerInvitation(
    $input: DeleteProgressTrackerInvitationInput!
    $condition: ModelProgressTrackerInvitationConditionInput
  ) {
    deleteProgressTrackerInvitation(input: $input, condition: $condition) {
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
export const createProgressTracker = /* GraphQL */ `
  mutation CreateProgressTracker(
    $input: CreateProgressTrackerInput!
    $condition: ModelProgressTrackerConditionInput
  ) {
    createProgressTracker(input: $input, condition: $condition) {
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
export const updateProgressTracker = /* GraphQL */ `
  mutation UpdateProgressTracker(
    $input: UpdateProgressTrackerInput!
    $condition: ModelProgressTrackerConditionInput
  ) {
    updateProgressTracker(input: $input, condition: $condition) {
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
export const deleteProgressTracker = /* GraphQL */ `
  mutation DeleteProgressTracker(
    $input: DeleteProgressTrackerInput!
    $condition: ModelProgressTrackerConditionInput
  ) {
    deleteProgressTracker(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createUserDesiredSkillModel = /* GraphQL */ `
  mutation CreateUserDesiredSkillModel(
    $input: CreateUserDesiredSkillModelInput!
    $condition: ModelUserDesiredSkillModelConditionInput
  ) {
    createUserDesiredSkillModel(input: $input, condition: $condition) {
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
export const updateUserDesiredSkillModel = /* GraphQL */ `
  mutation UpdateUserDesiredSkillModel(
    $input: UpdateUserDesiredSkillModelInput!
    $condition: ModelUserDesiredSkillModelConditionInput
  ) {
    updateUserDesiredSkillModel(input: $input, condition: $condition) {
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
export const deleteUserDesiredSkillModel = /* GraphQL */ `
  mutation DeleteUserDesiredSkillModel(
    $input: DeleteUserDesiredSkillModelInput!
    $condition: ModelUserDesiredSkillModelConditionInput
  ) {
    deleteUserDesiredSkillModel(input: $input, condition: $condition) {
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
export const createUserPossessedSkillModel = /* GraphQL */ `
  mutation CreateUserPossessedSkillModel(
    $input: CreateUserPossessedSkillModelInput!
    $condition: ModelUserPossessedSkillModelConditionInput
  ) {
    createUserPossessedSkillModel(input: $input, condition: $condition) {
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
export const updateUserPossessedSkillModel = /* GraphQL */ `
  mutation UpdateUserPossessedSkillModel(
    $input: UpdateUserPossessedSkillModelInput!
    $condition: ModelUserPossessedSkillModelConditionInput
  ) {
    updateUserPossessedSkillModel(input: $input, condition: $condition) {
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
export const deleteUserPossessedSkillModel = /* GraphQL */ `
  mutation DeleteUserPossessedSkillModel(
    $input: DeleteUserPossessedSkillModelInput!
    $condition: ModelUserPossessedSkillModelConditionInput
  ) {
    deleteUserPossessedSkillModel(input: $input, condition: $condition) {
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
export const createSkillModel = /* GraphQL */ `
  mutation CreateSkillModel(
    $input: CreateSkillModelInput!
    $condition: ModelSkillModelConditionInput
  ) {
    createSkillModel(input: $input, condition: $condition) {
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
export const updateSkillModel = /* GraphQL */ `
  mutation UpdateSkillModel(
    $input: UpdateSkillModelInput!
    $condition: ModelSkillModelConditionInput
  ) {
    updateSkillModel(input: $input, condition: $condition) {
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
export const deleteSkillModel = /* GraphQL */ `
  mutation DeleteSkillModel(
    $input: DeleteSkillModelInput!
    $condition: ModelSkillModelConditionInput
  ) {
    deleteSkillModel(input: $input, condition: $condition) {
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
export const createHillaryClinton = /* GraphQL */ `
  mutation CreateHillaryClinton(
    $input: CreateHillaryClintonInput!
    $condition: ModelHillaryClintonConditionInput
  ) {
    createHillaryClinton(input: $input, condition: $condition) {
      id
      email
      deviceToken
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createIntalentSurvey = /* GraphQL */ `
  mutation CreateIntalentSurvey(
    $input: CreateIntalentSurveyInput!
    $condition: ModelIntalentSurveyConditionInput
  ) {
    createIntalentSurvey(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      phoneNumber
      schoolYear
      yearsExp
      major
      interestReason
      createdAt
      updatedAt
      __typename
    }
  }
`;
