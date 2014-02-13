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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13330 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13330 = (function (f,fn_handler,meta13331){
this.f = f;
this.fn_handler = fn_handler;
this.meta13331 = meta13331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13330.cljs$lang$type = true;
cljs.core.async.t13330.cljs$lang$ctorStr = "cljs.core.async/t13330";
cljs.core.async.t13330.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13330");
});
cljs.core.async.t13330.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13332){var self__ = this;
var _13332__$1 = this;return self__.meta13331;
});
cljs.core.async.t13330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13332,meta13331__$1){var self__ = this;
var _13332__$1 = this;return (new cljs.core.async.t13330(self__.f,self__.fn_handler,meta13331__$1));
});
cljs.core.async.__GT_t13330 = (function __GT_t13330(f__$1,fn_handler__$1,meta13331){return (new cljs.core.async.t13330(f__$1,fn_handler__$1,meta13331));
});
}
return (new cljs.core.async.t13330(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13334 = buff;if(G__13334)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13334.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13334.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13334);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13334);
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
{var val_13335 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13335);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13335);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13336 = n;var x_13337 = 0;while(true){
if((x_13337 < n__4248__auto___13336))
{(a[x_13337] = 0);
{
var G__13338 = (x_13337 + 1);
x_13337 = G__13338;
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
var G__13339 = (i + 1);
i = G__13339;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13343 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13343 = (function (flag,alt_flag,meta13344){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13344 = meta13344;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13343.cljs$lang$type = true;
cljs.core.async.t13343.cljs$lang$ctorStr = "cljs.core.async/t13343";
cljs.core.async.t13343.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13343");
});
cljs.core.async.t13343.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13345){var self__ = this;
var _13345__$1 = this;return self__.meta13344;
});
cljs.core.async.t13343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13345,meta13344__$1){var self__ = this;
var _13345__$1 = this;return (new cljs.core.async.t13343(self__.flag,self__.alt_flag,meta13344__$1));
});
cljs.core.async.__GT_t13343 = (function __GT_t13343(flag__$1,alt_flag__$1,meta13344){return (new cljs.core.async.t13343(flag__$1,alt_flag__$1,meta13344));
});
}
return (new cljs.core.async.t13343(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13349 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13349 = (function (cb,flag,alt_handler,meta13350){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13350 = meta13350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13349.cljs$lang$type = true;
cljs.core.async.t13349.cljs$lang$ctorStr = "cljs.core.async/t13349";
cljs.core.async.t13349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13349");
});
cljs.core.async.t13349.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13351){var self__ = this;
var _13351__$1 = this;return self__.meta13350;
});
cljs.core.async.t13349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13351,meta13350__$1){var self__ = this;
var _13351__$1 = this;return (new cljs.core.async.t13349(self__.cb,self__.flag,self__.alt_handler,meta13350__$1));
});
cljs.core.async.__GT_t13349 = (function __GT_t13349(cb__$1,flag__$1,alt_handler__$1,meta13350){return (new cljs.core.async.t13349(cb__$1,flag__$1,alt_handler__$1,meta13350));
});
}
return (new cljs.core.async.t13349(cb,flag,alt_handler,null));
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
return (function (p1__13352_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13352_SHARP_,port], null));
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
var G__13353 = (i + 1);
i = G__13353;
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
var alts_BANG___delegate = function (ports,p__13354){var map__13356 = p__13354;var map__13356__$1 = ((cljs.core.seq_QMARK_.call(null,map__13356))?cljs.core.apply.call(null,cljs.core.hash_map,map__13356):map__13356);var opts = map__13356__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13354 = null;if (arguments.length > 1) {
  p__13354 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13354);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13357){
var ports = cljs.core.first(arglist__13357);
var p__13354 = cljs.core.rest(arglist__13357);
return alts_BANG___delegate(ports,p__13354);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13365 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13365 = (function (ch,f,map_LT_,meta13366){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13366 = meta13366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13365.cljs$lang$type = true;
cljs.core.async.t13365.cljs$lang$ctorStr = "cljs.core.async/t13365";
cljs.core.async.t13365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13365");
});
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13368 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13368 = (function (fn1,_,meta13366,ch,f,map_LT_,meta13369){
this.fn1 = fn1;
this._ = _;
this.meta13366 = meta13366;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13369 = meta13369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13368.cljs$lang$type = true;
cljs.core.async.t13368.cljs$lang$ctorStr = "cljs.core.async/t13368";
cljs.core.async.t13368.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13368");
});
cljs.core.async.t13368.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13368.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13358_SHARP_){return f1.call(null,(((p1__13358_SHARP_ == null))?null:self__.f.call(null,p1__13358_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13370){var self__ = this;
var _13370__$1 = this;return self__.meta13369;
});
cljs.core.async.t13368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13370,meta13369__$1){var self__ = this;
var _13370__$1 = this;return (new cljs.core.async.t13368(self__.fn1,self__._,self__.meta13366,self__.ch,self__.f,self__.map_LT_,meta13369__$1));
});
cljs.core.async.__GT_t13368 = (function __GT_t13368(fn1__$1,___$2,meta13366__$1,ch__$2,f__$2,map_LT___$2,meta13369){return (new cljs.core.async.t13368(fn1__$1,___$2,meta13366__$1,ch__$2,f__$2,map_LT___$2,meta13369));
});
}
return (new cljs.core.async.t13368(fn1,___$1,self__.meta13366,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13365.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13367){var self__ = this;
var _13367__$1 = this;return self__.meta13366;
});
cljs.core.async.t13365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13367,meta13366__$1){var self__ = this;
var _13367__$1 = this;return (new cljs.core.async.t13365(self__.ch,self__.f,self__.map_LT_,meta13366__$1));
});
cljs.core.async.__GT_t13365 = (function __GT_t13365(ch__$1,f__$1,map_LT___$1,meta13366){return (new cljs.core.async.t13365(ch__$1,f__$1,map_LT___$1,meta13366));
});
}
return (new cljs.core.async.t13365(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13374 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13374 = (function (ch,f,map_GT_,meta13375){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13374.cljs$lang$type = true;
cljs.core.async.t13374.cljs$lang$ctorStr = "cljs.core.async/t13374";
cljs.core.async.t13374.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13374");
});
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13376){var self__ = this;
var _13376__$1 = this;return self__.meta13375;
});
cljs.core.async.t13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13376,meta13375__$1){var self__ = this;
var _13376__$1 = this;return (new cljs.core.async.t13374(self__.ch,self__.f,self__.map_GT_,meta13375__$1));
});
cljs.core.async.__GT_t13374 = (function __GT_t13374(ch__$1,f__$1,map_GT___$1,meta13375){return (new cljs.core.async.t13374(ch__$1,f__$1,map_GT___$1,meta13375));
});
}
return (new cljs.core.async.t13374(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13380 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13380 = (function (ch,p,filter_GT_,meta13381){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13381 = meta13381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13380.cljs$lang$type = true;
cljs.core.async.t13380.cljs$lang$ctorStr = "cljs.core.async/t13380";
cljs.core.async.t13380.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13380");
});
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13380.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13382){var self__ = this;
var _13382__$1 = this;return self__.meta13381;
});
cljs.core.async.t13380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13382,meta13381__$1){var self__ = this;
var _13382__$1 = this;return (new cljs.core.async.t13380(self__.ch,self__.p,self__.filter_GT_,meta13381__$1));
});
cljs.core.async.__GT_t13380 = (function __GT_t13380(ch__$1,p__$1,filter_GT___$1,meta13381){return (new cljs.core.async.t13380(ch__$1,p__$1,filter_GT___$1,meta13381));
});
}
return (new cljs.core.async.t13380(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13444){var state_val_13445 = (state_13444[1]);if((state_val_13445 === 1))
{var state_13444__$1 = state_13444;var statearr_13446_13466 = state_13444__$1;(statearr_13446_13466[2] = null);
(statearr_13446_13466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 2))
{var state_13444__$1 = state_13444;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13444__$1,4,ch);
} else
{if((state_val_13445 === 3))
{var inst_13442 = (state_13444[2]);var state_13444__$1 = state_13444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13444__$1,inst_13442);
} else
{if((state_val_13445 === 4))
{var inst_13426 = (state_13444[7]);var inst_13426__$1 = (state_13444[2]);var inst_13427 = (inst_13426__$1 == null);var state_13444__$1 = (function (){var statearr_13447 = state_13444;(statearr_13447[7] = inst_13426__$1);
return statearr_13447;
})();if(cljs.core.truth_(inst_13427))
{var statearr_13448_13467 = state_13444__$1;(statearr_13448_13467[1] = 5);
} else
{var statearr_13449_13468 = state_13444__$1;(statearr_13449_13468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 5))
{var inst_13429 = cljs.core.async.close_BANG_.call(null,out);var state_13444__$1 = state_13444;var statearr_13450_13469 = state_13444__$1;(statearr_13450_13469[2] = inst_13429);
(statearr_13450_13469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 6))
{var inst_13426 = (state_13444[7]);var inst_13431 = p.call(null,inst_13426);var state_13444__$1 = state_13444;if(cljs.core.truth_(inst_13431))
{var statearr_13451_13470 = state_13444__$1;(statearr_13451_13470[1] = 8);
} else
{var statearr_13452_13471 = state_13444__$1;(statearr_13452_13471[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 7))
{var inst_13440 = (state_13444[2]);var state_13444__$1 = state_13444;var statearr_13453_13472 = state_13444__$1;(statearr_13453_13472[2] = inst_13440);
(statearr_13453_13472[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 8))
{var inst_13426 = (state_13444[7]);var state_13444__$1 = state_13444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13444__$1,11,out,inst_13426);
} else
{if((state_val_13445 === 9))
{var state_13444__$1 = state_13444;var statearr_13454_13473 = state_13444__$1;(statearr_13454_13473[2] = null);
(statearr_13454_13473[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 10))
{var inst_13437 = (state_13444[2]);var state_13444__$1 = (function (){var statearr_13455 = state_13444;(statearr_13455[8] = inst_13437);
return statearr_13455;
})();var statearr_13456_13474 = state_13444__$1;(statearr_13456_13474[2] = null);
(statearr_13456_13474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13445 === 11))
{var inst_13434 = (state_13444[2]);var state_13444__$1 = state_13444;var statearr_13457_13475 = state_13444__$1;(statearr_13457_13475[2] = inst_13434);
(statearr_13457_13475[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13461 = [null,null,null,null,null,null,null,null,null];(statearr_13461[0] = state_machine__5507__auto__);
(statearr_13461[1] = 1);
return statearr_13461;
});
var state_machine__5507__auto____1 = (function (state_13444){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13462){if((e13462 instanceof Object))
{var ex__5510__auto__ = e13462;var statearr_13463_13476 = state_13444;(statearr_13463_13476[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13477 = state_13444;
state_13444 = G__13477;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13444){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13464 = f__5522__auto__.call(null);(statearr_13464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13465);
return statearr_13464;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13629){var state_val_13630 = (state_13629[1]);if((state_val_13630 === 1))
{var state_13629__$1 = state_13629;var statearr_13631_13668 = state_13629__$1;(statearr_13631_13668[2] = null);
(statearr_13631_13668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 2))
{var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13629__$1,4,in$);
} else
{if((state_val_13630 === 3))
{var inst_13627 = (state_13629[2]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13629__$1,inst_13627);
} else
{if((state_val_13630 === 4))
{var inst_13575 = (state_13629[7]);var inst_13575__$1 = (state_13629[2]);var inst_13576 = (inst_13575__$1 == null);var state_13629__$1 = (function (){var statearr_13632 = state_13629;(statearr_13632[7] = inst_13575__$1);
return statearr_13632;
})();if(cljs.core.truth_(inst_13576))
{var statearr_13633_13669 = state_13629__$1;(statearr_13633_13669[1] = 5);
} else
{var statearr_13634_13670 = state_13629__$1;(statearr_13634_13670[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 5))
{var inst_13578 = cljs.core.async.close_BANG_.call(null,out);var state_13629__$1 = state_13629;var statearr_13635_13671 = state_13629__$1;(statearr_13635_13671[2] = inst_13578);
(statearr_13635_13671[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 6))
{var inst_13575 = (state_13629[7]);var inst_13580 = f.call(null,inst_13575);var inst_13585 = cljs.core.seq.call(null,inst_13580);var inst_13586 = inst_13585;var inst_13587 = null;var inst_13588 = 0;var inst_13589 = 0;var state_13629__$1 = (function (){var statearr_13636 = state_13629;(statearr_13636[8] = inst_13589);
(statearr_13636[9] = inst_13588);
(statearr_13636[10] = inst_13587);
(statearr_13636[11] = inst_13586);
return statearr_13636;
})();var statearr_13637_13672 = state_13629__$1;(statearr_13637_13672[2] = null);
(statearr_13637_13672[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 7))
{var inst_13625 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13638_13673 = state_13629__$1;(statearr_13638_13673[2] = inst_13625);
(statearr_13638_13673[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 8))
{var inst_13589 = (state_13629[8]);var inst_13588 = (state_13629[9]);var inst_13591 = (inst_13589 < inst_13588);var inst_13592 = inst_13591;var state_13629__$1 = state_13629;if(cljs.core.truth_(inst_13592))
{var statearr_13639_13674 = state_13629__$1;(statearr_13639_13674[1] = 10);
} else
{var statearr_13640_13675 = state_13629__$1;(statearr_13640_13675[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 9))
{var inst_13622 = (state_13629[2]);var state_13629__$1 = (function (){var statearr_13641 = state_13629;(statearr_13641[12] = inst_13622);
return statearr_13641;
})();var statearr_13642_13676 = state_13629__$1;(statearr_13642_13676[2] = null);
(statearr_13642_13676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 10))
{var inst_13589 = (state_13629[8]);var inst_13587 = (state_13629[10]);var inst_13594 = cljs.core._nth.call(null,inst_13587,inst_13589);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13629__$1,13,out,inst_13594);
} else
{if((state_val_13630 === 11))
{var inst_13600 = (state_13629[13]);var inst_13586 = (state_13629[11]);var inst_13600__$1 = cljs.core.seq.call(null,inst_13586);var state_13629__$1 = (function (){var statearr_13646 = state_13629;(statearr_13646[13] = inst_13600__$1);
return statearr_13646;
})();if(inst_13600__$1)
{var statearr_13647_13677 = state_13629__$1;(statearr_13647_13677[1] = 14);
} else
{var statearr_13648_13678 = state_13629__$1;(statearr_13648_13678[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 12))
{var inst_13620 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13649_13679 = state_13629__$1;(statearr_13649_13679[2] = inst_13620);
(statearr_13649_13679[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 13))
{var inst_13589 = (state_13629[8]);var inst_13588 = (state_13629[9]);var inst_13587 = (state_13629[10]);var inst_13586 = (state_13629[11]);var inst_13596 = (state_13629[2]);var inst_13597 = (inst_13589 + 1);var tmp13643 = inst_13588;var tmp13644 = inst_13587;var tmp13645 = inst_13586;var inst_13586__$1 = tmp13645;var inst_13587__$1 = tmp13644;var inst_13588__$1 = tmp13643;var inst_13589__$1 = inst_13597;var state_13629__$1 = (function (){var statearr_13650 = state_13629;(statearr_13650[14] = inst_13596);
(statearr_13650[8] = inst_13589__$1);
(statearr_13650[9] = inst_13588__$1);
(statearr_13650[10] = inst_13587__$1);
(statearr_13650[11] = inst_13586__$1);
return statearr_13650;
})();var statearr_13651_13680 = state_13629__$1;(statearr_13651_13680[2] = null);
(statearr_13651_13680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 14))
{var inst_13600 = (state_13629[13]);var inst_13602 = cljs.core.chunked_seq_QMARK_.call(null,inst_13600);var state_13629__$1 = state_13629;if(inst_13602)
{var statearr_13652_13681 = state_13629__$1;(statearr_13652_13681[1] = 17);
} else
{var statearr_13653_13682 = state_13629__$1;(statearr_13653_13682[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 15))
{var state_13629__$1 = state_13629;var statearr_13654_13683 = state_13629__$1;(statearr_13654_13683[2] = null);
(statearr_13654_13683[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 16))
{var inst_13618 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13655_13684 = state_13629__$1;(statearr_13655_13684[2] = inst_13618);
(statearr_13655_13684[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 17))
{var inst_13600 = (state_13629[13]);var inst_13604 = cljs.core.chunk_first.call(null,inst_13600);var inst_13605 = cljs.core.chunk_rest.call(null,inst_13600);var inst_13606 = cljs.core.count.call(null,inst_13604);var inst_13586 = inst_13605;var inst_13587 = inst_13604;var inst_13588 = inst_13606;var inst_13589 = 0;var state_13629__$1 = (function (){var statearr_13656 = state_13629;(statearr_13656[8] = inst_13589);
(statearr_13656[9] = inst_13588);
(statearr_13656[10] = inst_13587);
(statearr_13656[11] = inst_13586);
return statearr_13656;
})();var statearr_13657_13685 = state_13629__$1;(statearr_13657_13685[2] = null);
(statearr_13657_13685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 18))
{var inst_13600 = (state_13629[13]);var inst_13609 = cljs.core.first.call(null,inst_13600);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13629__$1,20,out,inst_13609);
} else
{if((state_val_13630 === 19))
{var inst_13615 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13658_13686 = state_13629__$1;(statearr_13658_13686[2] = inst_13615);
(statearr_13658_13686[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 20))
{var inst_13600 = (state_13629[13]);var inst_13611 = (state_13629[2]);var inst_13612 = cljs.core.next.call(null,inst_13600);var inst_13586 = inst_13612;var inst_13587 = null;var inst_13588 = 0;var inst_13589 = 0;var state_13629__$1 = (function (){var statearr_13659 = state_13629;(statearr_13659[8] = inst_13589);
(statearr_13659[9] = inst_13588);
(statearr_13659[10] = inst_13587);
(statearr_13659[11] = inst_13586);
(statearr_13659[15] = inst_13611);
return statearr_13659;
})();var statearr_13660_13687 = state_13629__$1;(statearr_13660_13687[2] = null);
(statearr_13660_13687[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13664[0] = state_machine__5507__auto__);
(statearr_13664[1] = 1);
return statearr_13664;
});
var state_machine__5507__auto____1 = (function (state_13629){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13665){if((e13665 instanceof Object))
{var ex__5510__auto__ = e13665;var statearr_13666_13688 = state_13629;(statearr_13666_13688[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13689 = state_13629;
state_13629 = G__13689;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13629){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13667 = f__5522__auto__.call(null);(statearr_13667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13667;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13749){var state_val_13750 = (state_13749[1]);if((state_val_13750 === 1))
{var state_13749__$1 = state_13749;var statearr_13751_13771 = state_13749__$1;(statearr_13751_13771[2] = null);
(statearr_13751_13771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 2))
{var state_13749__$1 = state_13749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13749__$1,4,from);
} else
{if((state_val_13750 === 3))
{var inst_13747 = (state_13749[2]);var state_13749__$1 = state_13749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13749__$1,inst_13747);
} else
{if((state_val_13750 === 4))
{var inst_13732 = (state_13749[7]);var inst_13732__$1 = (state_13749[2]);var inst_13733 = (inst_13732__$1 == null);var state_13749__$1 = (function (){var statearr_13752 = state_13749;(statearr_13752[7] = inst_13732__$1);
return statearr_13752;
})();if(cljs.core.truth_(inst_13733))
{var statearr_13753_13772 = state_13749__$1;(statearr_13753_13772[1] = 5);
} else
{var statearr_13754_13773 = state_13749__$1;(statearr_13754_13773[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 5))
{var state_13749__$1 = state_13749;if(cljs.core.truth_(close_QMARK_))
{var statearr_13755_13774 = state_13749__$1;(statearr_13755_13774[1] = 8);
} else
{var statearr_13756_13775 = state_13749__$1;(statearr_13756_13775[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 6))
{var inst_13732 = (state_13749[7]);var state_13749__$1 = state_13749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13749__$1,11,to,inst_13732);
} else
{if((state_val_13750 === 7))
{var inst_13745 = (state_13749[2]);var state_13749__$1 = state_13749;var statearr_13757_13776 = state_13749__$1;(statearr_13757_13776[2] = inst_13745);
(statearr_13757_13776[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 8))
{var inst_13736 = cljs.core.async.close_BANG_.call(null,to);var state_13749__$1 = state_13749;var statearr_13758_13777 = state_13749__$1;(statearr_13758_13777[2] = inst_13736);
(statearr_13758_13777[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 9))
{var state_13749__$1 = state_13749;var statearr_13759_13778 = state_13749__$1;(statearr_13759_13778[2] = null);
(statearr_13759_13778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 10))
{var inst_13739 = (state_13749[2]);var state_13749__$1 = state_13749;var statearr_13760_13779 = state_13749__$1;(statearr_13760_13779[2] = inst_13739);
(statearr_13760_13779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13750 === 11))
{var inst_13742 = (state_13749[2]);var state_13749__$1 = (function (){var statearr_13761 = state_13749;(statearr_13761[8] = inst_13742);
return statearr_13761;
})();var statearr_13762_13780 = state_13749__$1;(statearr_13762_13780[2] = null);
(statearr_13762_13780[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13766 = [null,null,null,null,null,null,null,null,null];(statearr_13766[0] = state_machine__5507__auto__);
(statearr_13766[1] = 1);
return statearr_13766;
});
var state_machine__5507__auto____1 = (function (state_13749){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13767){if((e13767 instanceof Object))
{var ex__5510__auto__ = e13767;var statearr_13768_13781 = state_13749;(statearr_13768_13781[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13782 = state_13749;
state_13749 = G__13782;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13749){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13769 = f__5522__auto__.call(null);(statearr_13769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13770);
return statearr_13769;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13847){var state_val_13848 = (state_13847[1]);if((state_val_13848 === 1))
{var state_13847__$1 = state_13847;var statearr_13849_13870 = state_13847__$1;(statearr_13849_13870[2] = null);
(statearr_13849_13870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 2))
{var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13847__$1,4,ch);
} else
{if((state_val_13848 === 3))
{var inst_13845 = (state_13847[2]);var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13847__$1,inst_13845);
} else
{if((state_val_13848 === 4))
{var inst_13828 = (state_13847[7]);var inst_13828__$1 = (state_13847[2]);var inst_13829 = (inst_13828__$1 == null);var state_13847__$1 = (function (){var statearr_13850 = state_13847;(statearr_13850[7] = inst_13828__$1);
return statearr_13850;
})();if(cljs.core.truth_(inst_13829))
{var statearr_13851_13871 = state_13847__$1;(statearr_13851_13871[1] = 5);
} else
{var statearr_13852_13872 = state_13847__$1;(statearr_13852_13872[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 5))
{var inst_13831 = cljs.core.async.close_BANG_.call(null,tc);var inst_13832 = cljs.core.async.close_BANG_.call(null,fc);var state_13847__$1 = (function (){var statearr_13853 = state_13847;(statearr_13853[8] = inst_13831);
return statearr_13853;
})();var statearr_13854_13873 = state_13847__$1;(statearr_13854_13873[2] = inst_13832);
(statearr_13854_13873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 6))
{var inst_13828 = (state_13847[7]);var inst_13834 = p.call(null,inst_13828);var state_13847__$1 = state_13847;if(cljs.core.truth_(inst_13834))
{var statearr_13855_13874 = state_13847__$1;(statearr_13855_13874[1] = 9);
} else
{var statearr_13856_13875 = state_13847__$1;(statearr_13856_13875[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 7))
{var inst_13843 = (state_13847[2]);var state_13847__$1 = state_13847;var statearr_13857_13876 = state_13847__$1;(statearr_13857_13876[2] = inst_13843);
(statearr_13857_13876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 8))
{var inst_13840 = (state_13847[2]);var state_13847__$1 = (function (){var statearr_13858 = state_13847;(statearr_13858[9] = inst_13840);
return statearr_13858;
})();var statearr_13859_13877 = state_13847__$1;(statearr_13859_13877[2] = null);
(statearr_13859_13877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 9))
{var state_13847__$1 = state_13847;var statearr_13860_13878 = state_13847__$1;(statearr_13860_13878[2] = tc);
(statearr_13860_13878[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 10))
{var state_13847__$1 = state_13847;var statearr_13861_13879 = state_13847__$1;(statearr_13861_13879[2] = fc);
(statearr_13861_13879[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13848 === 11))
{var inst_13828 = (state_13847[7]);var inst_13838 = (state_13847[2]);var state_13847__$1 = state_13847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13847__$1,8,inst_13838,inst_13828);
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
var state_machine__5507__auto____0 = (function (){var statearr_13865 = [null,null,null,null,null,null,null,null,null,null];(statearr_13865[0] = state_machine__5507__auto__);
(statearr_13865[1] = 1);
return statearr_13865;
});
var state_machine__5507__auto____1 = (function (state_13847){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13847);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13866){if((e13866 instanceof Object))
{var ex__5510__auto__ = e13866;var statearr_13867_13880 = state_13847;(statearr_13867_13880[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13881 = state_13847;
state_13847 = G__13881;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13847){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13868 = f__5522__auto__.call(null);(statearr_13868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13869);
return statearr_13868;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13928){var state_val_13929 = (state_13928[1]);if((state_val_13929 === 7))
{var inst_13924 = (state_13928[2]);var state_13928__$1 = state_13928;var statearr_13930_13946 = state_13928__$1;(statearr_13930_13946[2] = inst_13924);
(statearr_13930_13946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13929 === 6))
{var inst_13914 = (state_13928[7]);var inst_13917 = (state_13928[8]);var inst_13921 = f.call(null,inst_13914,inst_13917);var inst_13914__$1 = inst_13921;var state_13928__$1 = (function (){var statearr_13931 = state_13928;(statearr_13931[7] = inst_13914__$1);
return statearr_13931;
})();var statearr_13932_13947 = state_13928__$1;(statearr_13932_13947[2] = null);
(statearr_13932_13947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13929 === 5))
{var inst_13914 = (state_13928[7]);var state_13928__$1 = state_13928;var statearr_13933_13948 = state_13928__$1;(statearr_13933_13948[2] = inst_13914);
(statearr_13933_13948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13929 === 4))
{var inst_13917 = (state_13928[8]);var inst_13917__$1 = (state_13928[2]);var inst_13918 = (inst_13917__$1 == null);var state_13928__$1 = (function (){var statearr_13934 = state_13928;(statearr_13934[8] = inst_13917__$1);
return statearr_13934;
})();if(cljs.core.truth_(inst_13918))
{var statearr_13935_13949 = state_13928__$1;(statearr_13935_13949[1] = 5);
} else
{var statearr_13936_13950 = state_13928__$1;(statearr_13936_13950[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13929 === 3))
{var inst_13926 = (state_13928[2]);var state_13928__$1 = state_13928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13928__$1,inst_13926);
} else
{if((state_val_13929 === 2))
{var state_13928__$1 = state_13928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13928__$1,4,ch);
} else
{if((state_val_13929 === 1))
{var inst_13914 = init;var state_13928__$1 = (function (){var statearr_13937 = state_13928;(statearr_13937[7] = inst_13914);
return statearr_13937;
})();var statearr_13938_13951 = state_13928__$1;(statearr_13938_13951[2] = null);
(statearr_13938_13951[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13942 = [null,null,null,null,null,null,null,null,null];(statearr_13942[0] = state_machine__5507__auto__);
(statearr_13942[1] = 1);
return statearr_13942;
});
var state_machine__5507__auto____1 = (function (state_13928){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13928);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13943){if((e13943 instanceof Object))
{var ex__5510__auto__ = e13943;var statearr_13944_13952 = state_13928;(statearr_13944_13952[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13928);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13953 = state_13928;
state_13928 = G__13953;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13928){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13945 = f__5522__auto__.call(null);(statearr_13945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13945;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14015){var state_val_14016 = (state_14015[1]);if((state_val_14016 === 1))
{var inst_13995 = cljs.core.seq.call(null,coll);var inst_13996 = inst_13995;var state_14015__$1 = (function (){var statearr_14017 = state_14015;(statearr_14017[7] = inst_13996);
return statearr_14017;
})();var statearr_14018_14036 = state_14015__$1;(statearr_14018_14036[2] = null);
(statearr_14018_14036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 2))
{var inst_13996 = (state_14015[7]);var state_14015__$1 = state_14015;if(cljs.core.truth_(inst_13996))
{var statearr_14019_14037 = state_14015__$1;(statearr_14019_14037[1] = 4);
} else
{var statearr_14020_14038 = state_14015__$1;(statearr_14020_14038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 3))
{var inst_14013 = (state_14015[2]);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14015__$1,inst_14013);
} else
{if((state_val_14016 === 4))
{var inst_13996 = (state_14015[7]);var inst_13999 = cljs.core.first.call(null,inst_13996);var state_14015__$1 = state_14015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14015__$1,7,ch,inst_13999);
} else
{if((state_val_14016 === 5))
{var state_14015__$1 = state_14015;if(cljs.core.truth_(close_QMARK_))
{var statearr_14021_14039 = state_14015__$1;(statearr_14021_14039[1] = 8);
} else
{var statearr_14022_14040 = state_14015__$1;(statearr_14022_14040[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 6))
{var inst_14011 = (state_14015[2]);var state_14015__$1 = state_14015;var statearr_14023_14041 = state_14015__$1;(statearr_14023_14041[2] = inst_14011);
(statearr_14023_14041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 7))
{var inst_13996 = (state_14015[7]);var inst_14001 = (state_14015[2]);var inst_14002 = cljs.core.next.call(null,inst_13996);var inst_13996__$1 = inst_14002;var state_14015__$1 = (function (){var statearr_14024 = state_14015;(statearr_14024[8] = inst_14001);
(statearr_14024[7] = inst_13996__$1);
return statearr_14024;
})();var statearr_14025_14042 = state_14015__$1;(statearr_14025_14042[2] = null);
(statearr_14025_14042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 8))
{var inst_14006 = cljs.core.async.close_BANG_.call(null,ch);var state_14015__$1 = state_14015;var statearr_14026_14043 = state_14015__$1;(statearr_14026_14043[2] = inst_14006);
(statearr_14026_14043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 9))
{var state_14015__$1 = state_14015;var statearr_14027_14044 = state_14015__$1;(statearr_14027_14044[2] = null);
(statearr_14027_14044[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14016 === 10))
{var inst_14009 = (state_14015[2]);var state_14015__$1 = state_14015;var statearr_14028_14045 = state_14015__$1;(statearr_14028_14045[2] = inst_14009);
(statearr_14028_14045[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14032 = [null,null,null,null,null,null,null,null,null];(statearr_14032[0] = state_machine__5507__auto__);
(statearr_14032[1] = 1);
return statearr_14032;
});
var state_machine__5507__auto____1 = (function (state_14015){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14033){if((e14033 instanceof Object))
{var ex__5510__auto__ = e14033;var statearr_14034_14046 = state_14015;(statearr_14034_14046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14047 = state_14015;
state_14015 = G__14047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14035 = f__5522__auto__.call(null);(statearr_14035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14035;
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
cljs.core.async.Mux = (function (){var obj14049 = {};return obj14049;
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
cljs.core.async.Mult = (function (){var obj14051 = {};return obj14051;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14275 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14275 = (function (cs,ch,mult,meta14276){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14276 = meta14276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14275.cljs$lang$type = true;
cljs.core.async.t14275.cljs$lang$ctorStr = "cljs.core.async/t14275";
cljs.core.async.t14275.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14275");
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14275.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14275.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14277){var self__ = this;
var _14277__$1 = this;return self__.meta14276;
});})(cs))
;
cljs.core.async.t14275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14277,meta14276__$1){var self__ = this;
var _14277__$1 = this;return (new cljs.core.async.t14275(self__.cs,self__.ch,self__.mult,meta14276__$1));
});})(cs))
;
cljs.core.async.__GT_t14275 = ((function (cs){
return (function __GT_t14275(cs__$1,ch__$1,mult__$1,meta14276){return (new cljs.core.async.t14275(cs__$1,ch__$1,mult__$1,meta14276));
});})(cs))
;
}
return (new cljs.core.async.t14275(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14498 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14412){var state_val_14413 = (state_14412[1]);if((state_val_14413 === 32))
{var inst_14356 = (state_14412[7]);var inst_14280 = (state_14412[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14412,31,Object,null,30);var inst_14363 = cljs.core.async.put_BANG_.call(null,inst_14356,inst_14280,done);var state_14412__$1 = state_14412;var statearr_14414_14499 = state_14412__$1;(statearr_14414_14499[2] = inst_14363);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 1))
{var state_14412__$1 = state_14412;var statearr_14415_14500 = state_14412__$1;(statearr_14415_14500[2] = null);
(statearr_14415_14500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 33))
{var inst_14369 = (state_14412[9]);var inst_14371 = cljs.core.chunked_seq_QMARK_.call(null,inst_14369);var state_14412__$1 = state_14412;if(inst_14371)
{var statearr_14416_14501 = state_14412__$1;(statearr_14416_14501[1] = 36);
} else
{var statearr_14417_14502 = state_14412__$1;(statearr_14417_14502[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 2))
{var state_14412__$1 = state_14412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14412__$1,4,ch);
} else
{if((state_val_14413 === 34))
{var state_14412__$1 = state_14412;var statearr_14418_14503 = state_14412__$1;(statearr_14418_14503[2] = null);
(statearr_14418_14503[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 3))
{var inst_14410 = (state_14412[2]);var state_14412__$1 = state_14412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14412__$1,inst_14410);
} else
{if((state_val_14413 === 35))
{var inst_14394 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14419_14504 = state_14412__$1;(statearr_14419_14504[2] = inst_14394);
(statearr_14419_14504[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 4))
{var inst_14280 = (state_14412[8]);var inst_14280__$1 = (state_14412[2]);var inst_14281 = (inst_14280__$1 == null);var state_14412__$1 = (function (){var statearr_14420 = state_14412;(statearr_14420[8] = inst_14280__$1);
return statearr_14420;
})();if(cljs.core.truth_(inst_14281))
{var statearr_14421_14505 = state_14412__$1;(statearr_14421_14505[1] = 5);
} else
{var statearr_14422_14506 = state_14412__$1;(statearr_14422_14506[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 36))
{var inst_14369 = (state_14412[9]);var inst_14373 = cljs.core.chunk_first.call(null,inst_14369);var inst_14374 = cljs.core.chunk_rest.call(null,inst_14369);var inst_14375 = cljs.core.count.call(null,inst_14373);var inst_14348 = inst_14374;var inst_14349 = inst_14373;var inst_14350 = inst_14375;var inst_14351 = 0;var state_14412__$1 = (function (){var statearr_14423 = state_14412;(statearr_14423[10] = inst_14349);
(statearr_14423[11] = inst_14348);
(statearr_14423[12] = inst_14351);
(statearr_14423[13] = inst_14350);
return statearr_14423;
})();var statearr_14424_14507 = state_14412__$1;(statearr_14424_14507[2] = null);
(statearr_14424_14507[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 5))
{var inst_14287 = cljs.core.deref.call(null,cs);var inst_14288 = cljs.core.seq.call(null,inst_14287);var inst_14289 = inst_14288;var inst_14290 = null;var inst_14291 = 0;var inst_14292 = 0;var state_14412__$1 = (function (){var statearr_14425 = state_14412;(statearr_14425[14] = inst_14289);
(statearr_14425[15] = inst_14290);
(statearr_14425[16] = inst_14291);
(statearr_14425[17] = inst_14292);
return statearr_14425;
})();var statearr_14426_14508 = state_14412__$1;(statearr_14426_14508[2] = null);
(statearr_14426_14508[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 37))
{var inst_14369 = (state_14412[9]);var inst_14378 = cljs.core.first.call(null,inst_14369);var state_14412__$1 = (function (){var statearr_14427 = state_14412;(statearr_14427[18] = inst_14378);
return statearr_14427;
})();var statearr_14428_14509 = state_14412__$1;(statearr_14428_14509[2] = null);
(statearr_14428_14509[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 6))
{var inst_14340 = (state_14412[19]);var inst_14339 = cljs.core.deref.call(null,cs);var inst_14340__$1 = cljs.core.keys.call(null,inst_14339);var inst_14341 = cljs.core.count.call(null,inst_14340__$1);var inst_14342 = cljs.core.reset_BANG_.call(null,dctr,inst_14341);var inst_14347 = cljs.core.seq.call(null,inst_14340__$1);var inst_14348 = inst_14347;var inst_14349 = null;var inst_14350 = 0;var inst_14351 = 0;var state_14412__$1 = (function (){var statearr_14429 = state_14412;(statearr_14429[20] = inst_14342);
(statearr_14429[10] = inst_14349);
(statearr_14429[19] = inst_14340__$1);
(statearr_14429[11] = inst_14348);
(statearr_14429[12] = inst_14351);
(statearr_14429[13] = inst_14350);
return statearr_14429;
})();var statearr_14430_14510 = state_14412__$1;(statearr_14430_14510[2] = null);
(statearr_14430_14510[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 38))
{var inst_14391 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14431_14511 = state_14412__$1;(statearr_14431_14511[2] = inst_14391);
(statearr_14431_14511[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 7))
{var inst_14408 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14432_14512 = state_14412__$1;(statearr_14432_14512[2] = inst_14408);
(statearr_14432_14512[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 39))
{var inst_14369 = (state_14412[9]);var inst_14387 = (state_14412[2]);var inst_14388 = cljs.core.next.call(null,inst_14369);var inst_14348 = inst_14388;var inst_14349 = null;var inst_14350 = 0;var inst_14351 = 0;var state_14412__$1 = (function (){var statearr_14433 = state_14412;(statearr_14433[21] = inst_14387);
(statearr_14433[10] = inst_14349);
(statearr_14433[11] = inst_14348);
(statearr_14433[12] = inst_14351);
(statearr_14433[13] = inst_14350);
return statearr_14433;
})();var statearr_14434_14513 = state_14412__$1;(statearr_14434_14513[2] = null);
(statearr_14434_14513[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 8))
{var inst_14291 = (state_14412[16]);var inst_14292 = (state_14412[17]);var inst_14294 = (inst_14292 < inst_14291);var inst_14295 = inst_14294;var state_14412__$1 = state_14412;if(cljs.core.truth_(inst_14295))
{var statearr_14435_14514 = state_14412__$1;(statearr_14435_14514[1] = 10);
} else
{var statearr_14436_14515 = state_14412__$1;(statearr_14436_14515[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 40))
{var inst_14378 = (state_14412[18]);var inst_14379 = (state_14412[2]);var inst_14380 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14381 = cljs.core.async.untap_STAR_.call(null,m,inst_14378);var state_14412__$1 = (function (){var statearr_14437 = state_14412;(statearr_14437[22] = inst_14379);
(statearr_14437[23] = inst_14380);
return statearr_14437;
})();var statearr_14438_14516 = state_14412__$1;(statearr_14438_14516[2] = inst_14381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 9))
{var inst_14337 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14439_14517 = state_14412__$1;(statearr_14439_14517[2] = inst_14337);
(statearr_14439_14517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 41))
{var inst_14378 = (state_14412[18]);var inst_14280 = (state_14412[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14412,40,Object,null,39);var inst_14385 = cljs.core.async.put_BANG_.call(null,inst_14378,inst_14280,done);var state_14412__$1 = state_14412;var statearr_14440_14518 = state_14412__$1;(statearr_14440_14518[2] = inst_14385);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 10))
{var inst_14290 = (state_14412[15]);var inst_14292 = (state_14412[17]);var inst_14298 = cljs.core._nth.call(null,inst_14290,inst_14292);var inst_14299 = cljs.core.nth.call(null,inst_14298,0,null);var inst_14300 = cljs.core.nth.call(null,inst_14298,1,null);var state_14412__$1 = (function (){var statearr_14441 = state_14412;(statearr_14441[24] = inst_14299);
return statearr_14441;
})();if(cljs.core.truth_(inst_14300))
{var statearr_14442_14519 = state_14412__$1;(statearr_14442_14519[1] = 13);
} else
{var statearr_14443_14520 = state_14412__$1;(statearr_14443_14520[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 42))
{var state_14412__$1 = state_14412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14412__$1,45,dchan);
} else
{if((state_val_14413 === 11))
{var inst_14289 = (state_14412[14]);var inst_14309 = (state_14412[25]);var inst_14309__$1 = cljs.core.seq.call(null,inst_14289);var state_14412__$1 = (function (){var statearr_14444 = state_14412;(statearr_14444[25] = inst_14309__$1);
return statearr_14444;
})();if(inst_14309__$1)
{var statearr_14445_14521 = state_14412__$1;(statearr_14445_14521[1] = 16);
} else
{var statearr_14446_14522 = state_14412__$1;(statearr_14446_14522[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 43))
{var state_14412__$1 = state_14412;var statearr_14447_14523 = state_14412__$1;(statearr_14447_14523[2] = null);
(statearr_14447_14523[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 12))
{var inst_14335 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14448_14524 = state_14412__$1;(statearr_14448_14524[2] = inst_14335);
(statearr_14448_14524[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 44))
{var inst_14405 = (state_14412[2]);var state_14412__$1 = (function (){var statearr_14449 = state_14412;(statearr_14449[26] = inst_14405);
return statearr_14449;
})();var statearr_14450_14525 = state_14412__$1;(statearr_14450_14525[2] = null);
(statearr_14450_14525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 13))
{var inst_14299 = (state_14412[24]);var inst_14302 = cljs.core.async.close_BANG_.call(null,inst_14299);var state_14412__$1 = state_14412;var statearr_14451_14526 = state_14412__$1;(statearr_14451_14526[2] = inst_14302);
(statearr_14451_14526[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 45))
{var inst_14402 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14455_14527 = state_14412__$1;(statearr_14455_14527[2] = inst_14402);
(statearr_14455_14527[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 14))
{var state_14412__$1 = state_14412;var statearr_14456_14528 = state_14412__$1;(statearr_14456_14528[2] = null);
(statearr_14456_14528[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 15))
{var inst_14289 = (state_14412[14]);var inst_14290 = (state_14412[15]);var inst_14291 = (state_14412[16]);var inst_14292 = (state_14412[17]);var inst_14305 = (state_14412[2]);var inst_14306 = (inst_14292 + 1);var tmp14452 = inst_14289;var tmp14453 = inst_14290;var tmp14454 = inst_14291;var inst_14289__$1 = tmp14452;var inst_14290__$1 = tmp14453;var inst_14291__$1 = tmp14454;var inst_14292__$1 = inst_14306;var state_14412__$1 = (function (){var statearr_14457 = state_14412;(statearr_14457[14] = inst_14289__$1);
(statearr_14457[15] = inst_14290__$1);
(statearr_14457[16] = inst_14291__$1);
(statearr_14457[17] = inst_14292__$1);
(statearr_14457[27] = inst_14305);
return statearr_14457;
})();var statearr_14458_14529 = state_14412__$1;(statearr_14458_14529[2] = null);
(statearr_14458_14529[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 16))
{var inst_14309 = (state_14412[25]);var inst_14311 = cljs.core.chunked_seq_QMARK_.call(null,inst_14309);var state_14412__$1 = state_14412;if(inst_14311)
{var statearr_14459_14530 = state_14412__$1;(statearr_14459_14530[1] = 19);
} else
{var statearr_14460_14531 = state_14412__$1;(statearr_14460_14531[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 17))
{var state_14412__$1 = state_14412;var statearr_14461_14532 = state_14412__$1;(statearr_14461_14532[2] = null);
(statearr_14461_14532[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 18))
{var inst_14333 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14462_14533 = state_14412__$1;(statearr_14462_14533[2] = inst_14333);
(statearr_14462_14533[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 19))
{var inst_14309 = (state_14412[25]);var inst_14313 = cljs.core.chunk_first.call(null,inst_14309);var inst_14314 = cljs.core.chunk_rest.call(null,inst_14309);var inst_14315 = cljs.core.count.call(null,inst_14313);var inst_14289 = inst_14314;var inst_14290 = inst_14313;var inst_14291 = inst_14315;var inst_14292 = 0;var state_14412__$1 = (function (){var statearr_14463 = state_14412;(statearr_14463[14] = inst_14289);
(statearr_14463[15] = inst_14290);
(statearr_14463[16] = inst_14291);
(statearr_14463[17] = inst_14292);
return statearr_14463;
})();var statearr_14464_14534 = state_14412__$1;(statearr_14464_14534[2] = null);
(statearr_14464_14534[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 20))
{var inst_14309 = (state_14412[25]);var inst_14319 = cljs.core.first.call(null,inst_14309);var inst_14320 = cljs.core.nth.call(null,inst_14319,0,null);var inst_14321 = cljs.core.nth.call(null,inst_14319,1,null);var state_14412__$1 = (function (){var statearr_14465 = state_14412;(statearr_14465[28] = inst_14320);
return statearr_14465;
})();if(cljs.core.truth_(inst_14321))
{var statearr_14466_14535 = state_14412__$1;(statearr_14466_14535[1] = 22);
} else
{var statearr_14467_14536 = state_14412__$1;(statearr_14467_14536[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 21))
{var inst_14330 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14468_14537 = state_14412__$1;(statearr_14468_14537[2] = inst_14330);
(statearr_14468_14537[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 22))
{var inst_14320 = (state_14412[28]);var inst_14323 = cljs.core.async.close_BANG_.call(null,inst_14320);var state_14412__$1 = state_14412;var statearr_14469_14538 = state_14412__$1;(statearr_14469_14538[2] = inst_14323);
(statearr_14469_14538[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 23))
{var state_14412__$1 = state_14412;var statearr_14470_14539 = state_14412__$1;(statearr_14470_14539[2] = null);
(statearr_14470_14539[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 24))
{var inst_14309 = (state_14412[25]);var inst_14326 = (state_14412[2]);var inst_14327 = cljs.core.next.call(null,inst_14309);var inst_14289 = inst_14327;var inst_14290 = null;var inst_14291 = 0;var inst_14292 = 0;var state_14412__$1 = (function (){var statearr_14471 = state_14412;(statearr_14471[14] = inst_14289);
(statearr_14471[29] = inst_14326);
(statearr_14471[15] = inst_14290);
(statearr_14471[16] = inst_14291);
(statearr_14471[17] = inst_14292);
return statearr_14471;
})();var statearr_14472_14540 = state_14412__$1;(statearr_14472_14540[2] = null);
(statearr_14472_14540[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 25))
{var inst_14351 = (state_14412[12]);var inst_14350 = (state_14412[13]);var inst_14353 = (inst_14351 < inst_14350);var inst_14354 = inst_14353;var state_14412__$1 = state_14412;if(cljs.core.truth_(inst_14354))
{var statearr_14473_14541 = state_14412__$1;(statearr_14473_14541[1] = 27);
} else
{var statearr_14474_14542 = state_14412__$1;(statearr_14474_14542[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 26))
{var inst_14340 = (state_14412[19]);var inst_14398 = (state_14412[2]);var inst_14399 = cljs.core.seq.call(null,inst_14340);var state_14412__$1 = (function (){var statearr_14475 = state_14412;(statearr_14475[30] = inst_14398);
return statearr_14475;
})();if(inst_14399)
{var statearr_14476_14543 = state_14412__$1;(statearr_14476_14543[1] = 42);
} else
{var statearr_14477_14544 = state_14412__$1;(statearr_14477_14544[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 27))
{var inst_14349 = (state_14412[10]);var inst_14351 = (state_14412[12]);var inst_14356 = cljs.core._nth.call(null,inst_14349,inst_14351);var state_14412__$1 = (function (){var statearr_14478 = state_14412;(statearr_14478[7] = inst_14356);
return statearr_14478;
})();var statearr_14479_14545 = state_14412__$1;(statearr_14479_14545[2] = null);
(statearr_14479_14545[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 28))
{var inst_14369 = (state_14412[9]);var inst_14348 = (state_14412[11]);var inst_14369__$1 = cljs.core.seq.call(null,inst_14348);var state_14412__$1 = (function (){var statearr_14483 = state_14412;(statearr_14483[9] = inst_14369__$1);
return statearr_14483;
})();if(inst_14369__$1)
{var statearr_14484_14546 = state_14412__$1;(statearr_14484_14546[1] = 33);
} else
{var statearr_14485_14547 = state_14412__$1;(statearr_14485_14547[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 29))
{var inst_14396 = (state_14412[2]);var state_14412__$1 = state_14412;var statearr_14486_14548 = state_14412__$1;(statearr_14486_14548[2] = inst_14396);
(statearr_14486_14548[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 30))
{var inst_14349 = (state_14412[10]);var inst_14348 = (state_14412[11]);var inst_14351 = (state_14412[12]);var inst_14350 = (state_14412[13]);var inst_14365 = (state_14412[2]);var inst_14366 = (inst_14351 + 1);var tmp14480 = inst_14349;var tmp14481 = inst_14348;var tmp14482 = inst_14350;var inst_14348__$1 = tmp14481;var inst_14349__$1 = tmp14480;var inst_14350__$1 = tmp14482;var inst_14351__$1 = inst_14366;var state_14412__$1 = (function (){var statearr_14487 = state_14412;(statearr_14487[31] = inst_14365);
(statearr_14487[10] = inst_14349__$1);
(statearr_14487[11] = inst_14348__$1);
(statearr_14487[12] = inst_14351__$1);
(statearr_14487[13] = inst_14350__$1);
return statearr_14487;
})();var statearr_14488_14549 = state_14412__$1;(statearr_14488_14549[2] = null);
(statearr_14488_14549[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14413 === 31))
{var inst_14356 = (state_14412[7]);var inst_14357 = (state_14412[2]);var inst_14358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14359 = cljs.core.async.untap_STAR_.call(null,m,inst_14356);var state_14412__$1 = (function (){var statearr_14489 = state_14412;(statearr_14489[32] = inst_14358);
(statearr_14489[33] = inst_14357);
return statearr_14489;
})();var statearr_14490_14550 = state_14412__$1;(statearr_14490_14550[2] = inst_14359);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14494[0] = state_machine__5507__auto__);
(statearr_14494[1] = 1);
return statearr_14494;
});
var state_machine__5507__auto____1 = (function (state_14412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14495){if((e14495 instanceof Object))
{var ex__5510__auto__ = e14495;var statearr_14496_14551 = state_14412;(statearr_14496_14551[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14552 = state_14412;
state_14412 = G__14552;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14497 = f__5522__auto__.call(null);(statearr_14497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14498);
return statearr_14497;
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
cljs.core.async.Mix = (function (){var obj14554 = {};return obj14554;
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
;var m = (function (){if(typeof cljs.core.async.t14664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14664 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14665){
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
this.meta14665 = meta14665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14664.cljs$lang$type = true;
cljs.core.async.t14664.cljs$lang$ctorStr = "cljs.core.async/t14664";
cljs.core.async.t14664.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14664");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14666){var self__ = this;
var _14666__$1 = this;return self__.meta14665;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14666,meta14665__$1){var self__ = this;
var _14666__$1 = this;return (new cljs.core.async.t14664(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14665__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14664 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14664(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14665){return (new cljs.core.async.t14664(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14665));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14664(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14773 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14731){var state_val_14732 = (state_14731[1]);if((state_val_14732 === 1))
{var inst_14670 = (state_14731[7]);var inst_14670__$1 = calc_state.call(null);var inst_14671 = cljs.core.seq_QMARK_.call(null,inst_14670__$1);var state_14731__$1 = (function (){var statearr_14733 = state_14731;(statearr_14733[7] = inst_14670__$1);
return statearr_14733;
})();if(inst_14671)
{var statearr_14734_14774 = state_14731__$1;(statearr_14734_14774[1] = 2);
} else
{var statearr_14735_14775 = state_14731__$1;(statearr_14735_14775[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 2))
{var inst_14670 = (state_14731[7]);var inst_14673 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14670);var state_14731__$1 = state_14731;var statearr_14736_14776 = state_14731__$1;(statearr_14736_14776[2] = inst_14673);
(statearr_14736_14776[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 3))
{var inst_14670 = (state_14731[7]);var state_14731__$1 = state_14731;var statearr_14737_14777 = state_14731__$1;(statearr_14737_14777[2] = inst_14670);
(statearr_14737_14777[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 4))
{var inst_14670 = (state_14731[7]);var inst_14676 = (state_14731[2]);var inst_14677 = cljs.core.get.call(null,inst_14676,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14678 = cljs.core.get.call(null,inst_14676,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14679 = cljs.core.get.call(null,inst_14676,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14680 = inst_14670;var state_14731__$1 = (function (){var statearr_14738 = state_14731;(statearr_14738[8] = inst_14680);
(statearr_14738[9] = inst_14679);
(statearr_14738[10] = inst_14678);
(statearr_14738[11] = inst_14677);
return statearr_14738;
})();var statearr_14739_14778 = state_14731__$1;(statearr_14739_14778[2] = null);
(statearr_14739_14778[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 5))
{var inst_14680 = (state_14731[8]);var inst_14683 = cljs.core.seq_QMARK_.call(null,inst_14680);var state_14731__$1 = state_14731;if(inst_14683)
{var statearr_14740_14779 = state_14731__$1;(statearr_14740_14779[1] = 7);
} else
{var statearr_14741_14780 = state_14731__$1;(statearr_14741_14780[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 6))
{var inst_14729 = (state_14731[2]);var state_14731__$1 = state_14731;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14731__$1,inst_14729);
} else
{if((state_val_14732 === 7))
{var inst_14680 = (state_14731[8]);var inst_14685 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14680);var state_14731__$1 = state_14731;var statearr_14742_14781 = state_14731__$1;(statearr_14742_14781[2] = inst_14685);
(statearr_14742_14781[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 8))
{var inst_14680 = (state_14731[8]);var state_14731__$1 = state_14731;var statearr_14743_14782 = state_14731__$1;(statearr_14743_14782[2] = inst_14680);
(statearr_14743_14782[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 9))
{var inst_14688 = (state_14731[12]);var inst_14688__$1 = (state_14731[2]);var inst_14689 = cljs.core.get.call(null,inst_14688__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14690 = cljs.core.get.call(null,inst_14688__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14691 = cljs.core.get.call(null,inst_14688__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14731__$1 = (function (){var statearr_14744 = state_14731;(statearr_14744[13] = inst_14690);
(statearr_14744[12] = inst_14688__$1);
(statearr_14744[14] = inst_14691);
return statearr_14744;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14731__$1,10,inst_14689);
} else
{if((state_val_14732 === 10))
{var inst_14695 = (state_14731[15]);var inst_14696 = (state_14731[16]);var inst_14694 = (state_14731[2]);var inst_14695__$1 = cljs.core.nth.call(null,inst_14694,0,null);var inst_14696__$1 = cljs.core.nth.call(null,inst_14694,1,null);var inst_14697 = (inst_14695__$1 == null);var inst_14698 = cljs.core._EQ_.call(null,inst_14696__$1,change);var inst_14699 = (inst_14697) || (inst_14698);var state_14731__$1 = (function (){var statearr_14745 = state_14731;(statearr_14745[15] = inst_14695__$1);
(statearr_14745[16] = inst_14696__$1);
return statearr_14745;
})();if(cljs.core.truth_(inst_14699))
{var statearr_14746_14783 = state_14731__$1;(statearr_14746_14783[1] = 11);
} else
{var statearr_14747_14784 = state_14731__$1;(statearr_14747_14784[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 11))
{var inst_14695 = (state_14731[15]);var inst_14701 = (inst_14695 == null);var state_14731__$1 = state_14731;if(cljs.core.truth_(inst_14701))
{var statearr_14748_14785 = state_14731__$1;(statearr_14748_14785[1] = 14);
} else
{var statearr_14749_14786 = state_14731__$1;(statearr_14749_14786[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 12))
{var inst_14696 = (state_14731[16]);var inst_14691 = (state_14731[14]);var inst_14710 = (state_14731[17]);var inst_14710__$1 = inst_14691.call(null,inst_14696);var state_14731__$1 = (function (){var statearr_14750 = state_14731;(statearr_14750[17] = inst_14710__$1);
return statearr_14750;
})();if(cljs.core.truth_(inst_14710__$1))
{var statearr_14751_14787 = state_14731__$1;(statearr_14751_14787[1] = 17);
} else
{var statearr_14752_14788 = state_14731__$1;(statearr_14752_14788[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 13))
{var inst_14727 = (state_14731[2]);var state_14731__$1 = state_14731;var statearr_14753_14789 = state_14731__$1;(statearr_14753_14789[2] = inst_14727);
(statearr_14753_14789[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 14))
{var inst_14696 = (state_14731[16]);var inst_14703 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14696);var state_14731__$1 = state_14731;var statearr_14754_14790 = state_14731__$1;(statearr_14754_14790[2] = inst_14703);
(statearr_14754_14790[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 15))
{var state_14731__$1 = state_14731;var statearr_14755_14791 = state_14731__$1;(statearr_14755_14791[2] = null);
(statearr_14755_14791[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 16))
{var inst_14706 = (state_14731[2]);var inst_14707 = calc_state.call(null);var inst_14680 = inst_14707;var state_14731__$1 = (function (){var statearr_14756 = state_14731;(statearr_14756[8] = inst_14680);
(statearr_14756[18] = inst_14706);
return statearr_14756;
})();var statearr_14757_14792 = state_14731__$1;(statearr_14757_14792[2] = null);
(statearr_14757_14792[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 17))
{var inst_14710 = (state_14731[17]);var state_14731__$1 = state_14731;var statearr_14758_14793 = state_14731__$1;(statearr_14758_14793[2] = inst_14710);
(statearr_14758_14793[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 18))
{var inst_14696 = (state_14731[16]);var inst_14690 = (state_14731[13]);var inst_14691 = (state_14731[14]);var inst_14713 = cljs.core.empty_QMARK_.call(null,inst_14691);var inst_14714 = inst_14690.call(null,inst_14696);var inst_14715 = cljs.core.not.call(null,inst_14714);var inst_14716 = (inst_14713) && (inst_14715);var state_14731__$1 = state_14731;var statearr_14759_14794 = state_14731__$1;(statearr_14759_14794[2] = inst_14716);
(statearr_14759_14794[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 19))
{var inst_14718 = (state_14731[2]);var state_14731__$1 = state_14731;if(cljs.core.truth_(inst_14718))
{var statearr_14760_14795 = state_14731__$1;(statearr_14760_14795[1] = 20);
} else
{var statearr_14761_14796 = state_14731__$1;(statearr_14761_14796[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 20))
{var inst_14695 = (state_14731[15]);var state_14731__$1 = state_14731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14731__$1,23,out,inst_14695);
} else
{if((state_val_14732 === 21))
{var state_14731__$1 = state_14731;var statearr_14762_14797 = state_14731__$1;(statearr_14762_14797[2] = null);
(statearr_14762_14797[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 22))
{var inst_14688 = (state_14731[12]);var inst_14724 = (state_14731[2]);var inst_14680 = inst_14688;var state_14731__$1 = (function (){var statearr_14763 = state_14731;(statearr_14763[19] = inst_14724);
(statearr_14763[8] = inst_14680);
return statearr_14763;
})();var statearr_14764_14798 = state_14731__$1;(statearr_14764_14798[2] = null);
(statearr_14764_14798[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14732 === 23))
{var inst_14721 = (state_14731[2]);var state_14731__$1 = state_14731;var statearr_14765_14799 = state_14731__$1;(statearr_14765_14799[2] = inst_14721);
(statearr_14765_14799[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14769[0] = state_machine__5507__auto__);
(statearr_14769[1] = 1);
return statearr_14769;
});
var state_machine__5507__auto____1 = (function (state_14731){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14770){if((e14770 instanceof Object))
{var ex__5510__auto__ = e14770;var statearr_14771_14800 = state_14731;(statearr_14771_14800[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14801 = state_14731;
state_14731 = G__14801;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14731){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14772 = f__5522__auto__.call(null);(statearr_14772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14773);
return statearr_14772;
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
cljs.core.async.Pub = (function (){var obj14803 = {};return obj14803;
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
return (function (p1__14804_SHARP_){if(cljs.core.truth_(p1__14804_SHARP_.call(null,topic)))
{return p1__14804_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14804_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14929 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14930){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14930 = meta14930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14929.cljs$lang$type = true;
cljs.core.async.t14929.cljs$lang$ctorStr = "cljs.core.async/t14929";
cljs.core.async.t14929.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14929");
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14929.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14931){var self__ = this;
var _14931__$1 = this;return self__.meta14930;
});})(mults,ensure_mult))
;
cljs.core.async.t14929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14931,meta14930__$1){var self__ = this;
var _14931__$1 = this;return (new cljs.core.async.t14929(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14930__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14929 = ((function (mults,ensure_mult){
return (function __GT_t14929(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14930){return (new cljs.core.async.t14929(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14930));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14929(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15005){var state_val_15006 = (state_15005[1]);if((state_val_15006 === 1))
{var state_15005__$1 = state_15005;var statearr_15007_15054 = state_15005__$1;(statearr_15007_15054[2] = null);
(statearr_15007_15054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 2))
{var state_15005__$1 = state_15005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15005__$1,4,ch);
} else
{if((state_val_15006 === 3))
{var inst_15003 = (state_15005[2]);var state_15005__$1 = state_15005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15005__$1,inst_15003);
} else
{if((state_val_15006 === 4))
{var inst_14934 = (state_15005[7]);var inst_14934__$1 = (state_15005[2]);var inst_14935 = (inst_14934__$1 == null);var state_15005__$1 = (function (){var statearr_15008 = state_15005;(statearr_15008[7] = inst_14934__$1);
return statearr_15008;
})();if(cljs.core.truth_(inst_14935))
{var statearr_15009_15055 = state_15005__$1;(statearr_15009_15055[1] = 5);
} else
{var statearr_15010_15056 = state_15005__$1;(statearr_15010_15056[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 5))
{var inst_14941 = cljs.core.deref.call(null,mults);var inst_14942 = cljs.core.vals.call(null,inst_14941);var inst_14943 = cljs.core.seq.call(null,inst_14942);var inst_14944 = inst_14943;var inst_14945 = null;var inst_14946 = 0;var inst_14947 = 0;var state_15005__$1 = (function (){var statearr_15011 = state_15005;(statearr_15011[8] = inst_14947);
(statearr_15011[9] = inst_14944);
(statearr_15011[10] = inst_14945);
(statearr_15011[11] = inst_14946);
return statearr_15011;
})();var statearr_15012_15057 = state_15005__$1;(statearr_15012_15057[2] = null);
(statearr_15012_15057[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 6))
{var inst_14982 = (state_15005[12]);var inst_14934 = (state_15005[7]);var inst_14984 = (state_15005[13]);var inst_14982__$1 = topic_fn.call(null,inst_14934);var inst_14983 = cljs.core.deref.call(null,mults);var inst_14984__$1 = cljs.core.get.call(null,inst_14983,inst_14982__$1);var state_15005__$1 = (function (){var statearr_15013 = state_15005;(statearr_15013[12] = inst_14982__$1);
(statearr_15013[13] = inst_14984__$1);
return statearr_15013;
})();if(cljs.core.truth_(inst_14984__$1))
{var statearr_15014_15058 = state_15005__$1;(statearr_15014_15058[1] = 19);
} else
{var statearr_15015_15059 = state_15005__$1;(statearr_15015_15059[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 7))
{var inst_15001 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15016_15060 = state_15005__$1;(statearr_15016_15060[2] = inst_15001);
(statearr_15016_15060[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 8))
{var inst_14947 = (state_15005[8]);var inst_14946 = (state_15005[11]);var inst_14949 = (inst_14947 < inst_14946);var inst_14950 = inst_14949;var state_15005__$1 = state_15005;if(cljs.core.truth_(inst_14950))
{var statearr_15020_15061 = state_15005__$1;(statearr_15020_15061[1] = 10);
} else
{var statearr_15021_15062 = state_15005__$1;(statearr_15021_15062[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 9))
{var inst_14980 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15022_15063 = state_15005__$1;(statearr_15022_15063[2] = inst_14980);
(statearr_15022_15063[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 10))
{var inst_14947 = (state_15005[8]);var inst_14944 = (state_15005[9]);var inst_14945 = (state_15005[10]);var inst_14946 = (state_15005[11]);var inst_14952 = cljs.core._nth.call(null,inst_14945,inst_14947);var inst_14953 = cljs.core.async.muxch_STAR_.call(null,inst_14952);var inst_14954 = cljs.core.async.close_BANG_.call(null,inst_14953);var inst_14955 = (inst_14947 + 1);var tmp15017 = inst_14944;var tmp15018 = inst_14945;var tmp15019 = inst_14946;var inst_14944__$1 = tmp15017;var inst_14945__$1 = tmp15018;var inst_14946__$1 = tmp15019;var inst_14947__$1 = inst_14955;var state_15005__$1 = (function (){var statearr_15023 = state_15005;(statearr_15023[8] = inst_14947__$1);
(statearr_15023[14] = inst_14954);
(statearr_15023[9] = inst_14944__$1);
(statearr_15023[10] = inst_14945__$1);
(statearr_15023[11] = inst_14946__$1);
return statearr_15023;
})();var statearr_15024_15064 = state_15005__$1;(statearr_15024_15064[2] = null);
(statearr_15024_15064[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 11))
{var inst_14958 = (state_15005[15]);var inst_14944 = (state_15005[9]);var inst_14958__$1 = cljs.core.seq.call(null,inst_14944);var state_15005__$1 = (function (){var statearr_15025 = state_15005;(statearr_15025[15] = inst_14958__$1);
return statearr_15025;
})();if(inst_14958__$1)
{var statearr_15026_15065 = state_15005__$1;(statearr_15026_15065[1] = 13);
} else
{var statearr_15027_15066 = state_15005__$1;(statearr_15027_15066[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 12))
{var inst_14978 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15028_15067 = state_15005__$1;(statearr_15028_15067[2] = inst_14978);
(statearr_15028_15067[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 13))
{var inst_14958 = (state_15005[15]);var inst_14960 = cljs.core.chunked_seq_QMARK_.call(null,inst_14958);var state_15005__$1 = state_15005;if(inst_14960)
{var statearr_15029_15068 = state_15005__$1;(statearr_15029_15068[1] = 16);
} else
{var statearr_15030_15069 = state_15005__$1;(statearr_15030_15069[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 14))
{var state_15005__$1 = state_15005;var statearr_15031_15070 = state_15005__$1;(statearr_15031_15070[2] = null);
(statearr_15031_15070[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 15))
{var inst_14976 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15032_15071 = state_15005__$1;(statearr_15032_15071[2] = inst_14976);
(statearr_15032_15071[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 16))
{var inst_14958 = (state_15005[15]);var inst_14962 = cljs.core.chunk_first.call(null,inst_14958);var inst_14963 = cljs.core.chunk_rest.call(null,inst_14958);var inst_14964 = cljs.core.count.call(null,inst_14962);var inst_14944 = inst_14963;var inst_14945 = inst_14962;var inst_14946 = inst_14964;var inst_14947 = 0;var state_15005__$1 = (function (){var statearr_15033 = state_15005;(statearr_15033[8] = inst_14947);
(statearr_15033[9] = inst_14944);
(statearr_15033[10] = inst_14945);
(statearr_15033[11] = inst_14946);
return statearr_15033;
})();var statearr_15034_15072 = state_15005__$1;(statearr_15034_15072[2] = null);
(statearr_15034_15072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 17))
{var inst_14958 = (state_15005[15]);var inst_14967 = cljs.core.first.call(null,inst_14958);var inst_14968 = cljs.core.async.muxch_STAR_.call(null,inst_14967);var inst_14969 = cljs.core.async.close_BANG_.call(null,inst_14968);var inst_14970 = cljs.core.next.call(null,inst_14958);var inst_14944 = inst_14970;var inst_14945 = null;var inst_14946 = 0;var inst_14947 = 0;var state_15005__$1 = (function (){var statearr_15035 = state_15005;(statearr_15035[8] = inst_14947);
(statearr_15035[9] = inst_14944);
(statearr_15035[10] = inst_14945);
(statearr_15035[11] = inst_14946);
(statearr_15035[16] = inst_14969);
return statearr_15035;
})();var statearr_15036_15073 = state_15005__$1;(statearr_15036_15073[2] = null);
(statearr_15036_15073[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 18))
{var inst_14973 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15037_15074 = state_15005__$1;(statearr_15037_15074[2] = inst_14973);
(statearr_15037_15074[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 19))
{var state_15005__$1 = state_15005;var statearr_15038_15075 = state_15005__$1;(statearr_15038_15075[2] = null);
(statearr_15038_15075[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 20))
{var state_15005__$1 = state_15005;var statearr_15039_15076 = state_15005__$1;(statearr_15039_15076[2] = null);
(statearr_15039_15076[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 21))
{var inst_14998 = (state_15005[2]);var state_15005__$1 = (function (){var statearr_15040 = state_15005;(statearr_15040[17] = inst_14998);
return statearr_15040;
})();var statearr_15041_15077 = state_15005__$1;(statearr_15041_15077[2] = null);
(statearr_15041_15077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 22))
{var inst_14995 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15042_15078 = state_15005__$1;(statearr_15042_15078[2] = inst_14995);
(statearr_15042_15078[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 23))
{var inst_14982 = (state_15005[12]);var inst_14986 = (state_15005[2]);var inst_14987 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14982);var state_15005__$1 = (function (){var statearr_15043 = state_15005;(statearr_15043[18] = inst_14986);
return statearr_15043;
})();var statearr_15044_15079 = state_15005__$1;(statearr_15044_15079[2] = inst_14987);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15006 === 24))
{var inst_14934 = (state_15005[7]);var inst_14984 = (state_15005[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15005,23,Object,null,22);var inst_14991 = cljs.core.async.muxch_STAR_.call(null,inst_14984);var state_15005__$1 = state_15005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15005__$1,25,inst_14991,inst_14934);
} else
{if((state_val_15006 === 25))
{var inst_14993 = (state_15005[2]);var state_15005__$1 = state_15005;var statearr_15045_15080 = state_15005__$1;(statearr_15045_15080[2] = inst_14993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15005__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15049[0] = state_machine__5507__auto__);
(statearr_15049[1] = 1);
return statearr_15049;
});
var state_machine__5507__auto____1 = (function (state_15005){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15050){if((e15050 instanceof Object))
{var ex__5510__auto__ = e15050;var statearr_15051_15081 = state_15005;(statearr_15051_15081[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15082 = state_15005;
state_15005 = G__15082;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15005){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15052 = f__5522__auto__.call(null);(statearr_15052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15053);
return statearr_15052;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15219 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15189){var state_val_15190 = (state_15189[1]);if((state_val_15190 === 1))
{var state_15189__$1 = state_15189;var statearr_15191_15220 = state_15189__$1;(statearr_15191_15220[2] = null);
(statearr_15191_15220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 2))
{var inst_15152 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15153 = 0;var state_15189__$1 = (function (){var statearr_15192 = state_15189;(statearr_15192[7] = inst_15152);
(statearr_15192[8] = inst_15153);
return statearr_15192;
})();var statearr_15193_15221 = state_15189__$1;(statearr_15193_15221[2] = null);
(statearr_15193_15221[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 3))
{var inst_15187 = (state_15189[2]);var state_15189__$1 = state_15189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15189__$1,inst_15187);
} else
{if((state_val_15190 === 4))
{var inst_15153 = (state_15189[8]);var inst_15155 = (inst_15153 < cnt);var state_15189__$1 = state_15189;if(cljs.core.truth_(inst_15155))
{var statearr_15194_15222 = state_15189__$1;(statearr_15194_15222[1] = 6);
} else
{var statearr_15195_15223 = state_15189__$1;(statearr_15195_15223[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 5))
{var inst_15173 = (state_15189[2]);var state_15189__$1 = (function (){var statearr_15196 = state_15189;(statearr_15196[9] = inst_15173);
return statearr_15196;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15189__$1,12,dchan);
} else
{if((state_val_15190 === 6))
{var state_15189__$1 = state_15189;var statearr_15197_15224 = state_15189__$1;(statearr_15197_15224[2] = null);
(statearr_15197_15224[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 7))
{var state_15189__$1 = state_15189;var statearr_15198_15225 = state_15189__$1;(statearr_15198_15225[2] = null);
(statearr_15198_15225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 8))
{var inst_15171 = (state_15189[2]);var state_15189__$1 = state_15189;var statearr_15199_15226 = state_15189__$1;(statearr_15199_15226[2] = inst_15171);
(statearr_15199_15226[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 9))
{var inst_15153 = (state_15189[8]);var inst_15166 = (state_15189[2]);var inst_15167 = (inst_15153 + 1);var inst_15153__$1 = inst_15167;var state_15189__$1 = (function (){var statearr_15200 = state_15189;(statearr_15200[8] = inst_15153__$1);
(statearr_15200[10] = inst_15166);
return statearr_15200;
})();var statearr_15201_15227 = state_15189__$1;(statearr_15201_15227[2] = null);
(statearr_15201_15227[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 10))
{var inst_15157 = (state_15189[2]);var inst_15158 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15189__$1 = (function (){var statearr_15202 = state_15189;(statearr_15202[11] = inst_15157);
return statearr_15202;
})();var statearr_15203_15228 = state_15189__$1;(statearr_15203_15228[2] = inst_15158);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15189__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 11))
{var inst_15153 = (state_15189[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15189,10,Object,null,9);var inst_15162 = chs__$1.call(null,inst_15153);var inst_15163 = done.call(null,inst_15153);var inst_15164 = cljs.core.async.take_BANG_.call(null,inst_15162,inst_15163);var state_15189__$1 = state_15189;var statearr_15204_15229 = state_15189__$1;(statearr_15204_15229[2] = inst_15164);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15189__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 12))
{var inst_15175 = (state_15189[12]);var inst_15175__$1 = (state_15189[2]);var inst_15176 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15175__$1);var state_15189__$1 = (function (){var statearr_15205 = state_15189;(statearr_15205[12] = inst_15175__$1);
return statearr_15205;
})();if(cljs.core.truth_(inst_15176))
{var statearr_15206_15230 = state_15189__$1;(statearr_15206_15230[1] = 13);
} else
{var statearr_15207_15231 = state_15189__$1;(statearr_15207_15231[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 13))
{var inst_15178 = cljs.core.async.close_BANG_.call(null,out);var state_15189__$1 = state_15189;var statearr_15208_15232 = state_15189__$1;(statearr_15208_15232[2] = inst_15178);
(statearr_15208_15232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 14))
{var inst_15175 = (state_15189[12]);var inst_15180 = cljs.core.apply.call(null,f,inst_15175);var state_15189__$1 = state_15189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15189__$1,16,out,inst_15180);
} else
{if((state_val_15190 === 15))
{var inst_15185 = (state_15189[2]);var state_15189__$1 = state_15189;var statearr_15209_15233 = state_15189__$1;(statearr_15209_15233[2] = inst_15185);
(statearr_15209_15233[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15190 === 16))
{var inst_15182 = (state_15189[2]);var state_15189__$1 = (function (){var statearr_15210 = state_15189;(statearr_15210[13] = inst_15182);
return statearr_15210;
})();var statearr_15211_15234 = state_15189__$1;(statearr_15211_15234[2] = null);
(statearr_15211_15234[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15215[0] = state_machine__5507__auto__);
(statearr_15215[1] = 1);
return statearr_15215;
});
var state_machine__5507__auto____1 = (function (state_15189){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15189);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15216){if((e15216 instanceof Object))
{var ex__5510__auto__ = e15216;var statearr_15217_15235 = state_15189;(statearr_15217_15235[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15189);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15216;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15236 = state_15189;
state_15189 = G__15236;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15189){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15218 = f__5522__auto__.call(null);(statearr_15218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15219);
return statearr_15218;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15320){var state_val_15321 = (state_15320[1]);if((state_val_15321 === 1))
{var inst_15291 = cljs.core.vec.call(null,chs);var inst_15292 = inst_15291;var state_15320__$1 = (function (){var statearr_15322 = state_15320;(statearr_15322[7] = inst_15292);
return statearr_15322;
})();var statearr_15323_15345 = state_15320__$1;(statearr_15323_15345[2] = null);
(statearr_15323_15345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 2))
{var inst_15292 = (state_15320[7]);var inst_15294 = cljs.core.count.call(null,inst_15292);var inst_15295 = (inst_15294 > 0);var state_15320__$1 = state_15320;if(cljs.core.truth_(inst_15295))
{var statearr_15324_15346 = state_15320__$1;(statearr_15324_15346[1] = 4);
} else
{var statearr_15325_15347 = state_15320__$1;(statearr_15325_15347[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 3))
{var inst_15318 = (state_15320[2]);var state_15320__$1 = state_15320;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15320__$1,inst_15318);
} else
{if((state_val_15321 === 4))
{var inst_15292 = (state_15320[7]);var state_15320__$1 = state_15320;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15320__$1,7,inst_15292);
} else
{if((state_val_15321 === 5))
{var inst_15314 = cljs.core.async.close_BANG_.call(null,out);var state_15320__$1 = state_15320;var statearr_15326_15348 = state_15320__$1;(statearr_15326_15348[2] = inst_15314);
(statearr_15326_15348[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 6))
{var inst_15316 = (state_15320[2]);var state_15320__$1 = state_15320;var statearr_15327_15349 = state_15320__$1;(statearr_15327_15349[2] = inst_15316);
(statearr_15327_15349[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 7))
{var inst_15299 = (state_15320[8]);var inst_15300 = (state_15320[9]);var inst_15299__$1 = (state_15320[2]);var inst_15300__$1 = cljs.core.nth.call(null,inst_15299__$1,0,null);var inst_15301 = cljs.core.nth.call(null,inst_15299__$1,1,null);var inst_15302 = (inst_15300__$1 == null);var state_15320__$1 = (function (){var statearr_15328 = state_15320;(statearr_15328[8] = inst_15299__$1);
(statearr_15328[9] = inst_15300__$1);
(statearr_15328[10] = inst_15301);
return statearr_15328;
})();if(cljs.core.truth_(inst_15302))
{var statearr_15329_15350 = state_15320__$1;(statearr_15329_15350[1] = 8);
} else
{var statearr_15330_15351 = state_15320__$1;(statearr_15330_15351[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 8))
{var inst_15299 = (state_15320[8]);var inst_15300 = (state_15320[9]);var inst_15301 = (state_15320[10]);var inst_15292 = (state_15320[7]);var inst_15304 = (function (){var c = inst_15301;var v = inst_15300;var vec__15297 = inst_15299;var cs = inst_15292;return ((function (c,v,vec__15297,cs,inst_15299,inst_15300,inst_15301,inst_15292,state_val_15321){
return (function (p1__15237_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15237_SHARP_);
});
;})(c,v,vec__15297,cs,inst_15299,inst_15300,inst_15301,inst_15292,state_val_15321))
})();var inst_15305 = cljs.core.filterv.call(null,inst_15304,inst_15292);var inst_15292__$1 = inst_15305;var state_15320__$1 = (function (){var statearr_15331 = state_15320;(statearr_15331[7] = inst_15292__$1);
return statearr_15331;
})();var statearr_15332_15352 = state_15320__$1;(statearr_15332_15352[2] = null);
(statearr_15332_15352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 9))
{var inst_15300 = (state_15320[9]);var state_15320__$1 = state_15320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15320__$1,11,out,inst_15300);
} else
{if((state_val_15321 === 10))
{var inst_15312 = (state_15320[2]);var state_15320__$1 = state_15320;var statearr_15334_15353 = state_15320__$1;(statearr_15334_15353[2] = inst_15312);
(statearr_15334_15353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15321 === 11))
{var inst_15292 = (state_15320[7]);var inst_15309 = (state_15320[2]);var tmp15333 = inst_15292;var inst_15292__$1 = tmp15333;var state_15320__$1 = (function (){var statearr_15335 = state_15320;(statearr_15335[7] = inst_15292__$1);
(statearr_15335[11] = inst_15309);
return statearr_15335;
})();var statearr_15336_15354 = state_15320__$1;(statearr_15336_15354[2] = null);
(statearr_15336_15354[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15340 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15340[0] = state_machine__5507__auto__);
(statearr_15340[1] = 1);
return statearr_15340;
});
var state_machine__5507__auto____1 = (function (state_15320){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15320);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15341){if((e15341 instanceof Object))
{var ex__5510__auto__ = e15341;var statearr_15342_15355 = state_15320;(statearr_15342_15355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15356 = state_15320;
state_15320 = G__15356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15320){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15343 = f__5522__auto__.call(null);(statearr_15343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15344);
return statearr_15343;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15449 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15426){var state_val_15427 = (state_15426[1]);if((state_val_15427 === 1))
{var inst_15403 = 0;var state_15426__$1 = (function (){var statearr_15428 = state_15426;(statearr_15428[7] = inst_15403);
return statearr_15428;
})();var statearr_15429_15450 = state_15426__$1;(statearr_15429_15450[2] = null);
(statearr_15429_15450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 2))
{var inst_15403 = (state_15426[7]);var inst_15405 = (inst_15403 < n);var state_15426__$1 = state_15426;if(cljs.core.truth_(inst_15405))
{var statearr_15430_15451 = state_15426__$1;(statearr_15430_15451[1] = 4);
} else
{var statearr_15431_15452 = state_15426__$1;(statearr_15431_15452[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 3))
{var inst_15423 = (state_15426[2]);var inst_15424 = cljs.core.async.close_BANG_.call(null,out);var state_15426__$1 = (function (){var statearr_15432 = state_15426;(statearr_15432[8] = inst_15423);
return statearr_15432;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15426__$1,inst_15424);
} else
{if((state_val_15427 === 4))
{var state_15426__$1 = state_15426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15426__$1,7,ch);
} else
{if((state_val_15427 === 5))
{var state_15426__$1 = state_15426;var statearr_15433_15453 = state_15426__$1;(statearr_15433_15453[2] = null);
(statearr_15433_15453[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 6))
{var inst_15421 = (state_15426[2]);var state_15426__$1 = state_15426;var statearr_15434_15454 = state_15426__$1;(statearr_15434_15454[2] = inst_15421);
(statearr_15434_15454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 7))
{var inst_15408 = (state_15426[9]);var inst_15408__$1 = (state_15426[2]);var inst_15409 = (inst_15408__$1 == null);var inst_15410 = cljs.core.not.call(null,inst_15409);var state_15426__$1 = (function (){var statearr_15435 = state_15426;(statearr_15435[9] = inst_15408__$1);
return statearr_15435;
})();if(inst_15410)
{var statearr_15436_15455 = state_15426__$1;(statearr_15436_15455[1] = 8);
} else
{var statearr_15437_15456 = state_15426__$1;(statearr_15437_15456[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 8))
{var inst_15408 = (state_15426[9]);var state_15426__$1 = state_15426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15426__$1,11,out,inst_15408);
} else
{if((state_val_15427 === 9))
{var state_15426__$1 = state_15426;var statearr_15438_15457 = state_15426__$1;(statearr_15438_15457[2] = null);
(statearr_15438_15457[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 10))
{var inst_15418 = (state_15426[2]);var state_15426__$1 = state_15426;var statearr_15439_15458 = state_15426__$1;(statearr_15439_15458[2] = inst_15418);
(statearr_15439_15458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15427 === 11))
{var inst_15403 = (state_15426[7]);var inst_15413 = (state_15426[2]);var inst_15414 = (inst_15403 + 1);var inst_15403__$1 = inst_15414;var state_15426__$1 = (function (){var statearr_15440 = state_15426;(statearr_15440[10] = inst_15413);
(statearr_15440[7] = inst_15403__$1);
return statearr_15440;
})();var statearr_15441_15459 = state_15426__$1;(statearr_15441_15459[2] = null);
(statearr_15441_15459[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15445 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15445[0] = state_machine__5507__auto__);
(statearr_15445[1] = 1);
return statearr_15445;
});
var state_machine__5507__auto____1 = (function (state_15426){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15426);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15446){if((e15446 instanceof Object))
{var ex__5510__auto__ = e15446;var statearr_15447_15460 = state_15426;(statearr_15447_15460[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15446;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15461 = state_15426;
state_15426 = G__15461;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15426){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15448 = f__5522__auto__.call(null);(statearr_15448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15449);
return statearr_15448;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15558 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15533){var state_val_15534 = (state_15533[1]);if((state_val_15534 === 1))
{var inst_15510 = null;var state_15533__$1 = (function (){var statearr_15535 = state_15533;(statearr_15535[7] = inst_15510);
return statearr_15535;
})();var statearr_15536_15559 = state_15533__$1;(statearr_15536_15559[2] = null);
(statearr_15536_15559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 2))
{var state_15533__$1 = state_15533;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15533__$1,4,ch);
} else
{if((state_val_15534 === 3))
{var inst_15530 = (state_15533[2]);var inst_15531 = cljs.core.async.close_BANG_.call(null,out);var state_15533__$1 = (function (){var statearr_15537 = state_15533;(statearr_15537[8] = inst_15530);
return statearr_15537;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15533__$1,inst_15531);
} else
{if((state_val_15534 === 4))
{var inst_15513 = (state_15533[9]);var inst_15513__$1 = (state_15533[2]);var inst_15514 = (inst_15513__$1 == null);var inst_15515 = cljs.core.not.call(null,inst_15514);var state_15533__$1 = (function (){var statearr_15538 = state_15533;(statearr_15538[9] = inst_15513__$1);
return statearr_15538;
})();if(inst_15515)
{var statearr_15539_15560 = state_15533__$1;(statearr_15539_15560[1] = 5);
} else
{var statearr_15540_15561 = state_15533__$1;(statearr_15540_15561[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 5))
{var inst_15510 = (state_15533[7]);var inst_15513 = (state_15533[9]);var inst_15517 = cljs.core._EQ_.call(null,inst_15513,inst_15510);var state_15533__$1 = state_15533;if(inst_15517)
{var statearr_15541_15562 = state_15533__$1;(statearr_15541_15562[1] = 8);
} else
{var statearr_15542_15563 = state_15533__$1;(statearr_15542_15563[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 6))
{var state_15533__$1 = state_15533;var statearr_15544_15564 = state_15533__$1;(statearr_15544_15564[2] = null);
(statearr_15544_15564[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 7))
{var inst_15528 = (state_15533[2]);var state_15533__$1 = state_15533;var statearr_15545_15565 = state_15533__$1;(statearr_15545_15565[2] = inst_15528);
(statearr_15545_15565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 8))
{var inst_15510 = (state_15533[7]);var tmp15543 = inst_15510;var inst_15510__$1 = tmp15543;var state_15533__$1 = (function (){var statearr_15546 = state_15533;(statearr_15546[7] = inst_15510__$1);
return statearr_15546;
})();var statearr_15547_15566 = state_15533__$1;(statearr_15547_15566[2] = null);
(statearr_15547_15566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 9))
{var inst_15513 = (state_15533[9]);var state_15533__$1 = state_15533;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15533__$1,11,out,inst_15513);
} else
{if((state_val_15534 === 10))
{var inst_15525 = (state_15533[2]);var state_15533__$1 = state_15533;var statearr_15548_15567 = state_15533__$1;(statearr_15548_15567[2] = inst_15525);
(statearr_15548_15567[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15534 === 11))
{var inst_15513 = (state_15533[9]);var inst_15522 = (state_15533[2]);var inst_15510 = inst_15513;var state_15533__$1 = (function (){var statearr_15549 = state_15533;(statearr_15549[7] = inst_15510);
(statearr_15549[10] = inst_15522);
return statearr_15549;
})();var statearr_15550_15568 = state_15533__$1;(statearr_15550_15568[2] = null);
(statearr_15550_15568[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15554 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15554[0] = state_machine__5507__auto__);
(statearr_15554[1] = 1);
return statearr_15554;
});
var state_machine__5507__auto____1 = (function (state_15533){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15533);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15555){if((e15555 instanceof Object))
{var ex__5510__auto__ = e15555;var statearr_15556_15569 = state_15533;(statearr_15556_15569[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15533);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15570 = state_15533;
state_15533 = G__15570;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15533){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15557 = f__5522__auto__.call(null);(statearr_15557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15558);
return statearr_15557;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15705 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15675){var state_val_15676 = (state_15675[1]);if((state_val_15676 === 1))
{var inst_15638 = (new Array(n));var inst_15639 = inst_15638;var inst_15640 = 0;var state_15675__$1 = (function (){var statearr_15677 = state_15675;(statearr_15677[7] = inst_15639);
(statearr_15677[8] = inst_15640);
return statearr_15677;
})();var statearr_15678_15706 = state_15675__$1;(statearr_15678_15706[2] = null);
(statearr_15678_15706[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 2))
{var state_15675__$1 = state_15675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15675__$1,4,ch);
} else
{if((state_val_15676 === 3))
{var inst_15673 = (state_15675[2]);var state_15675__$1 = state_15675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15675__$1,inst_15673);
} else
{if((state_val_15676 === 4))
{var inst_15643 = (state_15675[9]);var inst_15643__$1 = (state_15675[2]);var inst_15644 = (inst_15643__$1 == null);var inst_15645 = cljs.core.not.call(null,inst_15644);var state_15675__$1 = (function (){var statearr_15679 = state_15675;(statearr_15679[9] = inst_15643__$1);
return statearr_15679;
})();if(inst_15645)
{var statearr_15680_15707 = state_15675__$1;(statearr_15680_15707[1] = 5);
} else
{var statearr_15681_15708 = state_15675__$1;(statearr_15681_15708[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 5))
{var inst_15648 = (state_15675[10]);var inst_15643 = (state_15675[9]);var inst_15639 = (state_15675[7]);var inst_15640 = (state_15675[8]);var inst_15647 = (inst_15639[inst_15640] = inst_15643);var inst_15648__$1 = (inst_15640 + 1);var inst_15649 = (inst_15648__$1 < n);var state_15675__$1 = (function (){var statearr_15682 = state_15675;(statearr_15682[11] = inst_15647);
(statearr_15682[10] = inst_15648__$1);
return statearr_15682;
})();if(cljs.core.truth_(inst_15649))
{var statearr_15683_15709 = state_15675__$1;(statearr_15683_15709[1] = 8);
} else
{var statearr_15684_15710 = state_15675__$1;(statearr_15684_15710[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 6))
{var inst_15640 = (state_15675[8]);var inst_15661 = (inst_15640 > 0);var state_15675__$1 = state_15675;if(cljs.core.truth_(inst_15661))
{var statearr_15686_15711 = state_15675__$1;(statearr_15686_15711[1] = 12);
} else
{var statearr_15687_15712 = state_15675__$1;(statearr_15687_15712[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 7))
{var inst_15671 = (state_15675[2]);var state_15675__$1 = state_15675;var statearr_15688_15713 = state_15675__$1;(statearr_15688_15713[2] = inst_15671);
(statearr_15688_15713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 8))
{var inst_15648 = (state_15675[10]);var inst_15639 = (state_15675[7]);var tmp15685 = inst_15639;var inst_15639__$1 = tmp15685;var inst_15640 = inst_15648;var state_15675__$1 = (function (){var statearr_15689 = state_15675;(statearr_15689[7] = inst_15639__$1);
(statearr_15689[8] = inst_15640);
return statearr_15689;
})();var statearr_15690_15714 = state_15675__$1;(statearr_15690_15714[2] = null);
(statearr_15690_15714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 9))
{var inst_15639 = (state_15675[7]);var inst_15653 = cljs.core.vec.call(null,inst_15639);var state_15675__$1 = state_15675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15675__$1,11,out,inst_15653);
} else
{if((state_val_15676 === 10))
{var inst_15659 = (state_15675[2]);var state_15675__$1 = state_15675;var statearr_15691_15715 = state_15675__$1;(statearr_15691_15715[2] = inst_15659);
(statearr_15691_15715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 11))
{var inst_15655 = (state_15675[2]);var inst_15656 = (new Array(n));var inst_15639 = inst_15656;var inst_15640 = 0;var state_15675__$1 = (function (){var statearr_15692 = state_15675;(statearr_15692[12] = inst_15655);
(statearr_15692[7] = inst_15639);
(statearr_15692[8] = inst_15640);
return statearr_15692;
})();var statearr_15693_15716 = state_15675__$1;(statearr_15693_15716[2] = null);
(statearr_15693_15716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 12))
{var inst_15639 = (state_15675[7]);var inst_15663 = cljs.core.vec.call(null,inst_15639);var state_15675__$1 = state_15675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15675__$1,15,out,inst_15663);
} else
{if((state_val_15676 === 13))
{var state_15675__$1 = state_15675;var statearr_15694_15717 = state_15675__$1;(statearr_15694_15717[2] = null);
(statearr_15694_15717[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 14))
{var inst_15668 = (state_15675[2]);var inst_15669 = cljs.core.async.close_BANG_.call(null,out);var state_15675__$1 = (function (){var statearr_15695 = state_15675;(statearr_15695[13] = inst_15668);
return statearr_15695;
})();var statearr_15696_15718 = state_15675__$1;(statearr_15696_15718[2] = inst_15669);
(statearr_15696_15718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15676 === 15))
{var inst_15665 = (state_15675[2]);var state_15675__$1 = state_15675;var statearr_15697_15719 = state_15675__$1;(statearr_15697_15719[2] = inst_15665);
(statearr_15697_15719[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15701[0] = state_machine__5507__auto__);
(statearr_15701[1] = 1);
return statearr_15701;
});
var state_machine__5507__auto____1 = (function (state_15675){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15675);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15702){if((e15702 instanceof Object))
{var ex__5510__auto__ = e15702;var statearr_15703_15720 = state_15675;(statearr_15703_15720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15721 = state_15675;
state_15675 = G__15721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15675){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15704 = f__5522__auto__.call(null);(statearr_15704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15705);
return statearr_15704;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15864 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15834){var state_val_15835 = (state_15834[1]);if((state_val_15835 === 1))
{var inst_15793 = [];var inst_15794 = inst_15793;var inst_15795 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15834__$1 = (function (){var statearr_15836 = state_15834;(statearr_15836[7] = inst_15795);
(statearr_15836[8] = inst_15794);
return statearr_15836;
})();var statearr_15837_15865 = state_15834__$1;(statearr_15837_15865[2] = null);
(statearr_15837_15865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 2))
{var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15834__$1,4,ch);
} else
{if((state_val_15835 === 3))
{var inst_15832 = (state_15834[2]);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15834__$1,inst_15832);
} else
{if((state_val_15835 === 4))
{var inst_15798 = (state_15834[9]);var inst_15798__$1 = (state_15834[2]);var inst_15799 = (inst_15798__$1 == null);var inst_15800 = cljs.core.not.call(null,inst_15799);var state_15834__$1 = (function (){var statearr_15838 = state_15834;(statearr_15838[9] = inst_15798__$1);
return statearr_15838;
})();if(inst_15800)
{var statearr_15839_15866 = state_15834__$1;(statearr_15839_15866[1] = 5);
} else
{var statearr_15840_15867 = state_15834__$1;(statearr_15840_15867[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 5))
{var inst_15802 = (state_15834[10]);var inst_15795 = (state_15834[7]);var inst_15798 = (state_15834[9]);var inst_15802__$1 = f.call(null,inst_15798);var inst_15803 = cljs.core._EQ_.call(null,inst_15802__$1,inst_15795);var inst_15804 = cljs.core.keyword_identical_QMARK_.call(null,inst_15795,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15805 = (inst_15803) || (inst_15804);var state_15834__$1 = (function (){var statearr_15841 = state_15834;(statearr_15841[10] = inst_15802__$1);
return statearr_15841;
})();if(cljs.core.truth_(inst_15805))
{var statearr_15842_15868 = state_15834__$1;(statearr_15842_15868[1] = 8);
} else
{var statearr_15843_15869 = state_15834__$1;(statearr_15843_15869[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 6))
{var inst_15794 = (state_15834[8]);var inst_15819 = inst_15794.length;var inst_15820 = (inst_15819 > 0);var state_15834__$1 = state_15834;if(cljs.core.truth_(inst_15820))
{var statearr_15845_15870 = state_15834__$1;(statearr_15845_15870[1] = 12);
} else
{var statearr_15846_15871 = state_15834__$1;(statearr_15846_15871[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 7))
{var inst_15830 = (state_15834[2]);var state_15834__$1 = state_15834;var statearr_15847_15872 = state_15834__$1;(statearr_15847_15872[2] = inst_15830);
(statearr_15847_15872[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 8))
{var inst_15802 = (state_15834[10]);var inst_15794 = (state_15834[8]);var inst_15798 = (state_15834[9]);var inst_15807 = inst_15794.push(inst_15798);var tmp15844 = inst_15794;var inst_15794__$1 = tmp15844;var inst_15795 = inst_15802;var state_15834__$1 = (function (){var statearr_15848 = state_15834;(statearr_15848[7] = inst_15795);
(statearr_15848[8] = inst_15794__$1);
(statearr_15848[11] = inst_15807);
return statearr_15848;
})();var statearr_15849_15873 = state_15834__$1;(statearr_15849_15873[2] = null);
(statearr_15849_15873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 9))
{var inst_15794 = (state_15834[8]);var inst_15810 = cljs.core.vec.call(null,inst_15794);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15834__$1,11,out,inst_15810);
} else
{if((state_val_15835 === 10))
{var inst_15817 = (state_15834[2]);var state_15834__$1 = state_15834;var statearr_15850_15874 = state_15834__$1;(statearr_15850_15874[2] = inst_15817);
(statearr_15850_15874[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 11))
{var inst_15802 = (state_15834[10]);var inst_15798 = (state_15834[9]);var inst_15812 = (state_15834[2]);var inst_15813 = [];var inst_15814 = inst_15813.push(inst_15798);var inst_15794 = inst_15813;var inst_15795 = inst_15802;var state_15834__$1 = (function (){var statearr_15851 = state_15834;(statearr_15851[12] = inst_15812);
(statearr_15851[13] = inst_15814);
(statearr_15851[7] = inst_15795);
(statearr_15851[8] = inst_15794);
return statearr_15851;
})();var statearr_15852_15875 = state_15834__$1;(statearr_15852_15875[2] = null);
(statearr_15852_15875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 12))
{var inst_15794 = (state_15834[8]);var inst_15822 = cljs.core.vec.call(null,inst_15794);var state_15834__$1 = state_15834;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15834__$1,15,out,inst_15822);
} else
{if((state_val_15835 === 13))
{var state_15834__$1 = state_15834;var statearr_15853_15876 = state_15834__$1;(statearr_15853_15876[2] = null);
(statearr_15853_15876[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 14))
{var inst_15827 = (state_15834[2]);var inst_15828 = cljs.core.async.close_BANG_.call(null,out);var state_15834__$1 = (function (){var statearr_15854 = state_15834;(statearr_15854[14] = inst_15827);
return statearr_15854;
})();var statearr_15855_15877 = state_15834__$1;(statearr_15855_15877[2] = inst_15828);
(statearr_15855_15877[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15835 === 15))
{var inst_15824 = (state_15834[2]);var state_15834__$1 = state_15834;var statearr_15856_15878 = state_15834__$1;(statearr_15856_15878[2] = inst_15824);
(statearr_15856_15878[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15860[0] = state_machine__5507__auto__);
(statearr_15860[1] = 1);
return statearr_15860;
});
var state_machine__5507__auto____1 = (function (state_15834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15861){if((e15861 instanceof Object))
{var ex__5510__auto__ = e15861;var statearr_15862_15879 = state_15834;(statearr_15862_15879[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15861;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15880 = state_15834;
state_15834 = G__15880;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15863 = f__5522__auto__.call(null);(statearr_15863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15864);
return statearr_15863;
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