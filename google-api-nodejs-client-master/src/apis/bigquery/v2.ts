/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  OAuth2Client,
  JWT,
  Compute,
  UserRefreshClient,
} from 'google-auth-library';
import {
  GoogleConfigurable,
  createAPIRequest,
  MethodOptions,
  GlobalOptions,
  BodyResponseCallback,
  APIRequestContext,
} from 'googleapis-common';
import {GaxiosPromise} from 'gaxios';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace bigquery_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauth_token?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * BigQuery API
   *
   * A data platform for customers to create, manage, share and query data.
   *
   * @example
   * const {google} = require('googleapis');
   * const bigquery = google.bigquery('v2');
   *
   * @namespace bigquery
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Bigquery
   */
  export class Bigquery {
    context: APIRequestContext;
    datasets: Resource$Datasets;
    jobs: Resource$Jobs;
    models: Resource$Models;
    projects: Resource$Projects;
    routines: Resource$Routines;
    tabledata: Resource$Tabledata;
    tables: Resource$Tables;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.datasets = new Resource$Datasets(this.context);
      this.jobs = new Resource$Jobs(this.context);
      this.models = new Resource$Models(this.context);
      this.projects = new Resource$Projects(this.context);
      this.routines = new Resource$Routines(this.context);
      this.tabledata = new Resource$Tabledata(this.context);
      this.tables = new Resource$Tables(this.context);
    }
  }

  /**
   * Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows.
   */
  export interface Schema$AggregateClassificationMetrics {
    /**
     * Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric.
     */
    accuracy?: number | null;
    /**
     * The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric.
     */
    f1Score?: number | null;
    /**
     * Logarithmic Loss. For multiclass this is a macro-averaged metric.
     */
    logLoss?: number | null;
    /**
     * Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier.
     */
    precision?: number | null;
    /**
     * Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric.
     */
    recall?: number | null;
    /**
     * Area Under a ROC Curve. For multiclass this is a macro-averaged metric.
     */
    rocAuc?: number | null;
    /**
     * Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold.
     */
    threshold?: number | null;
  }
  /**
   * Input/output argument of a function or a stored procedure.
   */
  export interface Schema$Argument {
    /**
     * Optional. Defaults to FIXED_TYPE.
     */
    argumentKind?: string | null;
    /**
     * Required unless argument_kind = ANY_TYPE.
     */
    dataType?: Schema$StandardSqlDataType;
    /**
     * Optional. Specifies whether the argument is input or output. Can be set for procedures only.
     */
    mode?: string | null;
    /**
     * Optional. The name of this argument. Can be absent for function return argument.
     */
    name?: string | null;
  }
  export interface Schema$BigQueryModelTraining {
    /**
     * [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress.
     */
    currentIteration?: number | null;
    /**
     * [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the input query. The actual total number of iterations may be less than this number due to early stop.
     */
    expectedTotalIterations?: string | null;
  }
  export interface Schema$BigtableColumn {
    /**
     * [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. &#39;encoding&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;encoding&#39; is set at both levels.
     */
    encoding?: string | null;
    /**
     * [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.
     */
    fieldName?: string | null;
    /**
     * [Optional] If this is set, only the latest version of value in this column are exposed. &#39;onlyReadLatest&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;onlyReadLatest&#39; is set at both levels.
     */
    onlyReadLatest?: boolean | null;
    /**
     * [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name.
     */
    qualifierEncoded?: string | null;
    qualifierString?: string | null;
    /**
     * [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. &#39;type&#39; can also be set at the column family level. However, the setting at this level takes precedence if &#39;type&#39; is set at both levels.
     */
    type?: string | null;
  }
  export interface Schema$BigtableColumnFamily {
    /**
     * [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field.
     */
    columns?: Schema$BigtableColumn[];
    /**
     * [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying an encoding for it.
     */
    encoding?: string | null;
    /**
     * Identifier of the column family.
     */
    familyId?: string | null;
    /**
     * [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying a different setting for that column.
     */
    onlyReadLatest?: boolean | null;
    /**
     * [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that column in &#39;columns&#39; and specifying a type for it.
     */
    type?: string | null;
  }
  export interface Schema$BigtableOptions {
    /**
     * [Optional] List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the &#39;type&#39; field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable.
     */
    columnFamilies?: Schema$BigtableColumnFamily[];
    /**
     * [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
     */
    ignoreUnspecifiedColumnFamilies?: boolean | null;
    /**
     * [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.
     */
    readRowkeyAsString?: boolean | null;
  }
  /**
   * Evaluation metrics for binary classification/classifier models.
   */
  export interface Schema$BinaryClassificationMetrics {
    /**
     * Aggregate classification metrics.
     */
    aggregateClassificationMetrics?: Schema$AggregateClassificationMetrics;
    /**
     * Binary confusion matrix at multiple thresholds.
     */
    binaryConfusionMatrixList?: Schema$BinaryConfusionMatrix[];
    /**
     * Label representing the negative class.
     */
    negativeLabel?: string | null;
    /**
     * Label representing the positive class.
     */
    positiveLabel?: string | null;
  }
  /**
   * Confusion matrix for binary classification models.
   */
  export interface Schema$BinaryConfusionMatrix {
    /**
     * The fraction of predictions given the correct label.
     */
    accuracy?: number | null;
    /**
     * The equally weighted average of recall and precision.
     */
    f1Score?: number | null;
    /**
     * Number of false samples predicted as false.
     */
    falseNegatives?: string | null;
    /**
     * Number of false samples predicted as true.
     */
    falsePositives?: string | null;
    /**
     * Threshold value used when computing each of the following metric.
     */
    positiveClassThreshold?: number | null;
    /**
     * The fraction of actual positive predictions that had positive actual labels.
     */
    precision?: number | null;
    /**
     * The fraction of actual positive labels that were given a positive prediction.
     */
    recall?: number | null;
    /**
     * Number of true samples predicted as false.
     */
    trueNegatives?: string | null;
    /**
     * Number of true samples predicted as true.
     */
    truePositives?: string | null;
  }
  export interface Schema$BqmlIterationResult {
    /**
     * [Output-only, Beta] Time taken to run the training iteration in milliseconds.
     */
    durationMs?: string | null;
    /**
     * [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with input data size less than 500 rows.
     */
    evalLoss?: number | null;
    /**
     * [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run.
     */
    index?: number | null;
    /**
     * [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if learn_rate_strategy option is not constant.
     */
    learnRate?: number | null;
    /**
     * [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function is defined by model type.
     */
    trainingLoss?: number | null;
  }
  export interface Schema$BqmlTrainingRun {
    /**
     * [Output-only, Beta] List of each iteration results.
     */
    iterationResults?: Schema$BqmlIterationResult[];
    /**
     * [Output-only, Beta] Training run start time in milliseconds since the epoch.
     */
    startTime?: string | null;
    /**
     * [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user.
     */
    state?: string | null;
    /**
     * [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run.
     */
    trainingOptions?: {
      l1Reg?: number;
      maxIteration?: string;
      learnRate?: number;
      minRelProgress?: number;
      l2Reg?: number;
      learnRateStrategy?: string;
      warmStart?: boolean;
      lineSearchInitLearnRate?: number;
      earlyStop?: boolean;
    } | null;
  }
  /**
   * Representative value of a categorical feature.
   */
  export interface Schema$CategoricalValue {
    /**
     * Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category &quot;_OTHER_&quot; and count as aggregate counts of remaining categories.
     */
    categoryCounts?: Schema$CategoryCount[];
  }
  /**
   * Represents the count of a single category within the cluster.
   */
  export interface Schema$CategoryCount {
    /**
     * The name of category.
     */
    category?: string | null;
    /**
     * The count of training samples matching the category within the cluster.
     */
    count?: string | null;
  }
  /**
   * Message containing the information about one cluster.
   */
  export interface Schema$Cluster {
    /**
     * Centroid id.
     */
    centroidId?: string | null;
    /**
     * Count of training data rows that were assigned to this cluster.
     */
    count?: string | null;
    /**
     * Values of highly variant features for this cluster.
     */
    featureValues?: Schema$FeatureValue[];
  }
  /**
   * Information about a single cluster for clustering model.
   */
  export interface Schema$ClusterInfo {
    /**
     * Centroid id.
     */
    centroidId?: string | null;
    /**
     * Cluster radius, the average distance from centroid to each point assigned to the cluster.
     */
    clusterRadius?: number | null;
    /**
     * Cluster size, the total number of points assigned to the cluster.
     */
    clusterSize?: string | null;
  }
  export interface Schema$Clustering {
    /**
     * [Repeated] One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. When you cluster a table using multiple columns, the order of columns you specify is important. The order of the specified columns determines the sort order of the data.
     */
    fields?: string[] | null;
  }
  /**
   * Evaluation metrics for clustering models.
   */
  export interface Schema$ClusteringMetrics {
    /**
     * [Beta] Information for all clusters.
     */
    clusters?: Schema$Cluster[];
    /**
     * Davies-Bouldin index.
     */
    daviesBouldinIndex?: number | null;
    /**
     * Mean of squared distances between each sample to its cluster centroid.
     */
    meanSquaredDistance?: number | null;
  }
  /**
   * Confusion matrix for multi-class classification models.
   */
  export interface Schema$ConfusionMatrix {
    /**
     * Confidence threshold used when computing the entries of the confusion matrix.
     */
    confidenceThreshold?: number | null;
    /**
     * One row per actual label.
     */
    rows?: Schema$Row[];
  }
  export interface Schema$CsvOptions {
    /**
     * [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
     */
    allowJaggedRows?: boolean | null;
    /**
     * [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
     */
    allowQuotedNewlines?: boolean | null;
    /**
     * [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
     */
    encoding?: string | null;
    /**
     * [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence &quot;\t&quot; to specify a tab separator. The default value is a comma (&#39;,&#39;).
     */
    fieldDelimiter?: string | null;
    /**
     * [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote (&#39;&quot;&#39;). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
     */
    quote?: string | null;
    /**
     * [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
     */
    skipLeadingRows?: string | null;
  }
  export interface Schema$Dataset {
    /**
     * [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER;
     */
    access?: Array<{
      role?: string;
      view?: Schema$TableReference;
      groupByEmail?: string;
      domain?: string;
      userByEmail?: string;
      iamMember?: string;
      specialGroup?: string;
    }> | null;
    /**
     * [Output-only] The time when this dataset was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * [Required] A reference that identifies the dataset.
     */
    datasetReference?: Schema$DatasetReference;
    defaultEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property.
     */
    defaultPartitionExpirationMs?: string | null;
    /**
     * [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table&#39;s expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property.
     */
    defaultTableExpirationMs?: string | null;
    /**
     * [Optional] A user-friendly description of the dataset.
     */
    description?: string | null;
    /**
     * [Output-only] A hash of the resource.
     */
    etag?: string | null;
    /**
     * [Optional] A descriptive name for the dataset.
     */
    friendlyName?: string | null;
    /**
     * [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field.
     */
    id?: string | null;
    /**
     * [Output-only] The resource type.
     */
    kind?: string | null;
    /**
     * The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information.
     */
    labels?: {[key: string]: string} | null;
    /**
     * [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations.
     */
    location?: string | null;
    /**
     * [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource.
     */
    selfLink?: string | null;
  }
  export interface Schema$DatasetList {
    /**
     * An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project.
     */
    datasets?: Array<{
      datasetReference?: Schema$DatasetReference;
      id?: string;
      location?: string;
      friendlyName?: string;
      kind?: string;
      labels?: {[key: string]: string};
    }> | null;
    /**
     * A hash value of the results page. You can use this property to determine if the page has changed since the last request.
     */
    etag?: string | null;
    /**
     * The list type. This property always returns the value &quot;bigquery#datasetList&quot;.
     */
    kind?: string | null;
    /**
     * A token that can be used to request the next results page. This property is omitted on the final results page.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$DatasetReference {
    /**
     * [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    datasetId?: string | null;
    /**
     * [Optional] The ID of the project containing this dataset.
     */
    projectId?: string | null;
  }
  export interface Schema$DestinationTableProperties {
    /**
     * [Optional] The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail.
     */
    description?: string | null;
    /**
     * [Optional] The friendly name for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current friendly name is provided, the job will fail.
     */
    friendlyName?: string | null;
    /**
     * [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail.
     */
    labels?: {[key: string]: string} | null;
  }
  export interface Schema$EncryptionConfiguration {
    /**
     * [Optional] Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key.
     */
    kmsKeyName?: string | null;
  }
  /**
   * A single entry in the confusion matrix.
   */
  export interface Schema$Entry {
    /**
     * Number of items being predicted as this label.
     */
    itemCount?: string | null;
    /**
     * The predicted label. For confidence_threshold &gt; 0, we will also add an entry indicating the number of items under the confidence threshold.
     */
    predictedLabel?: string | null;
  }
  export interface Schema$ErrorProto {
    /**
     * Debugging information. This property is internal to Google and should not be used.
     */
    debugInfo?: string | null;
    /**
     * Specifies where the error occurred, if present.
     */
    location?: string | null;
    /**
     * A human-readable description of the error.
     */
    message?: string | null;
    /**
     * A short error code that summarizes the error.
     */
    reason?: string | null;
  }
  /**
   * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
   */
  export interface Schema$EvaluationMetrics {
    /**
     * Populated for binary classification/classifier models.
     */
    binaryClassificationMetrics?: Schema$BinaryClassificationMetrics;
    /**
     * Populated for clustering models.
     */
    clusteringMetrics?: Schema$ClusteringMetrics;
    /**
     * Populated for multi-class classification/classifier models.
     */
    multiClassClassificationMetrics?: Schema$MultiClassClassificationMetrics;
    /**
     * Populated for regression models and explicit feedback type matrix factorization models.
     */
    regressionMetrics?: Schema$RegressionMetrics;
  }
  export interface Schema$ExplainQueryStage {
    /**
     * Number of parallel input segments completed.
     */
    completedParallelInputs?: string | null;
    /**
     * Milliseconds the average shard spent on CPU-bound tasks.
     */
    computeMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent on CPU-bound tasks.
     */
    computeMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent on CPU-bound tasks.
     */
    computeRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent on CPU-bound tasks.
     */
    computeRatioMax?: number | null;
    /**
     * Stage end time represented as milliseconds since epoch.
     */
    endMs?: string | null;
    /**
     * Unique ID for stage within plan.
     */
    id?: string | null;
    /**
     * IDs for stages that are inputs to this stage.
     */
    inputStages?: string[] | null;
    /**
     * Human-readable name for stage.
     */
    name?: string | null;
    /**
     * Number of parallel input segments to be processed.
     */
    parallelInputs?: string | null;
    /**
     * Milliseconds the average shard spent reading input.
     */
    readMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent reading input.
     */
    readMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent reading input.
     */
    readRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent reading input.
     */
    readRatioMax?: number | null;
    /**
     * Number of records read into the stage.
     */
    recordsRead?: string | null;
    /**
     * Number of records written by the stage.
     */
    recordsWritten?: string | null;
    /**
     * Total number of bytes written to shuffle.
     */
    shuffleOutputBytes?: string | null;
    /**
     * Total number of bytes written to shuffle and spilled to disk.
     */
    shuffleOutputBytesSpilled?: string | null;
    /**
     * Stage start time represented as milliseconds since epoch.
     */
    startMs?: string | null;
    /**
     * Current status for the stage.
     */
    status?: string | null;
    /**
     * List of operations within the stage in dependency order (approximately chronological).
     */
    steps?: Schema$ExplainQueryStep[];
    /**
     * Milliseconds the average shard spent waiting to be scheduled.
     */
    waitMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent waiting to be scheduled.
     */
    waitMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent waiting to be scheduled.
     */
    waitRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent waiting to be scheduled.
     */
    waitRatioMax?: number | null;
    /**
     * Milliseconds the average shard spent on writing output.
     */
    writeMsAvg?: string | null;
    /**
     * Milliseconds the slowest shard spent on writing output.
     */
    writeMsMax?: string | null;
    /**
     * Relative amount of time the average shard spent on writing output.
     */
    writeRatioAvg?: number | null;
    /**
     * Relative amount of time the slowest shard spent on writing output.
     */
    writeRatioMax?: number | null;
  }
  export interface Schema$ExplainQueryStep {
    /**
     * Machine-readable operation type.
     */
    kind?: string | null;
    /**
     * Human-readable stage descriptions.
     */
    substeps?: string[] | null;
  }
  export interface Schema$ExternalDataConfiguration {
    /**
     * Try to detect schema and format options automatically. Any option specified explicitly will be honored.
     */
    autodetect?: boolean | null;
    /**
     * [Optional] Additional options if sourceFormat is set to BIGTABLE.
     */
    bigtableOptions?: Schema$BigtableOptions;
    /**
     * [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
     */
    compression?: string | null;
    /**
     * Additional properties to set if sourceFormat is set to CSV.
     */
    csvOptions?: Schema$CsvOptions;
    /**
     * [Optional] Additional options if sourceFormat is set to GOOGLE_SHEETS.
     */
    googleSheetsOptions?: Schema$GoogleSheetsOptions;
    /**
     * [Optional, Trusted Tester] If hive partitioning is enabled, which mode to use. Two modes are supported: - AUTO: automatically infer partition key name(s) and type(s). - STRINGS: automatic infer partition key name(s). All types are strings. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error. Note: this setting is in the process of being deprecated in favor of hivePartitioningOptions.
     */
    hivePartitioningMode?: string | null;
    /**
     * [Optional, Trusted Tester] Options to configure hive partitioning support.
     */
    hivePartitioningOptions?: Schema$HivePartitioningOptions;
    /**
     * [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don&#39;t match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored.
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats.
     */
    maxBadRecords?: number | null;
    /**
     * [Optional] The schema for the data. Schema is required for CSV and JSON formats. Schema is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats.
     */
    schema?: Schema$TableSchema;
    /**
     * [Required] The data format. For CSV files, specify &quot;CSV&quot;. For Google sheets, specify &quot;GOOGLE_SHEETS&quot;. For newline-delimited JSON, specify &quot;NEWLINE_DELIMITED_JSON&quot;. For Avro files, specify &quot;AVRO&quot;. For Google Cloud Datastore backups, specify &quot;DATASTORE_BACKUP&quot;. [Beta] For Google Cloud Bigtable, specify &quot;BIGTABLE&quot;.
     */
    sourceFormat?: string | null;
    /**
     * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one &#39;*&#39; wildcard character and it must come after the &#39;bucket&#39; name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the &#39;*&#39; wildcard character is not allowed.
     */
    sourceUris?: string[] | null;
  }
  /**
   * Representative value of a single feature within the cluster.
   */
  export interface Schema$FeatureValue {
    /**
     * The categorical feature value.
     */
    categoricalValue?: Schema$CategoricalValue;
    /**
     * The feature column name.
     */
    featureColumn?: string | null;
    /**
     * The numerical feature value. This is the centroid value for this feature.
     */
    numericalValue?: number | null;
  }
  export interface Schema$GetQueryResultsResponse {
    /**
     * Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
     */
    errors?: Schema$ErrorProto[];
    /**
     * A hash of this response.
     */
    etag?: string | null;
    /**
     * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
     */
    jobComplete?: boolean | null;
    /**
     * Reference to the BigQuery Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
     */
    jobReference?: Schema$JobReference;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * A token used for paging results.
     */
    pageToken?: string | null;
    /**
     * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully.
     */
    rows?: Schema$TableRow[];
    /**
     * The schema of the results. Present only when the query completes successfully.
     */
    schema?: Schema$TableSchema;
    /**
     * The total number of bytes processed for this query.
     */
    totalBytesProcessed?: string | null;
    /**
     * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully.
     */
    totalRows?: string | null;
  }
  export interface Schema$GetServiceAccountResponse {
    /**
     * The service account email address.
     */
    email?: string | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
  }
  export interface Schema$GoogleSheetsOptions {
    /**
     * [Optional] Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20
     */
    range?: string | null;
    /**
     * [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N &gt; 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema.
     */
    skipLeadingRows?: string | null;
  }
  export interface Schema$HivePartitioningOptions {
    /**
     * [Optional, Trusted Tester] When set, what mode of hive partitioning to use when reading data. Two modes are supported. (1) AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All types are interpreted as strings. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported types include: AVRO, CSV, JSON, ORC and Parquet.
     */
    mode?: string | null;
    /**
     * [Optional, Trusted Tester] When hive partition detection is requested, a common prefix for all source uris should be supplied. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/ (trailing slash does not matter).
     */
    sourceUriPrefix?: string | null;
  }
  /**
   * Information about a single iteration of the training run.
   */
  export interface Schema$IterationResult {
    /**
     * Information about top clusters for clustering models.
     */
    clusterInfos?: Schema$ClusterInfo[];
    /**
     * Time taken to run the iteration in milliseconds.
     */
    durationMs?: string | null;
    /**
     * Loss computed on the eval data at the end of iteration.
     */
    evalLoss?: number | null;
    /**
     * Index of the iteration, 0 based.
     */
    index?: number | null;
    /**
     * Learn rate used for this iteration.
     */
    learnRate?: number | null;
    /**
     * Loss computed on the training data at the end of iteration.
     */
    trainingLoss?: number | null;
  }
  export interface Schema$Job {
    /**
     * [Required] Describes the job configuration.
     */
    configuration?: Schema$JobConfiguration;
    /**
     * [Output-only] A hash of this resource.
     */
    etag?: string | null;
    /**
     * [Output-only] Opaque ID field of the job
     */
    id?: string | null;
    /**
     * [Optional] Reference describing the unique-per-user name of the job.
     */
    jobReference?: Schema$JobReference;
    /**
     * [Output-only] The type of the resource.
     */
    kind?: string | null;
    /**
     * [Output-only] A URL that can be used to access this resource again.
     */
    selfLink?: string | null;
    /**
     * [Output-only] Information about the job, including starting time and ending time of the job.
     */
    statistics?: Schema$JobStatistics;
    /**
     * [Output-only] The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
     */
    status?: Schema$JobStatus;
    /**
     * [Output-only] Email address of the user who ran the job.
     */
    user_email?: string | null;
  }
  export interface Schema$JobCancelResponse {
    /**
     * The final state of the job.
     */
    job?: Schema$Job;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
  }
  export interface Schema$JobConfiguration {
    /**
     * [Pick one] Copies a table.
     */
    copy?: Schema$JobConfigurationTableCopy;
    /**
     * [Optional] If set, don&#39;t actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn&#39;t a dry run. Behavior of non-query jobs is undefined.
     */
    dryRun?: boolean | null;
    /**
     * [Pick one] Configures an extract job.
     */
    extract?: Schema$JobConfigurationExtract;
    /**
     * [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
     */
    jobTimeoutMs?: string | null;
    /**
     * [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN.
     */
    jobType?: string | null;
    /**
     * The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * [Pick one] Configures a load job.
     */
    load?: Schema$JobConfigurationLoad;
    /**
     * [Pick one] Configures a query job.
     */
    query?: Schema$JobConfigurationQuery;
  }
  export interface Schema$JobConfigurationExtract {
    /**
     * [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The default value is NONE. DEFLATE and SNAPPY are only supported for Avro.
     */
    compression?: string | null;
    /**
     * [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON and AVRO. The default value is CSV. Tables with nested or repeated fields cannot be exported as CSV.
     */
    destinationFormat?: string | null;
    /**
     * [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written.
     */
    destinationUri?: string | null;
    /**
     * [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written.
     */
    destinationUris?: string[] | null;
    /**
     * [Optional] Delimiter to use between fields in the exported data. Default is &#39;,&#39;
     */
    fieldDelimiter?: string | null;
    /**
     * [Optional] Whether to print out a header row in the results. Default is true.
     */
    printHeader?: boolean | null;
    /**
     * A reference to the model being exported.
     */
    sourceModel?: Schema$ModelReference;
    /**
     * A reference to the table being exported.
     */
    sourceTable?: Schema$TableReference;
    /**
     * [Optional] If destinationFormat is set to &quot;AVRO&quot;, this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long).
     */
    useAvroLogicalTypes?: boolean | null;
  }
  export interface Schema$JobConfigurationLoad {
    /**
     * [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats.
     */
    allowJaggedRows?: boolean | null;
    /**
     * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
     */
    allowQuotedNewlines?: boolean | null;
    /**
     * [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources.
     */
    autodetect?: boolean | null;
    /**
     * [Beta] Clustering specification for the destination table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
     */
    clustering?: Schema$Clustering;
    /**
     * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a &#39;notFound&#39; error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Required] The destination table to load the data into.
     */
    destinationTable?: Schema$TableReference;
    /**
     * [Beta] [Optional] Properties with which to create the destination table if it is new.
     */
    destinationTableProperties?: Schema$DestinationTableProperties;
    /**
     * [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties.
     */
    encoding?: string | null;
    /**
     * [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence &quot;\t&quot; to specify a tab separator. The default value is a comma (&#39;,&#39;).
     */
    fieldDelimiter?: string | null;
    /**
     * [Optional, Trusted Tester] If hive partitioning is enabled, which mode to use. Two modes are supported: - AUTO: automatically infer partition key name(s) and type(s). - STRINGS: automatic infer partition key name(s). All types are strings. Not all storage formats support hive partitioning -- requesting hive partitioning on an unsupported format will lead to an error.
     */
    hivePartitioningMode?: string | null;
    /**
     * [Optional, Trusted Tester] Options to configure hive partitioning support.
     */
    hivePartitioningOptions?: Schema$HivePartitioningOptions;
    /**
     * [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don&#39;t match any column names
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default value is 0, which requires that all records are valid.
     */
    maxBadRecords?: number | null;
    /**
     * [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify &quot;x/&quot;, BigQuery interprets &quot;x/&quot; as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value.
     */
    nullMarker?: string | null;
    /**
     * If sourceFormat is set to &quot;DATASTORE_BACKUP&quot;, indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn&#39;t found in the Cloud Datastore backup, an invalid error is returned in the job result.
     */
    projectionFields?: string[] | null;
    /**
     * [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote (&#39;&quot;&#39;). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true.
     */
    quote?: string | null;
    /**
     * [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * [Optional] The schema for the destination table. The schema can be omitted if the destination table already exists, or if you&#39;re loading data from Google Cloud Datastore.
     */
    schema?: Schema$TableSchema;
    /**
     * [Deprecated] The inline schema. For CSV schemas, specify as &quot;Field1:Type1[,Field2:Type2]*&quot;. For example, &quot;foo:STRING, bar:INTEGER, baz:FLOAT&quot;.
     */
    schemaInline?: string | null;
    /**
     * [Deprecated] The format of the schemaInline property.
     */
    schemaInlineFormat?: string | null;
    /**
     * Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
     */
    schemaUpdateOptions?: string[] | null;
    /**
     * [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped.
     */
    skipLeadingRows?: number | null;
    /**
     * [Optional] The format of the data files. For CSV files, specify &quot;CSV&quot;. For datastore backups, specify &quot;DATASTORE_BACKUP&quot;. For newline-delimited JSON, specify &quot;NEWLINE_DELIMITED_JSON&quot;. For Avro, specify &quot;AVRO&quot;. For parquet, specify &quot;PARQUET&quot;. For orc, specify &quot;ORC&quot;. The default value is CSV.
     */
    sourceFormat?: string | null;
    /**
     * [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one &#39;*&#39; wildcard character and it must come after the &#39;bucket&#39; name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the &#39;*&#39; wildcard character is not allowed.
     */
    sourceUris?: string[] | null;
    /**
     * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * [Optional] If sourceFormat is set to &quot;AVRO&quot;, indicates whether to enable interpreting logical types into their corresponding types (ie. TIMESTAMP), instead of only using their raw types (ie. INTEGER).
     */
    useAvroLogicalTypes?: boolean | null;
    /**
     * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a &#39;duplicate&#39; error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  export interface Schema$JobConfigurationQuery {
    /**
     * [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size.
     */
    allowLargeResults?: boolean | null;
    /**
     * [Beta] Clustering specification for the destination table. Must be specified with time-based partitioning, data in the table will be first partitioned and subsequently clustered.
     */
    clustering?: Schema$Clustering;
    /**
     * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a &#39;notFound&#39; error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * [Optional] Specifies the default dataset to use for unqualified table names in the query. Note that this does not alter behavior of unqualified dataset names.
     */
    defaultDataset?: Schema$DatasetReference;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Optional] Describes the table where the query results should be stored. If not present, a new table will be created to store the results. This property must be set for large results that exceed the maximum response size.
     */
    destinationTable?: Schema$TableReference;
    /**
     * [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened.
     */
    flattenResults?: boolean | null;
    /**
     * [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default.
     */
    maximumBillingTier?: number | null;
    /**
     * [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default.
     */
    maximumBytesBilled?: string | null;
    /**
     * Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
     */
    parameterMode?: string | null;
    /**
     * [Deprecated] This property is deprecated.
     */
    preserveNulls?: boolean | null;
    /**
     * [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE.
     */
    priority?: string | null;
    /**
     * [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
     */
    query?: string | null;
    /**
     * Query parameters for standard SQL queries.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable.
     */
    schemaUpdateOptions?: string[] | null;
    /**
     * [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
     */
    tableDefinitions?: {[key: string]: Schema$ExternalDataConfiguration} | null;
    /**
     * Time-based partitioning specification for the destination table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * Specifies whether to use BigQuery&#39;s legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery&#39;s standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
     */
    useLegacySql?: boolean | null;
    /**
     * [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true.
     */
    useQueryCache?: boolean | null;
    /**
     * Describes user-defined function resources used in the query.
     */
    userDefinedFunctionResources?: Schema$UserDefinedFunctionResource[];
    /**
     * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a &#39;duplicate&#39; error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  export interface Schema$JobConfigurationTableCopy {
    /**
     * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a &#39;notFound&#39; error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    destinationEncryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Required] The destination table
     */
    destinationTable?: Schema$TableReference;
    /**
     * [Pick one] Source table to copy.
     */
    sourceTable?: Schema$TableReference;
    /**
     * [Pick one] Source tables to copy.
     */
    sourceTables?: Schema$TableReference[];
    /**
     * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a &#39;duplicate&#39; error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string | null;
  }
  export interface Schema$JobList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * List of jobs that were requested.
     */
    jobs?: Array<{
      jobReference?: Schema$JobReference;
      status?: Schema$JobStatus;
      state?: string;
      statistics?: Schema$JobStatistics;
      id?: string;
      configuration?: Schema$JobConfiguration;
      user_email?: string;
      kind?: string;
      errorResult?: Schema$ErrorProto;
    }> | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$JobReference {
    /**
     * [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
     */
    jobId?: string | null;
    /**
     * The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string | null;
    /**
     * [Required] The ID of the project containing this job.
     */
    projectId?: string | null;
  }
  export interface Schema$JobStatistics {
    /**
     * [TrustedTester] [Output-only] Job progress (0.0 -&gt; 1.0) for LOAD and EXTRACT jobs.
     */
    completionRatio?: number | null;
    /**
     * [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs.
     */
    creationTime?: string | null;
    /**
     * [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state.
     */
    endTime?: string | null;
    /**
     * [Output-only] Statistics for an extract job.
     */
    extract?: Schema$JobStatistics4;
    /**
     * [Output-only] Statistics for a load job.
     */
    load?: Schema$JobStatistics3;
    /**
     * [Output-only] Number of child jobs executed.
     */
    numChildJobs?: string | null;
    /**
     * [Output-only] If this is a child job, the id of the parent.
     */
    parentJobId?: string | null;
    /**
     * [Output-only] Statistics for a query job.
     */
    query?: Schema$JobStatistics2;
    /**
     * [Output-only] Quotas which delayed this job&#39;s start time.
     */
    quotaDeferments?: string[] | null;
    /**
     * [Output-only] Job resource usage breakdown by reservation.
     */
    reservationUsage?: Array<{slotMs?: string; name?: string}> | null;
    /**
     * [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job.
     */
    reservation_id?: string | null;
    /**
     * [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE.
     */
    startTime?: string | null;
    /**
     * [Output-only] [Deprecated] Use the bytes processed in the query statistics instead.
     */
    totalBytesProcessed?: string | null;
    /**
     * [Output-only] Slot-milliseconds for the job.
     */
    totalSlotMs?: string | null;
  }
  export interface Schema$JobStatistics2 {
    /**
     * [Output-only] Billing tier for the job.
     */
    billingTier?: number | null;
    /**
     * [Output-only] Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): &quot;CREATE&quot;: The query created the DDL target. &quot;SKIP&quot;: No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. &quot;REPLACE&quot;: The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. &quot;DROP&quot;: The query deleted the DDL target.
     */
    ddlOperationPerformed?: string | null;
    /**
     * The DDL target routine. Present only for CREATE/DROP FUNCTION/PROCEDURE queries.
     */
    ddlTargetRoutine?: Schema$RoutineReference;
    /**
     * The DDL target table. Present only for CREATE/DROP TABLE/VIEW queries.
     */
    ddlTargetTable?: Schema$TableReference;
    /**
     * [Output-only] The original estimate of bytes processed for the job.
     */
    estimatedBytesProcessed?: string | null;
    /**
     * [Output-only, Beta] Information about create model query job progress.
     */
    modelTraining?: Schema$BigQueryModelTraining;
    /**
     * [Output-only, Beta] Deprecated; do not use.
     */
    modelTrainingCurrentIteration?: number | null;
    /**
     * [Output-only, Beta] Deprecated; do not use.
     */
    modelTrainingExpectedTotalIteration?: string | null;
    /**
     * [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * [Output-only] Describes execution plan for the query.
     */
    queryPlan?: Schema$ExplainQueryStage[];
    /**
     * [Output-only] Referenced routines (persistent user-defined functions and stored procedures) for the job.
     */
    referencedRoutines?: Schema$RoutineReference[];
    /**
     * [Output-only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list.
     */
    referencedTables?: Schema$TableReference[];
    /**
     * [Output-only] Job resource usage breakdown by reservation.
     */
    reservationUsage?: Array<{name?: string; slotMs?: string}> | null;
    /**
     * [Output-only] The schema of the results. Present only for successful dry run of non-legacy SQL queries.
     */
    schema?: Schema$TableSchema;
    /**
     * The type of query statement, if valid. Possible values (new values might be added in the future): &quot;SELECT&quot;: SELECT query. &quot;INSERT&quot;: INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. &quot;UPDATE&quot;: UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. &quot;DELETE&quot;: DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. &quot;MERGE&quot;: MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. &quot;ALTER_TABLE&quot;: ALTER TABLE query. &quot;ALTER_VIEW&quot;: ALTER VIEW query. &quot;CREATE_FUNCTION&quot;: CREATE FUNCTION query. &quot;CREATE_MODEL&quot;: CREATE [OR REPLACE] MODEL ... AS SELECT ... . &quot;CREATE_PROCEDURE&quot;: CREATE PROCEDURE query. &quot;CREATE_TABLE&quot;: CREATE [OR REPLACE] TABLE without AS SELECT. &quot;CREATE_TABLE_AS_SELECT&quot;: CREATE [OR REPLACE] TABLE ... AS SELECT ... . &quot;CREATE_VIEW&quot;: CREATE [OR REPLACE] VIEW ... AS SELECT ... . &quot;DROP_FUNCTION&quot; : DROP FUNCTION query. &quot;DROP_PROCEDURE&quot;: DROP PROCEDURE query. &quot;DROP_TABLE&quot;: DROP TABLE query. &quot;DROP_VIEW&quot;: DROP VIEW query.
     */
    statementType?: string | null;
    /**
     * [Output-only] [Beta] Describes a timeline of job execution.
     */
    timeline?: Schema$QueryTimelineSample[];
    /**
     * [Output-only] Total bytes billed for the job.
     */
    totalBytesBilled?: string | null;
    /**
     * [Output-only] Total bytes processed for the job.
     */
    totalBytesProcessed?: string | null;
    /**
     * [Output-only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost.
     */
    totalBytesProcessedAccuracy?: string | null;
    /**
     * [Output-only] Total number of partitions processed from all partitioned tables referenced in the job.
     */
    totalPartitionsProcessed?: string | null;
    /**
     * [Output-only] Slot-milliseconds for the job.
     */
    totalSlotMs?: string | null;
    /**
     * Standard SQL only: list of undeclared query parameters detected during a dry run validation.
     */
    undeclaredQueryParameters?: Schema$QueryParameter[];
  }
  export interface Schema$JobStatistics3 {
    /**
     * [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data.
     */
    badRecords?: string | null;
    /**
     * [Output-only] Number of bytes of source data in a load job.
     */
    inputFileBytes?: string | null;
    /**
     * [Output-only] Number of source files in a load job.
     */
    inputFiles?: string | null;
    /**
     * [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change.
     */
    outputBytes?: string | null;
    /**
     * [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change.
     */
    outputRows?: string | null;
  }
  export interface Schema$JobStatistics4 {
    /**
     * [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the &#39;destinationUris&#39; field.
     */
    destinationUriFileCounts?: string[] | null;
    /**
     * [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes.
     */
    inputBytes?: string | null;
  }
  export interface Schema$JobStatus {
    /**
     * [Output-only] Final error result of the job. If present, indicates that the job has completed and was unsuccessful.
     */
    errorResult?: Schema$ErrorProto;
    /**
     * [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
     */
    errors?: Schema$ErrorProto[];
    /**
     * [Output-only] Running state of the job.
     */
    state?: string | null;
  }
  /**
   * Represents a single JSON object.
   */
  export interface Schema$JsonObject {}
  export interface Schema$JsonValue {}
  export interface Schema$ListModelsResponse {
    /**
     * Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels.
     */
    models?: Schema$Model[];
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
  }
  export interface Schema$ListRoutinesResponse {
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Routines in the requested dataset. Only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language.
     */
    routines?: Schema$Routine[];
  }
  /**
   * BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses.
   */
  export interface Schema$LocationMetadata {
    /**
     * The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations.
     */
    legacyLocationId?: string | null;
  }
  export interface Schema$MaterializedViewDefinition {
    /**
     * [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch.
     */
    lastRefreshTime?: string | null;
    /**
     * [Required] A query whose result is persisted.
     */
    query?: string | null;
  }
  export interface Schema$Model {
    /**
     * Output only. The time when this model was created, in millisecs since the epoch.
     */
    creationTime?: string | null;
    /**
     * Optional. A user-friendly description of this model.
     */
    description?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys). This shows the encryption configuration of the model data while stored in BigQuery storage.
     */
    encryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed.  The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models.
     */
    expirationTime?: string | null;
    /**
     * Output only. Input feature columns that were used to train this model.
     */
    featureColumns?: Schema$StandardSqlField[];
    /**
     * Optional. A descriptive name for this model.
     */
    friendlyName?: string | null;
    /**
     * Output only. Label columns that were used to train this model. The output of the model will have a &quot;predicted_&quot; prefix to these columns.
     */
    labelColumns?: Schema$StandardSqlField[];
    /**
     * The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The time when this model was last modified, in millisecs since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Output only. The geographic location where the model resides. This value is inherited from the dataset.
     */
    location?: string | null;
    /**
     * Required. Unique identifier for this model.
     */
    modelReference?: Schema$ModelReference;
    /**
     * Output only. Type of the model resource.
     */
    modelType?: string | null;
    /**
     * Output only. Information for all training runs in increasing order of start_time.
     */
    trainingRuns?: Schema$TrainingRun[];
  }
  export interface Schema$ModelDefinition {
    /**
     * [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
     */
    modelOptions?: {
      lossType?: string;
      modelType?: string;
      labels?: string[];
    } | null;
    /**
     * [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled query.
     */
    trainingRuns?: Schema$BqmlTrainingRun[];
  }
  export interface Schema$ModelReference {
    /**
     * [Required] The ID of the dataset containing this model.
     */
    datasetId?: string | null;
    /**
     * [Required] The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    modelId?: string | null;
    /**
     * [Required] The ID of the project containing this model.
     */
    projectId?: string | null;
  }
  /**
   * Evaluation metrics for multi-class classification/classifier models.
   */
  export interface Schema$MultiClassClassificationMetrics {
    /**
     * Aggregate classification metrics.
     */
    aggregateClassificationMetrics?: Schema$AggregateClassificationMetrics;
    /**
     * Confusion matrix at different thresholds.
     */
    confusionMatrixList?: Schema$ConfusionMatrix[];
  }
  export interface Schema$ProjectList {
    /**
     * A hash of the page of results
     */
    etag?: string | null;
    /**
     * The type of list.
     */
    kind?: string | null;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Projects to which you have at least READ access.
     */
    projects?: Array<{
      friendlyName?: string;
      numericId?: string;
      kind?: string;
      id?: string;
      projectReference?: Schema$ProjectReference;
    }> | null;
    /**
     * The total number of projects in the list.
     */
    totalItems?: number | null;
  }
  export interface Schema$ProjectReference {
    /**
     * [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project.
     */
    projectId?: string | null;
  }
  export interface Schema$QueryParameter {
    /**
     * [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query.
     */
    name?: string | null;
    /**
     * [Required] The type of this parameter.
     */
    parameterType?: Schema$QueryParameterType;
    /**
     * [Required] The value of this parameter.
     */
    parameterValue?: Schema$QueryParameterValue;
  }
  export interface Schema$QueryParameterType {
    /**
     * [Optional] The type of the array&#39;s elements, if this is an array.
     */
    arrayType?: Schema$QueryParameterType;
    /**
     * [Optional] The types of the fields of this struct, in order, if this is a struct.
     */
    structTypes?: Array<{
      type?: Schema$QueryParameterType;
      name?: string;
      description?: string;
    }> | null;
    /**
     * [Required] The top level type of this field.
     */
    type?: string | null;
  }
  export interface Schema$QueryParameterValue {
    /**
     * [Optional] The array values, if this is an array type.
     */
    arrayValues?: Schema$QueryParameterValue[];
    /**
     * [Optional] The struct field values, in order of the struct type&#39;s declaration.
     */
    structValues?: {[key: string]: Schema$QueryParameterValue} | null;
    /**
     * [Optional] The value of this value, if a simple scalar type.
     */
    value?: string | null;
  }
  export interface Schema$QueryRequest {
    /**
     * [Optional] Specifies the default datasetId and projectId to assume for any unqualified table names in the query. If not set, all table names in the query string must be qualified in the format &#39;datasetId.tableId&#39;.
     */
    defaultDataset?: Schema$DatasetReference;
    /**
     * [Optional] If set to true, BigQuery doesn&#39;t run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false.
     */
    dryRun?: boolean | null;
    /**
     * The resource type of the request.
     */
    kind?: string | null;
    /**
     * The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string | null;
    /**
     * [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies.
     */
    maxResults?: number | null;
    /**
     * Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query.
     */
    parameterMode?: string | null;
    /**
     * [Deprecated] This property is deprecated.
     */
    preserveNulls?: boolean | null;
    /**
     * [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: &quot;SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]&quot;.
     */
    query?: string | null;
    /**
     * Query parameters for Standard SQL queries.
     */
    queryParameters?: Schema$QueryParameter[];
    /**
     * [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the &#39;jobComplete&#39; flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds).
     */
    timeoutMs?: number | null;
    /**
     * Specifies whether to use BigQuery&#39;s legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery&#39;s standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false.
     */
    useLegacySql?: boolean | null;
    /**
     * [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true.
     */
    useQueryCache?: boolean | null;
  }
  export interface Schema$QueryResponse {
    /**
     * Whether the query result was fetched from the query cache.
     */
    cacheHit?: boolean | null;
    /**
     * [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful.
     */
    errors?: Schema$ErrorProto[];
    /**
     * Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available.
     */
    jobComplete?: boolean | null;
    /**
     * Reference to the Job that was created to run the query. This field will be present even if the original request timed out, in which case GetQueryResults can be used to read the results once the query has completed. Since this API only returns the first page of results, subsequent pages can be fetched via the same mechanism (GetQueryResults).
     */
    jobReference?: Schema$JobReference;
    /**
     * The resource type.
     */
    kind?: string | null;
    /**
     * [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE.
     */
    numDmlAffectedRows?: string | null;
    /**
     * A token used for paging results.
     */
    pageToken?: string | null;
    /**
     * An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above.
     */
    rows?: Schema$TableRow[];
    /**
     * The schema of the results. Present only when the query completes successfully.
     */
    schema?: Schema$TableSchema;
    /**
     * The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run.
     */
    totalBytesProcessed?: string | null;
    /**
     * The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results.
     */
    totalRows?: string | null;
  }
  export interface Schema$QueryTimelineSample {
    /**
     * Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample.
     */
    activeUnits?: string | null;
    /**
     * Total parallel units of work completed by this query.
     */
    completedUnits?: string | null;
    /**
     * Milliseconds elapsed since the start of query execution.
     */
    elapsedMs?: string | null;
    /**
     * Total parallel units of work remaining for the active stages.
     */
    pendingUnits?: string | null;
    /**
     * Cumulative slot-ms consumed by the query.
     */
    totalSlotMs?: string | null;
  }
  export interface Schema$RangePartitioning {
    /**
     * [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64.
     */
    field?: string | null;
    /**
     * [TrustedTester] [Required] Defines the ranges for range partitioning.
     */
    range?: {start?: string; end?: string; interval?: string} | null;
  }
  /**
   * Evaluation metrics for regression and explicit feedback type matrix factorization models.
   */
  export interface Schema$RegressionMetrics {
    /**
     * Mean absolute error.
     */
    meanAbsoluteError?: number | null;
    /**
     * Mean squared error.
     */
    meanSquaredError?: number | null;
    /**
     * Mean squared log error.
     */
    meanSquaredLogError?: number | null;
    /**
     * Median absolute error.
     */
    medianAbsoluteError?: number | null;
    /**
     * R^2 score.
     */
    rSquared?: number | null;
  }
  /**
   * A user-defined function or a stored procedure.
   */
  export interface Schema$Routine {
    /**
     * Optional.
     */
    arguments?: Schema$Argument[];
    /**
     * Output only. The time when this routine was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * Required. The body of the routine.  For functions, this is the expression in the AS clause.  If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement:  `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, &quot;x/&quot;, y))`  The definition_body is `concat(x, &quot;x/&quot;, y)` (x/ is not replaced with linebreak).  If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement:  `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS &#39;return &quot;x/&quot;;x/&#39;`  The definition_body is  `return &quot;x/&quot;;x/`  Note that both x/ are replaced with linebreaks.
     */
    definitionBody?: string | null;
    /**
     * Optional. [Experimental] The description of the routine if defined.
     */
    description?: string | null;
    /**
     * Output only. A hash of this resource.
     */
    etag?: string | null;
    /**
     * Optional. If language = &quot;JAVASCRIPT&quot;, this field stores the path of the imported JAVASCRIPT libraries.
     */
    importedLibraries?: string[] | null;
    /**
     * Optional. Defaults to &quot;SQL&quot;.
     */
    language?: string | null;
    /**
     * Output only. The time when this routine was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * Optional if language = &quot;SQL&quot;; required otherwise.  If absent, the return type is inferred from definition_body at query time in each query that references this routine. If present, then the evaluated result will be cast to the specified returned type at query time.  For example, for the functions created with the following statements:  * `CREATE FUNCTION Add(x FLOAT64, y FLOAT64) RETURNS FLOAT64 AS (x + y);`  * `CREATE FUNCTION Increment(x FLOAT64) AS (Add(x, 1));`  * `CREATE FUNCTION Decrement(x FLOAT64) RETURNS FLOAT64 AS (Add(x, -1));`  The return_type is `{type_kind: &quot;FLOAT64&quot;}` for `Add` and `Decrement`, and is absent for `Increment` (inferred as FLOAT64 at query time).  Suppose the function `Add` is replaced by   `CREATE OR REPLACE FUNCTION Add(x INT64, y INT64) AS (x + y);`  Then the inferred return type of `Increment` is automatically changed to INT64 at query time, while the return type of `Decrement` remains FLOAT64.
     */
    returnType?: Schema$StandardSqlDataType;
    /**
     * Required. Reference describing the ID of this routine.
     */
    routineReference?: Schema$RoutineReference;
    /**
     * Required. The type of routine.
     */
    routineType?: string | null;
  }
  export interface Schema$RoutineReference {
    /**
     * [Required] The ID of the dataset containing this routine.
     */
    datasetId?: string | null;
    /**
     * [Required] The ID of the project containing this routine.
     */
    projectId?: string | null;
    /**
     * [Required] The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.
     */
    routineId?: string | null;
  }
  /**
   * A single row in the confusion matrix.
   */
  export interface Schema$Row {
    /**
     * The original label of this row.
     */
    actualLabel?: string | null;
    /**
     * Info describing predicted label distribution.
     */
    entries?: Schema$Entry[];
  }
  /**
   * The type of a variable, e.g., a function argument. Examples: INT64: {type_kind=&quot;INT64&quot;} ARRAY&lt;STRING&gt;: {type_kind=&quot;ARRAY&quot;, array_element_type=&quot;STRING&quot;} STRUCT&lt;x STRING, y ARRAY&lt;DATE&gt;&gt;:   {type_kind=&quot;STRUCT&quot;,    struct_type={fields=[      {name=&quot;x&quot;, type={type_kind=&quot;STRING&quot;}},      {name=&quot;y&quot;, type={type_kind=&quot;ARRAY&quot;, array_element_type=&quot;DATE&quot;}}    ]}}
   */
  export interface Schema$StandardSqlDataType {
    /**
     * The type of the array&#39;s elements, if type_kind = &quot;ARRAY&quot;.
     */
    arrayElementType?: Schema$StandardSqlDataType;
    /**
     * The fields of this struct, in order, if type_kind = &quot;STRUCT&quot;.
     */
    structType?: Schema$StandardSqlStructType;
    /**
     * Required. The top level type of this field. Can be any standard SQL data type (e.g., &quot;INT64&quot;, &quot;DATE&quot;, &quot;ARRAY&quot;).
     */
    typeKind?: string | null;
  }
  /**
   * A field or a column.
   */
  export interface Schema$StandardSqlField {
    /**
     * Optional. The name of this field. Can be absent for struct fields.
     */
    name?: string | null;
    /**
     * Optional. The type of this parameter. Absent if not explicitly specified (e.g., CREATE FUNCTION statement can omit the return type; in this case the output parameter does not have this &quot;type&quot; field).
     */
    type?: Schema$StandardSqlDataType;
  }
  export interface Schema$StandardSqlStructType {
    fields?: Schema$StandardSqlField[];
  }
  export interface Schema$Streamingbuffer {
    /**
     * [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer.
     */
    estimatedBytes?: string | null;
    /**
     * [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer.
     */
    estimatedRows?: string | null;
    /**
     * [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available.
     */
    oldestEntryTime?: string | null;
  }
  export interface Schema$Table {
    /**
     * [Beta] Clustering specification for the table. Must be specified with partitioning, data in the table will be first partitioned and subsequently clustered.
     */
    clustering?: Schema$Clustering;
    /**
     * [Output-only] The time when this table was created, in milliseconds since the epoch.
     */
    creationTime?: string | null;
    /**
     * [Optional] A user-friendly description of this table.
     */
    description?: string | null;
    /**
     * Custom encryption configuration (e.g., Cloud KMS keys).
     */
    encryptionConfiguration?: Schema$EncryptionConfiguration;
    /**
     * [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change.
     */
    etag?: string | null;
    /**
     * [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
     */
    expirationTime?: string | null;
    /**
     * [Optional] Describes the data format, location, and other properties of a table stored outside of BigQuery. By defining these properties, the data source can then be queried as if it were a standard BigQuery table.
     */
    externalDataConfiguration?: Schema$ExternalDataConfiguration;
    /**
     * [Optional] A descriptive name for this table.
     */
    friendlyName?: string | null;
    /**
     * [Output-only] An opaque ID uniquely identifying the table.
     */
    id?: string | null;
    /**
     * [Output-only] The type of the resource.
     */
    kind?: string | null;
    /**
     * The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: {[key: string]: string} | null;
    /**
     * [Output-only] The time when this table was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string | null;
    /**
     * [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
     */
    location?: string | null;
    /**
     * [Optional] Materialized view definition.
     */
    materializedView?: Schema$MaterializedViewDefinition;
    /**
     * [Output-only, Beta] Present iff this table represents a ML model. Describes the training information for the model, and it is required to run &#39;PREDICT&#39; queries.
     */
    model?: Schema$ModelDefinition;
    /**
     * [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
     */
    numBytes?: string | null;
    /**
     * [Output-only] The number of bytes in the table that are considered &quot;long-term storage&quot;.
     */
    numLongTermBytes?: string | null;
    /**
     * [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel.
     */
    numPhysicalBytes?: string | null;
    /**
     * [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
     */
    numRows?: string | null;
    /**
     * [TrustedTester] Range partitioning specification for this table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    rangePartitioning?: Schema$RangePartitioning;
    /**
     * [Beta] [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
     */
    requirePartitionFilter?: boolean | null;
    /**
     * [Optional] Describes the schema of this table.
     */
    schema?: Schema$TableSchema;
    /**
     * [Output-only] A URL that can be used to access this resource again.
     */
    selfLink?: string | null;
    /**
     * [Output-only] Contains information regarding this table&#39;s streaming buffer, if one is present. This field will be absent if the table is not being streamed to or if there is no data in the streaming buffer.
     */
    streamingBuffer?: Schema$Streamingbuffer;
    /**
     * [Required] Reference describing the ID of this table.
     */
    tableReference?: Schema$TableReference;
    /**
     * Time-based partitioning specification for this table. Only one of timePartitioning and rangePartitioning should be specified.
     */
    timePartitioning?: Schema$TimePartitioning;
    /**
     * [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE.
     */
    type?: string | null;
    /**
     * [Optional] The view definition.
     */
    view?: Schema$ViewDefinition;
  }
  export interface Schema$TableCell {
    v?: any | null;
  }
  export interface Schema$TableDataInsertAllRequest {
    /**
     * [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors.
     */
    ignoreUnknownValues?: boolean | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * The rows to insert.
     */
    rows?: Array<{insertId?: string; json?: Schema$JsonObject}> | null;
    /**
     * [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist.
     */
    skipInvalidRows?: boolean | null;
    /**
     * If specified, treats the destination table as a base template, and inserts the rows into an instance table named &quot;{destination}{templateSuffix}&quot;. BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables.
     */
    templateSuffix?: string | null;
  }
  export interface Schema$TableDataInsertAllResponse {
    /**
     * An array of errors for rows that were not inserted.
     */
    insertErrors?: Array<{errors?: Schema$ErrorProto[]; index?: number}> | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
  }
  export interface Schema$TableDataList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * The resource type of the response.
     */
    kind?: string | null;
    /**
     * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
     */
    pageToken?: string | null;
    /**
     * Rows of results.
     */
    rows?: Schema$TableRow[];
    /**
     * The total number of rows in the complete table.
     */
    totalRows?: string | null;
  }
  export interface Schema$TableFieldSchema {
    /**
     * [Optional] The categories attached to this field, used for field-level access control.
     */
    categories?: {names?: string[]} | null;
    /**
     * [Optional] The field description. The maximum length is 1,024 characters.
     */
    description?: string | null;
    /**
     * [Optional] Describes the nested schema fields if the type property is set to RECORD.
     */
    fields?: Schema$TableFieldSchema[];
    /**
     * [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE.
     */
    mode?: string | null;
    /**
     * [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 128 characters.
     */
    name?: string | null;
    /**
     * [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD).
     */
    type?: string | null;
  }
  export interface Schema$TableList {
    /**
     * A hash of this page of results.
     */
    etag?: string | null;
    /**
     * The type of list.
     */
    kind?: string | null;
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string | null;
    /**
     * Tables in the requested dataset.
     */
    tables?: Array<{
      tableReference?: Schema$TableReference;
      friendlyName?: string;
      timePartitioning?: Schema$TimePartitioning;
      kind?: string;
      view?: {useLegacySql?: boolean};
      creationTime?: string;
      labels?: {[key: string]: string};
      type?: string;
      clustering?: Schema$Clustering;
      expirationTime?: string;
      id?: string;
    }> | null;
    /**
     * The total number of tables in the dataset.
     */
    totalItems?: number | null;
  }
  export interface Schema$TableReference {
    /**
     * [Required] The ID of the dataset containing this table.
     */
    datasetId?: string | null;
    /**
     * [Required] The ID of the project containing this table.
     */
    projectId?: string | null;
    /**
     * [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
     */
    tableId?: string | null;
  }
  export interface Schema$TableRow {
    /**
     * Represents a single row in the result set, consisting of one or more fields.
     */
    f?: Schema$TableCell[];
  }
  export interface Schema$TableSchema {
    /**
     * Describes the fields in a table.
     */
    fields?: Schema$TableFieldSchema[];
  }
  export interface Schema$TimePartitioning {
    /**
     * [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value.
     */
    expirationMs?: string | null;
    /**
     * [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either &#39;_PARTITIONTIME&#39; as TIMESTAMP type, or &#39;_PARTITIONDATE&#39; as DATE type. If field is specified, the table is instead partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED.
     */
    field?: string | null;
    requirePartitionFilter?: boolean | null;
    /**
     * [Required] The only type supported is DAY, which will generate one partition per day.
     */
    type?: string | null;
  }
  export interface Schema$TrainingOptions {
    /**
     * The column to split data with. This column won&#39;t be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties
     */
    dataSplitColumn?: string | null;
    /**
     * The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2.
     */
    dataSplitEvalFraction?: number | null;
    /**
     * The data split type for training and evaluation, e.g. RANDOM.
     */
    dataSplitMethod?: string | null;
    /**
     * Distance type for clustering models.
     */
    distanceType?: string | null;
    /**
     * Whether to stop early when the loss doesn&#39;t improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms.
     */
    earlyStop?: boolean | null;
    /**
     * Specifies the initial learning rate for the line search learn rate strategy.
     */
    initialLearnRate?: number | null;
    /**
     * Name of input label columns in training data.
     */
    inputLabelColumns?: string[] | null;
    /**
     * The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM.
     */
    kmeansInitializationColumn?: string | null;
    /**
     * The method used to initialize the centroids for kmeans algorithm.
     */
    kmeansInitializationMethod?: string | null;
    /**
     * L1 regularization coefficient.
     */
    l1Regularization?: number | null;
    /**
     * L2 regularization coefficient.
     */
    l2Regularization?: number | null;
    /**
     * Weights associated with each label class, for rebalancing the training data. Only applicable for classification models.
     */
    labelClassWeights?: {[key: string]: number} | null;
    /**
     * Learning rate in training. Used only for iterative training algorithms.
     */
    learnRate?: number | null;
    /**
     * The strategy to determine learn rate for the current iteration.
     */
    learnRateStrategy?: string | null;
    /**
     * Type of loss function used during training run.
     */
    lossType?: string | null;
    /**
     * The maximum number of iterations in training. Used only for iterative training algorithms.
     */
    maxIterations?: string | null;
    /**
     * When early_stop is true, stops training when accuracy improvement is less than &#39;min_relative_progress&#39;. Used only for iterative training algorithms.
     */
    minRelativeProgress?: number | null;
    /**
     * [Beta] Google Cloud Storage URI from which the model was imported. Only applicable for imported models.
     */
    modelUri?: string | null;
    /**
     * Number of clusters for clustering models.
     */
    numClusters?: string | null;
    /**
     * Optimization strategy for training linear regression models.
     */
    optimizationStrategy?: string | null;
    /**
     * Whether to train a model from the last checkpoint.
     */
    warmStart?: boolean | null;
  }
  /**
   * Information about a single training query run for the model.
   */
  export interface Schema$TrainingRun {
    /**
     * The evaluation metrics over training/eval data that were computed at the end of training.
     */
    evaluationMetrics?: Schema$EvaluationMetrics;
    /**
     * Output of each iteration run, results.size() &lt;= max_iterations.
     */
    results?: Schema$IterationResult[];
    /**
     * The start time of this training run.
     */
    startTime?: string | null;
    /**
     * Options that were used for this training run, includes user specified and default options that were used.
     */
    trainingOptions?: Schema$TrainingOptions;
  }
  export interface Schema$UserDefinedFunctionResource {
    /**
     * [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code.
     */
    inlineCode?: string | null;
    /**
     * [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path).
     */
    resourceUri?: string | null;
  }
  export interface Schema$ViewDefinition {
    /**
     * [Required] A query that BigQuery executes when the view is referenced.
     */
    query?: string | null;
    /**
     * Specifies whether to use BigQuery&#39;s legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery&#39;s standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value.
     */
    useLegacySql?: boolean | null;
    /**
     * Describes user-defined function resources used in the query.
     */
    userDefinedFunctionResources?: Schema$UserDefinedFunctionResource[];
  }

  export class Resource$Datasets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.datasets.delete
     * @desc Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the dataset being deleted
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of dataset being deleted
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.datasets.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of dataset being deleted
     * @param {boolean=} params.deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     * @param {string} params.projectId Project ID of the dataset being deleted
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Datasets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Datasets$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Datasets$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Datasets$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * bigquery.datasets.get
     * @desc Returns the dataset specified by datasetID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the requested dataset
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the requested dataset
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.datasets.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the requested dataset
     * @param {string} params.projectId Project ID of the requested dataset
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Datasets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    get(
      params: Params$Resource$Datasets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(
      params: Params$Resource$Datasets$Get,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    get(callback: BodyResponseCallback<Schema$Dataset>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Datasets$Get
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * bigquery.datasets.insert
     * @desc Creates a new empty dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the new dataset
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.datasets.insert(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the new dataset
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Datasets$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    insert(
      params: Params$Resource$Datasets$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    insert(
      params: Params$Resource$Datasets$Insert,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Dataset>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Datasets$Insert
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * bigquery.datasets.list
     * @desc Lists all datasets in the specified project to which you have been granted the READER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the datasets to be listed
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var datasetsPage = response['datasets'];
     *     if (!datasetsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < datasetsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `datasetsPage`:
     *       console.log(JSON.stringify(datasetsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.datasets.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.datasets.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.all Whether to list all datasets, including hidden ones
     * @param {string=} params.filter An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
     * @param {integer=} params.maxResults The maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Project ID of the datasets to be listed
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Datasets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DatasetList>;
    list(
      params: Params$Resource$Datasets$List,
      options: MethodOptions | BodyResponseCallback<Schema$DatasetList>,
      callback: BodyResponseCallback<Schema$DatasetList>
    ): void;
    list(
      params: Params$Resource$Datasets$List,
      callback: BodyResponseCallback<Schema$DatasetList>
    ): void;
    list(callback: BodyResponseCallback<Schema$DatasetList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Datasets$List
        | BodyResponseCallback<Schema$DatasetList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$DatasetList>,
      callback?: BodyResponseCallback<Schema$DatasetList>
    ): void | GaxiosPromise<Schema$DatasetList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$DatasetList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DatasetList>(parameters);
      }
    }

    /**
     * bigquery.datasets.patch
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the dataset being updated
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the dataset being updated
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.datasets.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the dataset being updated
     * @param {string} params.projectId Project ID of the dataset being updated
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Datasets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    patch(
      params: Params$Resource$Datasets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(
      params: Params$Resource$Datasets$Patch,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Dataset>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Datasets$Patch
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }

    /**
     * bigquery.datasets.update
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the dataset being updated
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the dataset being updated
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.datasets.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.datasets.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the dataset being updated
     * @param {string} params.projectId Project ID of the dataset being updated
     * @param {().Dataset} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Datasets$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Dataset>;
    update(
      params: Params$Resource$Datasets$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    update(
      params: Params$Resource$Datasets$Update,
      callback: BodyResponseCallback<Schema$Dataset>
    ): void;
    update(callback: BodyResponseCallback<Schema$Dataset>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Datasets$Update
        | BodyResponseCallback<Schema$Dataset>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Dataset>,
      callback?: BodyResponseCallback<Schema$Dataset>
    ): void | GaxiosPromise<Schema$Dataset> {
      let params = (paramsOrCallback || {}) as Params$Resource$Datasets$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Datasets$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/datasets/{datasetId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Dataset>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Dataset>(parameters);
      }
    }
  }

  export interface Params$Resource$Datasets$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of dataset being deleted
     */
    datasetId?: string;
    /**
     * If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     */
    deleteContents?: boolean;
    /**
     * Project ID of the dataset being deleted
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the requested dataset
     */
    datasetId?: string;
    /**
     * Project ID of the requested dataset
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID of the new dataset
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Datasets$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether to list all datasets, including hidden ones
     */
    all?: boolean;
    /**
     * An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
     */
    filter?: string;
    /**
     * The maximum number of results to return
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Project ID of the datasets to be listed
     */
    projectId?: string;
  }
  export interface Params$Resource$Datasets$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the dataset being updated
     */
    datasetId?: string;
    /**
     * Project ID of the dataset being updated
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }
  export interface Params$Resource$Datasets$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the dataset being updated
     */
    datasetId?: string;
    /**
     * Project ID of the dataset being updated
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Dataset;
  }

  export class Resource$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.jobs.cancel
     * @desc Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // [Required] Project ID of the job to cancel
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // [Required] Job ID of the job to cancel
     *     jobId: 'my-job-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.jobs.cancel(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.cancel
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the job to cancel
     * @param {string=} params.location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     * @param {string} params.projectId [Required] Project ID of the job to cancel
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel(
      params?: Params$Resource$Jobs$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$JobCancelResponse>;
    cancel(
      params: Params$Resource$Jobs$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$JobCancelResponse>,
      callback: BodyResponseCallback<Schema$JobCancelResponse>
    ): void;
    cancel(
      params: Params$Resource$Jobs$Cancel,
      callback: BodyResponseCallback<Schema$JobCancelResponse>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$JobCancelResponse>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Jobs$Cancel
        | BodyResponseCallback<Schema$JobCancelResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$JobCancelResponse>,
      callback?: BodyResponseCallback<Schema$JobCancelResponse>
    ): void | GaxiosPromise<Schema$JobCancelResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/jobs/{jobId}/cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$JobCancelResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$JobCancelResponse>(parameters);
      }
    }

    /**
     * bigquery.jobs.get
     * @desc Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // [Required] Project ID of the requested job
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // [Required] Job ID of the requested job
     *     jobId: 'my-job-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.jobs.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the requested job
     * @param {string=} params.location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     * @param {string} params.projectId [Required] Project ID of the requested job
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Jobs$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    get(
      params: Params$Resource$Jobs$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(
      params: Params$Resource$Jobs$Get,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    get(callback: BodyResponseCallback<Schema$Job>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Jobs$Get
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/jobs/{jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * bigquery.jobs.getQueryResults
     * @desc Retrieves the results of a query job.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // [Required] Project ID of the query job
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // [Required] Job ID of the query job
     *     jobId: 'my-job-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var errorsPage = response['errors'];
     *     if (!errorsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < errorsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `errorsPage`:
     *       console.log(JSON.stringify(errorsPage[i], null, 2));
     *     }
     *
     *     if (response.pageToken) {
     *       request.pageToken = response.pageToken;
     *       bigquery.jobs.getQueryResults(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.jobs.getQueryResults(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.getQueryResults
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the query job
     * @param {string=} params.location The geographic location where the job should run. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     * @param {integer=} params.maxResults Maximum number of results to read
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId [Required] Project ID of the query job
     * @param {string=} params.startIndex Zero-based index of the starting row
     * @param {integer=} params.timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getQueryResults(
      params?: Params$Resource$Jobs$Getqueryresults,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetQueryResultsResponse>;
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetQueryResultsResponse>,
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      params: Params$Resource$Jobs$Getqueryresults,
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      callback: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void;
    getQueryResults(
      paramsOrCallback?:
        | Params$Resource$Jobs$Getqueryresults
        | BodyResponseCallback<Schema$GetQueryResultsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetQueryResultsResponse>,
      callback?: BodyResponseCallback<Schema$GetQueryResultsResponse>
    ): void | GaxiosPromise<Schema$GetQueryResultsResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Jobs$Getqueryresults;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Getqueryresults;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/queries/{jobId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetQueryResultsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GetQueryResultsResponse>(parameters);
      }
    }

    /**
     * bigquery.jobs.insert
     * @desc Starts a new asynchronous job. Requires the Can View project role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the project that will be billed for the job
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     media: {
     *       // TODO: Add desired media content for upload. See
     *       // https://github.com/google/google-api-nodejs-client#media-uploads
     *       mimeType: '',  // See https://www.w3.org/Protocols/rfc1341/4_Content-Type.html
     *       body: '',
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.jobs.insert(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the project that will be billed for the job
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Jobs$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    insert(
      params: Params$Resource$Jobs$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    insert(
      params: Params$Resource$Jobs$Insert,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Job>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Jobs$Insert
        | BodyResponseCallback<Schema$Job>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback?: BodyResponseCallback<Schema$Job>
    ): void | GaxiosPromise<Schema$Job> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        mediaUrl: (
          rootUrl + '/upload/bigquery/v2/projects/{projectId}/jobs'
        ).replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Job>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Job>(parameters);
      }
    }

    /**
     * bigquery.jobs.list
     * @desc Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the jobs to list
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var jobsPage = response['jobs'];
     *     if (!jobsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < jobsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `jobsPage`:
     *       console.log(JSON.stringify(jobsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.jobs.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.jobs.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allUsers Whether to display jobs owned by all users in the project. Default false
     * @param {string=} params.maxCreationTime Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.minCreationTime Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string=} params.parentJobId If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
     * @param {string} params.projectId Project ID of the jobs to list
     * @param {string=} params.projection Restrict information returned to a set of selected fields
     * @param {string=} params.stateFilter Filter for job state
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Jobs$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$JobList>;
    list(
      params: Params$Resource$Jobs$List,
      options: MethodOptions | BodyResponseCallback<Schema$JobList>,
      callback: BodyResponseCallback<Schema$JobList>
    ): void;
    list(
      params: Params$Resource$Jobs$List,
      callback: BodyResponseCallback<Schema$JobList>
    ): void;
    list(callback: BodyResponseCallback<Schema$JobList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Jobs$List
        | BodyResponseCallback<Schema$JobList>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$JobList>,
      callback?: BodyResponseCallback<Schema$JobList>
    ): void | GaxiosPromise<Schema$JobList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects/{projectId}/jobs').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$JobList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$JobList>(parameters);
      }
    }

    /**
     * bigquery.jobs.query
     * @desc Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the project billed for the query
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.jobs.query(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.jobs.query
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the project billed for the query
     * @param {().QueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query(
      params?: Params$Resource$Jobs$Query,
      options?: MethodOptions
    ): GaxiosPromise<Schema$QueryResponse>;
    query(
      params: Params$Resource$Jobs$Query,
      options: MethodOptions | BodyResponseCallback<Schema$QueryResponse>,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(
      params: Params$Resource$Jobs$Query,
      callback: BodyResponseCallback<Schema$QueryResponse>
    ): void;
    query(callback: BodyResponseCallback<Schema$QueryResponse>): void;
    query(
      paramsOrCallback?:
        | Params$Resource$Jobs$Query
        | BodyResponseCallback<Schema$QueryResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$QueryResponse>,
      callback?: BodyResponseCallback<Schema$QueryResponse>
    ): void | GaxiosPromise<Schema$QueryResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Jobs$Query;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Jobs$Query;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/queries'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$QueryResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$QueryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Jobs$Cancel extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Required] Job ID of the job to cancel
     */
    jobId?: string;
    /**
     * The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * [Required] Project ID of the job to cancel
     */
    projectId?: string;
  }
  export interface Params$Resource$Jobs$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Required] Job ID of the requested job
     */
    jobId?: string;
    /**
     * The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * [Required] Project ID of the requested job
     */
    projectId?: string;
  }
  export interface Params$Resource$Jobs$Getqueryresults
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * [Required] Job ID of the query job
     */
    jobId?: string;
    /**
     * The geographic location where the job should run. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
     */
    location?: string;
    /**
     * Maximum number of results to read
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * [Required] Project ID of the query job
     */
    projectId?: string;
    /**
     * Zero-based index of the starting row
     */
    startIndex?: string;
    /**
     * How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
     */
    timeoutMs?: number;
  }
  export interface Params$Resource$Jobs$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID of the project that will be billed for the job
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;

    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mimeType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
  export interface Params$Resource$Jobs$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Whether to display jobs owned by all users in the project. Default false
     */
    allUsers?: boolean;
    /**
     * Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
     */
    maxCreationTime?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
     */
    minCreationTime?: string;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
     */
    parentJobId?: string;
    /**
     * Project ID of the jobs to list
     */
    projectId?: string;
    /**
     * Restrict information returned to a set of selected fields
     */
    projection?: string;
    /**
     * Filter for job state
     */
    stateFilter?: string[];
  }
  export interface Params$Resource$Jobs$Query extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID of the project billed for the query
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$QueryRequest;
  }

  export class Resource$Models {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.models.delete
     * @desc Deletes the model specified by modelId from the dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the model to delete.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the model to delete.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Model ID of the model to delete.
     *     modelId: 'my-model-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.models.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.models.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the model to delete.
     * @param {string} params.modelId Required. Model ID of the model to delete.
     * @param {string} params.projectId Required. Project ID of the model to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Models$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Models$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Models$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Models$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * bigquery.models.get
     * @desc Gets the specified model resource by model ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the requested model.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the requested model.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Model ID of the requested model.
     *     modelId: 'my-model-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.models.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.models.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the requested model.
     * @param {string} params.modelId Required. Model ID of the requested model.
     * @param {string} params.projectId Required. Project ID of the requested model.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Models$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Model>;
    get(
      params: Params$Resource$Models$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    get(
      params: Params$Resource$Models$Get,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    get(callback: BodyResponseCallback<Schema$Model>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Models$Get
        | BodyResponseCallback<Schema$Model>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback?: BodyResponseCallback<Schema$Model>
    ): void | GaxiosPromise<Schema$Model> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Model>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Model>(parameters);
      }
    }

    /**
     * bigquery.models.list
     * @desc Lists all models in the specified dataset. Requires the READER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the models to list.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the models to list.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var modelsPage = response['models'];
     *     if (!modelsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < modelsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `modelsPage`:
     *       console.log(JSON.stringify(modelsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.models.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.models.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.models.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the models to list.
     * @param {integer=} params.maxResults The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string=} params.pageToken Page token, returned by a previous call to request the next page of results
     * @param {string} params.projectId Required. Project ID of the models to list.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Models$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListModelsResponse>;
    list(
      params: Params$Resource$Models$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListModelsResponse>,
      callback: BodyResponseCallback<Schema$ListModelsResponse>
    ): void;
    list(
      params: Params$Resource$Models$List,
      callback: BodyResponseCallback<Schema$ListModelsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListModelsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Models$List
        | BodyResponseCallback<Schema$ListModelsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListModelsResponse>,
      callback?: BodyResponseCallback<Schema$ListModelsResponse>
    ): void | GaxiosPromise<Schema$ListModelsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListModelsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListModelsResponse>(parameters);
      }
    }

    /**
     * bigquery.models.patch
     * @desc Patch specific fields in the specified model.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the model to patch.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the model to patch.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Model ID of the model to patch.
     *     modelId: 'my-model-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.models.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.models.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the model to patch.
     * @param {string} params.modelId Required. Model ID of the model to patch.
     * @param {string} params.projectId Required. Project ID of the model to patch.
     * @param {().Model} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Models$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Model>;
    patch(
      params: Params$Resource$Models$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    patch(
      params: Params$Resource$Models$Patch,
      callback: BodyResponseCallback<Schema$Model>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Model>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Models$Patch
        | BodyResponseCallback<Schema$Model>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Model>,
      callback?: BodyResponseCallback<Schema$Model>
    ): void | GaxiosPromise<Schema$Model> {
      let params = (paramsOrCallback || {}) as Params$Resource$Models$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Models$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/models/{+modelId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'modelId'],
        pathParams: ['datasetId', 'modelId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Model>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Model>(parameters);
      }
    }
  }

  export interface Params$Resource$Models$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the model to delete.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the model to delete.
     */
    modelId?: string;
    /**
     * Required. Project ID of the model to delete.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the requested model.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the requested model.
     */
    modelId?: string;
    /**
     * Required. Project ID of the requested model.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the models to list.
     */
    datasetId?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the models to list.
     */
    projectId?: string;
  }
  export interface Params$Resource$Models$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the model to patch.
     */
    datasetId?: string;
    /**
     * Required. Model ID of the model to patch.
     */
    modelId?: string;
    /**
     * Required. Project ID of the model to patch.
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Model;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.projects.getServiceAccount
     * @desc Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID for which the service account is requested.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.projects.getServiceAccount(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.projects.getServiceAccount
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID for which the service account is requested.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getServiceAccount(
      params?: Params$Resource$Projects$Getserviceaccount,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GetServiceAccountResponse>;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GetServiceAccountResponse>,
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      params: Params$Resource$Projects$Getserviceaccount,
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      callback: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void;
    getServiceAccount(
      paramsOrCallback?:
        | Params$Resource$Projects$Getserviceaccount
        | BodyResponseCallback<Schema$GetServiceAccountResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$GetServiceAccountResponse>,
      callback?: BodyResponseCallback<Schema$GetServiceAccountResponse>
    ): void | GaxiosPromise<Schema$GetServiceAccountResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Getserviceaccount;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getserviceaccount;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/bigquery/v2/projects/{projectId}/serviceAccount'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GetServiceAccountResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$GetServiceAccountResponse>(parameters);
      }
    }

    /**
     * bigquery.projects.list
     * @desc Lists all projects to which you have been granted any project role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var projectsPage = response['projects'];
     *     if (!projectsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < projectsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `projectsPage`:
     *       console.log(JSON.stringify(projectsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.projects.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.projects.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.projects.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ProjectList>;
    list(
      params: Params$Resource$Projects$List,
      options: MethodOptions | BodyResponseCallback<Schema$ProjectList>,
      callback: BodyResponseCallback<Schema$ProjectList>
    ): void;
    list(
      params: Params$Resource$Projects$List,
      callback: BodyResponseCallback<Schema$ProjectList>
    ): void;
    list(callback: BodyResponseCallback<Schema$ProjectList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$List
        | BodyResponseCallback<Schema$ProjectList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ProjectList>,
      callback?: BodyResponseCallback<Schema$ProjectList>
    ): void | GaxiosPromise<Schema$ProjectList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Projects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/bigquery/v2/projects').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ProjectList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProjectList>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getserviceaccount
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Project ID for which the service account is requested.
     */
    projectId?: string;
  }
  export interface Params$Resource$Projects$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
  }

  export class Resource$Routines {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.routines.delete
     * @desc Deletes the routine specified by routineId from the dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the routine to delete
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the routine to delete
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Routine ID of the routine to delete
     *     routineId: 'my-routine-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.routines.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.routines.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the routine to delete
     * @param {string} params.projectId Required. Project ID of the routine to delete
     * @param {string} params.routineId Required. Routine ID of the routine to delete
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Routines$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Routines$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Routines$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Routines$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * bigquery.routines.get
     * @desc Gets the specified routine resource by routine ID.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the requested routine
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the requested routine
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Routine ID of the requested routine
     *     routineId: 'my-routine-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.routines.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.routines.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the requested routine
     * @param {string=} params.fieldMask If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     * @param {string} params.projectId Required. Project ID of the requested routine
     * @param {string} params.routineId Required. Routine ID of the requested routine
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Routines$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    get(
      params: Params$Resource$Routines$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    get(
      params: Params$Resource$Routines$Get,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    get(callback: BodyResponseCallback<Schema$Routine>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Routines$Get
        | BodyResponseCallback<Schema$Routine>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback?: BodyResponseCallback<Schema$Routine>
    ): void | GaxiosPromise<Schema$Routine> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }

    /**
     * bigquery.routines.insert
     * @desc Creates a new routine in the dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the new routine
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the new routine
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.routines.insert(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.routines.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the new routine
     * @param {string} params.projectId Required. Project ID of the new routine
     * @param {().Routine} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Routines$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    insert(
      params: Params$Resource$Routines$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    insert(
      params: Params$Resource$Routines$Insert,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Routine>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Routines$Insert
        | BodyResponseCallback<Schema$Routine>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback?: BodyResponseCallback<Schema$Routine>
    ): void | GaxiosPromise<Schema$Routine> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }

    /**
     * bigquery.routines.list
     * @desc Lists all routines in the specified dataset. Requires the READER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the routines to list
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the routines to list
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var routinesPage = response['routines'];
     *     if (!routinesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < routinesPage.length; i++) {
     *       // TODO: Change code below to process each resource in `routinesPage`:
     *       console.log(JSON.stringify(routinesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.routines.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.routines.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.routines.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the routines to list
     * @param {integer=} params.maxResults The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Required. Project ID of the routines to list
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Routines$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutinesResponse>;
    list(
      params: Params$Resource$Routines$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRoutinesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutinesResponse>
    ): void;
    list(
      params: Params$Resource$Routines$List,
      callback: BodyResponseCallback<Schema$ListRoutinesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutinesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Routines$List
        | BodyResponseCallback<Schema$ListRoutinesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRoutinesResponse>,
      callback?: BodyResponseCallback<Schema$ListRoutinesResponse>
    ): void | GaxiosPromise<Schema$ListRoutinesResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ListRoutinesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListRoutinesResponse>(parameters);
      }
    }

    /**
     * bigquery.routines.update
     * @desc Updates information in an existing routine. The update method replaces the entire Routine resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the routine to update
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the routine to update
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Routine ID of the routine to update
     *     routineId: 'my-routine-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.routines.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.routines.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Required. Dataset ID of the routine to update
     * @param {string} params.projectId Required. Project ID of the routine to update
     * @param {string} params.routineId Required. Routine ID of the routine to update
     * @param {().Routine} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Routines$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Routine>;
    update(
      params: Params$Resource$Routines$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    update(
      params: Params$Resource$Routines$Update,
      callback: BodyResponseCallback<Schema$Routine>
    ): void;
    update(callback: BodyResponseCallback<Schema$Routine>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Routines$Update
        | BodyResponseCallback<Schema$Routine>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Routine>,
      callback?: BodyResponseCallback<Schema$Routine>
    ): void | GaxiosPromise<Schema$Routine> {
      let params = (paramsOrCallback || {}) as Params$Resource$Routines$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Routines$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{+projectId}/datasets/{+datasetId}/routines/{+routineId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'routineId'],
        pathParams: ['datasetId', 'projectId', 'routineId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Routine>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Routine>(parameters);
      }
    }
  }

  export interface Params$Resource$Routines$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the routine to delete
     */
    datasetId?: string;
    /**
     * Required. Project ID of the routine to delete
     */
    projectId?: string;
    /**
     * Required. Routine ID of the routine to delete
     */
    routineId?: string;
  }
  export interface Params$Resource$Routines$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the requested routine
     */
    datasetId?: string;
    /**
     * If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
     */
    fieldMask?: string;
    /**
     * Required. Project ID of the requested routine
     */
    projectId?: string;
    /**
     * Required. Routine ID of the requested routine
     */
    routineId?: string;
  }
  export interface Params$Resource$Routines$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the new routine
     */
    datasetId?: string;
    /**
     * Required. Project ID of the new routine
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Routine;
  }
  export interface Params$Resource$Routines$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the routines to list
     */
    datasetId?: string;
    /**
     * The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Required. Project ID of the routines to list
     */
    projectId?: string;
  }
  export interface Params$Resource$Routines$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Required. Dataset ID of the routine to update
     */
    datasetId?: string;
    /**
     * Required. Project ID of the routine to update
     */
    projectId?: string;
    /**
     * Required. Routine ID of the routine to update
     */
    routineId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Routine;
  }

  export class Resource$Tabledata {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.tabledata.insertAll
     * @desc Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the destination table.
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the destination table.
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the destination table.
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tabledata.insertAll(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tabledata.insertAll
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the destination table.
     * @param {string} params.projectId Project ID of the destination table.
     * @param {string} params.tableId Table ID of the destination table.
     * @param {().TableDataInsertAllRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insertAll(
      params?: Params$Resource$Tabledata$Insertall,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableDataInsertAllResponse>;
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>,
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      params: Params$Resource$Tabledata$Insertall,
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      callback: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void;
    insertAll(
      paramsOrCallback?:
        | Params$Resource$Tabledata$Insertall
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TableDataInsertAllResponse>,
      callback?: BodyResponseCallback<Schema$TableDataInsertAllResponse>
    ): void | GaxiosPromise<Schema$TableDataInsertAllResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Tabledata$Insertall;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tabledata$Insertall;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableDataInsertAllResponse>(
          parameters,
          callback
        );
      } else {
        return createAPIRequest<Schema$TableDataInsertAllResponse>(parameters);
      }
    }

    /**
     * bigquery.tabledata.list
     * @desc Retrieves table data from a specified set of rows. Requires the READER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the table to read
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the table to read
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the table to read
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var rowsPage = response['rows'];
     *     if (!rowsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < rowsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `rowsPage`:
     *       console.log(JSON.stringify(rowsPage[i], null, 2));
     *     }
     *
     *     if (response.pageToken) {
     *       request.pageToken = response.pageToken;
     *       bigquery.tabledata.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.tabledata.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tabledata.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to read
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, identifying the result set
     * @param {string} params.projectId Project ID of the table to read
     * @param {string=} params.selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
     * @param {string=} params.startIndex Zero-based index of the starting row to read
     * @param {string} params.tableId Table ID of the table to read
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Tabledata$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableDataList>;
    list(
      params: Params$Resource$Tabledata$List,
      options: MethodOptions | BodyResponseCallback<Schema$TableDataList>,
      callback: BodyResponseCallback<Schema$TableDataList>
    ): void;
    list(
      params: Params$Resource$Tabledata$List,
      callback: BodyResponseCallback<Schema$TableDataList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TableDataList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tabledata$List
        | BodyResponseCallback<Schema$TableDataList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TableDataList>,
      callback?: BodyResponseCallback<Schema$TableDataList>
    ): void | GaxiosPromise<Schema$TableDataList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tabledata$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tabledata$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableDataList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TableDataList>(parameters);
      }
    }
  }

  export interface Params$Resource$Tabledata$Insertall
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the destination table.
     */
    datasetId?: string;
    /**
     * Project ID of the destination table.
     */
    projectId?: string;
    /**
     * Table ID of the destination table.
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TableDataInsertAllRequest;
  }
  export interface Params$Resource$Tabledata$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the table to read
     */
    datasetId?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, identifying the result set
     */
    pageToken?: string;
    /**
     * Project ID of the table to read
     */
    projectId?: string;
    /**
     * List of fields to return (comma-separated). If unspecified, all fields are returned
     */
    selectedFields?: string;
    /**
     * Zero-based index of the starting row to read
     */
    startIndex?: string;
    /**
     * Table ID of the table to read
     */
    tableId?: string;
  }

  export class Resource$Tables {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * bigquery.tables.delete
     * @desc Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the table to delete
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the table to delete
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the table to delete
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tables.delete(request, function(err) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to delete
     * @param {string} params.projectId Project ID of the table to delete
     * @param {string} params.tableId Table ID of the table to delete
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Tables$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Tables$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Tables$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Tables$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'DELETE',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * bigquery.tables.get
     * @desc Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the requested table
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the requested table
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the requested table
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tables.get(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the requested table
     * @param {string} params.projectId Project ID of the requested table
     * @param {string=} params.selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
     * @param {string} params.tableId Table ID of the requested table
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Tables$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    get(
      params: Params$Resource$Tables$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(
      params: Params$Resource$Tables$Get,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    get(callback: BodyResponseCallback<Schema$Table>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Tables$Get
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigquery.tables.insert
     * @desc Creates a new, empty table in the dataset.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the new table
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the new table
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tables.insert(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the new table
     * @param {string} params.projectId Project ID of the new table
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Tables$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    insert(
      params: Params$Resource$Tables$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    insert(
      params: Params$Resource$Tables$Insert,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Table>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Tables$Insert
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigquery.tables.list
     * @desc Lists all tables in the specified dataset. Requires the READER dataset role.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the tables to list
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the tables to list
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     auth: authClient,
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     var tablesPage = response['tables'];
     *     if (!tablesPage) {
     *       return;
     *     }
     *     for (var i = 0; i < tablesPage.length; i++) {
     *       // TODO: Change code below to process each resource in `tablesPage`:
     *       console.log(JSON.stringify(tablesPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       bigquery.tables.list(request, handlePage);
     *     }
     *   };
     *
     *   bigquery.tables.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the tables to list
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Project ID of the tables to list
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Tables$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TableList>;
    list(
      params: Params$Resource$Tables$List,
      options: MethodOptions | BodyResponseCallback<Schema$TableList>,
      callback: BodyResponseCallback<Schema$TableList>
    ): void;
    list(
      params: Params$Resource$Tables$List,
      callback: BodyResponseCallback<Schema$TableList>
    ): void;
    list(callback: BodyResponseCallback<Schema$TableList>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Tables$List
        | BodyResponseCallback<Schema$TableList>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$TableList>,
      callback?: BodyResponseCallback<Schema$TableList>
    ): void | GaxiosPromise<Schema$TableList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$TableList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$TableList>(parameters);
      }
    }

    /**
     * bigquery.tables.patch
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the table to update
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the table to update
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the table to update
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. Only these properties
     *       // will be changed.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tables.patch(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to update
     * @param {string} params.projectId Project ID of the table to update
     * @param {string} params.tableId Table ID of the table to update
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Tables$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    patch(
      params: Params$Resource$Tables$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    patch(
      params: Params$Resource$Tables$Patch,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Table>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Tables$Patch
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }

    /**
     * bigquery.tables.update
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
     * @example
     * * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * const {google} = require('googleapis');
     * var bigquery = google.bigquery('v2');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // Project ID of the table to update
     *     projectId: 'my-project-id',  // TODO: Update placeholder value.
     *
     *     // Dataset ID of the table to update
     *     datasetId: 'my-dataset-id',  // TODO: Update placeholder value.
     *
     *     // Table ID of the table to update
     *     tableId: 'my-table-id',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient,
     *   };
     *
     *   bigquery.tables.update(request, function(err, response) {
     *     if (err) {
     *       console.error(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getClient({
     *     scopes: ['https://www.googleapis.com/auth/cloud-platform']
     *   }).then(client => {
     *     callback(client);
     *   }).catch(err => {
     *     console.error('authentication failed: ', err);
     *   });
     * }
     * @alias bigquery.tables.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to update
     * @param {string} params.projectId Project ID of the table to update
     * @param {string} params.tableId Table ID of the table to update
     * @param {().Table} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
      params?: Params$Resource$Tables$Update,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Table>;
    update(
      params: Params$Resource$Tables$Update,
      options: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    update(
      params: Params$Resource$Tables$Update,
      callback: BodyResponseCallback<Schema$Table>
    ): void;
    update(callback: BodyResponseCallback<Schema$Table>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Tables$Update
        | BodyResponseCallback<Schema$Table>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Table>,
      callback?: BodyResponseCallback<Schema$Table>
    ): void | GaxiosPromise<Schema$Table> {
      let params = (paramsOrCallback || {}) as Params$Resource$Tables$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Tables$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://bigquery.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Table>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Table>(parameters);
      }
    }
  }

  export interface Params$Resource$Tables$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the table to delete
     */
    datasetId?: string;
    /**
     * Project ID of the table to delete
     */
    projectId?: string;
    /**
     * Table ID of the table to delete
     */
    tableId?: string;
  }
  export interface Params$Resource$Tables$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the requested table
     */
    datasetId?: string;
    /**
     * Project ID of the requested table
     */
    projectId?: string;
    /**
     * List of fields to return (comma-separated). If unspecified, all fields are returned
     */
    selectedFields?: string;
    /**
     * Table ID of the requested table
     */
    tableId?: string;
  }
  export interface Params$Resource$Tables$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the new table
     */
    datasetId?: string;
    /**
     * Project ID of the new table
     */
    projectId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Tables$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the tables to list
     */
    datasetId?: string;
    /**
     * Maximum number of results to return
     */
    maxResults?: number;
    /**
     * Page token, returned by a previous call, to request the next page of results
     */
    pageToken?: string;
    /**
     * Project ID of the tables to list
     */
    projectId?: string;
  }
  export interface Params$Resource$Tables$Patch extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the table to update
     */
    datasetId?: string;
    /**
     * Project ID of the table to update
     */
    projectId?: string;
    /**
     * Table ID of the table to update
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
  export interface Params$Resource$Tables$Update extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Dataset ID of the table to update
     */
    datasetId?: string;
    /**
     * Project ID of the table to update
     */
    projectId?: string;
    /**
     * Table ID of the table to update
     */
    tableId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Table;
  }
}