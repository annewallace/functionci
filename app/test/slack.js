var assert = require('assert');
var _ = require('lodash');
var slack = require('../lib/slack');

process.env.SlackOAuthToken = 'xoxp-66196406675-66241893172-266495788663-5bff8cd86b45dae4b51378147e1e99ec';

describe('slack', function() {
    // it('channels', function (done) {
    //     slack.fetch_all_channels({}, function(err, channels) {
    //         //console.log(JSON.stringify(err, null, 3));
    //         console.log(JSON.stringify(channels, null, 3));
    //        done();
    //     });
    // });
    it('create_dialog', function(done) {
        slack.create_dialog('test', function(err) {
            done(err);
        });
    });
});