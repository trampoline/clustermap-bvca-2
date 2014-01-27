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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32479 = (function (f,fn_handler,meta32480){
this.f = f;
this.fn_handler = fn_handler;
this.meta32480 = meta32480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32479.cljs$lang$type = true;
cljs.core.async.t32479.cljs$lang$ctorStr = "cljs.core.async/t32479";
cljs.core.async.t32479.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32479");
});
cljs.core.async.t32479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32481){var self__ = this;
var _32481__$1 = this;return self__.meta32480;
});
cljs.core.async.t32479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32481,meta32480__$1){var self__ = this;
var _32481__$1 = this;return (new cljs.core.async.t32479(self__.f,self__.fn_handler,meta32480__$1));
});
cljs.core.async.__GT_t32479 = (function __GT_t32479(f__$1,fn_handler__$1,meta32480){return (new cljs.core.async.t32479(f__$1,fn_handler__$1,meta32480));
});
}
return (new cljs.core.async.t32479(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32483 = buff;if(G__32483)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__32483.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32483.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32483);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32483);
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
{var val_32484 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32484);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_32484);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___32485 = n;var x_32486 = 0;while(true){
if((x_32486 < n__4248__auto___32485))
{(a[x_32486] = 0);
{
var G__32487 = (x_32486 + 1);
x_32486 = G__32487;
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
var G__32488 = (i + 1);
i = G__32488;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32492 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32492 = (function (flag,alt_flag,meta32493){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32493 = meta32493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32492.cljs$lang$type = true;
cljs.core.async.t32492.cljs$lang$ctorStr = "cljs.core.async/t32492";
cljs.core.async.t32492.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32492");
});
cljs.core.async.t32492.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t32492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t32492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32494){var self__ = this;
var _32494__$1 = this;return self__.meta32493;
});
cljs.core.async.t32492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32494,meta32493__$1){var self__ = this;
var _32494__$1 = this;return (new cljs.core.async.t32492(self__.flag,self__.alt_flag,meta32493__$1));
});
cljs.core.async.__GT_t32492 = (function __GT_t32492(flag__$1,alt_flag__$1,meta32493){return (new cljs.core.async.t32492(flag__$1,alt_flag__$1,meta32493));
});
}
return (new cljs.core.async.t32492(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32498 = (function (cb,flag,alt_handler,meta32499){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32499 = meta32499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32498.cljs$lang$type = true;
cljs.core.async.t32498.cljs$lang$ctorStr = "cljs.core.async/t32498";
cljs.core.async.t32498.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32498");
});
cljs.core.async.t32498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32500){var self__ = this;
var _32500__$1 = this;return self__.meta32499;
});
cljs.core.async.t32498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32500,meta32499__$1){var self__ = this;
var _32500__$1 = this;return (new cljs.core.async.t32498(self__.cb,self__.flag,self__.alt_handler,meta32499__$1));
});
cljs.core.async.__GT_t32498 = (function __GT_t32498(cb__$1,flag__$1,alt_handler__$1,meta32499){return (new cljs.core.async.t32498(cb__$1,flag__$1,alt_handler__$1,meta32499));
});
}
return (new cljs.core.async.t32498(cb,flag,alt_handler,null));
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
return (function (p1__32501_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32501_SHARP_,port], null));
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
var G__32502 = (i + 1);
i = G__32502;
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
var alts_BANG___delegate = function (ports,p__32503){var map__32505 = p__32503;var map__32505__$1 = ((cljs.core.seq_QMARK_.call(null,map__32505))?cljs.core.apply.call(null,cljs.core.hash_map,map__32505):map__32505);var opts = map__32505__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32503 = null;if (arguments.length > 1) {
  p__32503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32503);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32506){
var ports = cljs.core.first(arglist__32506);
var p__32503 = cljs.core.rest(arglist__32506);
return alts_BANG___delegate(ports,p__32503);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32514 = (function (ch,f,map_LT_,meta32515){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32515 = meta32515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32514.cljs$lang$type = true;
cljs.core.async.t32514.cljs$lang$ctorStr = "cljs.core.async/t32514";
cljs.core.async.t32514.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32514");
});
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32517 = (function (fn1,_,meta32515,ch,f,map_LT_,meta32518){
this.fn1 = fn1;
this._ = _;
this.meta32515 = meta32515;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32518 = meta32518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32517.cljs$lang$type = true;
cljs.core.async.t32517.cljs$lang$ctorStr = "cljs.core.async/t32517";
cljs.core.async.t32517.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32517");
});
cljs.core.async.t32517.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32517.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32507_SHARP_){return f1.call(null,(((p1__32507_SHARP_ == null))?null:self__.f.call(null,p1__32507_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32519){var self__ = this;
var _32519__$1 = this;return self__.meta32518;
});
cljs.core.async.t32517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32519,meta32518__$1){var self__ = this;
var _32519__$1 = this;return (new cljs.core.async.t32517(self__.fn1,self__._,self__.meta32515,self__.ch,self__.f,self__.map_LT_,meta32518__$1));
});
cljs.core.async.__GT_t32517 = (function __GT_t32517(fn1__$1,___$2,meta32515__$1,ch__$2,f__$2,map_LT___$2,meta32518){return (new cljs.core.async.t32517(fn1__$1,___$2,meta32515__$1,ch__$2,f__$2,map_LT___$2,meta32518));
});
}
return (new cljs.core.async.t32517(fn1,___$1,self__.meta32515,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32516){var self__ = this;
var _32516__$1 = this;return self__.meta32515;
});
cljs.core.async.t32514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32516,meta32515__$1){var self__ = this;
var _32516__$1 = this;return (new cljs.core.async.t32514(self__.ch,self__.f,self__.map_LT_,meta32515__$1));
});
cljs.core.async.__GT_t32514 = (function __GT_t32514(ch__$1,f__$1,map_LT___$1,meta32515){return (new cljs.core.async.t32514(ch__$1,f__$1,map_LT___$1,meta32515));
});
}
return (new cljs.core.async.t32514(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32523 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32523 = (function (ch,f,map_GT_,meta32524){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32524 = meta32524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32523.cljs$lang$type = true;
cljs.core.async.t32523.cljs$lang$ctorStr = "cljs.core.async/t32523";
cljs.core.async.t32523.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32523");
});
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32525){var self__ = this;
var _32525__$1 = this;return self__.meta32524;
});
cljs.core.async.t32523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32525,meta32524__$1){var self__ = this;
var _32525__$1 = this;return (new cljs.core.async.t32523(self__.ch,self__.f,self__.map_GT_,meta32524__$1));
});
cljs.core.async.__GT_t32523 = (function __GT_t32523(ch__$1,f__$1,map_GT___$1,meta32524){return (new cljs.core.async.t32523(ch__$1,f__$1,map_GT___$1,meta32524));
});
}
return (new cljs.core.async.t32523(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32529 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32529 = (function (ch,p,filter_GT_,meta32530){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32530 = meta32530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32529.cljs$lang$type = true;
cljs.core.async.t32529.cljs$lang$ctorStr = "cljs.core.async/t32529";
cljs.core.async.t32529.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32529");
});
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32529.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32531){var self__ = this;
var _32531__$1 = this;return self__.meta32530;
});
cljs.core.async.t32529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32531,meta32530__$1){var self__ = this;
var _32531__$1 = this;return (new cljs.core.async.t32529(self__.ch,self__.p,self__.filter_GT_,meta32530__$1));
});
cljs.core.async.__GT_t32529 = (function __GT_t32529(ch__$1,p__$1,filter_GT___$1,meta32530){return (new cljs.core.async.t32529(ch__$1,p__$1,filter_GT___$1,meta32530));
});
}
return (new cljs.core.async.t32529(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32593){var state_val_32594 = (state_32593[1]);if((state_val_32594 === 1))
{var state_32593__$1 = state_32593;var statearr_32595_32615 = state_32593__$1;(statearr_32595_32615[2] = null);
(statearr_32595_32615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 2))
{var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32593__$1,4,ch);
} else
{if((state_val_32594 === 3))
{var inst_32591 = (state_32593[2]);var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32593__$1,inst_32591);
} else
{if((state_val_32594 === 4))
{var inst_32575 = (state_32593[7]);var inst_32575__$1 = (state_32593[2]);var inst_32576 = (inst_32575__$1 == null);var state_32593__$1 = (function (){var statearr_32596 = state_32593;(statearr_32596[7] = inst_32575__$1);
return statearr_32596;
})();if(cljs.core.truth_(inst_32576))
{var statearr_32597_32616 = state_32593__$1;(statearr_32597_32616[1] = 5);
} else
{var statearr_32598_32617 = state_32593__$1;(statearr_32598_32617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 5))
{var inst_32578 = cljs.core.async.close_BANG_.call(null,out);var state_32593__$1 = state_32593;var statearr_32599_32618 = state_32593__$1;(statearr_32599_32618[2] = inst_32578);
(statearr_32599_32618[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 6))
{var inst_32575 = (state_32593[7]);var inst_32580 = p.call(null,inst_32575);var state_32593__$1 = state_32593;if(cljs.core.truth_(inst_32580))
{var statearr_32600_32619 = state_32593__$1;(statearr_32600_32619[1] = 8);
} else
{var statearr_32601_32620 = state_32593__$1;(statearr_32601_32620[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 7))
{var inst_32589 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32602_32621 = state_32593__$1;(statearr_32602_32621[2] = inst_32589);
(statearr_32602_32621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 8))
{var inst_32575 = (state_32593[7]);var state_32593__$1 = state_32593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32593__$1,11,out,inst_32575);
} else
{if((state_val_32594 === 9))
{var state_32593__$1 = state_32593;var statearr_32603_32622 = state_32593__$1;(statearr_32603_32622[2] = null);
(statearr_32603_32622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 10))
{var inst_32586 = (state_32593[2]);var state_32593__$1 = (function (){var statearr_32604 = state_32593;(statearr_32604[8] = inst_32586);
return statearr_32604;
})();var statearr_32605_32623 = state_32593__$1;(statearr_32605_32623[2] = null);
(statearr_32605_32623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32594 === 11))
{var inst_32583 = (state_32593[2]);var state_32593__$1 = state_32593;var statearr_32606_32624 = state_32593__$1;(statearr_32606_32624[2] = inst_32583);
(statearr_32606_32624[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_32610 = [null,null,null,null,null,null,null,null,null];(statearr_32610[0] = state_machine__5507__auto__);
(statearr_32610[1] = 1);
return statearr_32610;
});
var state_machine__5507__auto____1 = (function (state_32593){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32593);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32611){if((e32611 instanceof Object))
{var ex__5510__auto__ = e32611;var statearr_32612_32625 = state_32593;(statearr_32612_32625[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32626 = state_32593;
state_32593 = G__32626;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32593){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32613 = f__5522__auto__.call(null);(statearr_32613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32614);
return statearr_32613;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32778){var state_val_32779 = (state_32778[1]);if((state_val_32779 === 1))
{var state_32778__$1 = state_32778;var statearr_32780_32817 = state_32778__$1;(statearr_32780_32817[2] = null);
(statearr_32780_32817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 2))
{var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32778__$1,4,in$);
} else
{if((state_val_32779 === 3))
{var inst_32776 = (state_32778[2]);var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32778__$1,inst_32776);
} else
{if((state_val_32779 === 4))
{var inst_32724 = (state_32778[7]);var inst_32724__$1 = (state_32778[2]);var inst_32725 = (inst_32724__$1 == null);var state_32778__$1 = (function (){var statearr_32781 = state_32778;(statearr_32781[7] = inst_32724__$1);
return statearr_32781;
})();if(cljs.core.truth_(inst_32725))
{var statearr_32782_32818 = state_32778__$1;(statearr_32782_32818[1] = 5);
} else
{var statearr_32783_32819 = state_32778__$1;(statearr_32783_32819[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 5))
{var inst_32727 = cljs.core.async.close_BANG_.call(null,out);var state_32778__$1 = state_32778;var statearr_32784_32820 = state_32778__$1;(statearr_32784_32820[2] = inst_32727);
(statearr_32784_32820[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 6))
{var inst_32724 = (state_32778[7]);var inst_32729 = f.call(null,inst_32724);var inst_32734 = cljs.core.seq.call(null,inst_32729);var inst_32735 = inst_32734;var inst_32736 = null;var inst_32737 = 0;var inst_32738 = 0;var state_32778__$1 = (function (){var statearr_32785 = state_32778;(statearr_32785[8] = inst_32735);
(statearr_32785[9] = inst_32737);
(statearr_32785[10] = inst_32736);
(statearr_32785[11] = inst_32738);
return statearr_32785;
})();var statearr_32786_32821 = state_32778__$1;(statearr_32786_32821[2] = null);
(statearr_32786_32821[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 7))
{var inst_32774 = (state_32778[2]);var state_32778__$1 = state_32778;var statearr_32787_32822 = state_32778__$1;(statearr_32787_32822[2] = inst_32774);
(statearr_32787_32822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 8))
{var inst_32737 = (state_32778[9]);var inst_32738 = (state_32778[11]);var inst_32740 = (inst_32738 < inst_32737);var inst_32741 = inst_32740;var state_32778__$1 = state_32778;if(cljs.core.truth_(inst_32741))
{var statearr_32788_32823 = state_32778__$1;(statearr_32788_32823[1] = 10);
} else
{var statearr_32789_32824 = state_32778__$1;(statearr_32789_32824[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 9))
{var inst_32771 = (state_32778[2]);var state_32778__$1 = (function (){var statearr_32790 = state_32778;(statearr_32790[12] = inst_32771);
return statearr_32790;
})();var statearr_32791_32825 = state_32778__$1;(statearr_32791_32825[2] = null);
(statearr_32791_32825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 10))
{var inst_32736 = (state_32778[10]);var inst_32738 = (state_32778[11]);var inst_32743 = cljs.core._nth.call(null,inst_32736,inst_32738);var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32778__$1,13,out,inst_32743);
} else
{if((state_val_32779 === 11))
{var inst_32735 = (state_32778[8]);var inst_32749 = (state_32778[13]);var inst_32749__$1 = cljs.core.seq.call(null,inst_32735);var state_32778__$1 = (function (){var statearr_32795 = state_32778;(statearr_32795[13] = inst_32749__$1);
return statearr_32795;
})();if(inst_32749__$1)
{var statearr_32796_32826 = state_32778__$1;(statearr_32796_32826[1] = 14);
} else
{var statearr_32797_32827 = state_32778__$1;(statearr_32797_32827[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 12))
{var inst_32769 = (state_32778[2]);var state_32778__$1 = state_32778;var statearr_32798_32828 = state_32778__$1;(statearr_32798_32828[2] = inst_32769);
(statearr_32798_32828[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 13))
{var inst_32735 = (state_32778[8]);var inst_32737 = (state_32778[9]);var inst_32736 = (state_32778[10]);var inst_32738 = (state_32778[11]);var inst_32745 = (state_32778[2]);var inst_32746 = (inst_32738 + 1);var tmp32792 = inst_32735;var tmp32793 = inst_32737;var tmp32794 = inst_32736;var inst_32735__$1 = tmp32792;var inst_32736__$1 = tmp32794;var inst_32737__$1 = tmp32793;var inst_32738__$1 = inst_32746;var state_32778__$1 = (function (){var statearr_32799 = state_32778;(statearr_32799[8] = inst_32735__$1);
(statearr_32799[9] = inst_32737__$1);
(statearr_32799[10] = inst_32736__$1);
(statearr_32799[11] = inst_32738__$1);
(statearr_32799[14] = inst_32745);
return statearr_32799;
})();var statearr_32800_32829 = state_32778__$1;(statearr_32800_32829[2] = null);
(statearr_32800_32829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 14))
{var inst_32749 = (state_32778[13]);var inst_32751 = cljs.core.chunked_seq_QMARK_.call(null,inst_32749);var state_32778__$1 = state_32778;if(inst_32751)
{var statearr_32801_32830 = state_32778__$1;(statearr_32801_32830[1] = 17);
} else
{var statearr_32802_32831 = state_32778__$1;(statearr_32802_32831[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 15))
{var state_32778__$1 = state_32778;var statearr_32803_32832 = state_32778__$1;(statearr_32803_32832[2] = null);
(statearr_32803_32832[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 16))
{var inst_32767 = (state_32778[2]);var state_32778__$1 = state_32778;var statearr_32804_32833 = state_32778__$1;(statearr_32804_32833[2] = inst_32767);
(statearr_32804_32833[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 17))
{var inst_32749 = (state_32778[13]);var inst_32753 = cljs.core.chunk_first.call(null,inst_32749);var inst_32754 = cljs.core.chunk_rest.call(null,inst_32749);var inst_32755 = cljs.core.count.call(null,inst_32753);var inst_32735 = inst_32754;var inst_32736 = inst_32753;var inst_32737 = inst_32755;var inst_32738 = 0;var state_32778__$1 = (function (){var statearr_32805 = state_32778;(statearr_32805[8] = inst_32735);
(statearr_32805[9] = inst_32737);
(statearr_32805[10] = inst_32736);
(statearr_32805[11] = inst_32738);
return statearr_32805;
})();var statearr_32806_32834 = state_32778__$1;(statearr_32806_32834[2] = null);
(statearr_32806_32834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 18))
{var inst_32749 = (state_32778[13]);var inst_32758 = cljs.core.first.call(null,inst_32749);var state_32778__$1 = state_32778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32778__$1,20,out,inst_32758);
} else
{if((state_val_32779 === 19))
{var inst_32764 = (state_32778[2]);var state_32778__$1 = state_32778;var statearr_32807_32835 = state_32778__$1;(statearr_32807_32835[2] = inst_32764);
(statearr_32807_32835[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32779 === 20))
{var inst_32749 = (state_32778[13]);var inst_32760 = (state_32778[2]);var inst_32761 = cljs.core.next.call(null,inst_32749);var inst_32735 = inst_32761;var inst_32736 = null;var inst_32737 = 0;var inst_32738 = 0;var state_32778__$1 = (function (){var statearr_32808 = state_32778;(statearr_32808[8] = inst_32735);
(statearr_32808[9] = inst_32737);
(statearr_32808[10] = inst_32736);
(statearr_32808[11] = inst_32738);
(statearr_32808[15] = inst_32760);
return statearr_32808;
})();var statearr_32809_32836 = state_32778__$1;(statearr_32809_32836[2] = null);
(statearr_32809_32836[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_32813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32813[0] = state_machine__5507__auto__);
(statearr_32813[1] = 1);
return statearr_32813;
});
var state_machine__5507__auto____1 = (function (state_32778){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32778);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32814){if((e32814 instanceof Object))
{var ex__5510__auto__ = e32814;var statearr_32815_32837 = state_32778;(statearr_32815_32837[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32814;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32838 = state_32778;
state_32778 = G__32838;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32778){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32816 = f__5522__auto__.call(null);(statearr_32816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32816;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___32919 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32898){var state_val_32899 = (state_32898[1]);if((state_val_32899 === 1))
{var state_32898__$1 = state_32898;var statearr_32900_32920 = state_32898__$1;(statearr_32900_32920[2] = null);
(statearr_32900_32920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 2))
{var state_32898__$1 = state_32898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32898__$1,4,from);
} else
{if((state_val_32899 === 3))
{var inst_32896 = (state_32898[2]);var state_32898__$1 = state_32898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32898__$1,inst_32896);
} else
{if((state_val_32899 === 4))
{var inst_32881 = (state_32898[7]);var inst_32881__$1 = (state_32898[2]);var inst_32882 = (inst_32881__$1 == null);var state_32898__$1 = (function (){var statearr_32901 = state_32898;(statearr_32901[7] = inst_32881__$1);
return statearr_32901;
})();if(cljs.core.truth_(inst_32882))
{var statearr_32902_32921 = state_32898__$1;(statearr_32902_32921[1] = 5);
} else
{var statearr_32903_32922 = state_32898__$1;(statearr_32903_32922[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 5))
{var state_32898__$1 = state_32898;if(cljs.core.truth_(close_QMARK_))
{var statearr_32904_32923 = state_32898__$1;(statearr_32904_32923[1] = 8);
} else
{var statearr_32905_32924 = state_32898__$1;(statearr_32905_32924[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 6))
{var inst_32881 = (state_32898[7]);var state_32898__$1 = state_32898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32898__$1,11,to,inst_32881);
} else
{if((state_val_32899 === 7))
{var inst_32894 = (state_32898[2]);var state_32898__$1 = state_32898;var statearr_32906_32925 = state_32898__$1;(statearr_32906_32925[2] = inst_32894);
(statearr_32906_32925[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 8))
{var inst_32885 = cljs.core.async.close_BANG_.call(null,to);var state_32898__$1 = state_32898;var statearr_32907_32926 = state_32898__$1;(statearr_32907_32926[2] = inst_32885);
(statearr_32907_32926[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 9))
{var state_32898__$1 = state_32898;var statearr_32908_32927 = state_32898__$1;(statearr_32908_32927[2] = null);
(statearr_32908_32927[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 10))
{var inst_32888 = (state_32898[2]);var state_32898__$1 = state_32898;var statearr_32909_32928 = state_32898__$1;(statearr_32909_32928[2] = inst_32888);
(statearr_32909_32928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32899 === 11))
{var inst_32891 = (state_32898[2]);var state_32898__$1 = (function (){var statearr_32910 = state_32898;(statearr_32910[8] = inst_32891);
return statearr_32910;
})();var statearr_32911_32929 = state_32898__$1;(statearr_32911_32929[2] = null);
(statearr_32911_32929[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32915 = [null,null,null,null,null,null,null,null,null];(statearr_32915[0] = state_machine__5507__auto__);
(statearr_32915[1] = 1);
return statearr_32915;
});
var state_machine__5507__auto____1 = (function (state_32898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32916){if((e32916 instanceof Object))
{var ex__5510__auto__ = e32916;var statearr_32917_32930 = state_32898;(statearr_32917_32930[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32931 = state_32898;
state_32898 = G__32931;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32918 = f__5522__auto__.call(null);(statearr_32918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32919);
return statearr_32918;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32996){var state_val_32997 = (state_32996[1]);if((state_val_32997 === 1))
{var state_32996__$1 = state_32996;var statearr_32998_33019 = state_32996__$1;(statearr_32998_33019[2] = null);
(statearr_32998_33019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 2))
{var state_32996__$1 = state_32996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32996__$1,4,ch);
} else
{if((state_val_32997 === 3))
{var inst_32994 = (state_32996[2]);var state_32996__$1 = state_32996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32996__$1,inst_32994);
} else
{if((state_val_32997 === 4))
{var inst_32977 = (state_32996[7]);var inst_32977__$1 = (state_32996[2]);var inst_32978 = (inst_32977__$1 == null);var state_32996__$1 = (function (){var statearr_32999 = state_32996;(statearr_32999[7] = inst_32977__$1);
return statearr_32999;
})();if(cljs.core.truth_(inst_32978))
{var statearr_33000_33020 = state_32996__$1;(statearr_33000_33020[1] = 5);
} else
{var statearr_33001_33021 = state_32996__$1;(statearr_33001_33021[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 5))
{var inst_32980 = cljs.core.async.close_BANG_.call(null,tc);var inst_32981 = cljs.core.async.close_BANG_.call(null,fc);var state_32996__$1 = (function (){var statearr_33002 = state_32996;(statearr_33002[8] = inst_32980);
return statearr_33002;
})();var statearr_33003_33022 = state_32996__$1;(statearr_33003_33022[2] = inst_32981);
(statearr_33003_33022[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 6))
{var inst_32977 = (state_32996[7]);var inst_32983 = p.call(null,inst_32977);var state_32996__$1 = state_32996;if(cljs.core.truth_(inst_32983))
{var statearr_33004_33023 = state_32996__$1;(statearr_33004_33023[1] = 9);
} else
{var statearr_33005_33024 = state_32996__$1;(statearr_33005_33024[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 7))
{var inst_32992 = (state_32996[2]);var state_32996__$1 = state_32996;var statearr_33006_33025 = state_32996__$1;(statearr_33006_33025[2] = inst_32992);
(statearr_33006_33025[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 8))
{var inst_32989 = (state_32996[2]);var state_32996__$1 = (function (){var statearr_33007 = state_32996;(statearr_33007[9] = inst_32989);
return statearr_33007;
})();var statearr_33008_33026 = state_32996__$1;(statearr_33008_33026[2] = null);
(statearr_33008_33026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 9))
{var state_32996__$1 = state_32996;var statearr_33009_33027 = state_32996__$1;(statearr_33009_33027[2] = tc);
(statearr_33009_33027[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 10))
{var state_32996__$1 = state_32996;var statearr_33010_33028 = state_32996__$1;(statearr_33010_33028[2] = fc);
(statearr_33010_33028[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32997 === 11))
{var inst_32977 = (state_32996[7]);var inst_32987 = (state_32996[2]);var state_32996__$1 = state_32996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32996__$1,8,inst_32987,inst_32977);
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
var state_machine__5507__auto____0 = (function (){var statearr_33014 = [null,null,null,null,null,null,null,null,null,null];(statearr_33014[0] = state_machine__5507__auto__);
(statearr_33014[1] = 1);
return statearr_33014;
});
var state_machine__5507__auto____1 = (function (state_32996){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32996);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33015){if((e33015 instanceof Object))
{var ex__5510__auto__ = e33015;var statearr_33016_33029 = state_32996;(statearr_33016_33029[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33030 = state_32996;
state_32996 = G__33030;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33017 = f__5522__auto__.call(null);(statearr_33017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33018);
return statearr_33017;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33077){var state_val_33078 = (state_33077[1]);if((state_val_33078 === 7))
{var inst_33073 = (state_33077[2]);var state_33077__$1 = state_33077;var statearr_33079_33095 = state_33077__$1;(statearr_33079_33095[2] = inst_33073);
(statearr_33079_33095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33078 === 6))
{var inst_33066 = (state_33077[7]);var inst_33063 = (state_33077[8]);var inst_33070 = f.call(null,inst_33063,inst_33066);var inst_33063__$1 = inst_33070;var state_33077__$1 = (function (){var statearr_33080 = state_33077;(statearr_33080[8] = inst_33063__$1);
return statearr_33080;
})();var statearr_33081_33096 = state_33077__$1;(statearr_33081_33096[2] = null);
(statearr_33081_33096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33078 === 5))
{var inst_33063 = (state_33077[8]);var state_33077__$1 = state_33077;var statearr_33082_33097 = state_33077__$1;(statearr_33082_33097[2] = inst_33063);
(statearr_33082_33097[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33078 === 4))
{var inst_33066 = (state_33077[7]);var inst_33066__$1 = (state_33077[2]);var inst_33067 = (inst_33066__$1 == null);var state_33077__$1 = (function (){var statearr_33083 = state_33077;(statearr_33083[7] = inst_33066__$1);
return statearr_33083;
})();if(cljs.core.truth_(inst_33067))
{var statearr_33084_33098 = state_33077__$1;(statearr_33084_33098[1] = 5);
} else
{var statearr_33085_33099 = state_33077__$1;(statearr_33085_33099[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33078 === 3))
{var inst_33075 = (state_33077[2]);var state_33077__$1 = state_33077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33077__$1,inst_33075);
} else
{if((state_val_33078 === 2))
{var state_33077__$1 = state_33077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33077__$1,4,ch);
} else
{if((state_val_33078 === 1))
{var inst_33063 = init;var state_33077__$1 = (function (){var statearr_33086 = state_33077;(statearr_33086[8] = inst_33063);
return statearr_33086;
})();var statearr_33087_33100 = state_33077__$1;(statearr_33087_33100[2] = null);
(statearr_33087_33100[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33091 = [null,null,null,null,null,null,null,null,null];(statearr_33091[0] = state_machine__5507__auto__);
(statearr_33091[1] = 1);
return statearr_33091;
});
var state_machine__5507__auto____1 = (function (state_33077){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33077);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33092){if((e33092 instanceof Object))
{var ex__5510__auto__ = e33092;var statearr_33093_33101 = state_33077;(statearr_33093_33101[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33102 = state_33077;
state_33077 = G__33102;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33077){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33094 = f__5522__auto__.call(null);(statearr_33094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33094;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33164){var state_val_33165 = (state_33164[1]);if((state_val_33165 === 1))
{var inst_33144 = cljs.core.seq.call(null,coll);var inst_33145 = inst_33144;var state_33164__$1 = (function (){var statearr_33166 = state_33164;(statearr_33166[7] = inst_33145);
return statearr_33166;
})();var statearr_33167_33185 = state_33164__$1;(statearr_33167_33185[2] = null);
(statearr_33167_33185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 2))
{var inst_33145 = (state_33164[7]);var state_33164__$1 = state_33164;if(cljs.core.truth_(inst_33145))
{var statearr_33168_33186 = state_33164__$1;(statearr_33168_33186[1] = 4);
} else
{var statearr_33169_33187 = state_33164__$1;(statearr_33169_33187[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 3))
{var inst_33162 = (state_33164[2]);var state_33164__$1 = state_33164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33164__$1,inst_33162);
} else
{if((state_val_33165 === 4))
{var inst_33145 = (state_33164[7]);var inst_33148 = cljs.core.first.call(null,inst_33145);var state_33164__$1 = state_33164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33164__$1,7,ch,inst_33148);
} else
{if((state_val_33165 === 5))
{var state_33164__$1 = state_33164;if(cljs.core.truth_(close_QMARK_))
{var statearr_33170_33188 = state_33164__$1;(statearr_33170_33188[1] = 8);
} else
{var statearr_33171_33189 = state_33164__$1;(statearr_33171_33189[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 6))
{var inst_33160 = (state_33164[2]);var state_33164__$1 = state_33164;var statearr_33172_33190 = state_33164__$1;(statearr_33172_33190[2] = inst_33160);
(statearr_33172_33190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 7))
{var inst_33145 = (state_33164[7]);var inst_33150 = (state_33164[2]);var inst_33151 = cljs.core.next.call(null,inst_33145);var inst_33145__$1 = inst_33151;var state_33164__$1 = (function (){var statearr_33173 = state_33164;(statearr_33173[8] = inst_33150);
(statearr_33173[7] = inst_33145__$1);
return statearr_33173;
})();var statearr_33174_33191 = state_33164__$1;(statearr_33174_33191[2] = null);
(statearr_33174_33191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 8))
{var inst_33155 = cljs.core.async.close_BANG_.call(null,ch);var state_33164__$1 = state_33164;var statearr_33175_33192 = state_33164__$1;(statearr_33175_33192[2] = inst_33155);
(statearr_33175_33192[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 9))
{var state_33164__$1 = state_33164;var statearr_33176_33193 = state_33164__$1;(statearr_33176_33193[2] = null);
(statearr_33176_33193[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33165 === 10))
{var inst_33158 = (state_33164[2]);var state_33164__$1 = state_33164;var statearr_33177_33194 = state_33164__$1;(statearr_33177_33194[2] = inst_33158);
(statearr_33177_33194[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33181 = [null,null,null,null,null,null,null,null,null];(statearr_33181[0] = state_machine__5507__auto__);
(statearr_33181[1] = 1);
return statearr_33181;
});
var state_machine__5507__auto____1 = (function (state_33164){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33182){if((e33182 instanceof Object))
{var ex__5510__auto__ = e33182;var statearr_33183_33195 = state_33164;(statearr_33183_33195[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33196 = state_33164;
state_33164 = G__33196;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33164){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33184 = f__5522__auto__.call(null);(statearr_33184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33184;
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
cljs.core.async.Mux = (function (){var obj33198 = {};return obj33198;
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
cljs.core.async.Mult = (function (){var obj33200 = {};return obj33200;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33424 = (function (cs,ch,mult,meta33425){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33425 = meta33425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33424.cljs$lang$type = true;
cljs.core.async.t33424.cljs$lang$ctorStr = "cljs.core.async/t33424";
cljs.core.async.t33424.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33424");
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33424.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33426){var self__ = this;
var _33426__$1 = this;return self__.meta33425;
});})(cs))
;
cljs.core.async.t33424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33426,meta33425__$1){var self__ = this;
var _33426__$1 = this;return (new cljs.core.async.t33424(self__.cs,self__.ch,self__.mult,meta33425__$1));
});})(cs))
;
cljs.core.async.__GT_t33424 = ((function (cs){
return (function __GT_t33424(cs__$1,ch__$1,mult__$1,meta33425){return (new cljs.core.async.t33424(cs__$1,ch__$1,mult__$1,meta33425));
});})(cs))
;
}
return (new cljs.core.async.t33424(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___33647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33561){var state_val_33562 = (state_33561[1]);if((state_val_33562 === 32))
{var inst_33505 = (state_33561[7]);var inst_33429 = (state_33561[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33561,31,Object,null,30);var inst_33512 = cljs.core.async.put_BANG_.call(null,inst_33505,inst_33429,done);var state_33561__$1 = state_33561;var statearr_33563_33648 = state_33561__$1;(statearr_33563_33648[2] = inst_33512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 1))
{var state_33561__$1 = state_33561;var statearr_33564_33649 = state_33561__$1;(statearr_33564_33649[2] = null);
(statearr_33564_33649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 33))
{var inst_33518 = (state_33561[9]);var inst_33520 = cljs.core.chunked_seq_QMARK_.call(null,inst_33518);var state_33561__$1 = state_33561;if(inst_33520)
{var statearr_33565_33650 = state_33561__$1;(statearr_33565_33650[1] = 36);
} else
{var statearr_33566_33651 = state_33561__$1;(statearr_33566_33651[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 2))
{var state_33561__$1 = state_33561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33561__$1,4,ch);
} else
{if((state_val_33562 === 34))
{var state_33561__$1 = state_33561;var statearr_33567_33652 = state_33561__$1;(statearr_33567_33652[2] = null);
(statearr_33567_33652[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 3))
{var inst_33559 = (state_33561[2]);var state_33561__$1 = state_33561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33561__$1,inst_33559);
} else
{if((state_val_33562 === 35))
{var inst_33543 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33568_33653 = state_33561__$1;(statearr_33568_33653[2] = inst_33543);
(statearr_33568_33653[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 4))
{var inst_33429 = (state_33561[8]);var inst_33429__$1 = (state_33561[2]);var inst_33430 = (inst_33429__$1 == null);var state_33561__$1 = (function (){var statearr_33569 = state_33561;(statearr_33569[8] = inst_33429__$1);
return statearr_33569;
})();if(cljs.core.truth_(inst_33430))
{var statearr_33570_33654 = state_33561__$1;(statearr_33570_33654[1] = 5);
} else
{var statearr_33571_33655 = state_33561__$1;(statearr_33571_33655[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 36))
{var inst_33518 = (state_33561[9]);var inst_33522 = cljs.core.chunk_first.call(null,inst_33518);var inst_33523 = cljs.core.chunk_rest.call(null,inst_33518);var inst_33524 = cljs.core.count.call(null,inst_33522);var inst_33497 = inst_33523;var inst_33498 = inst_33522;var inst_33499 = inst_33524;var inst_33500 = 0;var state_33561__$1 = (function (){var statearr_33572 = state_33561;(statearr_33572[10] = inst_33500);
(statearr_33572[11] = inst_33499);
(statearr_33572[12] = inst_33498);
(statearr_33572[13] = inst_33497);
return statearr_33572;
})();var statearr_33573_33656 = state_33561__$1;(statearr_33573_33656[2] = null);
(statearr_33573_33656[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 5))
{var inst_33436 = cljs.core.deref.call(null,cs);var inst_33437 = cljs.core.seq.call(null,inst_33436);var inst_33438 = inst_33437;var inst_33439 = null;var inst_33440 = 0;var inst_33441 = 0;var state_33561__$1 = (function (){var statearr_33574 = state_33561;(statearr_33574[14] = inst_33441);
(statearr_33574[15] = inst_33440);
(statearr_33574[16] = inst_33439);
(statearr_33574[17] = inst_33438);
return statearr_33574;
})();var statearr_33575_33657 = state_33561__$1;(statearr_33575_33657[2] = null);
(statearr_33575_33657[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 37))
{var inst_33518 = (state_33561[9]);var inst_33527 = cljs.core.first.call(null,inst_33518);var state_33561__$1 = (function (){var statearr_33576 = state_33561;(statearr_33576[18] = inst_33527);
return statearr_33576;
})();var statearr_33577_33658 = state_33561__$1;(statearr_33577_33658[2] = null);
(statearr_33577_33658[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 6))
{var inst_33489 = (state_33561[19]);var inst_33488 = cljs.core.deref.call(null,cs);var inst_33489__$1 = cljs.core.keys.call(null,inst_33488);var inst_33490 = cljs.core.count.call(null,inst_33489__$1);var inst_33491 = cljs.core.reset_BANG_.call(null,dctr,inst_33490);var inst_33496 = cljs.core.seq.call(null,inst_33489__$1);var inst_33497 = inst_33496;var inst_33498 = null;var inst_33499 = 0;var inst_33500 = 0;var state_33561__$1 = (function (){var statearr_33578 = state_33561;(statearr_33578[10] = inst_33500);
(statearr_33578[20] = inst_33491);
(statearr_33578[11] = inst_33499);
(statearr_33578[19] = inst_33489__$1);
(statearr_33578[12] = inst_33498);
(statearr_33578[13] = inst_33497);
return statearr_33578;
})();var statearr_33579_33659 = state_33561__$1;(statearr_33579_33659[2] = null);
(statearr_33579_33659[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 38))
{var inst_33540 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33580_33660 = state_33561__$1;(statearr_33580_33660[2] = inst_33540);
(statearr_33580_33660[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 7))
{var inst_33557 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33581_33661 = state_33561__$1;(statearr_33581_33661[2] = inst_33557);
(statearr_33581_33661[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 39))
{var inst_33518 = (state_33561[9]);var inst_33536 = (state_33561[2]);var inst_33537 = cljs.core.next.call(null,inst_33518);var inst_33497 = inst_33537;var inst_33498 = null;var inst_33499 = 0;var inst_33500 = 0;var state_33561__$1 = (function (){var statearr_33582 = state_33561;(statearr_33582[10] = inst_33500);
(statearr_33582[21] = inst_33536);
(statearr_33582[11] = inst_33499);
(statearr_33582[12] = inst_33498);
(statearr_33582[13] = inst_33497);
return statearr_33582;
})();var statearr_33583_33662 = state_33561__$1;(statearr_33583_33662[2] = null);
(statearr_33583_33662[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 8))
{var inst_33441 = (state_33561[14]);var inst_33440 = (state_33561[15]);var inst_33443 = (inst_33441 < inst_33440);var inst_33444 = inst_33443;var state_33561__$1 = state_33561;if(cljs.core.truth_(inst_33444))
{var statearr_33584_33663 = state_33561__$1;(statearr_33584_33663[1] = 10);
} else
{var statearr_33585_33664 = state_33561__$1;(statearr_33585_33664[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 40))
{var inst_33527 = (state_33561[18]);var inst_33528 = (state_33561[2]);var inst_33529 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33530 = cljs.core.async.untap_STAR_.call(null,m,inst_33527);var state_33561__$1 = (function (){var statearr_33586 = state_33561;(statearr_33586[22] = inst_33529);
(statearr_33586[23] = inst_33528);
return statearr_33586;
})();var statearr_33587_33665 = state_33561__$1;(statearr_33587_33665[2] = inst_33530);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 9))
{var inst_33486 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33588_33666 = state_33561__$1;(statearr_33588_33666[2] = inst_33486);
(statearr_33588_33666[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 41))
{var inst_33527 = (state_33561[18]);var inst_33429 = (state_33561[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33561,40,Object,null,39);var inst_33534 = cljs.core.async.put_BANG_.call(null,inst_33527,inst_33429,done);var state_33561__$1 = state_33561;var statearr_33589_33667 = state_33561__$1;(statearr_33589_33667[2] = inst_33534);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 10))
{var inst_33441 = (state_33561[14]);var inst_33439 = (state_33561[16]);var inst_33447 = cljs.core._nth.call(null,inst_33439,inst_33441);var inst_33448 = cljs.core.nth.call(null,inst_33447,0,null);var inst_33449 = cljs.core.nth.call(null,inst_33447,1,null);var state_33561__$1 = (function (){var statearr_33590 = state_33561;(statearr_33590[24] = inst_33448);
return statearr_33590;
})();if(cljs.core.truth_(inst_33449))
{var statearr_33591_33668 = state_33561__$1;(statearr_33591_33668[1] = 13);
} else
{var statearr_33592_33669 = state_33561__$1;(statearr_33592_33669[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 42))
{var state_33561__$1 = state_33561;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33561__$1,45,dchan);
} else
{if((state_val_33562 === 11))
{var inst_33458 = (state_33561[25]);var inst_33438 = (state_33561[17]);var inst_33458__$1 = cljs.core.seq.call(null,inst_33438);var state_33561__$1 = (function (){var statearr_33593 = state_33561;(statearr_33593[25] = inst_33458__$1);
return statearr_33593;
})();if(inst_33458__$1)
{var statearr_33594_33670 = state_33561__$1;(statearr_33594_33670[1] = 16);
} else
{var statearr_33595_33671 = state_33561__$1;(statearr_33595_33671[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 43))
{var state_33561__$1 = state_33561;var statearr_33596_33672 = state_33561__$1;(statearr_33596_33672[2] = null);
(statearr_33596_33672[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 12))
{var inst_33484 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33597_33673 = state_33561__$1;(statearr_33597_33673[2] = inst_33484);
(statearr_33597_33673[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 44))
{var inst_33554 = (state_33561[2]);var state_33561__$1 = (function (){var statearr_33598 = state_33561;(statearr_33598[26] = inst_33554);
return statearr_33598;
})();var statearr_33599_33674 = state_33561__$1;(statearr_33599_33674[2] = null);
(statearr_33599_33674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 13))
{var inst_33448 = (state_33561[24]);var inst_33451 = cljs.core.async.close_BANG_.call(null,inst_33448);var state_33561__$1 = state_33561;var statearr_33600_33675 = state_33561__$1;(statearr_33600_33675[2] = inst_33451);
(statearr_33600_33675[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 45))
{var inst_33551 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33604_33676 = state_33561__$1;(statearr_33604_33676[2] = inst_33551);
(statearr_33604_33676[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 14))
{var state_33561__$1 = state_33561;var statearr_33605_33677 = state_33561__$1;(statearr_33605_33677[2] = null);
(statearr_33605_33677[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 15))
{var inst_33441 = (state_33561[14]);var inst_33440 = (state_33561[15]);var inst_33439 = (state_33561[16]);var inst_33438 = (state_33561[17]);var inst_33454 = (state_33561[2]);var inst_33455 = (inst_33441 + 1);var tmp33601 = inst_33440;var tmp33602 = inst_33439;var tmp33603 = inst_33438;var inst_33438__$1 = tmp33603;var inst_33439__$1 = tmp33602;var inst_33440__$1 = tmp33601;var inst_33441__$1 = inst_33455;var state_33561__$1 = (function (){var statearr_33606 = state_33561;(statearr_33606[14] = inst_33441__$1);
(statearr_33606[15] = inst_33440__$1);
(statearr_33606[16] = inst_33439__$1);
(statearr_33606[17] = inst_33438__$1);
(statearr_33606[27] = inst_33454);
return statearr_33606;
})();var statearr_33607_33678 = state_33561__$1;(statearr_33607_33678[2] = null);
(statearr_33607_33678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 16))
{var inst_33458 = (state_33561[25]);var inst_33460 = cljs.core.chunked_seq_QMARK_.call(null,inst_33458);var state_33561__$1 = state_33561;if(inst_33460)
{var statearr_33608_33679 = state_33561__$1;(statearr_33608_33679[1] = 19);
} else
{var statearr_33609_33680 = state_33561__$1;(statearr_33609_33680[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 17))
{var state_33561__$1 = state_33561;var statearr_33610_33681 = state_33561__$1;(statearr_33610_33681[2] = null);
(statearr_33610_33681[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 18))
{var inst_33482 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33611_33682 = state_33561__$1;(statearr_33611_33682[2] = inst_33482);
(statearr_33611_33682[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 19))
{var inst_33458 = (state_33561[25]);var inst_33462 = cljs.core.chunk_first.call(null,inst_33458);var inst_33463 = cljs.core.chunk_rest.call(null,inst_33458);var inst_33464 = cljs.core.count.call(null,inst_33462);var inst_33438 = inst_33463;var inst_33439 = inst_33462;var inst_33440 = inst_33464;var inst_33441 = 0;var state_33561__$1 = (function (){var statearr_33612 = state_33561;(statearr_33612[14] = inst_33441);
(statearr_33612[15] = inst_33440);
(statearr_33612[16] = inst_33439);
(statearr_33612[17] = inst_33438);
return statearr_33612;
})();var statearr_33613_33683 = state_33561__$1;(statearr_33613_33683[2] = null);
(statearr_33613_33683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 20))
{var inst_33458 = (state_33561[25]);var inst_33468 = cljs.core.first.call(null,inst_33458);var inst_33469 = cljs.core.nth.call(null,inst_33468,0,null);var inst_33470 = cljs.core.nth.call(null,inst_33468,1,null);var state_33561__$1 = (function (){var statearr_33614 = state_33561;(statearr_33614[28] = inst_33469);
return statearr_33614;
})();if(cljs.core.truth_(inst_33470))
{var statearr_33615_33684 = state_33561__$1;(statearr_33615_33684[1] = 22);
} else
{var statearr_33616_33685 = state_33561__$1;(statearr_33616_33685[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 21))
{var inst_33479 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33617_33686 = state_33561__$1;(statearr_33617_33686[2] = inst_33479);
(statearr_33617_33686[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 22))
{var inst_33469 = (state_33561[28]);var inst_33472 = cljs.core.async.close_BANG_.call(null,inst_33469);var state_33561__$1 = state_33561;var statearr_33618_33687 = state_33561__$1;(statearr_33618_33687[2] = inst_33472);
(statearr_33618_33687[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 23))
{var state_33561__$1 = state_33561;var statearr_33619_33688 = state_33561__$1;(statearr_33619_33688[2] = null);
(statearr_33619_33688[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 24))
{var inst_33458 = (state_33561[25]);var inst_33475 = (state_33561[2]);var inst_33476 = cljs.core.next.call(null,inst_33458);var inst_33438 = inst_33476;var inst_33439 = null;var inst_33440 = 0;var inst_33441 = 0;var state_33561__$1 = (function (){var statearr_33620 = state_33561;(statearr_33620[14] = inst_33441);
(statearr_33620[15] = inst_33440);
(statearr_33620[29] = inst_33475);
(statearr_33620[16] = inst_33439);
(statearr_33620[17] = inst_33438);
return statearr_33620;
})();var statearr_33621_33689 = state_33561__$1;(statearr_33621_33689[2] = null);
(statearr_33621_33689[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 25))
{var inst_33500 = (state_33561[10]);var inst_33499 = (state_33561[11]);var inst_33502 = (inst_33500 < inst_33499);var inst_33503 = inst_33502;var state_33561__$1 = state_33561;if(cljs.core.truth_(inst_33503))
{var statearr_33622_33690 = state_33561__$1;(statearr_33622_33690[1] = 27);
} else
{var statearr_33623_33691 = state_33561__$1;(statearr_33623_33691[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 26))
{var inst_33489 = (state_33561[19]);var inst_33547 = (state_33561[2]);var inst_33548 = cljs.core.seq.call(null,inst_33489);var state_33561__$1 = (function (){var statearr_33624 = state_33561;(statearr_33624[30] = inst_33547);
return statearr_33624;
})();if(inst_33548)
{var statearr_33625_33692 = state_33561__$1;(statearr_33625_33692[1] = 42);
} else
{var statearr_33626_33693 = state_33561__$1;(statearr_33626_33693[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 27))
{var inst_33500 = (state_33561[10]);var inst_33498 = (state_33561[12]);var inst_33505 = cljs.core._nth.call(null,inst_33498,inst_33500);var state_33561__$1 = (function (){var statearr_33627 = state_33561;(statearr_33627[7] = inst_33505);
return statearr_33627;
})();var statearr_33628_33694 = state_33561__$1;(statearr_33628_33694[2] = null);
(statearr_33628_33694[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 28))
{var inst_33518 = (state_33561[9]);var inst_33497 = (state_33561[13]);var inst_33518__$1 = cljs.core.seq.call(null,inst_33497);var state_33561__$1 = (function (){var statearr_33632 = state_33561;(statearr_33632[9] = inst_33518__$1);
return statearr_33632;
})();if(inst_33518__$1)
{var statearr_33633_33695 = state_33561__$1;(statearr_33633_33695[1] = 33);
} else
{var statearr_33634_33696 = state_33561__$1;(statearr_33634_33696[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 29))
{var inst_33545 = (state_33561[2]);var state_33561__$1 = state_33561;var statearr_33635_33697 = state_33561__$1;(statearr_33635_33697[2] = inst_33545);
(statearr_33635_33697[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 30))
{var inst_33500 = (state_33561[10]);var inst_33499 = (state_33561[11]);var inst_33498 = (state_33561[12]);var inst_33497 = (state_33561[13]);var inst_33514 = (state_33561[2]);var inst_33515 = (inst_33500 + 1);var tmp33629 = inst_33499;var tmp33630 = inst_33498;var tmp33631 = inst_33497;var inst_33497__$1 = tmp33631;var inst_33498__$1 = tmp33630;var inst_33499__$1 = tmp33629;var inst_33500__$1 = inst_33515;var state_33561__$1 = (function (){var statearr_33636 = state_33561;(statearr_33636[31] = inst_33514);
(statearr_33636[10] = inst_33500__$1);
(statearr_33636[11] = inst_33499__$1);
(statearr_33636[12] = inst_33498__$1);
(statearr_33636[13] = inst_33497__$1);
return statearr_33636;
})();var statearr_33637_33698 = state_33561__$1;(statearr_33637_33698[2] = null);
(statearr_33637_33698[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33562 === 31))
{var inst_33505 = (state_33561[7]);var inst_33506 = (state_33561[2]);var inst_33507 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33508 = cljs.core.async.untap_STAR_.call(null,m,inst_33505);var state_33561__$1 = (function (){var statearr_33638 = state_33561;(statearr_33638[32] = inst_33507);
(statearr_33638[33] = inst_33506);
return statearr_33638;
})();var statearr_33639_33699 = state_33561__$1;(statearr_33639_33699[2] = inst_33508);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33643[0] = state_machine__5507__auto__);
(statearr_33643[1] = 1);
return statearr_33643;
});
var state_machine__5507__auto____1 = (function (state_33561){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33644){if((e33644 instanceof Object))
{var ex__5510__auto__ = e33644;var statearr_33645_33700 = state_33561;(statearr_33645_33700[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33701 = state_33561;
state_33561 = G__33701;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33561){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33646 = f__5522__auto__.call(null);(statearr_33646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33647);
return statearr_33646;
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
cljs.core.async.Mix = (function (){var obj33703 = {};return obj33703;
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
;var m = (function (){if(typeof cljs.core.async.t33813 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33813 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33814){
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
this.meta33814 = meta33814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33813.cljs$lang$type = true;
cljs.core.async.t33813.cljs$lang$ctorStr = "cljs.core.async/t33813";
cljs.core.async.t33813.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33813");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33815){var self__ = this;
var _33815__$1 = this;return self__.meta33814;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33815,meta33814__$1){var self__ = this;
var _33815__$1 = this;return (new cljs.core.async.t33813(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33814__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33813 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33813(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33814){return (new cljs.core.async.t33813(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33814));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33813(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___33922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33880){var state_val_33881 = (state_33880[1]);if((state_val_33881 === 1))
{var inst_33819 = (state_33880[7]);var inst_33819__$1 = calc_state.call(null);var inst_33820 = cljs.core.seq_QMARK_.call(null,inst_33819__$1);var state_33880__$1 = (function (){var statearr_33882 = state_33880;(statearr_33882[7] = inst_33819__$1);
return statearr_33882;
})();if(inst_33820)
{var statearr_33883_33923 = state_33880__$1;(statearr_33883_33923[1] = 2);
} else
{var statearr_33884_33924 = state_33880__$1;(statearr_33884_33924[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 2))
{var inst_33819 = (state_33880[7]);var inst_33822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33819);var state_33880__$1 = state_33880;var statearr_33885_33925 = state_33880__$1;(statearr_33885_33925[2] = inst_33822);
(statearr_33885_33925[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 3))
{var inst_33819 = (state_33880[7]);var state_33880__$1 = state_33880;var statearr_33886_33926 = state_33880__$1;(statearr_33886_33926[2] = inst_33819);
(statearr_33886_33926[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 4))
{var inst_33819 = (state_33880[7]);var inst_33825 = (state_33880[2]);var inst_33826 = cljs.core.get.call(null,inst_33825,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33827 = cljs.core.get.call(null,inst_33825,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33828 = cljs.core.get.call(null,inst_33825,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33829 = inst_33819;var state_33880__$1 = (function (){var statearr_33887 = state_33880;(statearr_33887[8] = inst_33826);
(statearr_33887[9] = inst_33829);
(statearr_33887[10] = inst_33827);
(statearr_33887[11] = inst_33828);
return statearr_33887;
})();var statearr_33888_33927 = state_33880__$1;(statearr_33888_33927[2] = null);
(statearr_33888_33927[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 5))
{var inst_33829 = (state_33880[9]);var inst_33832 = cljs.core.seq_QMARK_.call(null,inst_33829);var state_33880__$1 = state_33880;if(inst_33832)
{var statearr_33889_33928 = state_33880__$1;(statearr_33889_33928[1] = 7);
} else
{var statearr_33890_33929 = state_33880__$1;(statearr_33890_33929[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 6))
{var inst_33878 = (state_33880[2]);var state_33880__$1 = state_33880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33880__$1,inst_33878);
} else
{if((state_val_33881 === 7))
{var inst_33829 = (state_33880[9]);var inst_33834 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33829);var state_33880__$1 = state_33880;var statearr_33891_33930 = state_33880__$1;(statearr_33891_33930[2] = inst_33834);
(statearr_33891_33930[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 8))
{var inst_33829 = (state_33880[9]);var state_33880__$1 = state_33880;var statearr_33892_33931 = state_33880__$1;(statearr_33892_33931[2] = inst_33829);
(statearr_33892_33931[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 9))
{var inst_33837 = (state_33880[12]);var inst_33837__$1 = (state_33880[2]);var inst_33838 = cljs.core.get.call(null,inst_33837__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33839 = cljs.core.get.call(null,inst_33837__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33840 = cljs.core.get.call(null,inst_33837__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33880__$1 = (function (){var statearr_33893 = state_33880;(statearr_33893[13] = inst_33840);
(statearr_33893[12] = inst_33837__$1);
(statearr_33893[14] = inst_33839);
return statearr_33893;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33880__$1,10,inst_33838);
} else
{if((state_val_33881 === 10))
{var inst_33845 = (state_33880[15]);var inst_33844 = (state_33880[16]);var inst_33843 = (state_33880[2]);var inst_33844__$1 = cljs.core.nth.call(null,inst_33843,0,null);var inst_33845__$1 = cljs.core.nth.call(null,inst_33843,1,null);var inst_33846 = (inst_33844__$1 == null);var inst_33847 = cljs.core._EQ_.call(null,inst_33845__$1,change);var inst_33848 = (inst_33846) || (inst_33847);var state_33880__$1 = (function (){var statearr_33894 = state_33880;(statearr_33894[15] = inst_33845__$1);
(statearr_33894[16] = inst_33844__$1);
return statearr_33894;
})();if(cljs.core.truth_(inst_33848))
{var statearr_33895_33932 = state_33880__$1;(statearr_33895_33932[1] = 11);
} else
{var statearr_33896_33933 = state_33880__$1;(statearr_33896_33933[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 11))
{var inst_33844 = (state_33880[16]);var inst_33850 = (inst_33844 == null);var state_33880__$1 = state_33880;if(cljs.core.truth_(inst_33850))
{var statearr_33897_33934 = state_33880__$1;(statearr_33897_33934[1] = 14);
} else
{var statearr_33898_33935 = state_33880__$1;(statearr_33898_33935[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 12))
{var inst_33845 = (state_33880[15]);var inst_33840 = (state_33880[13]);var inst_33859 = (state_33880[17]);var inst_33859__$1 = inst_33840.call(null,inst_33845);var state_33880__$1 = (function (){var statearr_33899 = state_33880;(statearr_33899[17] = inst_33859__$1);
return statearr_33899;
})();if(cljs.core.truth_(inst_33859__$1))
{var statearr_33900_33936 = state_33880__$1;(statearr_33900_33936[1] = 17);
} else
{var statearr_33901_33937 = state_33880__$1;(statearr_33901_33937[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 13))
{var inst_33876 = (state_33880[2]);var state_33880__$1 = state_33880;var statearr_33902_33938 = state_33880__$1;(statearr_33902_33938[2] = inst_33876);
(statearr_33902_33938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 14))
{var inst_33845 = (state_33880[15]);var inst_33852 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33845);var state_33880__$1 = state_33880;var statearr_33903_33939 = state_33880__$1;(statearr_33903_33939[2] = inst_33852);
(statearr_33903_33939[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 15))
{var state_33880__$1 = state_33880;var statearr_33904_33940 = state_33880__$1;(statearr_33904_33940[2] = null);
(statearr_33904_33940[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 16))
{var inst_33855 = (state_33880[2]);var inst_33856 = calc_state.call(null);var inst_33829 = inst_33856;var state_33880__$1 = (function (){var statearr_33905 = state_33880;(statearr_33905[9] = inst_33829);
(statearr_33905[18] = inst_33855);
return statearr_33905;
})();var statearr_33906_33941 = state_33880__$1;(statearr_33906_33941[2] = null);
(statearr_33906_33941[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 17))
{var inst_33859 = (state_33880[17]);var state_33880__$1 = state_33880;var statearr_33907_33942 = state_33880__$1;(statearr_33907_33942[2] = inst_33859);
(statearr_33907_33942[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 18))
{var inst_33845 = (state_33880[15]);var inst_33840 = (state_33880[13]);var inst_33839 = (state_33880[14]);var inst_33862 = cljs.core.empty_QMARK_.call(null,inst_33840);var inst_33863 = inst_33839.call(null,inst_33845);var inst_33864 = cljs.core.not.call(null,inst_33863);var inst_33865 = (inst_33862) && (inst_33864);var state_33880__$1 = state_33880;var statearr_33908_33943 = state_33880__$1;(statearr_33908_33943[2] = inst_33865);
(statearr_33908_33943[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 19))
{var inst_33867 = (state_33880[2]);var state_33880__$1 = state_33880;if(cljs.core.truth_(inst_33867))
{var statearr_33909_33944 = state_33880__$1;(statearr_33909_33944[1] = 20);
} else
{var statearr_33910_33945 = state_33880__$1;(statearr_33910_33945[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 20))
{var inst_33844 = (state_33880[16]);var state_33880__$1 = state_33880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33880__$1,23,out,inst_33844);
} else
{if((state_val_33881 === 21))
{var state_33880__$1 = state_33880;var statearr_33911_33946 = state_33880__$1;(statearr_33911_33946[2] = null);
(statearr_33911_33946[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 22))
{var inst_33837 = (state_33880[12]);var inst_33873 = (state_33880[2]);var inst_33829 = inst_33837;var state_33880__$1 = (function (){var statearr_33912 = state_33880;(statearr_33912[19] = inst_33873);
(statearr_33912[9] = inst_33829);
return statearr_33912;
})();var statearr_33913_33947 = state_33880__$1;(statearr_33913_33947[2] = null);
(statearr_33913_33947[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33881 === 23))
{var inst_33870 = (state_33880[2]);var state_33880__$1 = state_33880;var statearr_33914_33948 = state_33880__$1;(statearr_33914_33948[2] = inst_33870);
(statearr_33914_33948[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_33918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33918[0] = state_machine__5507__auto__);
(statearr_33918[1] = 1);
return statearr_33918;
});
var state_machine__5507__auto____1 = (function (state_33880){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33919){if((e33919 instanceof Object))
{var ex__5510__auto__ = e33919;var statearr_33920_33949 = state_33880;(statearr_33920_33949[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33950 = state_33880;
state_33880 = G__33950;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33880){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33921 = f__5522__auto__.call(null);(statearr_33921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33922);
return statearr_33921;
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
cljs.core.async.Pub = (function (){var obj33952 = {};return obj33952;
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
return (function (p1__33953_SHARP_){if(cljs.core.truth_(p1__33953_SHARP_.call(null,topic)))
{return p1__33953_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33953_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34078 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34079){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34079 = meta34079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34078.cljs$lang$type = true;
cljs.core.async.t34078.cljs$lang$ctorStr = "cljs.core.async/t34078";
cljs.core.async.t34078.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34078");
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34078.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34078.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34080){var self__ = this;
var _34080__$1 = this;return self__.meta34079;
});})(mults,ensure_mult))
;
cljs.core.async.t34078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34080,meta34079__$1){var self__ = this;
var _34080__$1 = this;return (new cljs.core.async.t34078(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34079__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34078 = ((function (mults,ensure_mult){
return (function __GT_t34078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34079){return (new cljs.core.async.t34078(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34079));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34078(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34202 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34154){var state_val_34155 = (state_34154[1]);if((state_val_34155 === 1))
{var state_34154__$1 = state_34154;var statearr_34156_34203 = state_34154__$1;(statearr_34156_34203[2] = null);
(statearr_34156_34203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 2))
{var state_34154__$1 = state_34154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34154__$1,4,ch);
} else
{if((state_val_34155 === 3))
{var inst_34152 = (state_34154[2]);var state_34154__$1 = state_34154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34154__$1,inst_34152);
} else
{if((state_val_34155 === 4))
{var inst_34083 = (state_34154[7]);var inst_34083__$1 = (state_34154[2]);var inst_34084 = (inst_34083__$1 == null);var state_34154__$1 = (function (){var statearr_34157 = state_34154;(statearr_34157[7] = inst_34083__$1);
return statearr_34157;
})();if(cljs.core.truth_(inst_34084))
{var statearr_34158_34204 = state_34154__$1;(statearr_34158_34204[1] = 5);
} else
{var statearr_34159_34205 = state_34154__$1;(statearr_34159_34205[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 5))
{var inst_34090 = cljs.core.deref.call(null,mults);var inst_34091 = cljs.core.vals.call(null,inst_34090);var inst_34092 = cljs.core.seq.call(null,inst_34091);var inst_34093 = inst_34092;var inst_34094 = null;var inst_34095 = 0;var inst_34096 = 0;var state_34154__$1 = (function (){var statearr_34160 = state_34154;(statearr_34160[8] = inst_34094);
(statearr_34160[9] = inst_34093);
(statearr_34160[10] = inst_34096);
(statearr_34160[11] = inst_34095);
return statearr_34160;
})();var statearr_34161_34206 = state_34154__$1;(statearr_34161_34206[2] = null);
(statearr_34161_34206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 6))
{var inst_34083 = (state_34154[7]);var inst_34133 = (state_34154[12]);var inst_34131 = (state_34154[13]);var inst_34131__$1 = topic_fn.call(null,inst_34083);var inst_34132 = cljs.core.deref.call(null,mults);var inst_34133__$1 = cljs.core.get.call(null,inst_34132,inst_34131__$1);var state_34154__$1 = (function (){var statearr_34162 = state_34154;(statearr_34162[12] = inst_34133__$1);
(statearr_34162[13] = inst_34131__$1);
return statearr_34162;
})();if(cljs.core.truth_(inst_34133__$1))
{var statearr_34163_34207 = state_34154__$1;(statearr_34163_34207[1] = 19);
} else
{var statearr_34164_34208 = state_34154__$1;(statearr_34164_34208[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 7))
{var inst_34150 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34165_34209 = state_34154__$1;(statearr_34165_34209[2] = inst_34150);
(statearr_34165_34209[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 8))
{var inst_34096 = (state_34154[10]);var inst_34095 = (state_34154[11]);var inst_34098 = (inst_34096 < inst_34095);var inst_34099 = inst_34098;var state_34154__$1 = state_34154;if(cljs.core.truth_(inst_34099))
{var statearr_34169_34210 = state_34154__$1;(statearr_34169_34210[1] = 10);
} else
{var statearr_34170_34211 = state_34154__$1;(statearr_34170_34211[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 9))
{var inst_34129 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34171_34212 = state_34154__$1;(statearr_34171_34212[2] = inst_34129);
(statearr_34171_34212[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 10))
{var inst_34094 = (state_34154[8]);var inst_34093 = (state_34154[9]);var inst_34096 = (state_34154[10]);var inst_34095 = (state_34154[11]);var inst_34101 = cljs.core._nth.call(null,inst_34094,inst_34096);var inst_34102 = cljs.core.async.muxch_STAR_.call(null,inst_34101);var inst_34103 = cljs.core.async.close_BANG_.call(null,inst_34102);var inst_34104 = (inst_34096 + 1);var tmp34166 = inst_34094;var tmp34167 = inst_34093;var tmp34168 = inst_34095;var inst_34093__$1 = tmp34167;var inst_34094__$1 = tmp34166;var inst_34095__$1 = tmp34168;var inst_34096__$1 = inst_34104;var state_34154__$1 = (function (){var statearr_34172 = state_34154;(statearr_34172[8] = inst_34094__$1);
(statearr_34172[9] = inst_34093__$1);
(statearr_34172[10] = inst_34096__$1);
(statearr_34172[11] = inst_34095__$1);
(statearr_34172[14] = inst_34103);
return statearr_34172;
})();var statearr_34173_34213 = state_34154__$1;(statearr_34173_34213[2] = null);
(statearr_34173_34213[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 11))
{var inst_34093 = (state_34154[9]);var inst_34107 = (state_34154[15]);var inst_34107__$1 = cljs.core.seq.call(null,inst_34093);var state_34154__$1 = (function (){var statearr_34174 = state_34154;(statearr_34174[15] = inst_34107__$1);
return statearr_34174;
})();if(inst_34107__$1)
{var statearr_34175_34214 = state_34154__$1;(statearr_34175_34214[1] = 13);
} else
{var statearr_34176_34215 = state_34154__$1;(statearr_34176_34215[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 12))
{var inst_34127 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34177_34216 = state_34154__$1;(statearr_34177_34216[2] = inst_34127);
(statearr_34177_34216[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 13))
{var inst_34107 = (state_34154[15]);var inst_34109 = cljs.core.chunked_seq_QMARK_.call(null,inst_34107);var state_34154__$1 = state_34154;if(inst_34109)
{var statearr_34178_34217 = state_34154__$1;(statearr_34178_34217[1] = 16);
} else
{var statearr_34179_34218 = state_34154__$1;(statearr_34179_34218[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 14))
{var state_34154__$1 = state_34154;var statearr_34180_34219 = state_34154__$1;(statearr_34180_34219[2] = null);
(statearr_34180_34219[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 15))
{var inst_34125 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34181_34220 = state_34154__$1;(statearr_34181_34220[2] = inst_34125);
(statearr_34181_34220[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 16))
{var inst_34107 = (state_34154[15]);var inst_34111 = cljs.core.chunk_first.call(null,inst_34107);var inst_34112 = cljs.core.chunk_rest.call(null,inst_34107);var inst_34113 = cljs.core.count.call(null,inst_34111);var inst_34093 = inst_34112;var inst_34094 = inst_34111;var inst_34095 = inst_34113;var inst_34096 = 0;var state_34154__$1 = (function (){var statearr_34182 = state_34154;(statearr_34182[8] = inst_34094);
(statearr_34182[9] = inst_34093);
(statearr_34182[10] = inst_34096);
(statearr_34182[11] = inst_34095);
return statearr_34182;
})();var statearr_34183_34221 = state_34154__$1;(statearr_34183_34221[2] = null);
(statearr_34183_34221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 17))
{var inst_34107 = (state_34154[15]);var inst_34116 = cljs.core.first.call(null,inst_34107);var inst_34117 = cljs.core.async.muxch_STAR_.call(null,inst_34116);var inst_34118 = cljs.core.async.close_BANG_.call(null,inst_34117);var inst_34119 = cljs.core.next.call(null,inst_34107);var inst_34093 = inst_34119;var inst_34094 = null;var inst_34095 = 0;var inst_34096 = 0;var state_34154__$1 = (function (){var statearr_34184 = state_34154;(statearr_34184[8] = inst_34094);
(statearr_34184[9] = inst_34093);
(statearr_34184[16] = inst_34118);
(statearr_34184[10] = inst_34096);
(statearr_34184[11] = inst_34095);
return statearr_34184;
})();var statearr_34185_34222 = state_34154__$1;(statearr_34185_34222[2] = null);
(statearr_34185_34222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 18))
{var inst_34122 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34186_34223 = state_34154__$1;(statearr_34186_34223[2] = inst_34122);
(statearr_34186_34223[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 19))
{var state_34154__$1 = state_34154;var statearr_34187_34224 = state_34154__$1;(statearr_34187_34224[2] = null);
(statearr_34187_34224[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 20))
{var state_34154__$1 = state_34154;var statearr_34188_34225 = state_34154__$1;(statearr_34188_34225[2] = null);
(statearr_34188_34225[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 21))
{var inst_34147 = (state_34154[2]);var state_34154__$1 = (function (){var statearr_34189 = state_34154;(statearr_34189[17] = inst_34147);
return statearr_34189;
})();var statearr_34190_34226 = state_34154__$1;(statearr_34190_34226[2] = null);
(statearr_34190_34226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 22))
{var inst_34144 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34191_34227 = state_34154__$1;(statearr_34191_34227[2] = inst_34144);
(statearr_34191_34227[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 23))
{var inst_34131 = (state_34154[13]);var inst_34135 = (state_34154[2]);var inst_34136 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34131);var state_34154__$1 = (function (){var statearr_34192 = state_34154;(statearr_34192[18] = inst_34135);
return statearr_34192;
})();var statearr_34193_34228 = state_34154__$1;(statearr_34193_34228[2] = inst_34136);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34154__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34155 === 24))
{var inst_34083 = (state_34154[7]);var inst_34133 = (state_34154[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34154,23,Object,null,22);var inst_34140 = cljs.core.async.muxch_STAR_.call(null,inst_34133);var state_34154__$1 = state_34154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34154__$1,25,inst_34140,inst_34083);
} else
{if((state_val_34155 === 25))
{var inst_34142 = (state_34154[2]);var state_34154__$1 = state_34154;var statearr_34194_34229 = state_34154__$1;(statearr_34194_34229[2] = inst_34142);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34154__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34198[0] = state_machine__5507__auto__);
(statearr_34198[1] = 1);
return statearr_34198;
});
var state_machine__5507__auto____1 = (function (state_34154){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34154);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34199){if((e34199 instanceof Object))
{var ex__5510__auto__ = e34199;var statearr_34200_34230 = state_34154;(statearr_34200_34230[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34231 = state_34154;
state_34154 = G__34231;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34201 = f__5522__auto__.call(null);(statearr_34201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34202);
return statearr_34201;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34338){var state_val_34339 = (state_34338[1]);if((state_val_34339 === 1))
{var state_34338__$1 = state_34338;var statearr_34340_34369 = state_34338__$1;(statearr_34340_34369[2] = null);
(statearr_34340_34369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 2))
{var inst_34301 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34302 = 0;var state_34338__$1 = (function (){var statearr_34341 = state_34338;(statearr_34341[7] = inst_34302);
(statearr_34341[8] = inst_34301);
return statearr_34341;
})();var statearr_34342_34370 = state_34338__$1;(statearr_34342_34370[2] = null);
(statearr_34342_34370[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 3))
{var inst_34336 = (state_34338[2]);var state_34338__$1 = state_34338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34338__$1,inst_34336);
} else
{if((state_val_34339 === 4))
{var inst_34302 = (state_34338[7]);var inst_34304 = (inst_34302 < cnt);var state_34338__$1 = state_34338;if(cljs.core.truth_(inst_34304))
{var statearr_34343_34371 = state_34338__$1;(statearr_34343_34371[1] = 6);
} else
{var statearr_34344_34372 = state_34338__$1;(statearr_34344_34372[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 5))
{var inst_34322 = (state_34338[2]);var state_34338__$1 = (function (){var statearr_34345 = state_34338;(statearr_34345[9] = inst_34322);
return statearr_34345;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34338__$1,12,dchan);
} else
{if((state_val_34339 === 6))
{var state_34338__$1 = state_34338;var statearr_34346_34373 = state_34338__$1;(statearr_34346_34373[2] = null);
(statearr_34346_34373[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 7))
{var state_34338__$1 = state_34338;var statearr_34347_34374 = state_34338__$1;(statearr_34347_34374[2] = null);
(statearr_34347_34374[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 8))
{var inst_34320 = (state_34338[2]);var state_34338__$1 = state_34338;var statearr_34348_34375 = state_34338__$1;(statearr_34348_34375[2] = inst_34320);
(statearr_34348_34375[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 9))
{var inst_34302 = (state_34338[7]);var inst_34315 = (state_34338[2]);var inst_34316 = (inst_34302 + 1);var inst_34302__$1 = inst_34316;var state_34338__$1 = (function (){var statearr_34349 = state_34338;(statearr_34349[10] = inst_34315);
(statearr_34349[7] = inst_34302__$1);
return statearr_34349;
})();var statearr_34350_34376 = state_34338__$1;(statearr_34350_34376[2] = null);
(statearr_34350_34376[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 10))
{var inst_34306 = (state_34338[2]);var inst_34307 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34338__$1 = (function (){var statearr_34351 = state_34338;(statearr_34351[11] = inst_34306);
return statearr_34351;
})();var statearr_34352_34377 = state_34338__$1;(statearr_34352_34377[2] = inst_34307);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34338__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 11))
{var inst_34302 = (state_34338[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34338,10,Object,null,9);var inst_34311 = chs__$1.call(null,inst_34302);var inst_34312 = done.call(null,inst_34302);var inst_34313 = cljs.core.async.take_BANG_.call(null,inst_34311,inst_34312);var state_34338__$1 = state_34338;var statearr_34353_34378 = state_34338__$1;(statearr_34353_34378[2] = inst_34313);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34338__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 12))
{var inst_34324 = (state_34338[12]);var inst_34324__$1 = (state_34338[2]);var inst_34325 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34324__$1);var state_34338__$1 = (function (){var statearr_34354 = state_34338;(statearr_34354[12] = inst_34324__$1);
return statearr_34354;
})();if(cljs.core.truth_(inst_34325))
{var statearr_34355_34379 = state_34338__$1;(statearr_34355_34379[1] = 13);
} else
{var statearr_34356_34380 = state_34338__$1;(statearr_34356_34380[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 13))
{var inst_34327 = cljs.core.async.close_BANG_.call(null,out);var state_34338__$1 = state_34338;var statearr_34357_34381 = state_34338__$1;(statearr_34357_34381[2] = inst_34327);
(statearr_34357_34381[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 14))
{var inst_34324 = (state_34338[12]);var inst_34329 = cljs.core.apply.call(null,f,inst_34324);var state_34338__$1 = state_34338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34338__$1,16,out,inst_34329);
} else
{if((state_val_34339 === 15))
{var inst_34334 = (state_34338[2]);var state_34338__$1 = state_34338;var statearr_34358_34382 = state_34338__$1;(statearr_34358_34382[2] = inst_34334);
(statearr_34358_34382[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34339 === 16))
{var inst_34331 = (state_34338[2]);var state_34338__$1 = (function (){var statearr_34359 = state_34338;(statearr_34359[13] = inst_34331);
return statearr_34359;
})();var statearr_34360_34383 = state_34338__$1;(statearr_34360_34383[2] = null);
(statearr_34360_34383[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34364[0] = state_machine__5507__auto__);
(statearr_34364[1] = 1);
return statearr_34364;
});
var state_machine__5507__auto____1 = (function (state_34338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34365){if((e34365 instanceof Object))
{var ex__5510__auto__ = e34365;var statearr_34366_34384 = state_34338;(statearr_34366_34384[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34385 = state_34338;
state_34338 = G__34385;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34367 = f__5522__auto__.call(null);(statearr_34367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34368);
return statearr_34367;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34493 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34469){var state_val_34470 = (state_34469[1]);if((state_val_34470 === 1))
{var inst_34440 = cljs.core.vec.call(null,chs);var inst_34441 = inst_34440;var state_34469__$1 = (function (){var statearr_34471 = state_34469;(statearr_34471[7] = inst_34441);
return statearr_34471;
})();var statearr_34472_34494 = state_34469__$1;(statearr_34472_34494[2] = null);
(statearr_34472_34494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 2))
{var inst_34441 = (state_34469[7]);var inst_34443 = cljs.core.count.call(null,inst_34441);var inst_34444 = (inst_34443 > 0);var state_34469__$1 = state_34469;if(cljs.core.truth_(inst_34444))
{var statearr_34473_34495 = state_34469__$1;(statearr_34473_34495[1] = 4);
} else
{var statearr_34474_34496 = state_34469__$1;(statearr_34474_34496[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 3))
{var inst_34467 = (state_34469[2]);var state_34469__$1 = state_34469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34469__$1,inst_34467);
} else
{if((state_val_34470 === 4))
{var inst_34441 = (state_34469[7]);var state_34469__$1 = state_34469;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34469__$1,7,inst_34441);
} else
{if((state_val_34470 === 5))
{var inst_34463 = cljs.core.async.close_BANG_.call(null,out);var state_34469__$1 = state_34469;var statearr_34475_34497 = state_34469__$1;(statearr_34475_34497[2] = inst_34463);
(statearr_34475_34497[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 6))
{var inst_34465 = (state_34469[2]);var state_34469__$1 = state_34469;var statearr_34476_34498 = state_34469__$1;(statearr_34476_34498[2] = inst_34465);
(statearr_34476_34498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 7))
{var inst_34448 = (state_34469[8]);var inst_34449 = (state_34469[9]);var inst_34448__$1 = (state_34469[2]);var inst_34449__$1 = cljs.core.nth.call(null,inst_34448__$1,0,null);var inst_34450 = cljs.core.nth.call(null,inst_34448__$1,1,null);var inst_34451 = (inst_34449__$1 == null);var state_34469__$1 = (function (){var statearr_34477 = state_34469;(statearr_34477[8] = inst_34448__$1);
(statearr_34477[9] = inst_34449__$1);
(statearr_34477[10] = inst_34450);
return statearr_34477;
})();if(cljs.core.truth_(inst_34451))
{var statearr_34478_34499 = state_34469__$1;(statearr_34478_34499[1] = 8);
} else
{var statearr_34479_34500 = state_34469__$1;(statearr_34479_34500[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 8))
{var inst_34441 = (state_34469[7]);var inst_34448 = (state_34469[8]);var inst_34449 = (state_34469[9]);var inst_34450 = (state_34469[10]);var inst_34453 = (function (){var c = inst_34450;var v = inst_34449;var vec__34446 = inst_34448;var cs = inst_34441;return ((function (c,v,vec__34446,cs,inst_34441,inst_34448,inst_34449,inst_34450,state_val_34470){
return (function (p1__34386_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34386_SHARP_);
});
;})(c,v,vec__34446,cs,inst_34441,inst_34448,inst_34449,inst_34450,state_val_34470))
})();var inst_34454 = cljs.core.filterv.call(null,inst_34453,inst_34441);var inst_34441__$1 = inst_34454;var state_34469__$1 = (function (){var statearr_34480 = state_34469;(statearr_34480[7] = inst_34441__$1);
return statearr_34480;
})();var statearr_34481_34501 = state_34469__$1;(statearr_34481_34501[2] = null);
(statearr_34481_34501[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 9))
{var inst_34449 = (state_34469[9]);var state_34469__$1 = state_34469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34469__$1,11,out,inst_34449);
} else
{if((state_val_34470 === 10))
{var inst_34461 = (state_34469[2]);var state_34469__$1 = state_34469;var statearr_34483_34502 = state_34469__$1;(statearr_34483_34502[2] = inst_34461);
(statearr_34483_34502[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34470 === 11))
{var inst_34441 = (state_34469[7]);var inst_34458 = (state_34469[2]);var tmp34482 = inst_34441;var inst_34441__$1 = tmp34482;var state_34469__$1 = (function (){var statearr_34484 = state_34469;(statearr_34484[7] = inst_34441__$1);
(statearr_34484[11] = inst_34458);
return statearr_34484;
})();var statearr_34485_34503 = state_34469__$1;(statearr_34485_34503[2] = null);
(statearr_34485_34503[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34489 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34489[0] = state_machine__5507__auto__);
(statearr_34489[1] = 1);
return statearr_34489;
});
var state_machine__5507__auto____1 = (function (state_34469){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34490){if((e34490 instanceof Object))
{var ex__5510__auto__ = e34490;var statearr_34491_34504 = state_34469;(statearr_34491_34504[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34505 = state_34469;
state_34469 = G__34505;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34469){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34492 = f__5522__auto__.call(null);(statearr_34492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34493);
return statearr_34492;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34598 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34575){var state_val_34576 = (state_34575[1]);if((state_val_34576 === 1))
{var inst_34552 = 0;var state_34575__$1 = (function (){var statearr_34577 = state_34575;(statearr_34577[7] = inst_34552);
return statearr_34577;
})();var statearr_34578_34599 = state_34575__$1;(statearr_34578_34599[2] = null);
(statearr_34578_34599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 2))
{var inst_34552 = (state_34575[7]);var inst_34554 = (inst_34552 < n);var state_34575__$1 = state_34575;if(cljs.core.truth_(inst_34554))
{var statearr_34579_34600 = state_34575__$1;(statearr_34579_34600[1] = 4);
} else
{var statearr_34580_34601 = state_34575__$1;(statearr_34580_34601[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 3))
{var inst_34572 = (state_34575[2]);var inst_34573 = cljs.core.async.close_BANG_.call(null,out);var state_34575__$1 = (function (){var statearr_34581 = state_34575;(statearr_34581[8] = inst_34572);
return statearr_34581;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34575__$1,inst_34573);
} else
{if((state_val_34576 === 4))
{var state_34575__$1 = state_34575;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,7,ch);
} else
{if((state_val_34576 === 5))
{var state_34575__$1 = state_34575;var statearr_34582_34602 = state_34575__$1;(statearr_34582_34602[2] = null);
(statearr_34582_34602[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 6))
{var inst_34570 = (state_34575[2]);var state_34575__$1 = state_34575;var statearr_34583_34603 = state_34575__$1;(statearr_34583_34603[2] = inst_34570);
(statearr_34583_34603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 7))
{var inst_34557 = (state_34575[9]);var inst_34557__$1 = (state_34575[2]);var inst_34558 = (inst_34557__$1 == null);var inst_34559 = cljs.core.not.call(null,inst_34558);var state_34575__$1 = (function (){var statearr_34584 = state_34575;(statearr_34584[9] = inst_34557__$1);
return statearr_34584;
})();if(inst_34559)
{var statearr_34585_34604 = state_34575__$1;(statearr_34585_34604[1] = 8);
} else
{var statearr_34586_34605 = state_34575__$1;(statearr_34586_34605[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 8))
{var inst_34557 = (state_34575[9]);var state_34575__$1 = state_34575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34575__$1,11,out,inst_34557);
} else
{if((state_val_34576 === 9))
{var state_34575__$1 = state_34575;var statearr_34587_34606 = state_34575__$1;(statearr_34587_34606[2] = null);
(statearr_34587_34606[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 10))
{var inst_34567 = (state_34575[2]);var state_34575__$1 = state_34575;var statearr_34588_34607 = state_34575__$1;(statearr_34588_34607[2] = inst_34567);
(statearr_34588_34607[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34576 === 11))
{var inst_34552 = (state_34575[7]);var inst_34562 = (state_34575[2]);var inst_34563 = (inst_34552 + 1);var inst_34552__$1 = inst_34563;var state_34575__$1 = (function (){var statearr_34589 = state_34575;(statearr_34589[10] = inst_34562);
(statearr_34589[7] = inst_34552__$1);
return statearr_34589;
})();var statearr_34590_34608 = state_34575__$1;(statearr_34590_34608[2] = null);
(statearr_34590_34608[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34594 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34594[0] = state_machine__5507__auto__);
(statearr_34594[1] = 1);
return statearr_34594;
});
var state_machine__5507__auto____1 = (function (state_34575){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34575);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34595){if((e34595 instanceof Object))
{var ex__5510__auto__ = e34595;var statearr_34596_34609 = state_34575;(statearr_34596_34609[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34575);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34610 = state_34575;
state_34575 = G__34610;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34575){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34597 = f__5522__auto__.call(null);(statearr_34597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34598);
return statearr_34597;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34682){var state_val_34683 = (state_34682[1]);if((state_val_34683 === 1))
{var inst_34659 = null;var state_34682__$1 = (function (){var statearr_34684 = state_34682;(statearr_34684[7] = inst_34659);
return statearr_34684;
})();var statearr_34685_34708 = state_34682__$1;(statearr_34685_34708[2] = null);
(statearr_34685_34708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 2))
{var state_34682__$1 = state_34682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34682__$1,4,ch);
} else
{if((state_val_34683 === 3))
{var inst_34679 = (state_34682[2]);var inst_34680 = cljs.core.async.close_BANG_.call(null,out);var state_34682__$1 = (function (){var statearr_34686 = state_34682;(statearr_34686[8] = inst_34679);
return statearr_34686;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34682__$1,inst_34680);
} else
{if((state_val_34683 === 4))
{var inst_34662 = (state_34682[9]);var inst_34662__$1 = (state_34682[2]);var inst_34663 = (inst_34662__$1 == null);var inst_34664 = cljs.core.not.call(null,inst_34663);var state_34682__$1 = (function (){var statearr_34687 = state_34682;(statearr_34687[9] = inst_34662__$1);
return statearr_34687;
})();if(inst_34664)
{var statearr_34688_34709 = state_34682__$1;(statearr_34688_34709[1] = 5);
} else
{var statearr_34689_34710 = state_34682__$1;(statearr_34689_34710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 5))
{var inst_34659 = (state_34682[7]);var inst_34662 = (state_34682[9]);var inst_34666 = cljs.core._EQ_.call(null,inst_34662,inst_34659);var state_34682__$1 = state_34682;if(inst_34666)
{var statearr_34690_34711 = state_34682__$1;(statearr_34690_34711[1] = 8);
} else
{var statearr_34691_34712 = state_34682__$1;(statearr_34691_34712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 6))
{var state_34682__$1 = state_34682;var statearr_34693_34713 = state_34682__$1;(statearr_34693_34713[2] = null);
(statearr_34693_34713[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 7))
{var inst_34677 = (state_34682[2]);var state_34682__$1 = state_34682;var statearr_34694_34714 = state_34682__$1;(statearr_34694_34714[2] = inst_34677);
(statearr_34694_34714[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 8))
{var inst_34659 = (state_34682[7]);var tmp34692 = inst_34659;var inst_34659__$1 = tmp34692;var state_34682__$1 = (function (){var statearr_34695 = state_34682;(statearr_34695[7] = inst_34659__$1);
return statearr_34695;
})();var statearr_34696_34715 = state_34682__$1;(statearr_34696_34715[2] = null);
(statearr_34696_34715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 9))
{var inst_34662 = (state_34682[9]);var state_34682__$1 = state_34682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34682__$1,11,out,inst_34662);
} else
{if((state_val_34683 === 10))
{var inst_34674 = (state_34682[2]);var state_34682__$1 = state_34682;var statearr_34697_34716 = state_34682__$1;(statearr_34697_34716[2] = inst_34674);
(statearr_34697_34716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34683 === 11))
{var inst_34662 = (state_34682[9]);var inst_34671 = (state_34682[2]);var inst_34659 = inst_34662;var state_34682__$1 = (function (){var statearr_34698 = state_34682;(statearr_34698[7] = inst_34659);
(statearr_34698[10] = inst_34671);
return statearr_34698;
})();var statearr_34699_34717 = state_34682__$1;(statearr_34699_34717[2] = null);
(statearr_34699_34717[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34703 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34703[0] = state_machine__5507__auto__);
(statearr_34703[1] = 1);
return statearr_34703;
});
var state_machine__5507__auto____1 = (function (state_34682){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34682);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object))
{var ex__5510__auto__ = e34704;var statearr_34705_34718 = state_34682;(statearr_34705_34718[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34719 = state_34682;
state_34682 = G__34719;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34706 = f__5522__auto__.call(null);(statearr_34706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34707);
return statearr_34706;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34824){var state_val_34825 = (state_34824[1]);if((state_val_34825 === 1))
{var inst_34787 = (new Array(n));var inst_34788 = inst_34787;var inst_34789 = 0;var state_34824__$1 = (function (){var statearr_34826 = state_34824;(statearr_34826[7] = inst_34788);
(statearr_34826[8] = inst_34789);
return statearr_34826;
})();var statearr_34827_34855 = state_34824__$1;(statearr_34827_34855[2] = null);
(statearr_34827_34855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 2))
{var state_34824__$1 = state_34824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34824__$1,4,ch);
} else
{if((state_val_34825 === 3))
{var inst_34822 = (state_34824[2]);var state_34824__$1 = state_34824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34824__$1,inst_34822);
} else
{if((state_val_34825 === 4))
{var inst_34792 = (state_34824[9]);var inst_34792__$1 = (state_34824[2]);var inst_34793 = (inst_34792__$1 == null);var inst_34794 = cljs.core.not.call(null,inst_34793);var state_34824__$1 = (function (){var statearr_34828 = state_34824;(statearr_34828[9] = inst_34792__$1);
return statearr_34828;
})();if(inst_34794)
{var statearr_34829_34856 = state_34824__$1;(statearr_34829_34856[1] = 5);
} else
{var statearr_34830_34857 = state_34824__$1;(statearr_34830_34857[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 5))
{var inst_34797 = (state_34824[10]);var inst_34788 = (state_34824[7]);var inst_34789 = (state_34824[8]);var inst_34792 = (state_34824[9]);var inst_34796 = (inst_34788[inst_34789] = inst_34792);var inst_34797__$1 = (inst_34789 + 1);var inst_34798 = (inst_34797__$1 < n);var state_34824__$1 = (function (){var statearr_34831 = state_34824;(statearr_34831[10] = inst_34797__$1);
(statearr_34831[11] = inst_34796);
return statearr_34831;
})();if(cljs.core.truth_(inst_34798))
{var statearr_34832_34858 = state_34824__$1;(statearr_34832_34858[1] = 8);
} else
{var statearr_34833_34859 = state_34824__$1;(statearr_34833_34859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 6))
{var inst_34789 = (state_34824[8]);var inst_34810 = (inst_34789 > 0);var state_34824__$1 = state_34824;if(cljs.core.truth_(inst_34810))
{var statearr_34835_34860 = state_34824__$1;(statearr_34835_34860[1] = 12);
} else
{var statearr_34836_34861 = state_34824__$1;(statearr_34836_34861[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 7))
{var inst_34820 = (state_34824[2]);var state_34824__$1 = state_34824;var statearr_34837_34862 = state_34824__$1;(statearr_34837_34862[2] = inst_34820);
(statearr_34837_34862[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 8))
{var inst_34797 = (state_34824[10]);var inst_34788 = (state_34824[7]);var tmp34834 = inst_34788;var inst_34788__$1 = tmp34834;var inst_34789 = inst_34797;var state_34824__$1 = (function (){var statearr_34838 = state_34824;(statearr_34838[7] = inst_34788__$1);
(statearr_34838[8] = inst_34789);
return statearr_34838;
})();var statearr_34839_34863 = state_34824__$1;(statearr_34839_34863[2] = null);
(statearr_34839_34863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 9))
{var inst_34788 = (state_34824[7]);var inst_34802 = cljs.core.vec.call(null,inst_34788);var state_34824__$1 = state_34824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34824__$1,11,out,inst_34802);
} else
{if((state_val_34825 === 10))
{var inst_34808 = (state_34824[2]);var state_34824__$1 = state_34824;var statearr_34840_34864 = state_34824__$1;(statearr_34840_34864[2] = inst_34808);
(statearr_34840_34864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 11))
{var inst_34804 = (state_34824[2]);var inst_34805 = (new Array(n));var inst_34788 = inst_34805;var inst_34789 = 0;var state_34824__$1 = (function (){var statearr_34841 = state_34824;(statearr_34841[7] = inst_34788);
(statearr_34841[8] = inst_34789);
(statearr_34841[12] = inst_34804);
return statearr_34841;
})();var statearr_34842_34865 = state_34824__$1;(statearr_34842_34865[2] = null);
(statearr_34842_34865[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 12))
{var inst_34788 = (state_34824[7]);var inst_34812 = cljs.core.vec.call(null,inst_34788);var state_34824__$1 = state_34824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34824__$1,15,out,inst_34812);
} else
{if((state_val_34825 === 13))
{var state_34824__$1 = state_34824;var statearr_34843_34866 = state_34824__$1;(statearr_34843_34866[2] = null);
(statearr_34843_34866[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 14))
{var inst_34817 = (state_34824[2]);var inst_34818 = cljs.core.async.close_BANG_.call(null,out);var state_34824__$1 = (function (){var statearr_34844 = state_34824;(statearr_34844[13] = inst_34817);
return statearr_34844;
})();var statearr_34845_34867 = state_34824__$1;(statearr_34845_34867[2] = inst_34818);
(statearr_34845_34867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34825 === 15))
{var inst_34814 = (state_34824[2]);var state_34824__$1 = state_34824;var statearr_34846_34868 = state_34824__$1;(statearr_34846_34868[2] = inst_34814);
(statearr_34846_34868[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34850[0] = state_machine__5507__auto__);
(statearr_34850[1] = 1);
return statearr_34850;
});
var state_machine__5507__auto____1 = (function (state_34824){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34824);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34851){if((e34851 instanceof Object))
{var ex__5510__auto__ = e34851;var statearr_34852_34869 = state_34824;(statearr_34852_34869[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34870 = state_34824;
state_34824 = G__34870;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34824){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34853 = f__5522__auto__.call(null);(statearr_34853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34854);
return statearr_34853;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34983){var state_val_34984 = (state_34983[1]);if((state_val_34984 === 1))
{var inst_34942 = [];var inst_34943 = inst_34942;var inst_34944 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34983__$1 = (function (){var statearr_34985 = state_34983;(statearr_34985[7] = inst_34943);
(statearr_34985[8] = inst_34944);
return statearr_34985;
})();var statearr_34986_35014 = state_34983__$1;(statearr_34986_35014[2] = null);
(statearr_34986_35014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 2))
{var state_34983__$1 = state_34983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34983__$1,4,ch);
} else
{if((state_val_34984 === 3))
{var inst_34981 = (state_34983[2]);var state_34983__$1 = state_34983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34983__$1,inst_34981);
} else
{if((state_val_34984 === 4))
{var inst_34947 = (state_34983[9]);var inst_34947__$1 = (state_34983[2]);var inst_34948 = (inst_34947__$1 == null);var inst_34949 = cljs.core.not.call(null,inst_34948);var state_34983__$1 = (function (){var statearr_34987 = state_34983;(statearr_34987[9] = inst_34947__$1);
return statearr_34987;
})();if(inst_34949)
{var statearr_34988_35015 = state_34983__$1;(statearr_34988_35015[1] = 5);
} else
{var statearr_34989_35016 = state_34983__$1;(statearr_34989_35016[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 5))
{var inst_34947 = (state_34983[9]);var inst_34951 = (state_34983[10]);var inst_34944 = (state_34983[8]);var inst_34951__$1 = f.call(null,inst_34947);var inst_34952 = cljs.core._EQ_.call(null,inst_34951__$1,inst_34944);var inst_34953 = cljs.core.keyword_identical_QMARK_.call(null,inst_34944,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34954 = (inst_34952) || (inst_34953);var state_34983__$1 = (function (){var statearr_34990 = state_34983;(statearr_34990[10] = inst_34951__$1);
return statearr_34990;
})();if(cljs.core.truth_(inst_34954))
{var statearr_34991_35017 = state_34983__$1;(statearr_34991_35017[1] = 8);
} else
{var statearr_34992_35018 = state_34983__$1;(statearr_34992_35018[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 6))
{var inst_34943 = (state_34983[7]);var inst_34968 = inst_34943.length;var inst_34969 = (inst_34968 > 0);var state_34983__$1 = state_34983;if(cljs.core.truth_(inst_34969))
{var statearr_34994_35019 = state_34983__$1;(statearr_34994_35019[1] = 12);
} else
{var statearr_34995_35020 = state_34983__$1;(statearr_34995_35020[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 7))
{var inst_34979 = (state_34983[2]);var state_34983__$1 = state_34983;var statearr_34996_35021 = state_34983__$1;(statearr_34996_35021[2] = inst_34979);
(statearr_34996_35021[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 8))
{var inst_34947 = (state_34983[9]);var inst_34951 = (state_34983[10]);var inst_34943 = (state_34983[7]);var inst_34956 = inst_34943.push(inst_34947);var tmp34993 = inst_34943;var inst_34943__$1 = tmp34993;var inst_34944 = inst_34951;var state_34983__$1 = (function (){var statearr_34997 = state_34983;(statearr_34997[11] = inst_34956);
(statearr_34997[7] = inst_34943__$1);
(statearr_34997[8] = inst_34944);
return statearr_34997;
})();var statearr_34998_35022 = state_34983__$1;(statearr_34998_35022[2] = null);
(statearr_34998_35022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 9))
{var inst_34943 = (state_34983[7]);var inst_34959 = cljs.core.vec.call(null,inst_34943);var state_34983__$1 = state_34983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34983__$1,11,out,inst_34959);
} else
{if((state_val_34984 === 10))
{var inst_34966 = (state_34983[2]);var state_34983__$1 = state_34983;var statearr_34999_35023 = state_34983__$1;(statearr_34999_35023[2] = inst_34966);
(statearr_34999_35023[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 11))
{var inst_34947 = (state_34983[9]);var inst_34951 = (state_34983[10]);var inst_34961 = (state_34983[2]);var inst_34962 = [];var inst_34963 = inst_34962.push(inst_34947);var inst_34943 = inst_34962;var inst_34944 = inst_34951;var state_34983__$1 = (function (){var statearr_35000 = state_34983;(statearr_35000[12] = inst_34963);
(statearr_35000[13] = inst_34961);
(statearr_35000[7] = inst_34943);
(statearr_35000[8] = inst_34944);
return statearr_35000;
})();var statearr_35001_35024 = state_34983__$1;(statearr_35001_35024[2] = null);
(statearr_35001_35024[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 12))
{var inst_34943 = (state_34983[7]);var inst_34971 = cljs.core.vec.call(null,inst_34943);var state_34983__$1 = state_34983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34983__$1,15,out,inst_34971);
} else
{if((state_val_34984 === 13))
{var state_34983__$1 = state_34983;var statearr_35002_35025 = state_34983__$1;(statearr_35002_35025[2] = null);
(statearr_35002_35025[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 14))
{var inst_34976 = (state_34983[2]);var inst_34977 = cljs.core.async.close_BANG_.call(null,out);var state_34983__$1 = (function (){var statearr_35003 = state_34983;(statearr_35003[14] = inst_34976);
return statearr_35003;
})();var statearr_35004_35026 = state_34983__$1;(statearr_35004_35026[2] = inst_34977);
(statearr_35004_35026[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34984 === 15))
{var inst_34973 = (state_34983[2]);var state_34983__$1 = state_34983;var statearr_35005_35027 = state_34983__$1;(statearr_35005_35027[2] = inst_34973);
(statearr_35005_35027[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35009[0] = state_machine__5507__auto__);
(statearr_35009[1] = 1);
return statearr_35009;
});
var state_machine__5507__auto____1 = (function (state_34983){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34983);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35010){if((e35010 instanceof Object))
{var ex__5510__auto__ = e35010;var statearr_35011_35028 = state_34983;(statearr_35011_35028[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34983);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35029 = state_34983;
state_34983 = G__35029;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34983){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35012 = f__5522__auto__.call(null);(statearr_35012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35013);
return statearr_35012;
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
