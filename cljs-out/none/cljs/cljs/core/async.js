// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13209 = (function (f,fn_handler,meta13210){
this.f = f;
this.fn_handler = fn_handler;
this.meta13210 = meta13210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13209.cljs$lang$type = true;
cljs.core.async.t13209.cljs$lang$ctorStr = "cljs.core.async/t13209";
cljs.core.async.t13209.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13209");
});
cljs.core.async.t13209.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13211){var self__ = this;
var _13211__$1 = this;return self__.meta13210;
});
cljs.core.async.t13209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13211,meta13210__$1){var self__ = this;
var _13211__$1 = this;return (new cljs.core.async.t13209(self__.f,self__.fn_handler,meta13210__$1));
});
cljs.core.async.__GT_t13209 = (function __GT_t13209(f__$1,fn_handler__$1,meta13210){return (new cljs.core.async.t13209(f__$1,fn_handler__$1,meta13210));
});
}
return (new cljs.core.async.t13209(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13213 = buff;if(G__13213)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13213.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13213.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13213);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13213);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_13214 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13214);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13214);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13215 = n;var x_13216 = 0;while(true){
if((x_13216 < n__4248__auto___13215))
{(a[x_13216] = 0);
{
var G__13217 = (x_13216 + 1);
x_13216 = G__13217;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__13218 = (i + 1);
i = G__13218;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13222 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13222 = (function (flag,alt_flag,meta13223){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13223 = meta13223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13222.cljs$lang$type = true;
cljs.core.async.t13222.cljs$lang$ctorStr = "cljs.core.async/t13222";
cljs.core.async.t13222.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13222");
});
cljs.core.async.t13222.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13224){var self__ = this;
var _13224__$1 = this;return self__.meta13223;
});
cljs.core.async.t13222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13224,meta13223__$1){var self__ = this;
var _13224__$1 = this;return (new cljs.core.async.t13222(self__.flag,self__.alt_flag,meta13223__$1));
});
cljs.core.async.__GT_t13222 = (function __GT_t13222(flag__$1,alt_flag__$1,meta13223){return (new cljs.core.async.t13222(flag__$1,alt_flag__$1,meta13223));
});
}
return (new cljs.core.async.t13222(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13228 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13228 = (function (cb,flag,alt_handler,meta13229){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13229 = meta13229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13228.cljs$lang$type = true;
cljs.core.async.t13228.cljs$lang$ctorStr = "cljs.core.async/t13228";
cljs.core.async.t13228.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13228");
});
cljs.core.async.t13228.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13230){var self__ = this;
var _13230__$1 = this;return self__.meta13229;
});
cljs.core.async.t13228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13230,meta13229__$1){var self__ = this;
var _13230__$1 = this;return (new cljs.core.async.t13228(self__.cb,self__.flag,self__.alt_handler,meta13229__$1));
});
cljs.core.async.__GT_t13228 = (function __GT_t13228(cb__$1,flag__$1,alt_handler__$1,meta13229){return (new cljs.core.async.t13228(cb__$1,flag__$1,alt_handler__$1,meta13229));
});
}
return (new cljs.core.async.t13228(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13231_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13231_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__13232 = (i + 1);
i = G__13232;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__13233){var map__13235 = p__13233;var map__13235__$1 = ((cljs.core.seq_QMARK_.call(null,map__13235))?cljs.core.apply.call(null,cljs.core.hash_map,map__13235):map__13235);var opts = map__13235__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13233 = null;if (arguments.length > 1) {
  p__13233 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13233);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13236){
var ports = cljs.core.first(arglist__13236);
var p__13233 = cljs.core.rest(arglist__13236);
return alts_BANG___delegate(ports,p__13233);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13244 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13244 = (function (ch,f,map_LT_,meta13245){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13245 = meta13245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13244.cljs$lang$type = true;
cljs.core.async.t13244.cljs$lang$ctorStr = "cljs.core.async/t13244";
cljs.core.async.t13244.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13244");
});
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13247 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13247 = (function (fn1,_,meta13245,ch,f,map_LT_,meta13248){
this.fn1 = fn1;
this._ = _;
this.meta13245 = meta13245;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13248 = meta13248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13247.cljs$lang$type = true;
cljs.core.async.t13247.cljs$lang$ctorStr = "cljs.core.async/t13247";
cljs.core.async.t13247.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13247");
});
cljs.core.async.t13247.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13247.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13237_SHARP_){return f1.call(null,(((p1__13237_SHARP_ == null))?null:self__.f.call(null,p1__13237_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13249){var self__ = this;
var _13249__$1 = this;return self__.meta13248;
});
cljs.core.async.t13247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13249,meta13248__$1){var self__ = this;
var _13249__$1 = this;return (new cljs.core.async.t13247(self__.fn1,self__._,self__.meta13245,self__.ch,self__.f,self__.map_LT_,meta13248__$1));
});
cljs.core.async.__GT_t13247 = (function __GT_t13247(fn1__$1,___$2,meta13245__$1,ch__$2,f__$2,map_LT___$2,meta13248){return (new cljs.core.async.t13247(fn1__$1,___$2,meta13245__$1,ch__$2,f__$2,map_LT___$2,meta13248));
});
}
return (new cljs.core.async.t13247(fn1,___$1,self__.meta13245,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13246){var self__ = this;
var _13246__$1 = this;return self__.meta13245;
});
cljs.core.async.t13244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13246,meta13245__$1){var self__ = this;
var _13246__$1 = this;return (new cljs.core.async.t13244(self__.ch,self__.f,self__.map_LT_,meta13245__$1));
});
cljs.core.async.__GT_t13244 = (function __GT_t13244(ch__$1,f__$1,map_LT___$1,meta13245){return (new cljs.core.async.t13244(ch__$1,f__$1,map_LT___$1,meta13245));
});
}
return (new cljs.core.async.t13244(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13253 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13253 = (function (ch,f,map_GT_,meta13254){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13254 = meta13254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13253.cljs$lang$type = true;
cljs.core.async.t13253.cljs$lang$ctorStr = "cljs.core.async/t13253";
cljs.core.async.t13253.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13253");
});
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13255){var self__ = this;
var _13255__$1 = this;return self__.meta13254;
});
cljs.core.async.t13253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13255,meta13254__$1){var self__ = this;
var _13255__$1 = this;return (new cljs.core.async.t13253(self__.ch,self__.f,self__.map_GT_,meta13254__$1));
});
cljs.core.async.__GT_t13253 = (function __GT_t13253(ch__$1,f__$1,map_GT___$1,meta13254){return (new cljs.core.async.t13253(ch__$1,f__$1,map_GT___$1,meta13254));
});
}
return (new cljs.core.async.t13253(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13259 = (function (ch,p,filter_GT_,meta13260){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13260 = meta13260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13259.cljs$lang$type = true;
cljs.core.async.t13259.cljs$lang$ctorStr = "cljs.core.async/t13259";
cljs.core.async.t13259.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13259");
});
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13261){var self__ = this;
var _13261__$1 = this;return self__.meta13260;
});
cljs.core.async.t13259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13261,meta13260__$1){var self__ = this;
var _13261__$1 = this;return (new cljs.core.async.t13259(self__.ch,self__.p,self__.filter_GT_,meta13260__$1));
});
cljs.core.async.__GT_t13259 = (function __GT_t13259(ch__$1,p__$1,filter_GT___$1,meta13260){return (new cljs.core.async.t13259(ch__$1,p__$1,filter_GT___$1,meta13260));
});
}
return (new cljs.core.async.t13259(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13323){var state_val_13324 = (state_13323[1]);if((state_val_13324 === 1))
{var state_13323__$1 = state_13323;var statearr_13325_13345 = state_13323__$1;(statearr_13325_13345[2] = null);
(statearr_13325_13345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 2))
{var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13323__$1,4,ch);
} else
{if((state_val_13324 === 3))
{var inst_13321 = (state_13323[2]);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13323__$1,inst_13321);
} else
{if((state_val_13324 === 4))
{var inst_13305 = (state_13323[7]);var inst_13305__$1 = (state_13323[2]);var inst_13306 = (inst_13305__$1 == null);var state_13323__$1 = (function (){var statearr_13326 = state_13323;(statearr_13326[7] = inst_13305__$1);
return statearr_13326;
})();if(cljs.core.truth_(inst_13306))
{var statearr_13327_13346 = state_13323__$1;(statearr_13327_13346[1] = 5);
} else
{var statearr_13328_13347 = state_13323__$1;(statearr_13328_13347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 5))
{var inst_13308 = cljs.core.async.close_BANG_.call(null,out);var state_13323__$1 = state_13323;var statearr_13329_13348 = state_13323__$1;(statearr_13329_13348[2] = inst_13308);
(statearr_13329_13348[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 6))
{var inst_13305 = (state_13323[7]);var inst_13310 = p.call(null,inst_13305);var state_13323__$1 = state_13323;if(cljs.core.truth_(inst_13310))
{var statearr_13330_13349 = state_13323__$1;(statearr_13330_13349[1] = 8);
} else
{var statearr_13331_13350 = state_13323__$1;(statearr_13331_13350[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 7))
{var inst_13319 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13332_13351 = state_13323__$1;(statearr_13332_13351[2] = inst_13319);
(statearr_13332_13351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 8))
{var inst_13305 = (state_13323[7]);var state_13323__$1 = state_13323;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13323__$1,11,out,inst_13305);
} else
{if((state_val_13324 === 9))
{var state_13323__$1 = state_13323;var statearr_13333_13352 = state_13323__$1;(statearr_13333_13352[2] = null);
(statearr_13333_13352[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 10))
{var inst_13316 = (state_13323[2]);var state_13323__$1 = (function (){var statearr_13334 = state_13323;(statearr_13334[8] = inst_13316);
return statearr_13334;
})();var statearr_13335_13353 = state_13323__$1;(statearr_13335_13353[2] = null);
(statearr_13335_13353[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13324 === 11))
{var inst_13313 = (state_13323[2]);var state_13323__$1 = state_13323;var statearr_13336_13354 = state_13323__$1;(statearr_13336_13354[2] = inst_13313);
(statearr_13336_13354[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13340 = [null,null,null,null,null,null,null,null,null];(statearr_13340[0] = state_machine__5507__auto__);
(statearr_13340[1] = 1);
return statearr_13340;
});
var state_machine__5507__auto____1 = (function (state_13323){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13323);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13341){if((e13341 instanceof Object))
{var ex__5510__auto__ = e13341;var statearr_13342_13355 = state_13323;(statearr_13342_13355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13356 = state_13323;
state_13323 = G__13356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13323){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13343 = f__5522__auto__.call(null);(statearr_13343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13344);
return statearr_13343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13508){var state_val_13509 = (state_13508[1]);if((state_val_13509 === 1))
{var state_13508__$1 = state_13508;var statearr_13510_13547 = state_13508__$1;(statearr_13510_13547[2] = null);
(statearr_13510_13547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 2))
{var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13508__$1,4,in$);
} else
{if((state_val_13509 === 3))
{var inst_13506 = (state_13508[2]);var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13508__$1,inst_13506);
} else
{if((state_val_13509 === 4))
{var inst_13454 = (state_13508[7]);var inst_13454__$1 = (state_13508[2]);var inst_13455 = (inst_13454__$1 == null);var state_13508__$1 = (function (){var statearr_13511 = state_13508;(statearr_13511[7] = inst_13454__$1);
return statearr_13511;
})();if(cljs.core.truth_(inst_13455))
{var statearr_13512_13548 = state_13508__$1;(statearr_13512_13548[1] = 5);
} else
{var statearr_13513_13549 = state_13508__$1;(statearr_13513_13549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 5))
{var inst_13457 = cljs.core.async.close_BANG_.call(null,out);var state_13508__$1 = state_13508;var statearr_13514_13550 = state_13508__$1;(statearr_13514_13550[2] = inst_13457);
(statearr_13514_13550[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 6))
{var inst_13454 = (state_13508[7]);var inst_13459 = f.call(null,inst_13454);var inst_13464 = cljs.core.seq.call(null,inst_13459);var inst_13465 = inst_13464;var inst_13466 = null;var inst_13467 = 0;var inst_13468 = 0;var state_13508__$1 = (function (){var statearr_13515 = state_13508;(statearr_13515[8] = inst_13468);
(statearr_13515[9] = inst_13467);
(statearr_13515[10] = inst_13466);
(statearr_13515[11] = inst_13465);
return statearr_13515;
})();var statearr_13516_13551 = state_13508__$1;(statearr_13516_13551[2] = null);
(statearr_13516_13551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 7))
{var inst_13504 = (state_13508[2]);var state_13508__$1 = state_13508;var statearr_13517_13552 = state_13508__$1;(statearr_13517_13552[2] = inst_13504);
(statearr_13517_13552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 8))
{var inst_13468 = (state_13508[8]);var inst_13467 = (state_13508[9]);var inst_13470 = (inst_13468 < inst_13467);var inst_13471 = inst_13470;var state_13508__$1 = state_13508;if(cljs.core.truth_(inst_13471))
{var statearr_13518_13553 = state_13508__$1;(statearr_13518_13553[1] = 10);
} else
{var statearr_13519_13554 = state_13508__$1;(statearr_13519_13554[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 9))
{var inst_13501 = (state_13508[2]);var state_13508__$1 = (function (){var statearr_13520 = state_13508;(statearr_13520[12] = inst_13501);
return statearr_13520;
})();var statearr_13521_13555 = state_13508__$1;(statearr_13521_13555[2] = null);
(statearr_13521_13555[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 10))
{var inst_13468 = (state_13508[8]);var inst_13466 = (state_13508[10]);var inst_13473 = cljs.core._nth.call(null,inst_13466,inst_13468);var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13508__$1,13,out,inst_13473);
} else
{if((state_val_13509 === 11))
{var inst_13479 = (state_13508[13]);var inst_13465 = (state_13508[11]);var inst_13479__$1 = cljs.core.seq.call(null,inst_13465);var state_13508__$1 = (function (){var statearr_13525 = state_13508;(statearr_13525[13] = inst_13479__$1);
return statearr_13525;
})();if(inst_13479__$1)
{var statearr_13526_13556 = state_13508__$1;(statearr_13526_13556[1] = 14);
} else
{var statearr_13527_13557 = state_13508__$1;(statearr_13527_13557[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 12))
{var inst_13499 = (state_13508[2]);var state_13508__$1 = state_13508;var statearr_13528_13558 = state_13508__$1;(statearr_13528_13558[2] = inst_13499);
(statearr_13528_13558[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 13))
{var inst_13468 = (state_13508[8]);var inst_13467 = (state_13508[9]);var inst_13466 = (state_13508[10]);var inst_13465 = (state_13508[11]);var inst_13475 = (state_13508[2]);var inst_13476 = (inst_13468 + 1);var tmp13522 = inst_13467;var tmp13523 = inst_13466;var tmp13524 = inst_13465;var inst_13465__$1 = tmp13524;var inst_13466__$1 = tmp13523;var inst_13467__$1 = tmp13522;var inst_13468__$1 = inst_13476;var state_13508__$1 = (function (){var statearr_13529 = state_13508;(statearr_13529[14] = inst_13475);
(statearr_13529[8] = inst_13468__$1);
(statearr_13529[9] = inst_13467__$1);
(statearr_13529[10] = inst_13466__$1);
(statearr_13529[11] = inst_13465__$1);
return statearr_13529;
})();var statearr_13530_13559 = state_13508__$1;(statearr_13530_13559[2] = null);
(statearr_13530_13559[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 14))
{var inst_13479 = (state_13508[13]);var inst_13481 = cljs.core.chunked_seq_QMARK_.call(null,inst_13479);var state_13508__$1 = state_13508;if(inst_13481)
{var statearr_13531_13560 = state_13508__$1;(statearr_13531_13560[1] = 17);
} else
{var statearr_13532_13561 = state_13508__$1;(statearr_13532_13561[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 15))
{var state_13508__$1 = state_13508;var statearr_13533_13562 = state_13508__$1;(statearr_13533_13562[2] = null);
(statearr_13533_13562[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 16))
{var inst_13497 = (state_13508[2]);var state_13508__$1 = state_13508;var statearr_13534_13563 = state_13508__$1;(statearr_13534_13563[2] = inst_13497);
(statearr_13534_13563[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 17))
{var inst_13479 = (state_13508[13]);var inst_13483 = cljs.core.chunk_first.call(null,inst_13479);var inst_13484 = cljs.core.chunk_rest.call(null,inst_13479);var inst_13485 = cljs.core.count.call(null,inst_13483);var inst_13465 = inst_13484;var inst_13466 = inst_13483;var inst_13467 = inst_13485;var inst_13468 = 0;var state_13508__$1 = (function (){var statearr_13535 = state_13508;(statearr_13535[8] = inst_13468);
(statearr_13535[9] = inst_13467);
(statearr_13535[10] = inst_13466);
(statearr_13535[11] = inst_13465);
return statearr_13535;
})();var statearr_13536_13564 = state_13508__$1;(statearr_13536_13564[2] = null);
(statearr_13536_13564[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 18))
{var inst_13479 = (state_13508[13]);var inst_13488 = cljs.core.first.call(null,inst_13479);var state_13508__$1 = state_13508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13508__$1,20,out,inst_13488);
} else
{if((state_val_13509 === 19))
{var inst_13494 = (state_13508[2]);var state_13508__$1 = state_13508;var statearr_13537_13565 = state_13508__$1;(statearr_13537_13565[2] = inst_13494);
(statearr_13537_13565[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13509 === 20))
{var inst_13479 = (state_13508[13]);var inst_13490 = (state_13508[2]);var inst_13491 = cljs.core.next.call(null,inst_13479);var inst_13465 = inst_13491;var inst_13466 = null;var inst_13467 = 0;var inst_13468 = 0;var state_13508__$1 = (function (){var statearr_13538 = state_13508;(statearr_13538[8] = inst_13468);
(statearr_13538[9] = inst_13467);
(statearr_13538[15] = inst_13490);
(statearr_13538[10] = inst_13466);
(statearr_13538[11] = inst_13465);
return statearr_13538;
})();var statearr_13539_13566 = state_13508__$1;(statearr_13539_13566[2] = null);
(statearr_13539_13566[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13543[0] = state_machine__5507__auto__);
(statearr_13543[1] = 1);
return statearr_13543;
});
var state_machine__5507__auto____1 = (function (state_13508){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13544){if((e13544 instanceof Object))
{var ex__5510__auto__ = e13544;var statearr_13545_13567 = state_13508;(statearr_13545_13567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13568 = state_13508;
state_13508 = G__13568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13508){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13546 = f__5522__auto__.call(null);(statearr_13546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13649 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13628){var state_val_13629 = (state_13628[1]);if((state_val_13629 === 1))
{var state_13628__$1 = state_13628;var statearr_13630_13650 = state_13628__$1;(statearr_13630_13650[2] = null);
(statearr_13630_13650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 2))
{var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13628__$1,4,from);
} else
{if((state_val_13629 === 3))
{var inst_13626 = (state_13628[2]);var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13628__$1,inst_13626);
} else
{if((state_val_13629 === 4))
{var inst_13611 = (state_13628[7]);var inst_13611__$1 = (state_13628[2]);var inst_13612 = (inst_13611__$1 == null);var state_13628__$1 = (function (){var statearr_13631 = state_13628;(statearr_13631[7] = inst_13611__$1);
return statearr_13631;
})();if(cljs.core.truth_(inst_13612))
{var statearr_13632_13651 = state_13628__$1;(statearr_13632_13651[1] = 5);
} else
{var statearr_13633_13652 = state_13628__$1;(statearr_13633_13652[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 5))
{var state_13628__$1 = state_13628;if(cljs.core.truth_(close_QMARK_))
{var statearr_13634_13653 = state_13628__$1;(statearr_13634_13653[1] = 8);
} else
{var statearr_13635_13654 = state_13628__$1;(statearr_13635_13654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 6))
{var inst_13611 = (state_13628[7]);var state_13628__$1 = state_13628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13628__$1,11,to,inst_13611);
} else
{if((state_val_13629 === 7))
{var inst_13624 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13636_13655 = state_13628__$1;(statearr_13636_13655[2] = inst_13624);
(statearr_13636_13655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 8))
{var inst_13615 = cljs.core.async.close_BANG_.call(null,to);var state_13628__$1 = state_13628;var statearr_13637_13656 = state_13628__$1;(statearr_13637_13656[2] = inst_13615);
(statearr_13637_13656[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 9))
{var state_13628__$1 = state_13628;var statearr_13638_13657 = state_13628__$1;(statearr_13638_13657[2] = null);
(statearr_13638_13657[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 10))
{var inst_13618 = (state_13628[2]);var state_13628__$1 = state_13628;var statearr_13639_13658 = state_13628__$1;(statearr_13639_13658[2] = inst_13618);
(statearr_13639_13658[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13629 === 11))
{var inst_13621 = (state_13628[2]);var state_13628__$1 = (function (){var statearr_13640 = state_13628;(statearr_13640[8] = inst_13621);
return statearr_13640;
})();var statearr_13641_13659 = state_13628__$1;(statearr_13641_13659[2] = null);
(statearr_13641_13659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13645 = [null,null,null,null,null,null,null,null,null];(statearr_13645[0] = state_machine__5507__auto__);
(statearr_13645[1] = 1);
return statearr_13645;
});
var state_machine__5507__auto____1 = (function (state_13628){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13646){if((e13646 instanceof Object))
{var ex__5510__auto__ = e13646;var statearr_13647_13660 = state_13628;(statearr_13647_13660[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13646;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13661 = state_13628;
state_13628 = G__13661;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13628){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13648 = f__5522__auto__.call(null);(statearr_13648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13649);
return statearr_13648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13726){var state_val_13727 = (state_13726[1]);if((state_val_13727 === 1))
{var state_13726__$1 = state_13726;var statearr_13728_13749 = state_13726__$1;(statearr_13728_13749[2] = null);
(statearr_13728_13749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 2))
{var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13726__$1,4,ch);
} else
{if((state_val_13727 === 3))
{var inst_13724 = (state_13726[2]);var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13726__$1,inst_13724);
} else
{if((state_val_13727 === 4))
{var inst_13707 = (state_13726[7]);var inst_13707__$1 = (state_13726[2]);var inst_13708 = (inst_13707__$1 == null);var state_13726__$1 = (function (){var statearr_13729 = state_13726;(statearr_13729[7] = inst_13707__$1);
return statearr_13729;
})();if(cljs.core.truth_(inst_13708))
{var statearr_13730_13750 = state_13726__$1;(statearr_13730_13750[1] = 5);
} else
{var statearr_13731_13751 = state_13726__$1;(statearr_13731_13751[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 5))
{var inst_13710 = cljs.core.async.close_BANG_.call(null,tc);var inst_13711 = cljs.core.async.close_BANG_.call(null,fc);var state_13726__$1 = (function (){var statearr_13732 = state_13726;(statearr_13732[8] = inst_13710);
return statearr_13732;
})();var statearr_13733_13752 = state_13726__$1;(statearr_13733_13752[2] = inst_13711);
(statearr_13733_13752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 6))
{var inst_13707 = (state_13726[7]);var inst_13713 = p.call(null,inst_13707);var state_13726__$1 = state_13726;if(cljs.core.truth_(inst_13713))
{var statearr_13734_13753 = state_13726__$1;(statearr_13734_13753[1] = 9);
} else
{var statearr_13735_13754 = state_13726__$1;(statearr_13735_13754[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 7))
{var inst_13722 = (state_13726[2]);var state_13726__$1 = state_13726;var statearr_13736_13755 = state_13726__$1;(statearr_13736_13755[2] = inst_13722);
(statearr_13736_13755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 8))
{var inst_13719 = (state_13726[2]);var state_13726__$1 = (function (){var statearr_13737 = state_13726;(statearr_13737[9] = inst_13719);
return statearr_13737;
})();var statearr_13738_13756 = state_13726__$1;(statearr_13738_13756[2] = null);
(statearr_13738_13756[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 9))
{var state_13726__$1 = state_13726;var statearr_13739_13757 = state_13726__$1;(statearr_13739_13757[2] = tc);
(statearr_13739_13757[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 10))
{var state_13726__$1 = state_13726;var statearr_13740_13758 = state_13726__$1;(statearr_13740_13758[2] = fc);
(statearr_13740_13758[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13727 === 11))
{var inst_13707 = (state_13726[7]);var inst_13717 = (state_13726[2]);var state_13726__$1 = state_13726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13726__$1,8,inst_13717,inst_13707);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13744 = [null,null,null,null,null,null,null,null,null,null];(statearr_13744[0] = state_machine__5507__auto__);
(statearr_13744[1] = 1);
return statearr_13744;
});
var state_machine__5507__auto____1 = (function (state_13726){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13726);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13745){if((e13745 instanceof Object))
{var ex__5510__auto__ = e13745;var statearr_13746_13759 = state_13726;(statearr_13746_13759[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13760 = state_13726;
state_13726 = G__13760;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13726){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13747 = f__5522__auto__.call(null);(statearr_13747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13748);
return statearr_13747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13807){var state_val_13808 = (state_13807[1]);if((state_val_13808 === 7))
{var inst_13803 = (state_13807[2]);var state_13807__$1 = state_13807;var statearr_13809_13825 = state_13807__$1;(statearr_13809_13825[2] = inst_13803);
(statearr_13809_13825[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13808 === 6))
{var inst_13793 = (state_13807[7]);var inst_13796 = (state_13807[8]);var inst_13800 = f.call(null,inst_13793,inst_13796);var inst_13793__$1 = inst_13800;var state_13807__$1 = (function (){var statearr_13810 = state_13807;(statearr_13810[7] = inst_13793__$1);
return statearr_13810;
})();var statearr_13811_13826 = state_13807__$1;(statearr_13811_13826[2] = null);
(statearr_13811_13826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13808 === 5))
{var inst_13793 = (state_13807[7]);var state_13807__$1 = state_13807;var statearr_13812_13827 = state_13807__$1;(statearr_13812_13827[2] = inst_13793);
(statearr_13812_13827[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13808 === 4))
{var inst_13796 = (state_13807[8]);var inst_13796__$1 = (state_13807[2]);var inst_13797 = (inst_13796__$1 == null);var state_13807__$1 = (function (){var statearr_13813 = state_13807;(statearr_13813[8] = inst_13796__$1);
return statearr_13813;
})();if(cljs.core.truth_(inst_13797))
{var statearr_13814_13828 = state_13807__$1;(statearr_13814_13828[1] = 5);
} else
{var statearr_13815_13829 = state_13807__$1;(statearr_13815_13829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13808 === 3))
{var inst_13805 = (state_13807[2]);var state_13807__$1 = state_13807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13807__$1,inst_13805);
} else
{if((state_val_13808 === 2))
{var state_13807__$1 = state_13807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13807__$1,4,ch);
} else
{if((state_val_13808 === 1))
{var inst_13793 = init;var state_13807__$1 = (function (){var statearr_13816 = state_13807;(statearr_13816[7] = inst_13793);
return statearr_13816;
})();var statearr_13817_13830 = state_13807__$1;(statearr_13817_13830[2] = null);
(statearr_13817_13830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13821 = [null,null,null,null,null,null,null,null,null];(statearr_13821[0] = state_machine__5507__auto__);
(statearr_13821[1] = 1);
return statearr_13821;
});
var state_machine__5507__auto____1 = (function (state_13807){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13807);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13822){if((e13822 instanceof Object))
{var ex__5510__auto__ = e13822;var statearr_13823_13831 = state_13807;(statearr_13823_13831[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13807);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13832 = state_13807;
state_13807 = G__13832;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13807){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13824 = f__5522__auto__.call(null);(statearr_13824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13894){var state_val_13895 = (state_13894[1]);if((state_val_13895 === 1))
{var inst_13874 = cljs.core.seq.call(null,coll);var inst_13875 = inst_13874;var state_13894__$1 = (function (){var statearr_13896 = state_13894;(statearr_13896[7] = inst_13875);
return statearr_13896;
})();var statearr_13897_13915 = state_13894__$1;(statearr_13897_13915[2] = null);
(statearr_13897_13915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 2))
{var inst_13875 = (state_13894[7]);var state_13894__$1 = state_13894;if(cljs.core.truth_(inst_13875))
{var statearr_13898_13916 = state_13894__$1;(statearr_13898_13916[1] = 4);
} else
{var statearr_13899_13917 = state_13894__$1;(statearr_13899_13917[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 3))
{var inst_13892 = (state_13894[2]);var state_13894__$1 = state_13894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13894__$1,inst_13892);
} else
{if((state_val_13895 === 4))
{var inst_13875 = (state_13894[7]);var inst_13878 = cljs.core.first.call(null,inst_13875);var state_13894__$1 = state_13894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13894__$1,7,ch,inst_13878);
} else
{if((state_val_13895 === 5))
{var state_13894__$1 = state_13894;if(cljs.core.truth_(close_QMARK_))
{var statearr_13900_13918 = state_13894__$1;(statearr_13900_13918[1] = 8);
} else
{var statearr_13901_13919 = state_13894__$1;(statearr_13901_13919[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 6))
{var inst_13890 = (state_13894[2]);var state_13894__$1 = state_13894;var statearr_13902_13920 = state_13894__$1;(statearr_13902_13920[2] = inst_13890);
(statearr_13902_13920[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 7))
{var inst_13875 = (state_13894[7]);var inst_13880 = (state_13894[2]);var inst_13881 = cljs.core.next.call(null,inst_13875);var inst_13875__$1 = inst_13881;var state_13894__$1 = (function (){var statearr_13903 = state_13894;(statearr_13903[8] = inst_13880);
(statearr_13903[7] = inst_13875__$1);
return statearr_13903;
})();var statearr_13904_13921 = state_13894__$1;(statearr_13904_13921[2] = null);
(statearr_13904_13921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 8))
{var inst_13885 = cljs.core.async.close_BANG_.call(null,ch);var state_13894__$1 = state_13894;var statearr_13905_13922 = state_13894__$1;(statearr_13905_13922[2] = inst_13885);
(statearr_13905_13922[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 9))
{var state_13894__$1 = state_13894;var statearr_13906_13923 = state_13894__$1;(statearr_13906_13923[2] = null);
(statearr_13906_13923[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13895 === 10))
{var inst_13888 = (state_13894[2]);var state_13894__$1 = state_13894;var statearr_13907_13924 = state_13894__$1;(statearr_13907_13924[2] = inst_13888);
(statearr_13907_13924[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_13911 = [null,null,null,null,null,null,null,null,null];(statearr_13911[0] = state_machine__5507__auto__);
(statearr_13911[1] = 1);
return statearr_13911;
});
var state_machine__5507__auto____1 = (function (state_13894){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13894);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13912){if((e13912 instanceof Object))
{var ex__5510__auto__ = e13912;var statearr_13913_13925 = state_13894;(statearr_13913_13925[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13926 = state_13894;
state_13894 = G__13926;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13894){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13914 = f__5522__auto__.call(null);(statearr_13914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13928 = {};return obj13928;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13930 = {};return obj13930;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14154 = (function (cs,ch,mult,meta14155){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14155 = meta14155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14154.cljs$lang$type = true;
cljs.core.async.t14154.cljs$lang$ctorStr = "cljs.core.async/t14154";
cljs.core.async.t14154.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14154");
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14154.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14156){var self__ = this;
var _14156__$1 = this;return self__.meta14155;
});})(cs))
;
cljs.core.async.t14154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14156,meta14155__$1){var self__ = this;
var _14156__$1 = this;return (new cljs.core.async.t14154(self__.cs,self__.ch,self__.mult,meta14155__$1));
});})(cs))
;
cljs.core.async.__GT_t14154 = ((function (cs){
return (function __GT_t14154(cs__$1,ch__$1,mult__$1,meta14155){return (new cljs.core.async.t14154(cs__$1,ch__$1,mult__$1,meta14155));
});})(cs))
;
}
return (new cljs.core.async.t14154(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14291){var state_val_14292 = (state_14291[1]);if((state_val_14292 === 32))
{var inst_14159 = (state_14291[7]);var inst_14235 = (state_14291[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14291,31,Object,null,30);var inst_14242 = cljs.core.async.put_BANG_.call(null,inst_14235,inst_14159,done);var state_14291__$1 = state_14291;var statearr_14293_14378 = state_14291__$1;(statearr_14293_14378[2] = inst_14242);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 1))
{var state_14291__$1 = state_14291;var statearr_14294_14379 = state_14291__$1;(statearr_14294_14379[2] = null);
(statearr_14294_14379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 33))
{var inst_14248 = (state_14291[9]);var inst_14250 = cljs.core.chunked_seq_QMARK_.call(null,inst_14248);var state_14291__$1 = state_14291;if(inst_14250)
{var statearr_14295_14380 = state_14291__$1;(statearr_14295_14380[1] = 36);
} else
{var statearr_14296_14381 = state_14291__$1;(statearr_14296_14381[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 2))
{var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14291__$1,4,ch);
} else
{if((state_val_14292 === 34))
{var state_14291__$1 = state_14291;var statearr_14297_14382 = state_14291__$1;(statearr_14297_14382[2] = null);
(statearr_14297_14382[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 3))
{var inst_14289 = (state_14291[2]);var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14291__$1,inst_14289);
} else
{if((state_val_14292 === 35))
{var inst_14273 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14298_14383 = state_14291__$1;(statearr_14298_14383[2] = inst_14273);
(statearr_14298_14383[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 4))
{var inst_14159 = (state_14291[7]);var inst_14159__$1 = (state_14291[2]);var inst_14160 = (inst_14159__$1 == null);var state_14291__$1 = (function (){var statearr_14299 = state_14291;(statearr_14299[7] = inst_14159__$1);
return statearr_14299;
})();if(cljs.core.truth_(inst_14160))
{var statearr_14300_14384 = state_14291__$1;(statearr_14300_14384[1] = 5);
} else
{var statearr_14301_14385 = state_14291__$1;(statearr_14301_14385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 36))
{var inst_14248 = (state_14291[9]);var inst_14252 = cljs.core.chunk_first.call(null,inst_14248);var inst_14253 = cljs.core.chunk_rest.call(null,inst_14248);var inst_14254 = cljs.core.count.call(null,inst_14252);var inst_14227 = inst_14253;var inst_14228 = inst_14252;var inst_14229 = inst_14254;var inst_14230 = 0;var state_14291__$1 = (function (){var statearr_14302 = state_14291;(statearr_14302[10] = inst_14228);
(statearr_14302[11] = inst_14229);
(statearr_14302[12] = inst_14227);
(statearr_14302[13] = inst_14230);
return statearr_14302;
})();var statearr_14303_14386 = state_14291__$1;(statearr_14303_14386[2] = null);
(statearr_14303_14386[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 5))
{var inst_14166 = cljs.core.deref.call(null,cs);var inst_14167 = cljs.core.seq.call(null,inst_14166);var inst_14168 = inst_14167;var inst_14169 = null;var inst_14170 = 0;var inst_14171 = 0;var state_14291__$1 = (function (){var statearr_14304 = state_14291;(statearr_14304[14] = inst_14168);
(statearr_14304[15] = inst_14169);
(statearr_14304[16] = inst_14170);
(statearr_14304[17] = inst_14171);
return statearr_14304;
})();var statearr_14305_14387 = state_14291__$1;(statearr_14305_14387[2] = null);
(statearr_14305_14387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 37))
{var inst_14248 = (state_14291[9]);var inst_14257 = cljs.core.first.call(null,inst_14248);var state_14291__$1 = (function (){var statearr_14306 = state_14291;(statearr_14306[18] = inst_14257);
return statearr_14306;
})();var statearr_14307_14388 = state_14291__$1;(statearr_14307_14388[2] = null);
(statearr_14307_14388[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 6))
{var inst_14219 = (state_14291[19]);var inst_14218 = cljs.core.deref.call(null,cs);var inst_14219__$1 = cljs.core.keys.call(null,inst_14218);var inst_14220 = cljs.core.count.call(null,inst_14219__$1);var inst_14221 = cljs.core.reset_BANG_.call(null,dctr,inst_14220);var inst_14226 = cljs.core.seq.call(null,inst_14219__$1);var inst_14227 = inst_14226;var inst_14228 = null;var inst_14229 = 0;var inst_14230 = 0;var state_14291__$1 = (function (){var statearr_14308 = state_14291;(statearr_14308[20] = inst_14221);
(statearr_14308[10] = inst_14228);
(statearr_14308[11] = inst_14229);
(statearr_14308[12] = inst_14227);
(statearr_14308[19] = inst_14219__$1);
(statearr_14308[13] = inst_14230);
return statearr_14308;
})();var statearr_14309_14389 = state_14291__$1;(statearr_14309_14389[2] = null);
(statearr_14309_14389[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 38))
{var inst_14270 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14310_14390 = state_14291__$1;(statearr_14310_14390[2] = inst_14270);
(statearr_14310_14390[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 7))
{var inst_14287 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14311_14391 = state_14291__$1;(statearr_14311_14391[2] = inst_14287);
(statearr_14311_14391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 39))
{var inst_14248 = (state_14291[9]);var inst_14266 = (state_14291[2]);var inst_14267 = cljs.core.next.call(null,inst_14248);var inst_14227 = inst_14267;var inst_14228 = null;var inst_14229 = 0;var inst_14230 = 0;var state_14291__$1 = (function (){var statearr_14312 = state_14291;(statearr_14312[21] = inst_14266);
(statearr_14312[10] = inst_14228);
(statearr_14312[11] = inst_14229);
(statearr_14312[12] = inst_14227);
(statearr_14312[13] = inst_14230);
return statearr_14312;
})();var statearr_14313_14392 = state_14291__$1;(statearr_14313_14392[2] = null);
(statearr_14313_14392[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 8))
{var inst_14170 = (state_14291[16]);var inst_14171 = (state_14291[17]);var inst_14173 = (inst_14171 < inst_14170);var inst_14174 = inst_14173;var state_14291__$1 = state_14291;if(cljs.core.truth_(inst_14174))
{var statearr_14314_14393 = state_14291__$1;(statearr_14314_14393[1] = 10);
} else
{var statearr_14315_14394 = state_14291__$1;(statearr_14315_14394[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 40))
{var inst_14257 = (state_14291[18]);var inst_14258 = (state_14291[2]);var inst_14259 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14260 = cljs.core.async.untap_STAR_.call(null,m,inst_14257);var state_14291__$1 = (function (){var statearr_14316 = state_14291;(statearr_14316[22] = inst_14259);
(statearr_14316[23] = inst_14258);
return statearr_14316;
})();var statearr_14317_14395 = state_14291__$1;(statearr_14317_14395[2] = inst_14260);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 9))
{var inst_14216 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14318_14396 = state_14291__$1;(statearr_14318_14396[2] = inst_14216);
(statearr_14318_14396[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 41))
{var inst_14257 = (state_14291[18]);var inst_14159 = (state_14291[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14291,40,Object,null,39);var inst_14264 = cljs.core.async.put_BANG_.call(null,inst_14257,inst_14159,done);var state_14291__$1 = state_14291;var statearr_14319_14397 = state_14291__$1;(statearr_14319_14397[2] = inst_14264);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 10))
{var inst_14169 = (state_14291[15]);var inst_14171 = (state_14291[17]);var inst_14177 = cljs.core._nth.call(null,inst_14169,inst_14171);var inst_14178 = cljs.core.nth.call(null,inst_14177,0,null);var inst_14179 = cljs.core.nth.call(null,inst_14177,1,null);var state_14291__$1 = (function (){var statearr_14320 = state_14291;(statearr_14320[24] = inst_14178);
return statearr_14320;
})();if(cljs.core.truth_(inst_14179))
{var statearr_14321_14398 = state_14291__$1;(statearr_14321_14398[1] = 13);
} else
{var statearr_14322_14399 = state_14291__$1;(statearr_14322_14399[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 42))
{var state_14291__$1 = state_14291;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14291__$1,45,dchan);
} else
{if((state_val_14292 === 11))
{var inst_14168 = (state_14291[14]);var inst_14188 = (state_14291[25]);var inst_14188__$1 = cljs.core.seq.call(null,inst_14168);var state_14291__$1 = (function (){var statearr_14323 = state_14291;(statearr_14323[25] = inst_14188__$1);
return statearr_14323;
})();if(inst_14188__$1)
{var statearr_14324_14400 = state_14291__$1;(statearr_14324_14400[1] = 16);
} else
{var statearr_14325_14401 = state_14291__$1;(statearr_14325_14401[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 43))
{var state_14291__$1 = state_14291;var statearr_14326_14402 = state_14291__$1;(statearr_14326_14402[2] = null);
(statearr_14326_14402[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 12))
{var inst_14214 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14327_14403 = state_14291__$1;(statearr_14327_14403[2] = inst_14214);
(statearr_14327_14403[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 44))
{var inst_14284 = (state_14291[2]);var state_14291__$1 = (function (){var statearr_14328 = state_14291;(statearr_14328[26] = inst_14284);
return statearr_14328;
})();var statearr_14329_14404 = state_14291__$1;(statearr_14329_14404[2] = null);
(statearr_14329_14404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 13))
{var inst_14178 = (state_14291[24]);var inst_14181 = cljs.core.async.close_BANG_.call(null,inst_14178);var state_14291__$1 = state_14291;var statearr_14330_14405 = state_14291__$1;(statearr_14330_14405[2] = inst_14181);
(statearr_14330_14405[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 45))
{var inst_14281 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14334_14406 = state_14291__$1;(statearr_14334_14406[2] = inst_14281);
(statearr_14334_14406[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 14))
{var state_14291__$1 = state_14291;var statearr_14335_14407 = state_14291__$1;(statearr_14335_14407[2] = null);
(statearr_14335_14407[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 15))
{var inst_14168 = (state_14291[14]);var inst_14169 = (state_14291[15]);var inst_14170 = (state_14291[16]);var inst_14171 = (state_14291[17]);var inst_14184 = (state_14291[2]);var inst_14185 = (inst_14171 + 1);var tmp14331 = inst_14168;var tmp14332 = inst_14169;var tmp14333 = inst_14170;var inst_14168__$1 = tmp14331;var inst_14169__$1 = tmp14332;var inst_14170__$1 = tmp14333;var inst_14171__$1 = inst_14185;var state_14291__$1 = (function (){var statearr_14336 = state_14291;(statearr_14336[14] = inst_14168__$1);
(statearr_14336[15] = inst_14169__$1);
(statearr_14336[16] = inst_14170__$1);
(statearr_14336[17] = inst_14171__$1);
(statearr_14336[27] = inst_14184);
return statearr_14336;
})();var statearr_14337_14408 = state_14291__$1;(statearr_14337_14408[2] = null);
(statearr_14337_14408[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 16))
{var inst_14188 = (state_14291[25]);var inst_14190 = cljs.core.chunked_seq_QMARK_.call(null,inst_14188);var state_14291__$1 = state_14291;if(inst_14190)
{var statearr_14338_14409 = state_14291__$1;(statearr_14338_14409[1] = 19);
} else
{var statearr_14339_14410 = state_14291__$1;(statearr_14339_14410[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 17))
{var state_14291__$1 = state_14291;var statearr_14340_14411 = state_14291__$1;(statearr_14340_14411[2] = null);
(statearr_14340_14411[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 18))
{var inst_14212 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14341_14412 = state_14291__$1;(statearr_14341_14412[2] = inst_14212);
(statearr_14341_14412[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 19))
{var inst_14188 = (state_14291[25]);var inst_14192 = cljs.core.chunk_first.call(null,inst_14188);var inst_14193 = cljs.core.chunk_rest.call(null,inst_14188);var inst_14194 = cljs.core.count.call(null,inst_14192);var inst_14168 = inst_14193;var inst_14169 = inst_14192;var inst_14170 = inst_14194;var inst_14171 = 0;var state_14291__$1 = (function (){var statearr_14342 = state_14291;(statearr_14342[14] = inst_14168);
(statearr_14342[15] = inst_14169);
(statearr_14342[16] = inst_14170);
(statearr_14342[17] = inst_14171);
return statearr_14342;
})();var statearr_14343_14413 = state_14291__$1;(statearr_14343_14413[2] = null);
(statearr_14343_14413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 20))
{var inst_14188 = (state_14291[25]);var inst_14198 = cljs.core.first.call(null,inst_14188);var inst_14199 = cljs.core.nth.call(null,inst_14198,0,null);var inst_14200 = cljs.core.nth.call(null,inst_14198,1,null);var state_14291__$1 = (function (){var statearr_14344 = state_14291;(statearr_14344[28] = inst_14199);
return statearr_14344;
})();if(cljs.core.truth_(inst_14200))
{var statearr_14345_14414 = state_14291__$1;(statearr_14345_14414[1] = 22);
} else
{var statearr_14346_14415 = state_14291__$1;(statearr_14346_14415[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 21))
{var inst_14209 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14347_14416 = state_14291__$1;(statearr_14347_14416[2] = inst_14209);
(statearr_14347_14416[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 22))
{var inst_14199 = (state_14291[28]);var inst_14202 = cljs.core.async.close_BANG_.call(null,inst_14199);var state_14291__$1 = state_14291;var statearr_14348_14417 = state_14291__$1;(statearr_14348_14417[2] = inst_14202);
(statearr_14348_14417[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 23))
{var state_14291__$1 = state_14291;var statearr_14349_14418 = state_14291__$1;(statearr_14349_14418[2] = null);
(statearr_14349_14418[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 24))
{var inst_14188 = (state_14291[25]);var inst_14205 = (state_14291[2]);var inst_14206 = cljs.core.next.call(null,inst_14188);var inst_14168 = inst_14206;var inst_14169 = null;var inst_14170 = 0;var inst_14171 = 0;var state_14291__$1 = (function (){var statearr_14350 = state_14291;(statearr_14350[14] = inst_14168);
(statearr_14350[29] = inst_14205);
(statearr_14350[15] = inst_14169);
(statearr_14350[16] = inst_14170);
(statearr_14350[17] = inst_14171);
return statearr_14350;
})();var statearr_14351_14419 = state_14291__$1;(statearr_14351_14419[2] = null);
(statearr_14351_14419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 25))
{var inst_14229 = (state_14291[11]);var inst_14230 = (state_14291[13]);var inst_14232 = (inst_14230 < inst_14229);var inst_14233 = inst_14232;var state_14291__$1 = state_14291;if(cljs.core.truth_(inst_14233))
{var statearr_14352_14420 = state_14291__$1;(statearr_14352_14420[1] = 27);
} else
{var statearr_14353_14421 = state_14291__$1;(statearr_14353_14421[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 26))
{var inst_14219 = (state_14291[19]);var inst_14277 = (state_14291[2]);var inst_14278 = cljs.core.seq.call(null,inst_14219);var state_14291__$1 = (function (){var statearr_14354 = state_14291;(statearr_14354[30] = inst_14277);
return statearr_14354;
})();if(inst_14278)
{var statearr_14355_14422 = state_14291__$1;(statearr_14355_14422[1] = 42);
} else
{var statearr_14356_14423 = state_14291__$1;(statearr_14356_14423[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 27))
{var inst_14228 = (state_14291[10]);var inst_14230 = (state_14291[13]);var inst_14235 = cljs.core._nth.call(null,inst_14228,inst_14230);var state_14291__$1 = (function (){var statearr_14357 = state_14291;(statearr_14357[8] = inst_14235);
return statearr_14357;
})();var statearr_14358_14424 = state_14291__$1;(statearr_14358_14424[2] = null);
(statearr_14358_14424[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 28))
{var inst_14248 = (state_14291[9]);var inst_14227 = (state_14291[12]);var inst_14248__$1 = cljs.core.seq.call(null,inst_14227);var state_14291__$1 = (function (){var statearr_14362 = state_14291;(statearr_14362[9] = inst_14248__$1);
return statearr_14362;
})();if(inst_14248__$1)
{var statearr_14363_14425 = state_14291__$1;(statearr_14363_14425[1] = 33);
} else
{var statearr_14364_14426 = state_14291__$1;(statearr_14364_14426[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 29))
{var inst_14275 = (state_14291[2]);var state_14291__$1 = state_14291;var statearr_14365_14427 = state_14291__$1;(statearr_14365_14427[2] = inst_14275);
(statearr_14365_14427[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 30))
{var inst_14228 = (state_14291[10]);var inst_14229 = (state_14291[11]);var inst_14227 = (state_14291[12]);var inst_14230 = (state_14291[13]);var inst_14244 = (state_14291[2]);var inst_14245 = (inst_14230 + 1);var tmp14359 = inst_14228;var tmp14360 = inst_14229;var tmp14361 = inst_14227;var inst_14227__$1 = tmp14361;var inst_14228__$1 = tmp14359;var inst_14229__$1 = tmp14360;var inst_14230__$1 = inst_14245;var state_14291__$1 = (function (){var statearr_14366 = state_14291;(statearr_14366[31] = inst_14244);
(statearr_14366[10] = inst_14228__$1);
(statearr_14366[11] = inst_14229__$1);
(statearr_14366[12] = inst_14227__$1);
(statearr_14366[13] = inst_14230__$1);
return statearr_14366;
})();var statearr_14367_14428 = state_14291__$1;(statearr_14367_14428[2] = null);
(statearr_14367_14428[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14292 === 31))
{var inst_14235 = (state_14291[8]);var inst_14236 = (state_14291[2]);var inst_14237 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14238 = cljs.core.async.untap_STAR_.call(null,m,inst_14235);var state_14291__$1 = (function (){var statearr_14368 = state_14291;(statearr_14368[32] = inst_14237);
(statearr_14368[33] = inst_14236);
return statearr_14368;
})();var statearr_14369_14429 = state_14291__$1;(statearr_14369_14429[2] = inst_14238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14373[0] = state_machine__5507__auto__);
(statearr_14373[1] = 1);
return statearr_14373;
});
var state_machine__5507__auto____1 = (function (state_14291){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14291);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14374){if((e14374 instanceof Object))
{var ex__5510__auto__ = e14374;var statearr_14375_14430 = state_14291;(statearr_14375_14430[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14431 = state_14291;
state_14291 = G__14431;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14291){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14376 = f__5522__auto__.call(null);(statearr_14376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14377);
return statearr_14376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj14433 = {};return obj14433;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t14543 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14543 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14544){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta14544 = meta14544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14543.cljs$lang$type = true;
cljs.core.async.t14543.cljs$lang$ctorStr = "cljs.core.async/t14543";
cljs.core.async.t14543.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14543");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14545){var self__ = this;
var _14545__$1 = this;return self__.meta14544;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14545,meta14544__$1){var self__ = this;
var _14545__$1 = this;return (new cljs.core.async.t14543(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14544__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14543 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14543(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14544){return (new cljs.core.async.t14543(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14544));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14543(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14652 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14610){var state_val_14611 = (state_14610[1]);if((state_val_14611 === 1))
{var inst_14549 = (state_14610[7]);var inst_14549__$1 = calc_state.call(null);var inst_14550 = cljs.core.seq_QMARK_.call(null,inst_14549__$1);var state_14610__$1 = (function (){var statearr_14612 = state_14610;(statearr_14612[7] = inst_14549__$1);
return statearr_14612;
})();if(inst_14550)
{var statearr_14613_14653 = state_14610__$1;(statearr_14613_14653[1] = 2);
} else
{var statearr_14614_14654 = state_14610__$1;(statearr_14614_14654[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 2))
{var inst_14549 = (state_14610[7]);var inst_14552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14549);var state_14610__$1 = state_14610;var statearr_14615_14655 = state_14610__$1;(statearr_14615_14655[2] = inst_14552);
(statearr_14615_14655[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 3))
{var inst_14549 = (state_14610[7]);var state_14610__$1 = state_14610;var statearr_14616_14656 = state_14610__$1;(statearr_14616_14656[2] = inst_14549);
(statearr_14616_14656[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 4))
{var inst_14549 = (state_14610[7]);var inst_14555 = (state_14610[2]);var inst_14556 = cljs.core.get.call(null,inst_14555,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14557 = cljs.core.get.call(null,inst_14555,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14558 = cljs.core.get.call(null,inst_14555,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14559 = inst_14549;var state_14610__$1 = (function (){var statearr_14617 = state_14610;(statearr_14617[8] = inst_14558);
(statearr_14617[9] = inst_14559);
(statearr_14617[10] = inst_14557);
(statearr_14617[11] = inst_14556);
return statearr_14617;
})();var statearr_14618_14657 = state_14610__$1;(statearr_14618_14657[2] = null);
(statearr_14618_14657[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 5))
{var inst_14559 = (state_14610[9]);var inst_14562 = cljs.core.seq_QMARK_.call(null,inst_14559);var state_14610__$1 = state_14610;if(inst_14562)
{var statearr_14619_14658 = state_14610__$1;(statearr_14619_14658[1] = 7);
} else
{var statearr_14620_14659 = state_14610__$1;(statearr_14620_14659[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 6))
{var inst_14608 = (state_14610[2]);var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14610__$1,inst_14608);
} else
{if((state_val_14611 === 7))
{var inst_14559 = (state_14610[9]);var inst_14564 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14559);var state_14610__$1 = state_14610;var statearr_14621_14660 = state_14610__$1;(statearr_14621_14660[2] = inst_14564);
(statearr_14621_14660[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 8))
{var inst_14559 = (state_14610[9]);var state_14610__$1 = state_14610;var statearr_14622_14661 = state_14610__$1;(statearr_14622_14661[2] = inst_14559);
(statearr_14622_14661[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 9))
{var inst_14567 = (state_14610[12]);var inst_14567__$1 = (state_14610[2]);var inst_14568 = cljs.core.get.call(null,inst_14567__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14569 = cljs.core.get.call(null,inst_14567__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14570 = cljs.core.get.call(null,inst_14567__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14610__$1 = (function (){var statearr_14623 = state_14610;(statearr_14623[13] = inst_14569);
(statearr_14623[12] = inst_14567__$1);
(statearr_14623[14] = inst_14570);
return statearr_14623;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14610__$1,10,inst_14568);
} else
{if((state_val_14611 === 10))
{var inst_14574 = (state_14610[15]);var inst_14575 = (state_14610[16]);var inst_14573 = (state_14610[2]);var inst_14574__$1 = cljs.core.nth.call(null,inst_14573,0,null);var inst_14575__$1 = cljs.core.nth.call(null,inst_14573,1,null);var inst_14576 = (inst_14574__$1 == null);var inst_14577 = cljs.core._EQ_.call(null,inst_14575__$1,change);var inst_14578 = (inst_14576) || (inst_14577);var state_14610__$1 = (function (){var statearr_14624 = state_14610;(statearr_14624[15] = inst_14574__$1);
(statearr_14624[16] = inst_14575__$1);
return statearr_14624;
})();if(cljs.core.truth_(inst_14578))
{var statearr_14625_14662 = state_14610__$1;(statearr_14625_14662[1] = 11);
} else
{var statearr_14626_14663 = state_14610__$1;(statearr_14626_14663[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 11))
{var inst_14574 = (state_14610[15]);var inst_14580 = (inst_14574 == null);var state_14610__$1 = state_14610;if(cljs.core.truth_(inst_14580))
{var statearr_14627_14664 = state_14610__$1;(statearr_14627_14664[1] = 14);
} else
{var statearr_14628_14665 = state_14610__$1;(statearr_14628_14665[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 12))
{var inst_14575 = (state_14610[16]);var inst_14570 = (state_14610[14]);var inst_14589 = (state_14610[17]);var inst_14589__$1 = inst_14570.call(null,inst_14575);var state_14610__$1 = (function (){var statearr_14629 = state_14610;(statearr_14629[17] = inst_14589__$1);
return statearr_14629;
})();if(cljs.core.truth_(inst_14589__$1))
{var statearr_14630_14666 = state_14610__$1;(statearr_14630_14666[1] = 17);
} else
{var statearr_14631_14667 = state_14610__$1;(statearr_14631_14667[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 13))
{var inst_14606 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14632_14668 = state_14610__$1;(statearr_14632_14668[2] = inst_14606);
(statearr_14632_14668[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 14))
{var inst_14575 = (state_14610[16]);var inst_14582 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14575);var state_14610__$1 = state_14610;var statearr_14633_14669 = state_14610__$1;(statearr_14633_14669[2] = inst_14582);
(statearr_14633_14669[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 15))
{var state_14610__$1 = state_14610;var statearr_14634_14670 = state_14610__$1;(statearr_14634_14670[2] = null);
(statearr_14634_14670[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 16))
{var inst_14585 = (state_14610[2]);var inst_14586 = calc_state.call(null);var inst_14559 = inst_14586;var state_14610__$1 = (function (){var statearr_14635 = state_14610;(statearr_14635[9] = inst_14559);
(statearr_14635[18] = inst_14585);
return statearr_14635;
})();var statearr_14636_14671 = state_14610__$1;(statearr_14636_14671[2] = null);
(statearr_14636_14671[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 17))
{var inst_14589 = (state_14610[17]);var state_14610__$1 = state_14610;var statearr_14637_14672 = state_14610__$1;(statearr_14637_14672[2] = inst_14589);
(statearr_14637_14672[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 18))
{var inst_14569 = (state_14610[13]);var inst_14575 = (state_14610[16]);var inst_14570 = (state_14610[14]);var inst_14592 = cljs.core.empty_QMARK_.call(null,inst_14570);var inst_14593 = inst_14569.call(null,inst_14575);var inst_14594 = cljs.core.not.call(null,inst_14593);var inst_14595 = (inst_14592) && (inst_14594);var state_14610__$1 = state_14610;var statearr_14638_14673 = state_14610__$1;(statearr_14638_14673[2] = inst_14595);
(statearr_14638_14673[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 19))
{var inst_14597 = (state_14610[2]);var state_14610__$1 = state_14610;if(cljs.core.truth_(inst_14597))
{var statearr_14639_14674 = state_14610__$1;(statearr_14639_14674[1] = 20);
} else
{var statearr_14640_14675 = state_14610__$1;(statearr_14640_14675[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 20))
{var inst_14574 = (state_14610[15]);var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14610__$1,23,out,inst_14574);
} else
{if((state_val_14611 === 21))
{var state_14610__$1 = state_14610;var statearr_14641_14676 = state_14610__$1;(statearr_14641_14676[2] = null);
(statearr_14641_14676[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 22))
{var inst_14567 = (state_14610[12]);var inst_14603 = (state_14610[2]);var inst_14559 = inst_14567;var state_14610__$1 = (function (){var statearr_14642 = state_14610;(statearr_14642[19] = inst_14603);
(statearr_14642[9] = inst_14559);
return statearr_14642;
})();var statearr_14643_14677 = state_14610__$1;(statearr_14643_14677[2] = null);
(statearr_14643_14677[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 23))
{var inst_14600 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14644_14678 = state_14610__$1;(statearr_14644_14678[2] = inst_14600);
(statearr_14644_14678[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14648[0] = state_machine__5507__auto__);
(statearr_14648[1] = 1);
return statearr_14648;
});
var state_machine__5507__auto____1 = (function (state_14610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14649){if((e14649 instanceof Object))
{var ex__5510__auto__ = e14649;var statearr_14650_14679 = state_14610;(statearr_14650_14679[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14680 = state_14610;
state_14610 = G__14680;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14651 = f__5522__auto__.call(null);(statearr_14651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14652);
return statearr_14651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14682 = {};return obj14682;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__14683_SHARP_){if(cljs.core.truth_(p1__14683_SHARP_.call(null,topic)))
{return p1__14683_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14683_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14808 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14808 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14809){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14809 = meta14809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14808.cljs$lang$type = true;
cljs.core.async.t14808.cljs$lang$ctorStr = "cljs.core.async/t14808";
cljs.core.async.t14808.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14808");
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14808.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14808.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14810){var self__ = this;
var _14810__$1 = this;return self__.meta14809;
});})(mults,ensure_mult))
;
cljs.core.async.t14808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14810,meta14809__$1){var self__ = this;
var _14810__$1 = this;return (new cljs.core.async.t14808(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14809__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14808 = ((function (mults,ensure_mult){
return (function __GT_t14808(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14809){return (new cljs.core.async.t14808(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14809));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14808(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14884){var state_val_14885 = (state_14884[1]);if((state_val_14885 === 1))
{var state_14884__$1 = state_14884;var statearr_14886_14933 = state_14884__$1;(statearr_14886_14933[2] = null);
(statearr_14886_14933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 2))
{var state_14884__$1 = state_14884;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14884__$1,4,ch);
} else
{if((state_val_14885 === 3))
{var inst_14882 = (state_14884[2]);var state_14884__$1 = state_14884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14884__$1,inst_14882);
} else
{if((state_val_14885 === 4))
{var inst_14813 = (state_14884[7]);var inst_14813__$1 = (state_14884[2]);var inst_14814 = (inst_14813__$1 == null);var state_14884__$1 = (function (){var statearr_14887 = state_14884;(statearr_14887[7] = inst_14813__$1);
return statearr_14887;
})();if(cljs.core.truth_(inst_14814))
{var statearr_14888_14934 = state_14884__$1;(statearr_14888_14934[1] = 5);
} else
{var statearr_14889_14935 = state_14884__$1;(statearr_14889_14935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 5))
{var inst_14820 = cljs.core.deref.call(null,mults);var inst_14821 = cljs.core.vals.call(null,inst_14820);var inst_14822 = cljs.core.seq.call(null,inst_14821);var inst_14823 = inst_14822;var inst_14824 = null;var inst_14825 = 0;var inst_14826 = 0;var state_14884__$1 = (function (){var statearr_14890 = state_14884;(statearr_14890[8] = inst_14826);
(statearr_14890[9] = inst_14823);
(statearr_14890[10] = inst_14824);
(statearr_14890[11] = inst_14825);
return statearr_14890;
})();var statearr_14891_14936 = state_14884__$1;(statearr_14891_14936[2] = null);
(statearr_14891_14936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 6))
{var inst_14861 = (state_14884[12]);var inst_14863 = (state_14884[13]);var inst_14813 = (state_14884[7]);var inst_14861__$1 = topic_fn.call(null,inst_14813);var inst_14862 = cljs.core.deref.call(null,mults);var inst_14863__$1 = cljs.core.get.call(null,inst_14862,inst_14861__$1);var state_14884__$1 = (function (){var statearr_14892 = state_14884;(statearr_14892[12] = inst_14861__$1);
(statearr_14892[13] = inst_14863__$1);
return statearr_14892;
})();if(cljs.core.truth_(inst_14863__$1))
{var statearr_14893_14937 = state_14884__$1;(statearr_14893_14937[1] = 19);
} else
{var statearr_14894_14938 = state_14884__$1;(statearr_14894_14938[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 7))
{var inst_14880 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14895_14939 = state_14884__$1;(statearr_14895_14939[2] = inst_14880);
(statearr_14895_14939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 8))
{var inst_14826 = (state_14884[8]);var inst_14825 = (state_14884[11]);var inst_14828 = (inst_14826 < inst_14825);var inst_14829 = inst_14828;var state_14884__$1 = state_14884;if(cljs.core.truth_(inst_14829))
{var statearr_14899_14940 = state_14884__$1;(statearr_14899_14940[1] = 10);
} else
{var statearr_14900_14941 = state_14884__$1;(statearr_14900_14941[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 9))
{var inst_14859 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14901_14942 = state_14884__$1;(statearr_14901_14942[2] = inst_14859);
(statearr_14901_14942[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 10))
{var inst_14826 = (state_14884[8]);var inst_14823 = (state_14884[9]);var inst_14824 = (state_14884[10]);var inst_14825 = (state_14884[11]);var inst_14831 = cljs.core._nth.call(null,inst_14824,inst_14826);var inst_14832 = cljs.core.async.muxch_STAR_.call(null,inst_14831);var inst_14833 = cljs.core.async.close_BANG_.call(null,inst_14832);var inst_14834 = (inst_14826 + 1);var tmp14896 = inst_14823;var tmp14897 = inst_14824;var tmp14898 = inst_14825;var inst_14823__$1 = tmp14896;var inst_14824__$1 = tmp14897;var inst_14825__$1 = tmp14898;var inst_14826__$1 = inst_14834;var state_14884__$1 = (function (){var statearr_14902 = state_14884;(statearr_14902[8] = inst_14826__$1);
(statearr_14902[14] = inst_14833);
(statearr_14902[9] = inst_14823__$1);
(statearr_14902[10] = inst_14824__$1);
(statearr_14902[11] = inst_14825__$1);
return statearr_14902;
})();var statearr_14903_14943 = state_14884__$1;(statearr_14903_14943[2] = null);
(statearr_14903_14943[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 11))
{var inst_14837 = (state_14884[15]);var inst_14823 = (state_14884[9]);var inst_14837__$1 = cljs.core.seq.call(null,inst_14823);var state_14884__$1 = (function (){var statearr_14904 = state_14884;(statearr_14904[15] = inst_14837__$1);
return statearr_14904;
})();if(inst_14837__$1)
{var statearr_14905_14944 = state_14884__$1;(statearr_14905_14944[1] = 13);
} else
{var statearr_14906_14945 = state_14884__$1;(statearr_14906_14945[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 12))
{var inst_14857 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14907_14946 = state_14884__$1;(statearr_14907_14946[2] = inst_14857);
(statearr_14907_14946[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 13))
{var inst_14837 = (state_14884[15]);var inst_14839 = cljs.core.chunked_seq_QMARK_.call(null,inst_14837);var state_14884__$1 = state_14884;if(inst_14839)
{var statearr_14908_14947 = state_14884__$1;(statearr_14908_14947[1] = 16);
} else
{var statearr_14909_14948 = state_14884__$1;(statearr_14909_14948[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 14))
{var state_14884__$1 = state_14884;var statearr_14910_14949 = state_14884__$1;(statearr_14910_14949[2] = null);
(statearr_14910_14949[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 15))
{var inst_14855 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14911_14950 = state_14884__$1;(statearr_14911_14950[2] = inst_14855);
(statearr_14911_14950[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 16))
{var inst_14837 = (state_14884[15]);var inst_14841 = cljs.core.chunk_first.call(null,inst_14837);var inst_14842 = cljs.core.chunk_rest.call(null,inst_14837);var inst_14843 = cljs.core.count.call(null,inst_14841);var inst_14823 = inst_14842;var inst_14824 = inst_14841;var inst_14825 = inst_14843;var inst_14826 = 0;var state_14884__$1 = (function (){var statearr_14912 = state_14884;(statearr_14912[8] = inst_14826);
(statearr_14912[9] = inst_14823);
(statearr_14912[10] = inst_14824);
(statearr_14912[11] = inst_14825);
return statearr_14912;
})();var statearr_14913_14951 = state_14884__$1;(statearr_14913_14951[2] = null);
(statearr_14913_14951[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 17))
{var inst_14837 = (state_14884[15]);var inst_14846 = cljs.core.first.call(null,inst_14837);var inst_14847 = cljs.core.async.muxch_STAR_.call(null,inst_14846);var inst_14848 = cljs.core.async.close_BANG_.call(null,inst_14847);var inst_14849 = cljs.core.next.call(null,inst_14837);var inst_14823 = inst_14849;var inst_14824 = null;var inst_14825 = 0;var inst_14826 = 0;var state_14884__$1 = (function (){var statearr_14914 = state_14884;(statearr_14914[8] = inst_14826);
(statearr_14914[9] = inst_14823);
(statearr_14914[10] = inst_14824);
(statearr_14914[11] = inst_14825);
(statearr_14914[16] = inst_14848);
return statearr_14914;
})();var statearr_14915_14952 = state_14884__$1;(statearr_14915_14952[2] = null);
(statearr_14915_14952[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 18))
{var inst_14852 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14916_14953 = state_14884__$1;(statearr_14916_14953[2] = inst_14852);
(statearr_14916_14953[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 19))
{var state_14884__$1 = state_14884;var statearr_14917_14954 = state_14884__$1;(statearr_14917_14954[2] = null);
(statearr_14917_14954[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 20))
{var state_14884__$1 = state_14884;var statearr_14918_14955 = state_14884__$1;(statearr_14918_14955[2] = null);
(statearr_14918_14955[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 21))
{var inst_14877 = (state_14884[2]);var state_14884__$1 = (function (){var statearr_14919 = state_14884;(statearr_14919[17] = inst_14877);
return statearr_14919;
})();var statearr_14920_14956 = state_14884__$1;(statearr_14920_14956[2] = null);
(statearr_14920_14956[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 22))
{var inst_14874 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14921_14957 = state_14884__$1;(statearr_14921_14957[2] = inst_14874);
(statearr_14921_14957[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 23))
{var inst_14861 = (state_14884[12]);var inst_14865 = (state_14884[2]);var inst_14866 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14861);var state_14884__$1 = (function (){var statearr_14922 = state_14884;(statearr_14922[18] = inst_14865);
return statearr_14922;
})();var statearr_14923_14958 = state_14884__$1;(statearr_14923_14958[2] = inst_14866);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14884__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14885 === 24))
{var inst_14863 = (state_14884[13]);var inst_14813 = (state_14884[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14884,23,Object,null,22);var inst_14870 = cljs.core.async.muxch_STAR_.call(null,inst_14863);var state_14884__$1 = state_14884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14884__$1,25,inst_14870,inst_14813);
} else
{if((state_val_14885 === 25))
{var inst_14872 = (state_14884[2]);var state_14884__$1 = state_14884;var statearr_14924_14959 = state_14884__$1;(statearr_14924_14959[2] = inst_14872);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14884__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_14928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14928[0] = state_machine__5507__auto__);
(statearr_14928[1] = 1);
return statearr_14928;
});
var state_machine__5507__auto____1 = (function (state_14884){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14884);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14929){if((e14929 instanceof Object))
{var ex__5510__auto__ = e14929;var statearr_14930_14960 = state_14884;(statearr_14930_14960[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14884);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14961 = state_14884;
state_14884 = G__14961;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14884){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14931 = f__5522__auto__.call(null);(statearr_14931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14932);
return statearr_14931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___15098 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15068){var state_val_15069 = (state_15068[1]);if((state_val_15069 === 1))
{var state_15068__$1 = state_15068;var statearr_15070_15099 = state_15068__$1;(statearr_15070_15099[2] = null);
(statearr_15070_15099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 2))
{var inst_15031 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15032 = 0;var state_15068__$1 = (function (){var statearr_15071 = state_15068;(statearr_15071[7] = inst_15031);
(statearr_15071[8] = inst_15032);
return statearr_15071;
})();var statearr_15072_15100 = state_15068__$1;(statearr_15072_15100[2] = null);
(statearr_15072_15100[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 3))
{var inst_15066 = (state_15068[2]);var state_15068__$1 = state_15068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15068__$1,inst_15066);
} else
{if((state_val_15069 === 4))
{var inst_15032 = (state_15068[8]);var inst_15034 = (inst_15032 < cnt);var state_15068__$1 = state_15068;if(cljs.core.truth_(inst_15034))
{var statearr_15073_15101 = state_15068__$1;(statearr_15073_15101[1] = 6);
} else
{var statearr_15074_15102 = state_15068__$1;(statearr_15074_15102[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 5))
{var inst_15052 = (state_15068[2]);var state_15068__$1 = (function (){var statearr_15075 = state_15068;(statearr_15075[9] = inst_15052);
return statearr_15075;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15068__$1,12,dchan);
} else
{if((state_val_15069 === 6))
{var state_15068__$1 = state_15068;var statearr_15076_15103 = state_15068__$1;(statearr_15076_15103[2] = null);
(statearr_15076_15103[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 7))
{var state_15068__$1 = state_15068;var statearr_15077_15104 = state_15068__$1;(statearr_15077_15104[2] = null);
(statearr_15077_15104[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 8))
{var inst_15050 = (state_15068[2]);var state_15068__$1 = state_15068;var statearr_15078_15105 = state_15068__$1;(statearr_15078_15105[2] = inst_15050);
(statearr_15078_15105[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 9))
{var inst_15032 = (state_15068[8]);var inst_15045 = (state_15068[2]);var inst_15046 = (inst_15032 + 1);var inst_15032__$1 = inst_15046;var state_15068__$1 = (function (){var statearr_15079 = state_15068;(statearr_15079[8] = inst_15032__$1);
(statearr_15079[10] = inst_15045);
return statearr_15079;
})();var statearr_15080_15106 = state_15068__$1;(statearr_15080_15106[2] = null);
(statearr_15080_15106[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 10))
{var inst_15036 = (state_15068[2]);var inst_15037 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15068__$1 = (function (){var statearr_15081 = state_15068;(statearr_15081[11] = inst_15036);
return statearr_15081;
})();var statearr_15082_15107 = state_15068__$1;(statearr_15082_15107[2] = inst_15037);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15068__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 11))
{var inst_15032 = (state_15068[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15068,10,Object,null,9);var inst_15041 = chs__$1.call(null,inst_15032);var inst_15042 = done.call(null,inst_15032);var inst_15043 = cljs.core.async.take_BANG_.call(null,inst_15041,inst_15042);var state_15068__$1 = state_15068;var statearr_15083_15108 = state_15068__$1;(statearr_15083_15108[2] = inst_15043);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15068__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 12))
{var inst_15054 = (state_15068[12]);var inst_15054__$1 = (state_15068[2]);var inst_15055 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15054__$1);var state_15068__$1 = (function (){var statearr_15084 = state_15068;(statearr_15084[12] = inst_15054__$1);
return statearr_15084;
})();if(cljs.core.truth_(inst_15055))
{var statearr_15085_15109 = state_15068__$1;(statearr_15085_15109[1] = 13);
} else
{var statearr_15086_15110 = state_15068__$1;(statearr_15086_15110[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 13))
{var inst_15057 = cljs.core.async.close_BANG_.call(null,out);var state_15068__$1 = state_15068;var statearr_15087_15111 = state_15068__$1;(statearr_15087_15111[2] = inst_15057);
(statearr_15087_15111[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 14))
{var inst_15054 = (state_15068[12]);var inst_15059 = cljs.core.apply.call(null,f,inst_15054);var state_15068__$1 = state_15068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15068__$1,16,out,inst_15059);
} else
{if((state_val_15069 === 15))
{var inst_15064 = (state_15068[2]);var state_15068__$1 = state_15068;var statearr_15088_15112 = state_15068__$1;(statearr_15088_15112[2] = inst_15064);
(statearr_15088_15112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15069 === 16))
{var inst_15061 = (state_15068[2]);var state_15068__$1 = (function (){var statearr_15089 = state_15068;(statearr_15089[13] = inst_15061);
return statearr_15089;
})();var statearr_15090_15113 = state_15068__$1;(statearr_15090_15113[2] = null);
(statearr_15090_15113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15094[0] = state_machine__5507__auto__);
(statearr_15094[1] = 1);
return statearr_15094;
});
var state_machine__5507__auto____1 = (function (state_15068){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15068);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15095){if((e15095 instanceof Object))
{var ex__5510__auto__ = e15095;var statearr_15096_15114 = state_15068;(statearr_15096_15114[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15095;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15115 = state_15068;
state_15068 = G__15115;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15068){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15097 = f__5522__auto__.call(null);(statearr_15097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15098);
return statearr_15097;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15199){var state_val_15200 = (state_15199[1]);if((state_val_15200 === 1))
{var inst_15170 = cljs.core.vec.call(null,chs);var inst_15171 = inst_15170;var state_15199__$1 = (function (){var statearr_15201 = state_15199;(statearr_15201[7] = inst_15171);
return statearr_15201;
})();var statearr_15202_15224 = state_15199__$1;(statearr_15202_15224[2] = null);
(statearr_15202_15224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 2))
{var inst_15171 = (state_15199[7]);var inst_15173 = cljs.core.count.call(null,inst_15171);var inst_15174 = (inst_15173 > 0);var state_15199__$1 = state_15199;if(cljs.core.truth_(inst_15174))
{var statearr_15203_15225 = state_15199__$1;(statearr_15203_15225[1] = 4);
} else
{var statearr_15204_15226 = state_15199__$1;(statearr_15204_15226[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 3))
{var inst_15197 = (state_15199[2]);var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15199__$1,inst_15197);
} else
{if((state_val_15200 === 4))
{var inst_15171 = (state_15199[7]);var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15199__$1,7,inst_15171);
} else
{if((state_val_15200 === 5))
{var inst_15193 = cljs.core.async.close_BANG_.call(null,out);var state_15199__$1 = state_15199;var statearr_15205_15227 = state_15199__$1;(statearr_15205_15227[2] = inst_15193);
(statearr_15205_15227[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 6))
{var inst_15195 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15206_15228 = state_15199__$1;(statearr_15206_15228[2] = inst_15195);
(statearr_15206_15228[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 7))
{var inst_15179 = (state_15199[8]);var inst_15178 = (state_15199[9]);var inst_15178__$1 = (state_15199[2]);var inst_15179__$1 = cljs.core.nth.call(null,inst_15178__$1,0,null);var inst_15180 = cljs.core.nth.call(null,inst_15178__$1,1,null);var inst_15181 = (inst_15179__$1 == null);var state_15199__$1 = (function (){var statearr_15207 = state_15199;(statearr_15207[8] = inst_15179__$1);
(statearr_15207[9] = inst_15178__$1);
(statearr_15207[10] = inst_15180);
return statearr_15207;
})();if(cljs.core.truth_(inst_15181))
{var statearr_15208_15229 = state_15199__$1;(statearr_15208_15229[1] = 8);
} else
{var statearr_15209_15230 = state_15199__$1;(statearr_15209_15230[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 8))
{var inst_15179 = (state_15199[8]);var inst_15178 = (state_15199[9]);var inst_15180 = (state_15199[10]);var inst_15171 = (state_15199[7]);var inst_15183 = (function (){var c = inst_15180;var v = inst_15179;var vec__15176 = inst_15178;var cs = inst_15171;return ((function (c,v,vec__15176,cs,inst_15179,inst_15178,inst_15180,inst_15171,state_val_15200){
return (function (p1__15116_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15116_SHARP_);
});
;})(c,v,vec__15176,cs,inst_15179,inst_15178,inst_15180,inst_15171,state_val_15200))
})();var inst_15184 = cljs.core.filterv.call(null,inst_15183,inst_15171);var inst_15171__$1 = inst_15184;var state_15199__$1 = (function (){var statearr_15210 = state_15199;(statearr_15210[7] = inst_15171__$1);
return statearr_15210;
})();var statearr_15211_15231 = state_15199__$1;(statearr_15211_15231[2] = null);
(statearr_15211_15231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 9))
{var inst_15179 = (state_15199[8]);var state_15199__$1 = state_15199;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15199__$1,11,out,inst_15179);
} else
{if((state_val_15200 === 10))
{var inst_15191 = (state_15199[2]);var state_15199__$1 = state_15199;var statearr_15213_15232 = state_15199__$1;(statearr_15213_15232[2] = inst_15191);
(statearr_15213_15232[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15200 === 11))
{var inst_15171 = (state_15199[7]);var inst_15188 = (state_15199[2]);var tmp15212 = inst_15171;var inst_15171__$1 = tmp15212;var state_15199__$1 = (function (){var statearr_15214 = state_15199;(statearr_15214[11] = inst_15188);
(statearr_15214[7] = inst_15171__$1);
return statearr_15214;
})();var statearr_15215_15233 = state_15199__$1;(statearr_15215_15233[2] = null);
(statearr_15215_15233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15219 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15219[0] = state_machine__5507__auto__);
(statearr_15219[1] = 1);
return statearr_15219;
});
var state_machine__5507__auto____1 = (function (state_15199){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15199);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15220){if((e15220 instanceof Object))
{var ex__5510__auto__ = e15220;var statearr_15221_15234 = state_15199;(statearr_15221_15234[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15199);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15235 = state_15199;
state_15199 = G__15235;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15222 = f__5522__auto__.call(null);(statearr_15222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15223);
return statearr_15222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15328 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15305){var state_val_15306 = (state_15305[1]);if((state_val_15306 === 1))
{var inst_15282 = 0;var state_15305__$1 = (function (){var statearr_15307 = state_15305;(statearr_15307[7] = inst_15282);
return statearr_15307;
})();var statearr_15308_15329 = state_15305__$1;(statearr_15308_15329[2] = null);
(statearr_15308_15329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 2))
{var inst_15282 = (state_15305[7]);var inst_15284 = (inst_15282 < n);var state_15305__$1 = state_15305;if(cljs.core.truth_(inst_15284))
{var statearr_15309_15330 = state_15305__$1;(statearr_15309_15330[1] = 4);
} else
{var statearr_15310_15331 = state_15305__$1;(statearr_15310_15331[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 3))
{var inst_15302 = (state_15305[2]);var inst_15303 = cljs.core.async.close_BANG_.call(null,out);var state_15305__$1 = (function (){var statearr_15311 = state_15305;(statearr_15311[8] = inst_15302);
return statearr_15311;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15305__$1,inst_15303);
} else
{if((state_val_15306 === 4))
{var state_15305__$1 = state_15305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15305__$1,7,ch);
} else
{if((state_val_15306 === 5))
{var state_15305__$1 = state_15305;var statearr_15312_15332 = state_15305__$1;(statearr_15312_15332[2] = null);
(statearr_15312_15332[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 6))
{var inst_15300 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15313_15333 = state_15305__$1;(statearr_15313_15333[2] = inst_15300);
(statearr_15313_15333[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 7))
{var inst_15287 = (state_15305[9]);var inst_15287__$1 = (state_15305[2]);var inst_15288 = (inst_15287__$1 == null);var inst_15289 = cljs.core.not.call(null,inst_15288);var state_15305__$1 = (function (){var statearr_15314 = state_15305;(statearr_15314[9] = inst_15287__$1);
return statearr_15314;
})();if(inst_15289)
{var statearr_15315_15334 = state_15305__$1;(statearr_15315_15334[1] = 8);
} else
{var statearr_15316_15335 = state_15305__$1;(statearr_15316_15335[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 8))
{var inst_15287 = (state_15305[9]);var state_15305__$1 = state_15305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15305__$1,11,out,inst_15287);
} else
{if((state_val_15306 === 9))
{var state_15305__$1 = state_15305;var statearr_15317_15336 = state_15305__$1;(statearr_15317_15336[2] = null);
(statearr_15317_15336[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 10))
{var inst_15297 = (state_15305[2]);var state_15305__$1 = state_15305;var statearr_15318_15337 = state_15305__$1;(statearr_15318_15337[2] = inst_15297);
(statearr_15318_15337[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15306 === 11))
{var inst_15282 = (state_15305[7]);var inst_15292 = (state_15305[2]);var inst_15293 = (inst_15282 + 1);var inst_15282__$1 = inst_15293;var state_15305__$1 = (function (){var statearr_15319 = state_15305;(statearr_15319[7] = inst_15282__$1);
(statearr_15319[10] = inst_15292);
return statearr_15319;
})();var statearr_15320_15338 = state_15305__$1;(statearr_15320_15338[2] = null);
(statearr_15320_15338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15324 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15324[0] = state_machine__5507__auto__);
(statearr_15324[1] = 1);
return statearr_15324;
});
var state_machine__5507__auto____1 = (function (state_15305){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15305);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15325){if((e15325 instanceof Object))
{var ex__5510__auto__ = e15325;var statearr_15326_15339 = state_15305;(statearr_15326_15339[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15305);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15340 = state_15305;
state_15305 = G__15340;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15305){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15327 = f__5522__auto__.call(null);(statearr_15327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15328);
return statearr_15327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15412){var state_val_15413 = (state_15412[1]);if((state_val_15413 === 1))
{var inst_15389 = null;var state_15412__$1 = (function (){var statearr_15414 = state_15412;(statearr_15414[7] = inst_15389);
return statearr_15414;
})();var statearr_15415_15438 = state_15412__$1;(statearr_15415_15438[2] = null);
(statearr_15415_15438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 2))
{var state_15412__$1 = state_15412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,4,ch);
} else
{if((state_val_15413 === 3))
{var inst_15409 = (state_15412[2]);var inst_15410 = cljs.core.async.close_BANG_.call(null,out);var state_15412__$1 = (function (){var statearr_15416 = state_15412;(statearr_15416[8] = inst_15409);
return statearr_15416;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15412__$1,inst_15410);
} else
{if((state_val_15413 === 4))
{var inst_15392 = (state_15412[9]);var inst_15392__$1 = (state_15412[2]);var inst_15393 = (inst_15392__$1 == null);var inst_15394 = cljs.core.not.call(null,inst_15393);var state_15412__$1 = (function (){var statearr_15417 = state_15412;(statearr_15417[9] = inst_15392__$1);
return statearr_15417;
})();if(inst_15394)
{var statearr_15418_15439 = state_15412__$1;(statearr_15418_15439[1] = 5);
} else
{var statearr_15419_15440 = state_15412__$1;(statearr_15419_15440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 5))
{var inst_15389 = (state_15412[7]);var inst_15392 = (state_15412[9]);var inst_15396 = cljs.core._EQ_.call(null,inst_15392,inst_15389);var state_15412__$1 = state_15412;if(inst_15396)
{var statearr_15420_15441 = state_15412__$1;(statearr_15420_15441[1] = 8);
} else
{var statearr_15421_15442 = state_15412__$1;(statearr_15421_15442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 6))
{var state_15412__$1 = state_15412;var statearr_15423_15443 = state_15412__$1;(statearr_15423_15443[2] = null);
(statearr_15423_15443[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 7))
{var inst_15407 = (state_15412[2]);var state_15412__$1 = state_15412;var statearr_15424_15444 = state_15412__$1;(statearr_15424_15444[2] = inst_15407);
(statearr_15424_15444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 8))
{var inst_15389 = (state_15412[7]);var tmp15422 = inst_15389;var inst_15389__$1 = tmp15422;var state_15412__$1 = (function (){var statearr_15425 = state_15412;(statearr_15425[7] = inst_15389__$1);
return statearr_15425;
})();var statearr_15426_15445 = state_15412__$1;(statearr_15426_15445[2] = null);
(statearr_15426_15445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 9))
{var inst_15392 = (state_15412[9]);var state_15412__$1 = state_15412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15412__$1,11,out,inst_15392);
} else
{if((state_val_15413 === 10))
{var inst_15404 = (state_15412[2]);var state_15412__$1 = state_15412;var statearr_15427_15446 = state_15412__$1;(statearr_15427_15446[2] = inst_15404);
(statearr_15427_15446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15413 === 11))
{var inst_15392 = (state_15412[9]);var inst_15401 = (state_15412[2]);var inst_15389 = inst_15392;var state_15412__$1 = (function (){var statearr_15428 = state_15412;(statearr_15428[7] = inst_15389);
(statearr_15428[10] = inst_15401);
return statearr_15428;
})();var statearr_15429_15447 = state_15412__$1;(statearr_15429_15447[2] = null);
(statearr_15429_15447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15433 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15433[0] = state_machine__5507__auto__);
(statearr_15433[1] = 1);
return statearr_15433;
});
var state_machine__5507__auto____1 = (function (state_15412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15434){if((e15434 instanceof Object))
{var ex__5510__auto__ = e15434;var statearr_15435_15448 = state_15412;(statearr_15435_15448[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15449 = state_15412;
state_15412 = G__15449;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15436 = f__5522__auto__.call(null);(statearr_15436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15437);
return statearr_15436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15554){var state_val_15555 = (state_15554[1]);if((state_val_15555 === 1))
{var inst_15517 = (new Array(n));var inst_15518 = inst_15517;var inst_15519 = 0;var state_15554__$1 = (function (){var statearr_15556 = state_15554;(statearr_15556[7] = inst_15519);
(statearr_15556[8] = inst_15518);
return statearr_15556;
})();var statearr_15557_15585 = state_15554__$1;(statearr_15557_15585[2] = null);
(statearr_15557_15585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 2))
{var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15554__$1,4,ch);
} else
{if((state_val_15555 === 3))
{var inst_15552 = (state_15554[2]);var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15554__$1,inst_15552);
} else
{if((state_val_15555 === 4))
{var inst_15522 = (state_15554[9]);var inst_15522__$1 = (state_15554[2]);var inst_15523 = (inst_15522__$1 == null);var inst_15524 = cljs.core.not.call(null,inst_15523);var state_15554__$1 = (function (){var statearr_15558 = state_15554;(statearr_15558[9] = inst_15522__$1);
return statearr_15558;
})();if(inst_15524)
{var statearr_15559_15586 = state_15554__$1;(statearr_15559_15586[1] = 5);
} else
{var statearr_15560_15587 = state_15554__$1;(statearr_15560_15587[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 5))
{var inst_15519 = (state_15554[7]);var inst_15527 = (state_15554[10]);var inst_15518 = (state_15554[8]);var inst_15522 = (state_15554[9]);var inst_15526 = (inst_15518[inst_15519] = inst_15522);var inst_15527__$1 = (inst_15519 + 1);var inst_15528 = (inst_15527__$1 < n);var state_15554__$1 = (function (){var statearr_15561 = state_15554;(statearr_15561[11] = inst_15526);
(statearr_15561[10] = inst_15527__$1);
return statearr_15561;
})();if(cljs.core.truth_(inst_15528))
{var statearr_15562_15588 = state_15554__$1;(statearr_15562_15588[1] = 8);
} else
{var statearr_15563_15589 = state_15554__$1;(statearr_15563_15589[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 6))
{var inst_15519 = (state_15554[7]);var inst_15540 = (inst_15519 > 0);var state_15554__$1 = state_15554;if(cljs.core.truth_(inst_15540))
{var statearr_15565_15590 = state_15554__$1;(statearr_15565_15590[1] = 12);
} else
{var statearr_15566_15591 = state_15554__$1;(statearr_15566_15591[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 7))
{var inst_15550 = (state_15554[2]);var state_15554__$1 = state_15554;var statearr_15567_15592 = state_15554__$1;(statearr_15567_15592[2] = inst_15550);
(statearr_15567_15592[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 8))
{var inst_15527 = (state_15554[10]);var inst_15518 = (state_15554[8]);var tmp15564 = inst_15518;var inst_15518__$1 = tmp15564;var inst_15519 = inst_15527;var state_15554__$1 = (function (){var statearr_15568 = state_15554;(statearr_15568[7] = inst_15519);
(statearr_15568[8] = inst_15518__$1);
return statearr_15568;
})();var statearr_15569_15593 = state_15554__$1;(statearr_15569_15593[2] = null);
(statearr_15569_15593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 9))
{var inst_15518 = (state_15554[8]);var inst_15532 = cljs.core.vec.call(null,inst_15518);var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15554__$1,11,out,inst_15532);
} else
{if((state_val_15555 === 10))
{var inst_15538 = (state_15554[2]);var state_15554__$1 = state_15554;var statearr_15570_15594 = state_15554__$1;(statearr_15570_15594[2] = inst_15538);
(statearr_15570_15594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 11))
{var inst_15534 = (state_15554[2]);var inst_15535 = (new Array(n));var inst_15518 = inst_15535;var inst_15519 = 0;var state_15554__$1 = (function (){var statearr_15571 = state_15554;(statearr_15571[7] = inst_15519);
(statearr_15571[12] = inst_15534);
(statearr_15571[8] = inst_15518);
return statearr_15571;
})();var statearr_15572_15595 = state_15554__$1;(statearr_15572_15595[2] = null);
(statearr_15572_15595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 12))
{var inst_15518 = (state_15554[8]);var inst_15542 = cljs.core.vec.call(null,inst_15518);var state_15554__$1 = state_15554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15554__$1,15,out,inst_15542);
} else
{if((state_val_15555 === 13))
{var state_15554__$1 = state_15554;var statearr_15573_15596 = state_15554__$1;(statearr_15573_15596[2] = null);
(statearr_15573_15596[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 14))
{var inst_15547 = (state_15554[2]);var inst_15548 = cljs.core.async.close_BANG_.call(null,out);var state_15554__$1 = (function (){var statearr_15574 = state_15554;(statearr_15574[13] = inst_15547);
return statearr_15574;
})();var statearr_15575_15597 = state_15554__$1;(statearr_15575_15597[2] = inst_15548);
(statearr_15575_15597[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15555 === 15))
{var inst_15544 = (state_15554[2]);var state_15554__$1 = state_15554;var statearr_15576_15598 = state_15554__$1;(statearr_15576_15598[2] = inst_15544);
(statearr_15576_15598[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15580[0] = state_machine__5507__auto__);
(statearr_15580[1] = 1);
return statearr_15580;
});
var state_machine__5507__auto____1 = (function (state_15554){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15581){if((e15581 instanceof Object))
{var ex__5510__auto__ = e15581;var statearr_15582_15599 = state_15554;(statearr_15582_15599[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15600 = state_15554;
state_15554 = G__15600;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15554){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15583 = f__5522__auto__.call(null);(statearr_15583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15584);
return statearr_15583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15743 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15713){var state_val_15714 = (state_15713[1]);if((state_val_15714 === 1))
{var inst_15672 = [];var inst_15673 = inst_15672;var inst_15674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15713__$1 = (function (){var statearr_15715 = state_15713;(statearr_15715[7] = inst_15674);
(statearr_15715[8] = inst_15673);
return statearr_15715;
})();var statearr_15716_15744 = state_15713__$1;(statearr_15716_15744[2] = null);
(statearr_15716_15744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 2))
{var state_15713__$1 = state_15713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15713__$1,4,ch);
} else
{if((state_val_15714 === 3))
{var inst_15711 = (state_15713[2]);var state_15713__$1 = state_15713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15713__$1,inst_15711);
} else
{if((state_val_15714 === 4))
{var inst_15677 = (state_15713[9]);var inst_15677__$1 = (state_15713[2]);var inst_15678 = (inst_15677__$1 == null);var inst_15679 = cljs.core.not.call(null,inst_15678);var state_15713__$1 = (function (){var statearr_15717 = state_15713;(statearr_15717[9] = inst_15677__$1);
return statearr_15717;
})();if(inst_15679)
{var statearr_15718_15745 = state_15713__$1;(statearr_15718_15745[1] = 5);
} else
{var statearr_15719_15746 = state_15713__$1;(statearr_15719_15746[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 5))
{var inst_15674 = (state_15713[7]);var inst_15677 = (state_15713[9]);var inst_15681 = (state_15713[10]);var inst_15681__$1 = f.call(null,inst_15677);var inst_15682 = cljs.core._EQ_.call(null,inst_15681__$1,inst_15674);var inst_15683 = cljs.core.keyword_identical_QMARK_.call(null,inst_15674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15684 = (inst_15682) || (inst_15683);var state_15713__$1 = (function (){var statearr_15720 = state_15713;(statearr_15720[10] = inst_15681__$1);
return statearr_15720;
})();if(cljs.core.truth_(inst_15684))
{var statearr_15721_15747 = state_15713__$1;(statearr_15721_15747[1] = 8);
} else
{var statearr_15722_15748 = state_15713__$1;(statearr_15722_15748[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 6))
{var inst_15673 = (state_15713[8]);var inst_15698 = inst_15673.length;var inst_15699 = (inst_15698 > 0);var state_15713__$1 = state_15713;if(cljs.core.truth_(inst_15699))
{var statearr_15724_15749 = state_15713__$1;(statearr_15724_15749[1] = 12);
} else
{var statearr_15725_15750 = state_15713__$1;(statearr_15725_15750[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 7))
{var inst_15709 = (state_15713[2]);var state_15713__$1 = state_15713;var statearr_15726_15751 = state_15713__$1;(statearr_15726_15751[2] = inst_15709);
(statearr_15726_15751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 8))
{var inst_15673 = (state_15713[8]);var inst_15677 = (state_15713[9]);var inst_15681 = (state_15713[10]);var inst_15686 = inst_15673.push(inst_15677);var tmp15723 = inst_15673;var inst_15673__$1 = tmp15723;var inst_15674 = inst_15681;var state_15713__$1 = (function (){var statearr_15727 = state_15713;(statearr_15727[7] = inst_15674);
(statearr_15727[8] = inst_15673__$1);
(statearr_15727[11] = inst_15686);
return statearr_15727;
})();var statearr_15728_15752 = state_15713__$1;(statearr_15728_15752[2] = null);
(statearr_15728_15752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 9))
{var inst_15673 = (state_15713[8]);var inst_15689 = cljs.core.vec.call(null,inst_15673);var state_15713__$1 = state_15713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15713__$1,11,out,inst_15689);
} else
{if((state_val_15714 === 10))
{var inst_15696 = (state_15713[2]);var state_15713__$1 = state_15713;var statearr_15729_15753 = state_15713__$1;(statearr_15729_15753[2] = inst_15696);
(statearr_15729_15753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 11))
{var inst_15677 = (state_15713[9]);var inst_15681 = (state_15713[10]);var inst_15691 = (state_15713[2]);var inst_15692 = [];var inst_15693 = inst_15692.push(inst_15677);var inst_15673 = inst_15692;var inst_15674 = inst_15681;var state_15713__$1 = (function (){var statearr_15730 = state_15713;(statearr_15730[12] = inst_15691);
(statearr_15730[13] = inst_15693);
(statearr_15730[7] = inst_15674);
(statearr_15730[8] = inst_15673);
return statearr_15730;
})();var statearr_15731_15754 = state_15713__$1;(statearr_15731_15754[2] = null);
(statearr_15731_15754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 12))
{var inst_15673 = (state_15713[8]);var inst_15701 = cljs.core.vec.call(null,inst_15673);var state_15713__$1 = state_15713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15713__$1,15,out,inst_15701);
} else
{if((state_val_15714 === 13))
{var state_15713__$1 = state_15713;var statearr_15732_15755 = state_15713__$1;(statearr_15732_15755[2] = null);
(statearr_15732_15755[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 14))
{var inst_15706 = (state_15713[2]);var inst_15707 = cljs.core.async.close_BANG_.call(null,out);var state_15713__$1 = (function (){var statearr_15733 = state_15713;(statearr_15733[14] = inst_15706);
return statearr_15733;
})();var statearr_15734_15756 = state_15713__$1;(statearr_15734_15756[2] = inst_15707);
(statearr_15734_15756[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15714 === 15))
{var inst_15703 = (state_15713[2]);var state_15713__$1 = state_15713;var statearr_15735_15757 = state_15713__$1;(statearr_15735_15757[2] = inst_15703);
(statearr_15735_15757[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_15739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15739[0] = state_machine__5507__auto__);
(statearr_15739[1] = 1);
return statearr_15739;
});
var state_machine__5507__auto____1 = (function (state_15713){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15740){if((e15740 instanceof Object))
{var ex__5510__auto__ = e15740;var statearr_15741_15758 = state_15713;(statearr_15741_15758[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15759 = state_15713;
state_15713 = G__15759;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15713){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15742 = f__5522__auto__.call(null);(statearr_15742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15743);
return statearr_15742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map