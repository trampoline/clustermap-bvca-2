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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31422 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31422 = (function (f,fn_handler,meta31423){
this.f = f;
this.fn_handler = fn_handler;
this.meta31423 = meta31423;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31422.cljs$lang$type = true;
cljs.core.async.t31422.cljs$lang$ctorStr = "cljs.core.async/t31422";
cljs.core.async.t31422.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31422");
});
cljs.core.async.t31422.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31422.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31422.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31424){var self__ = this;
var _31424__$1 = this;return self__.meta31423;
});
cljs.core.async.t31422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31424,meta31423__$1){var self__ = this;
var _31424__$1 = this;return (new cljs.core.async.t31422(self__.f,self__.fn_handler,meta31423__$1));
});
cljs.core.async.__GT_t31422 = (function __GT_t31422(f__$1,fn_handler__$1,meta31423){return (new cljs.core.async.t31422(f__$1,fn_handler__$1,meta31423));
});
}
return (new cljs.core.async.t31422(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31426 = buff;if(G__31426)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__31426.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31426.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31426);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31426);
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
{var val_31427 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31427);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31427);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___31428 = n;var x_31429 = 0;while(true){
if((x_31429 < n__4248__auto___31428))
{(a[x_31429] = 0);
{
var G__31430 = (x_31429 + 1);
x_31429 = G__31430;
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
var G__31431 = (i + 1);
i = G__31431;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31435 = (function (flag,alt_flag,meta31436){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31436 = meta31436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31435.cljs$lang$type = true;
cljs.core.async.t31435.cljs$lang$ctorStr = "cljs.core.async/t31435";
cljs.core.async.t31435.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31435");
});
cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31437){var self__ = this;
var _31437__$1 = this;return self__.meta31436;
});
cljs.core.async.t31435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31437,meta31436__$1){var self__ = this;
var _31437__$1 = this;return (new cljs.core.async.t31435(self__.flag,self__.alt_flag,meta31436__$1));
});
cljs.core.async.__GT_t31435 = (function __GT_t31435(flag__$1,alt_flag__$1,meta31436){return (new cljs.core.async.t31435(flag__$1,alt_flag__$1,meta31436));
});
}
return (new cljs.core.async.t31435(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31441 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31441 = (function (cb,flag,alt_handler,meta31442){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31442 = meta31442;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31441.cljs$lang$type = true;
cljs.core.async.t31441.cljs$lang$ctorStr = "cljs.core.async/t31441";
cljs.core.async.t31441.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31441");
});
cljs.core.async.t31441.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31443){var self__ = this;
var _31443__$1 = this;return self__.meta31442;
});
cljs.core.async.t31441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31443,meta31442__$1){var self__ = this;
var _31443__$1 = this;return (new cljs.core.async.t31441(self__.cb,self__.flag,self__.alt_handler,meta31442__$1));
});
cljs.core.async.__GT_t31441 = (function __GT_t31441(cb__$1,flag__$1,alt_handler__$1,meta31442){return (new cljs.core.async.t31441(cb__$1,flag__$1,alt_handler__$1,meta31442));
});
}
return (new cljs.core.async.t31441(cb,flag,alt_handler,null));
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
return (function (p1__31444_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31444_SHARP_,port], null));
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
var G__31445 = (i + 1);
i = G__31445;
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
var alts_BANG___delegate = function (ports,p__31446){var map__31448 = p__31446;var map__31448__$1 = ((cljs.core.seq_QMARK_.call(null,map__31448))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);var opts = map__31448__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31446 = null;if (arguments.length > 1) {
  p__31446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31446);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31449){
var ports = cljs.core.first(arglist__31449);
var p__31446 = cljs.core.rest(arglist__31449);
return alts_BANG___delegate(ports,p__31446);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31457 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31457 = (function (ch,f,map_LT_,meta31458){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31458 = meta31458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31457.cljs$lang$type = true;
cljs.core.async.t31457.cljs$lang$ctorStr = "cljs.core.async/t31457";
cljs.core.async.t31457.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31457");
});
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31460 = (function (fn1,_,meta31458,ch,f,map_LT_,meta31461){
this.fn1 = fn1;
this._ = _;
this.meta31458 = meta31458;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31461 = meta31461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31460.cljs$lang$type = true;
cljs.core.async.t31460.cljs$lang$ctorStr = "cljs.core.async/t31460";
cljs.core.async.t31460.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31460");
});
cljs.core.async.t31460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31460.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31450_SHARP_){return f1.call(null,(((p1__31450_SHARP_ == null))?null:self__.f.call(null,p1__31450_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31462){var self__ = this;
var _31462__$1 = this;return self__.meta31461;
});
cljs.core.async.t31460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31462,meta31461__$1){var self__ = this;
var _31462__$1 = this;return (new cljs.core.async.t31460(self__.fn1,self__._,self__.meta31458,self__.ch,self__.f,self__.map_LT_,meta31461__$1));
});
cljs.core.async.__GT_t31460 = (function __GT_t31460(fn1__$1,___$2,meta31458__$1,ch__$2,f__$2,map_LT___$2,meta31461){return (new cljs.core.async.t31460(fn1__$1,___$2,meta31458__$1,ch__$2,f__$2,map_LT___$2,meta31461));
});
}
return (new cljs.core.async.t31460(fn1,___$1,self__.meta31458,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31457.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31459){var self__ = this;
var _31459__$1 = this;return self__.meta31458;
});
cljs.core.async.t31457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31459,meta31458__$1){var self__ = this;
var _31459__$1 = this;return (new cljs.core.async.t31457(self__.ch,self__.f,self__.map_LT_,meta31458__$1));
});
cljs.core.async.__GT_t31457 = (function __GT_t31457(ch__$1,f__$1,map_LT___$1,meta31458){return (new cljs.core.async.t31457(ch__$1,f__$1,map_LT___$1,meta31458));
});
}
return (new cljs.core.async.t31457(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31466 = (function (ch,f,map_GT_,meta31467){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31467 = meta31467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31466.cljs$lang$type = true;
cljs.core.async.t31466.cljs$lang$ctorStr = "cljs.core.async/t31466";
cljs.core.async.t31466.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31466");
});
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31468){var self__ = this;
var _31468__$1 = this;return self__.meta31467;
});
cljs.core.async.t31466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31468,meta31467__$1){var self__ = this;
var _31468__$1 = this;return (new cljs.core.async.t31466(self__.ch,self__.f,self__.map_GT_,meta31467__$1));
});
cljs.core.async.__GT_t31466 = (function __GT_t31466(ch__$1,f__$1,map_GT___$1,meta31467){return (new cljs.core.async.t31466(ch__$1,f__$1,map_GT___$1,meta31467));
});
}
return (new cljs.core.async.t31466(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31472 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31472 = (function (ch,p,filter_GT_,meta31473){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31473 = meta31473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31472.cljs$lang$type = true;
cljs.core.async.t31472.cljs$lang$ctorStr = "cljs.core.async/t31472";
cljs.core.async.t31472.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31472");
});
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31474){var self__ = this;
var _31474__$1 = this;return self__.meta31473;
});
cljs.core.async.t31472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31474,meta31473__$1){var self__ = this;
var _31474__$1 = this;return (new cljs.core.async.t31472(self__.ch,self__.p,self__.filter_GT_,meta31473__$1));
});
cljs.core.async.__GT_t31472 = (function __GT_t31472(ch__$1,p__$1,filter_GT___$1,meta31473){return (new cljs.core.async.t31472(ch__$1,p__$1,filter_GT___$1,meta31473));
});
}
return (new cljs.core.async.t31472(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31557 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31536){var state_val_31537 = (state_31536[1]);if((state_val_31537 === 1))
{var state_31536__$1 = state_31536;var statearr_31538_31558 = state_31536__$1;(statearr_31538_31558[2] = null);
(statearr_31538_31558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 2))
{var state_31536__$1 = state_31536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31536__$1,4,ch);
} else
{if((state_val_31537 === 3))
{var inst_31534 = (state_31536[2]);var state_31536__$1 = state_31536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31536__$1,inst_31534);
} else
{if((state_val_31537 === 4))
{var inst_31518 = (state_31536[7]);var inst_31518__$1 = (state_31536[2]);var inst_31519 = (inst_31518__$1 == null);var state_31536__$1 = (function (){var statearr_31539 = state_31536;(statearr_31539[7] = inst_31518__$1);
return statearr_31539;
})();if(cljs.core.truth_(inst_31519))
{var statearr_31540_31559 = state_31536__$1;(statearr_31540_31559[1] = 5);
} else
{var statearr_31541_31560 = state_31536__$1;(statearr_31541_31560[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 5))
{var inst_31521 = cljs.core.async.close_BANG_.call(null,out);var state_31536__$1 = state_31536;var statearr_31542_31561 = state_31536__$1;(statearr_31542_31561[2] = inst_31521);
(statearr_31542_31561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 6))
{var inst_31518 = (state_31536[7]);var inst_31523 = p.call(null,inst_31518);var state_31536__$1 = state_31536;if(cljs.core.truth_(inst_31523))
{var statearr_31543_31562 = state_31536__$1;(statearr_31543_31562[1] = 8);
} else
{var statearr_31544_31563 = state_31536__$1;(statearr_31544_31563[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 7))
{var inst_31532 = (state_31536[2]);var state_31536__$1 = state_31536;var statearr_31545_31564 = state_31536__$1;(statearr_31545_31564[2] = inst_31532);
(statearr_31545_31564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 8))
{var inst_31518 = (state_31536[7]);var state_31536__$1 = state_31536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31536__$1,11,out,inst_31518);
} else
{if((state_val_31537 === 9))
{var state_31536__$1 = state_31536;var statearr_31546_31565 = state_31536__$1;(statearr_31546_31565[2] = null);
(statearr_31546_31565[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 10))
{var inst_31529 = (state_31536[2]);var state_31536__$1 = (function (){var statearr_31547 = state_31536;(statearr_31547[8] = inst_31529);
return statearr_31547;
})();var statearr_31548_31566 = state_31536__$1;(statearr_31548_31566[2] = null);
(statearr_31548_31566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31537 === 11))
{var inst_31526 = (state_31536[2]);var state_31536__$1 = state_31536;var statearr_31549_31567 = state_31536__$1;(statearr_31549_31567[2] = inst_31526);
(statearr_31549_31567[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_31553 = [null,null,null,null,null,null,null,null,null];(statearr_31553[0] = state_machine__5507__auto__);
(statearr_31553[1] = 1);
return statearr_31553;
});
var state_machine__5507__auto____1 = (function (state_31536){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31554){if((e31554 instanceof Object))
{var ex__5510__auto__ = e31554;var statearr_31555_31568 = state_31536;(statearr_31555_31568[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31569 = state_31536;
state_31536 = G__31569;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31536){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31556 = f__5522__auto__.call(null);(statearr_31556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31557);
return statearr_31556;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31721){var state_val_31722 = (state_31721[1]);if((state_val_31722 === 1))
{var state_31721__$1 = state_31721;var statearr_31723_31760 = state_31721__$1;(statearr_31723_31760[2] = null);
(statearr_31723_31760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 2))
{var state_31721__$1 = state_31721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31721__$1,4,in$);
} else
{if((state_val_31722 === 3))
{var inst_31719 = (state_31721[2]);var state_31721__$1 = state_31721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31721__$1,inst_31719);
} else
{if((state_val_31722 === 4))
{var inst_31667 = (state_31721[7]);var inst_31667__$1 = (state_31721[2]);var inst_31668 = (inst_31667__$1 == null);var state_31721__$1 = (function (){var statearr_31724 = state_31721;(statearr_31724[7] = inst_31667__$1);
return statearr_31724;
})();if(cljs.core.truth_(inst_31668))
{var statearr_31725_31761 = state_31721__$1;(statearr_31725_31761[1] = 5);
} else
{var statearr_31726_31762 = state_31721__$1;(statearr_31726_31762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 5))
{var inst_31670 = cljs.core.async.close_BANG_.call(null,out);var state_31721__$1 = state_31721;var statearr_31727_31763 = state_31721__$1;(statearr_31727_31763[2] = inst_31670);
(statearr_31727_31763[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 6))
{var inst_31667 = (state_31721[7]);var inst_31672 = f.call(null,inst_31667);var inst_31677 = cljs.core.seq.call(null,inst_31672);var inst_31678 = inst_31677;var inst_31679 = null;var inst_31680 = 0;var inst_31681 = 0;var state_31721__$1 = (function (){var statearr_31728 = state_31721;(statearr_31728[8] = inst_31679);
(statearr_31728[9] = inst_31678);
(statearr_31728[10] = inst_31681);
(statearr_31728[11] = inst_31680);
return statearr_31728;
})();var statearr_31729_31764 = state_31721__$1;(statearr_31729_31764[2] = null);
(statearr_31729_31764[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 7))
{var inst_31717 = (state_31721[2]);var state_31721__$1 = state_31721;var statearr_31730_31765 = state_31721__$1;(statearr_31730_31765[2] = inst_31717);
(statearr_31730_31765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 8))
{var inst_31681 = (state_31721[10]);var inst_31680 = (state_31721[11]);var inst_31683 = (inst_31681 < inst_31680);var inst_31684 = inst_31683;var state_31721__$1 = state_31721;if(cljs.core.truth_(inst_31684))
{var statearr_31731_31766 = state_31721__$1;(statearr_31731_31766[1] = 10);
} else
{var statearr_31732_31767 = state_31721__$1;(statearr_31732_31767[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 9))
{var inst_31714 = (state_31721[2]);var state_31721__$1 = (function (){var statearr_31733 = state_31721;(statearr_31733[12] = inst_31714);
return statearr_31733;
})();var statearr_31734_31768 = state_31721__$1;(statearr_31734_31768[2] = null);
(statearr_31734_31768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 10))
{var inst_31679 = (state_31721[8]);var inst_31681 = (state_31721[10]);var inst_31686 = cljs.core._nth.call(null,inst_31679,inst_31681);var state_31721__$1 = state_31721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31721__$1,13,out,inst_31686);
} else
{if((state_val_31722 === 11))
{var inst_31678 = (state_31721[9]);var inst_31692 = (state_31721[13]);var inst_31692__$1 = cljs.core.seq.call(null,inst_31678);var state_31721__$1 = (function (){var statearr_31738 = state_31721;(statearr_31738[13] = inst_31692__$1);
return statearr_31738;
})();if(inst_31692__$1)
{var statearr_31739_31769 = state_31721__$1;(statearr_31739_31769[1] = 14);
} else
{var statearr_31740_31770 = state_31721__$1;(statearr_31740_31770[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 12))
{var inst_31712 = (state_31721[2]);var state_31721__$1 = state_31721;var statearr_31741_31771 = state_31721__$1;(statearr_31741_31771[2] = inst_31712);
(statearr_31741_31771[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 13))
{var inst_31679 = (state_31721[8]);var inst_31678 = (state_31721[9]);var inst_31681 = (state_31721[10]);var inst_31680 = (state_31721[11]);var inst_31688 = (state_31721[2]);var inst_31689 = (inst_31681 + 1);var tmp31735 = inst_31679;var tmp31736 = inst_31678;var tmp31737 = inst_31680;var inst_31678__$1 = tmp31736;var inst_31679__$1 = tmp31735;var inst_31680__$1 = tmp31737;var inst_31681__$1 = inst_31689;var state_31721__$1 = (function (){var statearr_31742 = state_31721;(statearr_31742[8] = inst_31679__$1);
(statearr_31742[9] = inst_31678__$1);
(statearr_31742[14] = inst_31688);
(statearr_31742[10] = inst_31681__$1);
(statearr_31742[11] = inst_31680__$1);
return statearr_31742;
})();var statearr_31743_31772 = state_31721__$1;(statearr_31743_31772[2] = null);
(statearr_31743_31772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 14))
{var inst_31692 = (state_31721[13]);var inst_31694 = cljs.core.chunked_seq_QMARK_.call(null,inst_31692);var state_31721__$1 = state_31721;if(inst_31694)
{var statearr_31744_31773 = state_31721__$1;(statearr_31744_31773[1] = 17);
} else
{var statearr_31745_31774 = state_31721__$1;(statearr_31745_31774[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 15))
{var state_31721__$1 = state_31721;var statearr_31746_31775 = state_31721__$1;(statearr_31746_31775[2] = null);
(statearr_31746_31775[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 16))
{var inst_31710 = (state_31721[2]);var state_31721__$1 = state_31721;var statearr_31747_31776 = state_31721__$1;(statearr_31747_31776[2] = inst_31710);
(statearr_31747_31776[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 17))
{var inst_31692 = (state_31721[13]);var inst_31696 = cljs.core.chunk_first.call(null,inst_31692);var inst_31697 = cljs.core.chunk_rest.call(null,inst_31692);var inst_31698 = cljs.core.count.call(null,inst_31696);var inst_31678 = inst_31697;var inst_31679 = inst_31696;var inst_31680 = inst_31698;var inst_31681 = 0;var state_31721__$1 = (function (){var statearr_31748 = state_31721;(statearr_31748[8] = inst_31679);
(statearr_31748[9] = inst_31678);
(statearr_31748[10] = inst_31681);
(statearr_31748[11] = inst_31680);
return statearr_31748;
})();var statearr_31749_31777 = state_31721__$1;(statearr_31749_31777[2] = null);
(statearr_31749_31777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 18))
{var inst_31692 = (state_31721[13]);var inst_31701 = cljs.core.first.call(null,inst_31692);var state_31721__$1 = state_31721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31721__$1,20,out,inst_31701);
} else
{if((state_val_31722 === 19))
{var inst_31707 = (state_31721[2]);var state_31721__$1 = state_31721;var statearr_31750_31778 = state_31721__$1;(statearr_31750_31778[2] = inst_31707);
(statearr_31750_31778[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31722 === 20))
{var inst_31692 = (state_31721[13]);var inst_31703 = (state_31721[2]);var inst_31704 = cljs.core.next.call(null,inst_31692);var inst_31678 = inst_31704;var inst_31679 = null;var inst_31680 = 0;var inst_31681 = 0;var state_31721__$1 = (function (){var statearr_31751 = state_31721;(statearr_31751[15] = inst_31703);
(statearr_31751[8] = inst_31679);
(statearr_31751[9] = inst_31678);
(statearr_31751[10] = inst_31681);
(statearr_31751[11] = inst_31680);
return statearr_31751;
})();var statearr_31752_31779 = state_31721__$1;(statearr_31752_31779[2] = null);
(statearr_31752_31779[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_31756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31756[0] = state_machine__5507__auto__);
(statearr_31756[1] = 1);
return statearr_31756;
});
var state_machine__5507__auto____1 = (function (state_31721){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31757){if((e31757 instanceof Object))
{var ex__5510__auto__ = e31757;var statearr_31758_31780 = state_31721;(statearr_31758_31780[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31781 = state_31721;
state_31721 = G__31781;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31721){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31759 = f__5522__auto__.call(null);(statearr_31759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31759;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___31862 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31841){var state_val_31842 = (state_31841[1]);if((state_val_31842 === 1))
{var state_31841__$1 = state_31841;var statearr_31843_31863 = state_31841__$1;(statearr_31843_31863[2] = null);
(statearr_31843_31863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 2))
{var state_31841__$1 = state_31841;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31841__$1,4,from);
} else
{if((state_val_31842 === 3))
{var inst_31839 = (state_31841[2]);var state_31841__$1 = state_31841;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31841__$1,inst_31839);
} else
{if((state_val_31842 === 4))
{var inst_31824 = (state_31841[7]);var inst_31824__$1 = (state_31841[2]);var inst_31825 = (inst_31824__$1 == null);var state_31841__$1 = (function (){var statearr_31844 = state_31841;(statearr_31844[7] = inst_31824__$1);
return statearr_31844;
})();if(cljs.core.truth_(inst_31825))
{var statearr_31845_31864 = state_31841__$1;(statearr_31845_31864[1] = 5);
} else
{var statearr_31846_31865 = state_31841__$1;(statearr_31846_31865[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 5))
{var state_31841__$1 = state_31841;if(cljs.core.truth_(close_QMARK_))
{var statearr_31847_31866 = state_31841__$1;(statearr_31847_31866[1] = 8);
} else
{var statearr_31848_31867 = state_31841__$1;(statearr_31848_31867[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 6))
{var inst_31824 = (state_31841[7]);var state_31841__$1 = state_31841;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31841__$1,11,to,inst_31824);
} else
{if((state_val_31842 === 7))
{var inst_31837 = (state_31841[2]);var state_31841__$1 = state_31841;var statearr_31849_31868 = state_31841__$1;(statearr_31849_31868[2] = inst_31837);
(statearr_31849_31868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 8))
{var inst_31828 = cljs.core.async.close_BANG_.call(null,to);var state_31841__$1 = state_31841;var statearr_31850_31869 = state_31841__$1;(statearr_31850_31869[2] = inst_31828);
(statearr_31850_31869[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 9))
{var state_31841__$1 = state_31841;var statearr_31851_31870 = state_31841__$1;(statearr_31851_31870[2] = null);
(statearr_31851_31870[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 10))
{var inst_31831 = (state_31841[2]);var state_31841__$1 = state_31841;var statearr_31852_31871 = state_31841__$1;(statearr_31852_31871[2] = inst_31831);
(statearr_31852_31871[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31842 === 11))
{var inst_31834 = (state_31841[2]);var state_31841__$1 = (function (){var statearr_31853 = state_31841;(statearr_31853[8] = inst_31834);
return statearr_31853;
})();var statearr_31854_31872 = state_31841__$1;(statearr_31854_31872[2] = null);
(statearr_31854_31872[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_31858 = [null,null,null,null,null,null,null,null,null];(statearr_31858[0] = state_machine__5507__auto__);
(statearr_31858[1] = 1);
return statearr_31858;
});
var state_machine__5507__auto____1 = (function (state_31841){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31841);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31859){if((e31859 instanceof Object))
{var ex__5510__auto__ = e31859;var statearr_31860_31873 = state_31841;(statearr_31860_31873[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31841);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31874 = state_31841;
state_31841 = G__31874;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31841){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31861 = f__5522__auto__.call(null);(statearr_31861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31862);
return statearr_31861;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___31961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31939){var state_val_31940 = (state_31939[1]);if((state_val_31940 === 1))
{var state_31939__$1 = state_31939;var statearr_31941_31962 = state_31939__$1;(statearr_31941_31962[2] = null);
(statearr_31941_31962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 2))
{var state_31939__$1 = state_31939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31939__$1,4,ch);
} else
{if((state_val_31940 === 3))
{var inst_31937 = (state_31939[2]);var state_31939__$1 = state_31939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31939__$1,inst_31937);
} else
{if((state_val_31940 === 4))
{var inst_31920 = (state_31939[7]);var inst_31920__$1 = (state_31939[2]);var inst_31921 = (inst_31920__$1 == null);var state_31939__$1 = (function (){var statearr_31942 = state_31939;(statearr_31942[7] = inst_31920__$1);
return statearr_31942;
})();if(cljs.core.truth_(inst_31921))
{var statearr_31943_31963 = state_31939__$1;(statearr_31943_31963[1] = 5);
} else
{var statearr_31944_31964 = state_31939__$1;(statearr_31944_31964[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 5))
{var inst_31923 = cljs.core.async.close_BANG_.call(null,tc);var inst_31924 = cljs.core.async.close_BANG_.call(null,fc);var state_31939__$1 = (function (){var statearr_31945 = state_31939;(statearr_31945[8] = inst_31923);
return statearr_31945;
})();var statearr_31946_31965 = state_31939__$1;(statearr_31946_31965[2] = inst_31924);
(statearr_31946_31965[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 6))
{var inst_31920 = (state_31939[7]);var inst_31926 = p.call(null,inst_31920);var state_31939__$1 = state_31939;if(cljs.core.truth_(inst_31926))
{var statearr_31947_31966 = state_31939__$1;(statearr_31947_31966[1] = 9);
} else
{var statearr_31948_31967 = state_31939__$1;(statearr_31948_31967[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 7))
{var inst_31935 = (state_31939[2]);var state_31939__$1 = state_31939;var statearr_31949_31968 = state_31939__$1;(statearr_31949_31968[2] = inst_31935);
(statearr_31949_31968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 8))
{var inst_31932 = (state_31939[2]);var state_31939__$1 = (function (){var statearr_31950 = state_31939;(statearr_31950[9] = inst_31932);
return statearr_31950;
})();var statearr_31951_31969 = state_31939__$1;(statearr_31951_31969[2] = null);
(statearr_31951_31969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 9))
{var state_31939__$1 = state_31939;var statearr_31952_31970 = state_31939__$1;(statearr_31952_31970[2] = tc);
(statearr_31952_31970[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 10))
{var state_31939__$1 = state_31939;var statearr_31953_31971 = state_31939__$1;(statearr_31953_31971[2] = fc);
(statearr_31953_31971[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31940 === 11))
{var inst_31920 = (state_31939[7]);var inst_31930 = (state_31939[2]);var state_31939__$1 = state_31939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31939__$1,8,inst_31930,inst_31920);
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
var state_machine__5507__auto____0 = (function (){var statearr_31957 = [null,null,null,null,null,null,null,null,null,null];(statearr_31957[0] = state_machine__5507__auto__);
(statearr_31957[1] = 1);
return statearr_31957;
});
var state_machine__5507__auto____1 = (function (state_31939){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31958){if((e31958 instanceof Object))
{var ex__5510__auto__ = e31958;var statearr_31959_31972 = state_31939;(statearr_31959_31972[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31973 = state_31939;
state_31939 = G__31973;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31960 = f__5522__auto__.call(null);(statearr_31960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31961);
return statearr_31960;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32020){var state_val_32021 = (state_32020[1]);if((state_val_32021 === 7))
{var inst_32016 = (state_32020[2]);var state_32020__$1 = state_32020;var statearr_32022_32038 = state_32020__$1;(statearr_32022_32038[2] = inst_32016);
(statearr_32022_32038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32021 === 6))
{var inst_32009 = (state_32020[7]);var inst_32006 = (state_32020[8]);var inst_32013 = f.call(null,inst_32006,inst_32009);var inst_32006__$1 = inst_32013;var state_32020__$1 = (function (){var statearr_32023 = state_32020;(statearr_32023[8] = inst_32006__$1);
return statearr_32023;
})();var statearr_32024_32039 = state_32020__$1;(statearr_32024_32039[2] = null);
(statearr_32024_32039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32021 === 5))
{var inst_32006 = (state_32020[8]);var state_32020__$1 = state_32020;var statearr_32025_32040 = state_32020__$1;(statearr_32025_32040[2] = inst_32006);
(statearr_32025_32040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32021 === 4))
{var inst_32009 = (state_32020[7]);var inst_32009__$1 = (state_32020[2]);var inst_32010 = (inst_32009__$1 == null);var state_32020__$1 = (function (){var statearr_32026 = state_32020;(statearr_32026[7] = inst_32009__$1);
return statearr_32026;
})();if(cljs.core.truth_(inst_32010))
{var statearr_32027_32041 = state_32020__$1;(statearr_32027_32041[1] = 5);
} else
{var statearr_32028_32042 = state_32020__$1;(statearr_32028_32042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32021 === 3))
{var inst_32018 = (state_32020[2]);var state_32020__$1 = state_32020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32020__$1,inst_32018);
} else
{if((state_val_32021 === 2))
{var state_32020__$1 = state_32020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32020__$1,4,ch);
} else
{if((state_val_32021 === 1))
{var inst_32006 = init;var state_32020__$1 = (function (){var statearr_32029 = state_32020;(statearr_32029[8] = inst_32006);
return statearr_32029;
})();var statearr_32030_32043 = state_32020__$1;(statearr_32030_32043[2] = null);
(statearr_32030_32043[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32034 = [null,null,null,null,null,null,null,null,null];(statearr_32034[0] = state_machine__5507__auto__);
(statearr_32034[1] = 1);
return statearr_32034;
});
var state_machine__5507__auto____1 = (function (state_32020){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32035){if((e32035 instanceof Object))
{var ex__5510__auto__ = e32035;var statearr_32036_32044 = state_32020;(statearr_32036_32044[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32035;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32045 = state_32020;
state_32020 = G__32045;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32020){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32037 = f__5522__auto__.call(null);(statearr_32037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32037;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32107){var state_val_32108 = (state_32107[1]);if((state_val_32108 === 1))
{var inst_32087 = cljs.core.seq.call(null,coll);var inst_32088 = inst_32087;var state_32107__$1 = (function (){var statearr_32109 = state_32107;(statearr_32109[7] = inst_32088);
return statearr_32109;
})();var statearr_32110_32128 = state_32107__$1;(statearr_32110_32128[2] = null);
(statearr_32110_32128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 2))
{var inst_32088 = (state_32107[7]);var state_32107__$1 = state_32107;if(cljs.core.truth_(inst_32088))
{var statearr_32111_32129 = state_32107__$1;(statearr_32111_32129[1] = 4);
} else
{var statearr_32112_32130 = state_32107__$1;(statearr_32112_32130[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 3))
{var inst_32105 = (state_32107[2]);var state_32107__$1 = state_32107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32107__$1,inst_32105);
} else
{if((state_val_32108 === 4))
{var inst_32088 = (state_32107[7]);var inst_32091 = cljs.core.first.call(null,inst_32088);var state_32107__$1 = state_32107;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32107__$1,7,ch,inst_32091);
} else
{if((state_val_32108 === 5))
{var state_32107__$1 = state_32107;if(cljs.core.truth_(close_QMARK_))
{var statearr_32113_32131 = state_32107__$1;(statearr_32113_32131[1] = 8);
} else
{var statearr_32114_32132 = state_32107__$1;(statearr_32114_32132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 6))
{var inst_32103 = (state_32107[2]);var state_32107__$1 = state_32107;var statearr_32115_32133 = state_32107__$1;(statearr_32115_32133[2] = inst_32103);
(statearr_32115_32133[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 7))
{var inst_32088 = (state_32107[7]);var inst_32093 = (state_32107[2]);var inst_32094 = cljs.core.next.call(null,inst_32088);var inst_32088__$1 = inst_32094;var state_32107__$1 = (function (){var statearr_32116 = state_32107;(statearr_32116[7] = inst_32088__$1);
(statearr_32116[8] = inst_32093);
return statearr_32116;
})();var statearr_32117_32134 = state_32107__$1;(statearr_32117_32134[2] = null);
(statearr_32117_32134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 8))
{var inst_32098 = cljs.core.async.close_BANG_.call(null,ch);var state_32107__$1 = state_32107;var statearr_32118_32135 = state_32107__$1;(statearr_32118_32135[2] = inst_32098);
(statearr_32118_32135[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 9))
{var state_32107__$1 = state_32107;var statearr_32119_32136 = state_32107__$1;(statearr_32119_32136[2] = null);
(statearr_32119_32136[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32108 === 10))
{var inst_32101 = (state_32107[2]);var state_32107__$1 = state_32107;var statearr_32120_32137 = state_32107__$1;(statearr_32120_32137[2] = inst_32101);
(statearr_32120_32137[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_32124 = [null,null,null,null,null,null,null,null,null];(statearr_32124[0] = state_machine__5507__auto__);
(statearr_32124[1] = 1);
return statearr_32124;
});
var state_machine__5507__auto____1 = (function (state_32107){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32107);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32125){if((e32125 instanceof Object))
{var ex__5510__auto__ = e32125;var statearr_32126_32138 = state_32107;(statearr_32126_32138[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32139 = state_32107;
state_32107 = G__32139;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32107){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32127 = f__5522__auto__.call(null);(statearr_32127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32127;
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
cljs.core.async.Mux = (function (){var obj32141 = {};return obj32141;
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
cljs.core.async.Mult = (function (){var obj32143 = {};return obj32143;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32367 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32367 = (function (cs,ch,mult,meta32368){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32368 = meta32368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32367.cljs$lang$type = true;
cljs.core.async.t32367.cljs$lang$ctorStr = "cljs.core.async/t32367";
cljs.core.async.t32367.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32367");
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32367.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32367.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32369){var self__ = this;
var _32369__$1 = this;return self__.meta32368;
});})(cs))
;
cljs.core.async.t32367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32369,meta32368__$1){var self__ = this;
var _32369__$1 = this;return (new cljs.core.async.t32367(self__.cs,self__.ch,self__.mult,meta32368__$1));
});})(cs))
;
cljs.core.async.__GT_t32367 = ((function (cs){
return (function __GT_t32367(cs__$1,ch__$1,mult__$1,meta32368){return (new cljs.core.async.t32367(cs__$1,ch__$1,mult__$1,meta32368));
});})(cs))
;
}
return (new cljs.core.async.t32367(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___32590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32504){var state_val_32505 = (state_32504[1]);if((state_val_32505 === 32))
{var inst_32448 = (state_32504[7]);var inst_32372 = (state_32504[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32504,31,Object,null,30);var inst_32455 = cljs.core.async.put_BANG_.call(null,inst_32448,inst_32372,done);var state_32504__$1 = state_32504;var statearr_32506_32591 = state_32504__$1;(statearr_32506_32591[2] = inst_32455);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 1))
{var state_32504__$1 = state_32504;var statearr_32507_32592 = state_32504__$1;(statearr_32507_32592[2] = null);
(statearr_32507_32592[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 33))
{var inst_32461 = (state_32504[9]);var inst_32463 = cljs.core.chunked_seq_QMARK_.call(null,inst_32461);var state_32504__$1 = state_32504;if(inst_32463)
{var statearr_32508_32593 = state_32504__$1;(statearr_32508_32593[1] = 36);
} else
{var statearr_32509_32594 = state_32504__$1;(statearr_32509_32594[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 2))
{var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,4,ch);
} else
{if((state_val_32505 === 34))
{var state_32504__$1 = state_32504;var statearr_32510_32595 = state_32504__$1;(statearr_32510_32595[2] = null);
(statearr_32510_32595[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 3))
{var inst_32502 = (state_32504[2]);var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32504__$1,inst_32502);
} else
{if((state_val_32505 === 35))
{var inst_32486 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32511_32596 = state_32504__$1;(statearr_32511_32596[2] = inst_32486);
(statearr_32511_32596[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 4))
{var inst_32372 = (state_32504[8]);var inst_32372__$1 = (state_32504[2]);var inst_32373 = (inst_32372__$1 == null);var state_32504__$1 = (function (){var statearr_32512 = state_32504;(statearr_32512[8] = inst_32372__$1);
return statearr_32512;
})();if(cljs.core.truth_(inst_32373))
{var statearr_32513_32597 = state_32504__$1;(statearr_32513_32597[1] = 5);
} else
{var statearr_32514_32598 = state_32504__$1;(statearr_32514_32598[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 36))
{var inst_32461 = (state_32504[9]);var inst_32465 = cljs.core.chunk_first.call(null,inst_32461);var inst_32466 = cljs.core.chunk_rest.call(null,inst_32461);var inst_32467 = cljs.core.count.call(null,inst_32465);var inst_32440 = inst_32466;var inst_32441 = inst_32465;var inst_32442 = inst_32467;var inst_32443 = 0;var state_32504__$1 = (function (){var statearr_32515 = state_32504;(statearr_32515[10] = inst_32443);
(statearr_32515[11] = inst_32442);
(statearr_32515[12] = inst_32441);
(statearr_32515[13] = inst_32440);
return statearr_32515;
})();var statearr_32516_32599 = state_32504__$1;(statearr_32516_32599[2] = null);
(statearr_32516_32599[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 5))
{var inst_32379 = cljs.core.deref.call(null,cs);var inst_32380 = cljs.core.seq.call(null,inst_32379);var inst_32381 = inst_32380;var inst_32382 = null;var inst_32383 = 0;var inst_32384 = 0;var state_32504__$1 = (function (){var statearr_32517 = state_32504;(statearr_32517[14] = inst_32383);
(statearr_32517[15] = inst_32384);
(statearr_32517[16] = inst_32381);
(statearr_32517[17] = inst_32382);
return statearr_32517;
})();var statearr_32518_32600 = state_32504__$1;(statearr_32518_32600[2] = null);
(statearr_32518_32600[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 37))
{var inst_32461 = (state_32504[9]);var inst_32470 = cljs.core.first.call(null,inst_32461);var state_32504__$1 = (function (){var statearr_32519 = state_32504;(statearr_32519[18] = inst_32470);
return statearr_32519;
})();var statearr_32520_32601 = state_32504__$1;(statearr_32520_32601[2] = null);
(statearr_32520_32601[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 6))
{var inst_32432 = (state_32504[19]);var inst_32431 = cljs.core.deref.call(null,cs);var inst_32432__$1 = cljs.core.keys.call(null,inst_32431);var inst_32433 = cljs.core.count.call(null,inst_32432__$1);var inst_32434 = cljs.core.reset_BANG_.call(null,dctr,inst_32433);var inst_32439 = cljs.core.seq.call(null,inst_32432__$1);var inst_32440 = inst_32439;var inst_32441 = null;var inst_32442 = 0;var inst_32443 = 0;var state_32504__$1 = (function (){var statearr_32521 = state_32504;(statearr_32521[19] = inst_32432__$1);
(statearr_32521[10] = inst_32443);
(statearr_32521[20] = inst_32434);
(statearr_32521[11] = inst_32442);
(statearr_32521[12] = inst_32441);
(statearr_32521[13] = inst_32440);
return statearr_32521;
})();var statearr_32522_32602 = state_32504__$1;(statearr_32522_32602[2] = null);
(statearr_32522_32602[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 38))
{var inst_32483 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32523_32603 = state_32504__$1;(statearr_32523_32603[2] = inst_32483);
(statearr_32523_32603[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 7))
{var inst_32500 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32524_32604 = state_32504__$1;(statearr_32524_32604[2] = inst_32500);
(statearr_32524_32604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 39))
{var inst_32461 = (state_32504[9]);var inst_32479 = (state_32504[2]);var inst_32480 = cljs.core.next.call(null,inst_32461);var inst_32440 = inst_32480;var inst_32441 = null;var inst_32442 = 0;var inst_32443 = 0;var state_32504__$1 = (function (){var statearr_32525 = state_32504;(statearr_32525[10] = inst_32443);
(statearr_32525[11] = inst_32442);
(statearr_32525[12] = inst_32441);
(statearr_32525[21] = inst_32479);
(statearr_32525[13] = inst_32440);
return statearr_32525;
})();var statearr_32526_32605 = state_32504__$1;(statearr_32526_32605[2] = null);
(statearr_32526_32605[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 8))
{var inst_32383 = (state_32504[14]);var inst_32384 = (state_32504[15]);var inst_32386 = (inst_32384 < inst_32383);var inst_32387 = inst_32386;var state_32504__$1 = state_32504;if(cljs.core.truth_(inst_32387))
{var statearr_32527_32606 = state_32504__$1;(statearr_32527_32606[1] = 10);
} else
{var statearr_32528_32607 = state_32504__$1;(statearr_32528_32607[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 40))
{var inst_32470 = (state_32504[18]);var inst_32471 = (state_32504[2]);var inst_32472 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32473 = cljs.core.async.untap_STAR_.call(null,m,inst_32470);var state_32504__$1 = (function (){var statearr_32529 = state_32504;(statearr_32529[22] = inst_32471);
(statearr_32529[23] = inst_32472);
return statearr_32529;
})();var statearr_32530_32608 = state_32504__$1;(statearr_32530_32608[2] = inst_32473);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 9))
{var inst_32429 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32531_32609 = state_32504__$1;(statearr_32531_32609[2] = inst_32429);
(statearr_32531_32609[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 41))
{var inst_32470 = (state_32504[18]);var inst_32372 = (state_32504[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32504,40,Object,null,39);var inst_32477 = cljs.core.async.put_BANG_.call(null,inst_32470,inst_32372,done);var state_32504__$1 = state_32504;var statearr_32532_32610 = state_32504__$1;(statearr_32532_32610[2] = inst_32477);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 10))
{var inst_32384 = (state_32504[15]);var inst_32382 = (state_32504[17]);var inst_32390 = cljs.core._nth.call(null,inst_32382,inst_32384);var inst_32391 = cljs.core.nth.call(null,inst_32390,0,null);var inst_32392 = cljs.core.nth.call(null,inst_32390,1,null);var state_32504__$1 = (function (){var statearr_32533 = state_32504;(statearr_32533[24] = inst_32391);
return statearr_32533;
})();if(cljs.core.truth_(inst_32392))
{var statearr_32534_32611 = state_32504__$1;(statearr_32534_32611[1] = 13);
} else
{var statearr_32535_32612 = state_32504__$1;(statearr_32535_32612[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 42))
{var state_32504__$1 = state_32504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,45,dchan);
} else
{if((state_val_32505 === 11))
{var inst_32381 = (state_32504[16]);var inst_32401 = (state_32504[25]);var inst_32401__$1 = cljs.core.seq.call(null,inst_32381);var state_32504__$1 = (function (){var statearr_32536 = state_32504;(statearr_32536[25] = inst_32401__$1);
return statearr_32536;
})();if(inst_32401__$1)
{var statearr_32537_32613 = state_32504__$1;(statearr_32537_32613[1] = 16);
} else
{var statearr_32538_32614 = state_32504__$1;(statearr_32538_32614[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 43))
{var state_32504__$1 = state_32504;var statearr_32539_32615 = state_32504__$1;(statearr_32539_32615[2] = null);
(statearr_32539_32615[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 12))
{var inst_32427 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32540_32616 = state_32504__$1;(statearr_32540_32616[2] = inst_32427);
(statearr_32540_32616[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 44))
{var inst_32497 = (state_32504[2]);var state_32504__$1 = (function (){var statearr_32541 = state_32504;(statearr_32541[26] = inst_32497);
return statearr_32541;
})();var statearr_32542_32617 = state_32504__$1;(statearr_32542_32617[2] = null);
(statearr_32542_32617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 13))
{var inst_32391 = (state_32504[24]);var inst_32394 = cljs.core.async.close_BANG_.call(null,inst_32391);var state_32504__$1 = state_32504;var statearr_32543_32618 = state_32504__$1;(statearr_32543_32618[2] = inst_32394);
(statearr_32543_32618[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 45))
{var inst_32494 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32547_32619 = state_32504__$1;(statearr_32547_32619[2] = inst_32494);
(statearr_32547_32619[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 14))
{var state_32504__$1 = state_32504;var statearr_32548_32620 = state_32504__$1;(statearr_32548_32620[2] = null);
(statearr_32548_32620[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 15))
{var inst_32383 = (state_32504[14]);var inst_32384 = (state_32504[15]);var inst_32381 = (state_32504[16]);var inst_32382 = (state_32504[17]);var inst_32397 = (state_32504[2]);var inst_32398 = (inst_32384 + 1);var tmp32544 = inst_32383;var tmp32545 = inst_32381;var tmp32546 = inst_32382;var inst_32381__$1 = tmp32545;var inst_32382__$1 = tmp32546;var inst_32383__$1 = tmp32544;var inst_32384__$1 = inst_32398;var state_32504__$1 = (function (){var statearr_32549 = state_32504;(statearr_32549[14] = inst_32383__$1);
(statearr_32549[15] = inst_32384__$1);
(statearr_32549[16] = inst_32381__$1);
(statearr_32549[17] = inst_32382__$1);
(statearr_32549[27] = inst_32397);
return statearr_32549;
})();var statearr_32550_32621 = state_32504__$1;(statearr_32550_32621[2] = null);
(statearr_32550_32621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 16))
{var inst_32401 = (state_32504[25]);var inst_32403 = cljs.core.chunked_seq_QMARK_.call(null,inst_32401);var state_32504__$1 = state_32504;if(inst_32403)
{var statearr_32551_32622 = state_32504__$1;(statearr_32551_32622[1] = 19);
} else
{var statearr_32552_32623 = state_32504__$1;(statearr_32552_32623[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 17))
{var state_32504__$1 = state_32504;var statearr_32553_32624 = state_32504__$1;(statearr_32553_32624[2] = null);
(statearr_32553_32624[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 18))
{var inst_32425 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32554_32625 = state_32504__$1;(statearr_32554_32625[2] = inst_32425);
(statearr_32554_32625[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 19))
{var inst_32401 = (state_32504[25]);var inst_32405 = cljs.core.chunk_first.call(null,inst_32401);var inst_32406 = cljs.core.chunk_rest.call(null,inst_32401);var inst_32407 = cljs.core.count.call(null,inst_32405);var inst_32381 = inst_32406;var inst_32382 = inst_32405;var inst_32383 = inst_32407;var inst_32384 = 0;var state_32504__$1 = (function (){var statearr_32555 = state_32504;(statearr_32555[14] = inst_32383);
(statearr_32555[15] = inst_32384);
(statearr_32555[16] = inst_32381);
(statearr_32555[17] = inst_32382);
return statearr_32555;
})();var statearr_32556_32626 = state_32504__$1;(statearr_32556_32626[2] = null);
(statearr_32556_32626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 20))
{var inst_32401 = (state_32504[25]);var inst_32411 = cljs.core.first.call(null,inst_32401);var inst_32412 = cljs.core.nth.call(null,inst_32411,0,null);var inst_32413 = cljs.core.nth.call(null,inst_32411,1,null);var state_32504__$1 = (function (){var statearr_32557 = state_32504;(statearr_32557[28] = inst_32412);
return statearr_32557;
})();if(cljs.core.truth_(inst_32413))
{var statearr_32558_32627 = state_32504__$1;(statearr_32558_32627[1] = 22);
} else
{var statearr_32559_32628 = state_32504__$1;(statearr_32559_32628[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 21))
{var inst_32422 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32560_32629 = state_32504__$1;(statearr_32560_32629[2] = inst_32422);
(statearr_32560_32629[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 22))
{var inst_32412 = (state_32504[28]);var inst_32415 = cljs.core.async.close_BANG_.call(null,inst_32412);var state_32504__$1 = state_32504;var statearr_32561_32630 = state_32504__$1;(statearr_32561_32630[2] = inst_32415);
(statearr_32561_32630[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 23))
{var state_32504__$1 = state_32504;var statearr_32562_32631 = state_32504__$1;(statearr_32562_32631[2] = null);
(statearr_32562_32631[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 24))
{var inst_32401 = (state_32504[25]);var inst_32418 = (state_32504[2]);var inst_32419 = cljs.core.next.call(null,inst_32401);var inst_32381 = inst_32419;var inst_32382 = null;var inst_32383 = 0;var inst_32384 = 0;var state_32504__$1 = (function (){var statearr_32563 = state_32504;(statearr_32563[14] = inst_32383);
(statearr_32563[15] = inst_32384);
(statearr_32563[16] = inst_32381);
(statearr_32563[17] = inst_32382);
(statearr_32563[29] = inst_32418);
return statearr_32563;
})();var statearr_32564_32632 = state_32504__$1;(statearr_32564_32632[2] = null);
(statearr_32564_32632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 25))
{var inst_32443 = (state_32504[10]);var inst_32442 = (state_32504[11]);var inst_32445 = (inst_32443 < inst_32442);var inst_32446 = inst_32445;var state_32504__$1 = state_32504;if(cljs.core.truth_(inst_32446))
{var statearr_32565_32633 = state_32504__$1;(statearr_32565_32633[1] = 27);
} else
{var statearr_32566_32634 = state_32504__$1;(statearr_32566_32634[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 26))
{var inst_32432 = (state_32504[19]);var inst_32490 = (state_32504[2]);var inst_32491 = cljs.core.seq.call(null,inst_32432);var state_32504__$1 = (function (){var statearr_32567 = state_32504;(statearr_32567[30] = inst_32490);
return statearr_32567;
})();if(inst_32491)
{var statearr_32568_32635 = state_32504__$1;(statearr_32568_32635[1] = 42);
} else
{var statearr_32569_32636 = state_32504__$1;(statearr_32569_32636[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 27))
{var inst_32443 = (state_32504[10]);var inst_32441 = (state_32504[12]);var inst_32448 = cljs.core._nth.call(null,inst_32441,inst_32443);var state_32504__$1 = (function (){var statearr_32570 = state_32504;(statearr_32570[7] = inst_32448);
return statearr_32570;
})();var statearr_32571_32637 = state_32504__$1;(statearr_32571_32637[2] = null);
(statearr_32571_32637[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 28))
{var inst_32461 = (state_32504[9]);var inst_32440 = (state_32504[13]);var inst_32461__$1 = cljs.core.seq.call(null,inst_32440);var state_32504__$1 = (function (){var statearr_32575 = state_32504;(statearr_32575[9] = inst_32461__$1);
return statearr_32575;
})();if(inst_32461__$1)
{var statearr_32576_32638 = state_32504__$1;(statearr_32576_32638[1] = 33);
} else
{var statearr_32577_32639 = state_32504__$1;(statearr_32577_32639[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 29))
{var inst_32488 = (state_32504[2]);var state_32504__$1 = state_32504;var statearr_32578_32640 = state_32504__$1;(statearr_32578_32640[2] = inst_32488);
(statearr_32578_32640[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 30))
{var inst_32443 = (state_32504[10]);var inst_32442 = (state_32504[11]);var inst_32441 = (state_32504[12]);var inst_32440 = (state_32504[13]);var inst_32457 = (state_32504[2]);var inst_32458 = (inst_32443 + 1);var tmp32572 = inst_32442;var tmp32573 = inst_32441;var tmp32574 = inst_32440;var inst_32440__$1 = tmp32574;var inst_32441__$1 = tmp32573;var inst_32442__$1 = tmp32572;var inst_32443__$1 = inst_32458;var state_32504__$1 = (function (){var statearr_32579 = state_32504;(statearr_32579[31] = inst_32457);
(statearr_32579[10] = inst_32443__$1);
(statearr_32579[11] = inst_32442__$1);
(statearr_32579[12] = inst_32441__$1);
(statearr_32579[13] = inst_32440__$1);
return statearr_32579;
})();var statearr_32580_32641 = state_32504__$1;(statearr_32580_32641[2] = null);
(statearr_32580_32641[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32505 === 31))
{var inst_32448 = (state_32504[7]);var inst_32449 = (state_32504[2]);var inst_32450 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32451 = cljs.core.async.untap_STAR_.call(null,m,inst_32448);var state_32504__$1 = (function (){var statearr_32581 = state_32504;(statearr_32581[32] = inst_32449);
(statearr_32581[33] = inst_32450);
return statearr_32581;
})();var statearr_32582_32642 = state_32504__$1;(statearr_32582_32642[2] = inst_32451);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_32586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32586[0] = state_machine__5507__auto__);
(statearr_32586[1] = 1);
return statearr_32586;
});
var state_machine__5507__auto____1 = (function (state_32504){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32504);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32587){if((e32587 instanceof Object))
{var ex__5510__auto__ = e32587;var statearr_32588_32643 = state_32504;(statearr_32588_32643[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32644 = state_32504;
state_32504 = G__32644;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32504){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32589 = f__5522__auto__.call(null);(statearr_32589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32590);
return statearr_32589;
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
cljs.core.async.Mix = (function (){var obj32646 = {};return obj32646;
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
;var m = (function (){if(typeof cljs.core.async.t32756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32756 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32757){
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
this.meta32757 = meta32757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32756.cljs$lang$type = true;
cljs.core.async.t32756.cljs$lang$ctorStr = "cljs.core.async/t32756";
cljs.core.async.t32756.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32756");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32758){var self__ = this;
var _32758__$1 = this;return self__.meta32757;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32758,meta32757__$1){var self__ = this;
var _32758__$1 = this;return (new cljs.core.async.t32756(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32757__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32756 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32756(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32757){return (new cljs.core.async.t32756(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32757));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32756(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___32865 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32823){var state_val_32824 = (state_32823[1]);if((state_val_32824 === 1))
{var inst_32762 = (state_32823[7]);var inst_32762__$1 = calc_state.call(null);var inst_32763 = cljs.core.seq_QMARK_.call(null,inst_32762__$1);var state_32823__$1 = (function (){var statearr_32825 = state_32823;(statearr_32825[7] = inst_32762__$1);
return statearr_32825;
})();if(inst_32763)
{var statearr_32826_32866 = state_32823__$1;(statearr_32826_32866[1] = 2);
} else
{var statearr_32827_32867 = state_32823__$1;(statearr_32827_32867[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 2))
{var inst_32762 = (state_32823[7]);var inst_32765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32762);var state_32823__$1 = state_32823;var statearr_32828_32868 = state_32823__$1;(statearr_32828_32868[2] = inst_32765);
(statearr_32828_32868[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 3))
{var inst_32762 = (state_32823[7]);var state_32823__$1 = state_32823;var statearr_32829_32869 = state_32823__$1;(statearr_32829_32869[2] = inst_32762);
(statearr_32829_32869[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 4))
{var inst_32762 = (state_32823[7]);var inst_32768 = (state_32823[2]);var inst_32769 = cljs.core.get.call(null,inst_32768,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32770 = cljs.core.get.call(null,inst_32768,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32771 = cljs.core.get.call(null,inst_32768,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32772 = inst_32762;var state_32823__$1 = (function (){var statearr_32830 = state_32823;(statearr_32830[8] = inst_32769);
(statearr_32830[9] = inst_32772);
(statearr_32830[10] = inst_32771);
(statearr_32830[11] = inst_32770);
return statearr_32830;
})();var statearr_32831_32870 = state_32823__$1;(statearr_32831_32870[2] = null);
(statearr_32831_32870[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 5))
{var inst_32772 = (state_32823[9]);var inst_32775 = cljs.core.seq_QMARK_.call(null,inst_32772);var state_32823__$1 = state_32823;if(inst_32775)
{var statearr_32832_32871 = state_32823__$1;(statearr_32832_32871[1] = 7);
} else
{var statearr_32833_32872 = state_32823__$1;(statearr_32833_32872[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 6))
{var inst_32821 = (state_32823[2]);var state_32823__$1 = state_32823;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32823__$1,inst_32821);
} else
{if((state_val_32824 === 7))
{var inst_32772 = (state_32823[9]);var inst_32777 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32772);var state_32823__$1 = state_32823;var statearr_32834_32873 = state_32823__$1;(statearr_32834_32873[2] = inst_32777);
(statearr_32834_32873[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 8))
{var inst_32772 = (state_32823[9]);var state_32823__$1 = state_32823;var statearr_32835_32874 = state_32823__$1;(statearr_32835_32874[2] = inst_32772);
(statearr_32835_32874[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 9))
{var inst_32780 = (state_32823[12]);var inst_32780__$1 = (state_32823[2]);var inst_32781 = cljs.core.get.call(null,inst_32780__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32782 = cljs.core.get.call(null,inst_32780__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32783 = cljs.core.get.call(null,inst_32780__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32823__$1 = (function (){var statearr_32836 = state_32823;(statearr_32836[12] = inst_32780__$1);
(statearr_32836[13] = inst_32783);
(statearr_32836[14] = inst_32782);
return statearr_32836;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32823__$1,10,inst_32781);
} else
{if((state_val_32824 === 10))
{var inst_32787 = (state_32823[15]);var inst_32788 = (state_32823[16]);var inst_32786 = (state_32823[2]);var inst_32787__$1 = cljs.core.nth.call(null,inst_32786,0,null);var inst_32788__$1 = cljs.core.nth.call(null,inst_32786,1,null);var inst_32789 = (inst_32787__$1 == null);var inst_32790 = cljs.core._EQ_.call(null,inst_32788__$1,change);var inst_32791 = (inst_32789) || (inst_32790);var state_32823__$1 = (function (){var statearr_32837 = state_32823;(statearr_32837[15] = inst_32787__$1);
(statearr_32837[16] = inst_32788__$1);
return statearr_32837;
})();if(cljs.core.truth_(inst_32791))
{var statearr_32838_32875 = state_32823__$1;(statearr_32838_32875[1] = 11);
} else
{var statearr_32839_32876 = state_32823__$1;(statearr_32839_32876[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 11))
{var inst_32787 = (state_32823[15]);var inst_32793 = (inst_32787 == null);var state_32823__$1 = state_32823;if(cljs.core.truth_(inst_32793))
{var statearr_32840_32877 = state_32823__$1;(statearr_32840_32877[1] = 14);
} else
{var statearr_32841_32878 = state_32823__$1;(statearr_32841_32878[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 12))
{var inst_32788 = (state_32823[16]);var inst_32802 = (state_32823[17]);var inst_32783 = (state_32823[13]);var inst_32802__$1 = inst_32783.call(null,inst_32788);var state_32823__$1 = (function (){var statearr_32842 = state_32823;(statearr_32842[17] = inst_32802__$1);
return statearr_32842;
})();if(cljs.core.truth_(inst_32802__$1))
{var statearr_32843_32879 = state_32823__$1;(statearr_32843_32879[1] = 17);
} else
{var statearr_32844_32880 = state_32823__$1;(statearr_32844_32880[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 13))
{var inst_32819 = (state_32823[2]);var state_32823__$1 = state_32823;var statearr_32845_32881 = state_32823__$1;(statearr_32845_32881[2] = inst_32819);
(statearr_32845_32881[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 14))
{var inst_32788 = (state_32823[16]);var inst_32795 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32788);var state_32823__$1 = state_32823;var statearr_32846_32882 = state_32823__$1;(statearr_32846_32882[2] = inst_32795);
(statearr_32846_32882[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 15))
{var state_32823__$1 = state_32823;var statearr_32847_32883 = state_32823__$1;(statearr_32847_32883[2] = null);
(statearr_32847_32883[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 16))
{var inst_32798 = (state_32823[2]);var inst_32799 = calc_state.call(null);var inst_32772 = inst_32799;var state_32823__$1 = (function (){var statearr_32848 = state_32823;(statearr_32848[9] = inst_32772);
(statearr_32848[18] = inst_32798);
return statearr_32848;
})();var statearr_32849_32884 = state_32823__$1;(statearr_32849_32884[2] = null);
(statearr_32849_32884[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 17))
{var inst_32802 = (state_32823[17]);var state_32823__$1 = state_32823;var statearr_32850_32885 = state_32823__$1;(statearr_32850_32885[2] = inst_32802);
(statearr_32850_32885[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 18))
{var inst_32788 = (state_32823[16]);var inst_32783 = (state_32823[13]);var inst_32782 = (state_32823[14]);var inst_32805 = cljs.core.empty_QMARK_.call(null,inst_32783);var inst_32806 = inst_32782.call(null,inst_32788);var inst_32807 = cljs.core.not.call(null,inst_32806);var inst_32808 = (inst_32805) && (inst_32807);var state_32823__$1 = state_32823;var statearr_32851_32886 = state_32823__$1;(statearr_32851_32886[2] = inst_32808);
(statearr_32851_32886[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 19))
{var inst_32810 = (state_32823[2]);var state_32823__$1 = state_32823;if(cljs.core.truth_(inst_32810))
{var statearr_32852_32887 = state_32823__$1;(statearr_32852_32887[1] = 20);
} else
{var statearr_32853_32888 = state_32823__$1;(statearr_32853_32888[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 20))
{var inst_32787 = (state_32823[15]);var state_32823__$1 = state_32823;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32823__$1,23,out,inst_32787);
} else
{if((state_val_32824 === 21))
{var state_32823__$1 = state_32823;var statearr_32854_32889 = state_32823__$1;(statearr_32854_32889[2] = null);
(statearr_32854_32889[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 22))
{var inst_32780 = (state_32823[12]);var inst_32816 = (state_32823[2]);var inst_32772 = inst_32780;var state_32823__$1 = (function (){var statearr_32855 = state_32823;(statearr_32855[9] = inst_32772);
(statearr_32855[19] = inst_32816);
return statearr_32855;
})();var statearr_32856_32890 = state_32823__$1;(statearr_32856_32890[2] = null);
(statearr_32856_32890[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32824 === 23))
{var inst_32813 = (state_32823[2]);var state_32823__$1 = state_32823;var statearr_32857_32891 = state_32823__$1;(statearr_32857_32891[2] = inst_32813);
(statearr_32857_32891[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_32861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32861[0] = state_machine__5507__auto__);
(statearr_32861[1] = 1);
return statearr_32861;
});
var state_machine__5507__auto____1 = (function (state_32823){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32823);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32862){if((e32862 instanceof Object))
{var ex__5510__auto__ = e32862;var statearr_32863_32892 = state_32823;(statearr_32863_32892[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32823);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32862;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32893 = state_32823;
state_32823 = G__32893;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32823){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32864 = f__5522__auto__.call(null);(statearr_32864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32865);
return statearr_32864;
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
cljs.core.async.Pub = (function (){var obj32895 = {};return obj32895;
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
return (function (p1__32896_SHARP_){if(cljs.core.truth_(p1__32896_SHARP_.call(null,topic)))
{return p1__32896_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32896_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33021 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33022){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33022 = meta33022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33021.cljs$lang$type = true;
cljs.core.async.t33021.cljs$lang$ctorStr = "cljs.core.async/t33021";
cljs.core.async.t33021.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33021");
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33021.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33023){var self__ = this;
var _33023__$1 = this;return self__.meta33022;
});})(mults,ensure_mult))
;
cljs.core.async.t33021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33023,meta33022__$1){var self__ = this;
var _33023__$1 = this;return (new cljs.core.async.t33021(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33022__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33021 = ((function (mults,ensure_mult){
return (function __GT_t33021(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33022){return (new cljs.core.async.t33021(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33022));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33021(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___33145 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33097){var state_val_33098 = (state_33097[1]);if((state_val_33098 === 1))
{var state_33097__$1 = state_33097;var statearr_33099_33146 = state_33097__$1;(statearr_33099_33146[2] = null);
(statearr_33099_33146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 2))
{var state_33097__$1 = state_33097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33097__$1,4,ch);
} else
{if((state_val_33098 === 3))
{var inst_33095 = (state_33097[2]);var state_33097__$1 = state_33097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33097__$1,inst_33095);
} else
{if((state_val_33098 === 4))
{var inst_33026 = (state_33097[7]);var inst_33026__$1 = (state_33097[2]);var inst_33027 = (inst_33026__$1 == null);var state_33097__$1 = (function (){var statearr_33100 = state_33097;(statearr_33100[7] = inst_33026__$1);
return statearr_33100;
})();if(cljs.core.truth_(inst_33027))
{var statearr_33101_33147 = state_33097__$1;(statearr_33101_33147[1] = 5);
} else
{var statearr_33102_33148 = state_33097__$1;(statearr_33102_33148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 5))
{var inst_33033 = cljs.core.deref.call(null,mults);var inst_33034 = cljs.core.vals.call(null,inst_33033);var inst_33035 = cljs.core.seq.call(null,inst_33034);var inst_33036 = inst_33035;var inst_33037 = null;var inst_33038 = 0;var inst_33039 = 0;var state_33097__$1 = (function (){var statearr_33103 = state_33097;(statearr_33103[8] = inst_33038);
(statearr_33103[9] = inst_33039);
(statearr_33103[10] = inst_33037);
(statearr_33103[11] = inst_33036);
return statearr_33103;
})();var statearr_33104_33149 = state_33097__$1;(statearr_33104_33149[2] = null);
(statearr_33104_33149[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 6))
{var inst_33076 = (state_33097[12]);var inst_33074 = (state_33097[13]);var inst_33026 = (state_33097[7]);var inst_33074__$1 = topic_fn.call(null,inst_33026);var inst_33075 = cljs.core.deref.call(null,mults);var inst_33076__$1 = cljs.core.get.call(null,inst_33075,inst_33074__$1);var state_33097__$1 = (function (){var statearr_33105 = state_33097;(statearr_33105[12] = inst_33076__$1);
(statearr_33105[13] = inst_33074__$1);
return statearr_33105;
})();if(cljs.core.truth_(inst_33076__$1))
{var statearr_33106_33150 = state_33097__$1;(statearr_33106_33150[1] = 19);
} else
{var statearr_33107_33151 = state_33097__$1;(statearr_33107_33151[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 7))
{var inst_33093 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33108_33152 = state_33097__$1;(statearr_33108_33152[2] = inst_33093);
(statearr_33108_33152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 8))
{var inst_33038 = (state_33097[8]);var inst_33039 = (state_33097[9]);var inst_33041 = (inst_33039 < inst_33038);var inst_33042 = inst_33041;var state_33097__$1 = state_33097;if(cljs.core.truth_(inst_33042))
{var statearr_33112_33153 = state_33097__$1;(statearr_33112_33153[1] = 10);
} else
{var statearr_33113_33154 = state_33097__$1;(statearr_33113_33154[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 9))
{var inst_33072 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33114_33155 = state_33097__$1;(statearr_33114_33155[2] = inst_33072);
(statearr_33114_33155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 10))
{var inst_33038 = (state_33097[8]);var inst_33039 = (state_33097[9]);var inst_33037 = (state_33097[10]);var inst_33036 = (state_33097[11]);var inst_33044 = cljs.core._nth.call(null,inst_33037,inst_33039);var inst_33045 = cljs.core.async.muxch_STAR_.call(null,inst_33044);var inst_33046 = cljs.core.async.close_BANG_.call(null,inst_33045);var inst_33047 = (inst_33039 + 1);var tmp33109 = inst_33038;var tmp33110 = inst_33037;var tmp33111 = inst_33036;var inst_33036__$1 = tmp33111;var inst_33037__$1 = tmp33110;var inst_33038__$1 = tmp33109;var inst_33039__$1 = inst_33047;var state_33097__$1 = (function (){var statearr_33115 = state_33097;(statearr_33115[8] = inst_33038__$1);
(statearr_33115[9] = inst_33039__$1);
(statearr_33115[14] = inst_33046);
(statearr_33115[10] = inst_33037__$1);
(statearr_33115[11] = inst_33036__$1);
return statearr_33115;
})();var statearr_33116_33156 = state_33097__$1;(statearr_33116_33156[2] = null);
(statearr_33116_33156[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 11))
{var inst_33036 = (state_33097[11]);var inst_33050 = (state_33097[15]);var inst_33050__$1 = cljs.core.seq.call(null,inst_33036);var state_33097__$1 = (function (){var statearr_33117 = state_33097;(statearr_33117[15] = inst_33050__$1);
return statearr_33117;
})();if(inst_33050__$1)
{var statearr_33118_33157 = state_33097__$1;(statearr_33118_33157[1] = 13);
} else
{var statearr_33119_33158 = state_33097__$1;(statearr_33119_33158[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 12))
{var inst_33070 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33120_33159 = state_33097__$1;(statearr_33120_33159[2] = inst_33070);
(statearr_33120_33159[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 13))
{var inst_33050 = (state_33097[15]);var inst_33052 = cljs.core.chunked_seq_QMARK_.call(null,inst_33050);var state_33097__$1 = state_33097;if(inst_33052)
{var statearr_33121_33160 = state_33097__$1;(statearr_33121_33160[1] = 16);
} else
{var statearr_33122_33161 = state_33097__$1;(statearr_33122_33161[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 14))
{var state_33097__$1 = state_33097;var statearr_33123_33162 = state_33097__$1;(statearr_33123_33162[2] = null);
(statearr_33123_33162[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 15))
{var inst_33068 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33124_33163 = state_33097__$1;(statearr_33124_33163[2] = inst_33068);
(statearr_33124_33163[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 16))
{var inst_33050 = (state_33097[15]);var inst_33054 = cljs.core.chunk_first.call(null,inst_33050);var inst_33055 = cljs.core.chunk_rest.call(null,inst_33050);var inst_33056 = cljs.core.count.call(null,inst_33054);var inst_33036 = inst_33055;var inst_33037 = inst_33054;var inst_33038 = inst_33056;var inst_33039 = 0;var state_33097__$1 = (function (){var statearr_33125 = state_33097;(statearr_33125[8] = inst_33038);
(statearr_33125[9] = inst_33039);
(statearr_33125[10] = inst_33037);
(statearr_33125[11] = inst_33036);
return statearr_33125;
})();var statearr_33126_33164 = state_33097__$1;(statearr_33126_33164[2] = null);
(statearr_33126_33164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 17))
{var inst_33050 = (state_33097[15]);var inst_33059 = cljs.core.first.call(null,inst_33050);var inst_33060 = cljs.core.async.muxch_STAR_.call(null,inst_33059);var inst_33061 = cljs.core.async.close_BANG_.call(null,inst_33060);var inst_33062 = cljs.core.next.call(null,inst_33050);var inst_33036 = inst_33062;var inst_33037 = null;var inst_33038 = 0;var inst_33039 = 0;var state_33097__$1 = (function (){var statearr_33127 = state_33097;(statearr_33127[8] = inst_33038);
(statearr_33127[9] = inst_33039);
(statearr_33127[10] = inst_33037);
(statearr_33127[11] = inst_33036);
(statearr_33127[16] = inst_33061);
return statearr_33127;
})();var statearr_33128_33165 = state_33097__$1;(statearr_33128_33165[2] = null);
(statearr_33128_33165[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 18))
{var inst_33065 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33129_33166 = state_33097__$1;(statearr_33129_33166[2] = inst_33065);
(statearr_33129_33166[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 19))
{var state_33097__$1 = state_33097;var statearr_33130_33167 = state_33097__$1;(statearr_33130_33167[2] = null);
(statearr_33130_33167[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 20))
{var state_33097__$1 = state_33097;var statearr_33131_33168 = state_33097__$1;(statearr_33131_33168[2] = null);
(statearr_33131_33168[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 21))
{var inst_33090 = (state_33097[2]);var state_33097__$1 = (function (){var statearr_33132 = state_33097;(statearr_33132[17] = inst_33090);
return statearr_33132;
})();var statearr_33133_33169 = state_33097__$1;(statearr_33133_33169[2] = null);
(statearr_33133_33169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 22))
{var inst_33087 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33134_33170 = state_33097__$1;(statearr_33134_33170[2] = inst_33087);
(statearr_33134_33170[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 23))
{var inst_33074 = (state_33097[13]);var inst_33078 = (state_33097[2]);var inst_33079 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33074);var state_33097__$1 = (function (){var statearr_33135 = state_33097;(statearr_33135[18] = inst_33078);
return statearr_33135;
})();var statearr_33136_33171 = state_33097__$1;(statearr_33136_33171[2] = inst_33079);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33097__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33098 === 24))
{var inst_33076 = (state_33097[12]);var inst_33026 = (state_33097[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33097,23,Object,null,22);var inst_33083 = cljs.core.async.muxch_STAR_.call(null,inst_33076);var state_33097__$1 = state_33097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33097__$1,25,inst_33083,inst_33026);
} else
{if((state_val_33098 === 25))
{var inst_33085 = (state_33097[2]);var state_33097__$1 = state_33097;var statearr_33137_33172 = state_33097__$1;(statearr_33137_33172[2] = inst_33085);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33097__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33141[0] = state_machine__5507__auto__);
(statearr_33141[1] = 1);
return statearr_33141;
});
var state_machine__5507__auto____1 = (function (state_33097){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object))
{var ex__5510__auto__ = e33142;var statearr_33143_33173 = state_33097;(statearr_33143_33173[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33174 = state_33097;
state_33097 = G__33174;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33097){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33144 = f__5522__auto__.call(null);(statearr_33144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33145);
return statearr_33144;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___33311 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33281){var state_val_33282 = (state_33281[1]);if((state_val_33282 === 1))
{var state_33281__$1 = state_33281;var statearr_33283_33312 = state_33281__$1;(statearr_33283_33312[2] = null);
(statearr_33283_33312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 2))
{var inst_33244 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33245 = 0;var state_33281__$1 = (function (){var statearr_33284 = state_33281;(statearr_33284[7] = inst_33245);
(statearr_33284[8] = inst_33244);
return statearr_33284;
})();var statearr_33285_33313 = state_33281__$1;(statearr_33285_33313[2] = null);
(statearr_33285_33313[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 3))
{var inst_33279 = (state_33281[2]);var state_33281__$1 = state_33281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33281__$1,inst_33279);
} else
{if((state_val_33282 === 4))
{var inst_33245 = (state_33281[7]);var inst_33247 = (inst_33245 < cnt);var state_33281__$1 = state_33281;if(cljs.core.truth_(inst_33247))
{var statearr_33286_33314 = state_33281__$1;(statearr_33286_33314[1] = 6);
} else
{var statearr_33287_33315 = state_33281__$1;(statearr_33287_33315[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 5))
{var inst_33265 = (state_33281[2]);var state_33281__$1 = (function (){var statearr_33288 = state_33281;(statearr_33288[9] = inst_33265);
return statearr_33288;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33281__$1,12,dchan);
} else
{if((state_val_33282 === 6))
{var state_33281__$1 = state_33281;var statearr_33289_33316 = state_33281__$1;(statearr_33289_33316[2] = null);
(statearr_33289_33316[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 7))
{var state_33281__$1 = state_33281;var statearr_33290_33317 = state_33281__$1;(statearr_33290_33317[2] = null);
(statearr_33290_33317[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 8))
{var inst_33263 = (state_33281[2]);var state_33281__$1 = state_33281;var statearr_33291_33318 = state_33281__$1;(statearr_33291_33318[2] = inst_33263);
(statearr_33291_33318[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 9))
{var inst_33245 = (state_33281[7]);var inst_33258 = (state_33281[2]);var inst_33259 = (inst_33245 + 1);var inst_33245__$1 = inst_33259;var state_33281__$1 = (function (){var statearr_33292 = state_33281;(statearr_33292[7] = inst_33245__$1);
(statearr_33292[10] = inst_33258);
return statearr_33292;
})();var statearr_33293_33319 = state_33281__$1;(statearr_33293_33319[2] = null);
(statearr_33293_33319[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 10))
{var inst_33249 = (state_33281[2]);var inst_33250 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33281__$1 = (function (){var statearr_33294 = state_33281;(statearr_33294[11] = inst_33249);
return statearr_33294;
})();var statearr_33295_33320 = state_33281__$1;(statearr_33295_33320[2] = inst_33250);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 11))
{var inst_33245 = (state_33281[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33281,10,Object,null,9);var inst_33254 = chs__$1.call(null,inst_33245);var inst_33255 = done.call(null,inst_33245);var inst_33256 = cljs.core.async.take_BANG_.call(null,inst_33254,inst_33255);var state_33281__$1 = state_33281;var statearr_33296_33321 = state_33281__$1;(statearr_33296_33321[2] = inst_33256);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 12))
{var inst_33267 = (state_33281[12]);var inst_33267__$1 = (state_33281[2]);var inst_33268 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33267__$1);var state_33281__$1 = (function (){var statearr_33297 = state_33281;(statearr_33297[12] = inst_33267__$1);
return statearr_33297;
})();if(cljs.core.truth_(inst_33268))
{var statearr_33298_33322 = state_33281__$1;(statearr_33298_33322[1] = 13);
} else
{var statearr_33299_33323 = state_33281__$1;(statearr_33299_33323[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 13))
{var inst_33270 = cljs.core.async.close_BANG_.call(null,out);var state_33281__$1 = state_33281;var statearr_33300_33324 = state_33281__$1;(statearr_33300_33324[2] = inst_33270);
(statearr_33300_33324[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 14))
{var inst_33267 = (state_33281[12]);var inst_33272 = cljs.core.apply.call(null,f,inst_33267);var state_33281__$1 = state_33281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33281__$1,16,out,inst_33272);
} else
{if((state_val_33282 === 15))
{var inst_33277 = (state_33281[2]);var state_33281__$1 = state_33281;var statearr_33301_33325 = state_33281__$1;(statearr_33301_33325[2] = inst_33277);
(statearr_33301_33325[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 16))
{var inst_33274 = (state_33281[2]);var state_33281__$1 = (function (){var statearr_33302 = state_33281;(statearr_33302[13] = inst_33274);
return statearr_33302;
})();var statearr_33303_33326 = state_33281__$1;(statearr_33303_33326[2] = null);
(statearr_33303_33326[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33307[0] = state_machine__5507__auto__);
(statearr_33307[1] = 1);
return statearr_33307;
});
var state_machine__5507__auto____1 = (function (state_33281){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33281);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33308){if((e33308 instanceof Object))
{var ex__5510__auto__ = e33308;var statearr_33309_33327 = state_33281;(statearr_33309_33327[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33328 = state_33281;
state_33281 = G__33328;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33310 = f__5522__auto__.call(null);(statearr_33310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33311);
return statearr_33310;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33412){var state_val_33413 = (state_33412[1]);if((state_val_33413 === 1))
{var inst_33383 = cljs.core.vec.call(null,chs);var inst_33384 = inst_33383;var state_33412__$1 = (function (){var statearr_33414 = state_33412;(statearr_33414[7] = inst_33384);
return statearr_33414;
})();var statearr_33415_33437 = state_33412__$1;(statearr_33415_33437[2] = null);
(statearr_33415_33437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 2))
{var inst_33384 = (state_33412[7]);var inst_33386 = cljs.core.count.call(null,inst_33384);var inst_33387 = (inst_33386 > 0);var state_33412__$1 = state_33412;if(cljs.core.truth_(inst_33387))
{var statearr_33416_33438 = state_33412__$1;(statearr_33416_33438[1] = 4);
} else
{var statearr_33417_33439 = state_33412__$1;(statearr_33417_33439[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 3))
{var inst_33410 = (state_33412[2]);var state_33412__$1 = state_33412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33412__$1,inst_33410);
} else
{if((state_val_33413 === 4))
{var inst_33384 = (state_33412[7]);var state_33412__$1 = state_33412;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33412__$1,7,inst_33384);
} else
{if((state_val_33413 === 5))
{var inst_33406 = cljs.core.async.close_BANG_.call(null,out);var state_33412__$1 = state_33412;var statearr_33418_33440 = state_33412__$1;(statearr_33418_33440[2] = inst_33406);
(statearr_33418_33440[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 6))
{var inst_33408 = (state_33412[2]);var state_33412__$1 = state_33412;var statearr_33419_33441 = state_33412__$1;(statearr_33419_33441[2] = inst_33408);
(statearr_33419_33441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 7))
{var inst_33392 = (state_33412[8]);var inst_33391 = (state_33412[9]);var inst_33391__$1 = (state_33412[2]);var inst_33392__$1 = cljs.core.nth.call(null,inst_33391__$1,0,null);var inst_33393 = cljs.core.nth.call(null,inst_33391__$1,1,null);var inst_33394 = (inst_33392__$1 == null);var state_33412__$1 = (function (){var statearr_33420 = state_33412;(statearr_33420[10] = inst_33393);
(statearr_33420[8] = inst_33392__$1);
(statearr_33420[9] = inst_33391__$1);
return statearr_33420;
})();if(cljs.core.truth_(inst_33394))
{var statearr_33421_33442 = state_33412__$1;(statearr_33421_33442[1] = 8);
} else
{var statearr_33422_33443 = state_33412__$1;(statearr_33422_33443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 8))
{var inst_33393 = (state_33412[10]);var inst_33392 = (state_33412[8]);var inst_33391 = (state_33412[9]);var inst_33384 = (state_33412[7]);var inst_33396 = (function (){var c = inst_33393;var v = inst_33392;var vec__33389 = inst_33391;var cs = inst_33384;return ((function (c,v,vec__33389,cs,inst_33393,inst_33392,inst_33391,inst_33384,state_val_33413){
return (function (p1__33329_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33329_SHARP_);
});
;})(c,v,vec__33389,cs,inst_33393,inst_33392,inst_33391,inst_33384,state_val_33413))
})();var inst_33397 = cljs.core.filterv.call(null,inst_33396,inst_33384);var inst_33384__$1 = inst_33397;var state_33412__$1 = (function (){var statearr_33423 = state_33412;(statearr_33423[7] = inst_33384__$1);
return statearr_33423;
})();var statearr_33424_33444 = state_33412__$1;(statearr_33424_33444[2] = null);
(statearr_33424_33444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 9))
{var inst_33392 = (state_33412[8]);var state_33412__$1 = state_33412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33412__$1,11,out,inst_33392);
} else
{if((state_val_33413 === 10))
{var inst_33404 = (state_33412[2]);var state_33412__$1 = state_33412;var statearr_33426_33445 = state_33412__$1;(statearr_33426_33445[2] = inst_33404);
(statearr_33426_33445[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33413 === 11))
{var inst_33384 = (state_33412[7]);var inst_33401 = (state_33412[2]);var tmp33425 = inst_33384;var inst_33384__$1 = tmp33425;var state_33412__$1 = (function (){var statearr_33427 = state_33412;(statearr_33427[7] = inst_33384__$1);
(statearr_33427[11] = inst_33401);
return statearr_33427;
})();var statearr_33428_33446 = state_33412__$1;(statearr_33428_33446[2] = null);
(statearr_33428_33446[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33432 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33432[0] = state_machine__5507__auto__);
(statearr_33432[1] = 1);
return statearr_33432;
});
var state_machine__5507__auto____1 = (function (state_33412){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33433){if((e33433 instanceof Object))
{var ex__5510__auto__ = e33433;var statearr_33434_33447 = state_33412;(statearr_33434_33447[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33448 = state_33412;
state_33412 = G__33448;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33412){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33435 = f__5522__auto__.call(null);(statearr_33435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33436);
return statearr_33435;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33541 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33518){var state_val_33519 = (state_33518[1]);if((state_val_33519 === 1))
{var inst_33495 = 0;var state_33518__$1 = (function (){var statearr_33520 = state_33518;(statearr_33520[7] = inst_33495);
return statearr_33520;
})();var statearr_33521_33542 = state_33518__$1;(statearr_33521_33542[2] = null);
(statearr_33521_33542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 2))
{var inst_33495 = (state_33518[7]);var inst_33497 = (inst_33495 < n);var state_33518__$1 = state_33518;if(cljs.core.truth_(inst_33497))
{var statearr_33522_33543 = state_33518__$1;(statearr_33522_33543[1] = 4);
} else
{var statearr_33523_33544 = state_33518__$1;(statearr_33523_33544[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 3))
{var inst_33515 = (state_33518[2]);var inst_33516 = cljs.core.async.close_BANG_.call(null,out);var state_33518__$1 = (function (){var statearr_33524 = state_33518;(statearr_33524[8] = inst_33515);
return statearr_33524;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33518__$1,inst_33516);
} else
{if((state_val_33519 === 4))
{var state_33518__$1 = state_33518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33518__$1,7,ch);
} else
{if((state_val_33519 === 5))
{var state_33518__$1 = state_33518;var statearr_33525_33545 = state_33518__$1;(statearr_33525_33545[2] = null);
(statearr_33525_33545[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 6))
{var inst_33513 = (state_33518[2]);var state_33518__$1 = state_33518;var statearr_33526_33546 = state_33518__$1;(statearr_33526_33546[2] = inst_33513);
(statearr_33526_33546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 7))
{var inst_33500 = (state_33518[9]);var inst_33500__$1 = (state_33518[2]);var inst_33501 = (inst_33500__$1 == null);var inst_33502 = cljs.core.not.call(null,inst_33501);var state_33518__$1 = (function (){var statearr_33527 = state_33518;(statearr_33527[9] = inst_33500__$1);
return statearr_33527;
})();if(inst_33502)
{var statearr_33528_33547 = state_33518__$1;(statearr_33528_33547[1] = 8);
} else
{var statearr_33529_33548 = state_33518__$1;(statearr_33529_33548[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 8))
{var inst_33500 = (state_33518[9]);var state_33518__$1 = state_33518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33518__$1,11,out,inst_33500);
} else
{if((state_val_33519 === 9))
{var state_33518__$1 = state_33518;var statearr_33530_33549 = state_33518__$1;(statearr_33530_33549[2] = null);
(statearr_33530_33549[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 10))
{var inst_33510 = (state_33518[2]);var state_33518__$1 = state_33518;var statearr_33531_33550 = state_33518__$1;(statearr_33531_33550[2] = inst_33510);
(statearr_33531_33550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33519 === 11))
{var inst_33495 = (state_33518[7]);var inst_33505 = (state_33518[2]);var inst_33506 = (inst_33495 + 1);var inst_33495__$1 = inst_33506;var state_33518__$1 = (function (){var statearr_33532 = state_33518;(statearr_33532[10] = inst_33505);
(statearr_33532[7] = inst_33495__$1);
return statearr_33532;
})();var statearr_33533_33551 = state_33518__$1;(statearr_33533_33551[2] = null);
(statearr_33533_33551[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33537 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33537[0] = state_machine__5507__auto__);
(statearr_33537[1] = 1);
return statearr_33537;
});
var state_machine__5507__auto____1 = (function (state_33518){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33538){if((e33538 instanceof Object))
{var ex__5510__auto__ = e33538;var statearr_33539_33552 = state_33518;(statearr_33539_33552[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33538;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33553 = state_33518;
state_33518 = G__33553;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33518){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33540 = f__5522__auto__.call(null);(statearr_33540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33541);
return statearr_33540;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33625){var state_val_33626 = (state_33625[1]);if((state_val_33626 === 1))
{var inst_33602 = null;var state_33625__$1 = (function (){var statearr_33627 = state_33625;(statearr_33627[7] = inst_33602);
return statearr_33627;
})();var statearr_33628_33651 = state_33625__$1;(statearr_33628_33651[2] = null);
(statearr_33628_33651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 2))
{var state_33625__$1 = state_33625;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33625__$1,4,ch);
} else
{if((state_val_33626 === 3))
{var inst_33622 = (state_33625[2]);var inst_33623 = cljs.core.async.close_BANG_.call(null,out);var state_33625__$1 = (function (){var statearr_33629 = state_33625;(statearr_33629[8] = inst_33622);
return statearr_33629;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33625__$1,inst_33623);
} else
{if((state_val_33626 === 4))
{var inst_33605 = (state_33625[9]);var inst_33605__$1 = (state_33625[2]);var inst_33606 = (inst_33605__$1 == null);var inst_33607 = cljs.core.not.call(null,inst_33606);var state_33625__$1 = (function (){var statearr_33630 = state_33625;(statearr_33630[9] = inst_33605__$1);
return statearr_33630;
})();if(inst_33607)
{var statearr_33631_33652 = state_33625__$1;(statearr_33631_33652[1] = 5);
} else
{var statearr_33632_33653 = state_33625__$1;(statearr_33632_33653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 5))
{var inst_33605 = (state_33625[9]);var inst_33602 = (state_33625[7]);var inst_33609 = cljs.core._EQ_.call(null,inst_33605,inst_33602);var state_33625__$1 = state_33625;if(inst_33609)
{var statearr_33633_33654 = state_33625__$1;(statearr_33633_33654[1] = 8);
} else
{var statearr_33634_33655 = state_33625__$1;(statearr_33634_33655[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 6))
{var state_33625__$1 = state_33625;var statearr_33636_33656 = state_33625__$1;(statearr_33636_33656[2] = null);
(statearr_33636_33656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 7))
{var inst_33620 = (state_33625[2]);var state_33625__$1 = state_33625;var statearr_33637_33657 = state_33625__$1;(statearr_33637_33657[2] = inst_33620);
(statearr_33637_33657[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 8))
{var inst_33602 = (state_33625[7]);var tmp33635 = inst_33602;var inst_33602__$1 = tmp33635;var state_33625__$1 = (function (){var statearr_33638 = state_33625;(statearr_33638[7] = inst_33602__$1);
return statearr_33638;
})();var statearr_33639_33658 = state_33625__$1;(statearr_33639_33658[2] = null);
(statearr_33639_33658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 9))
{var inst_33605 = (state_33625[9]);var state_33625__$1 = state_33625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33625__$1,11,out,inst_33605);
} else
{if((state_val_33626 === 10))
{var inst_33617 = (state_33625[2]);var state_33625__$1 = state_33625;var statearr_33640_33659 = state_33625__$1;(statearr_33640_33659[2] = inst_33617);
(statearr_33640_33659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33626 === 11))
{var inst_33605 = (state_33625[9]);var inst_33614 = (state_33625[2]);var inst_33602 = inst_33605;var state_33625__$1 = (function (){var statearr_33641 = state_33625;(statearr_33641[10] = inst_33614);
(statearr_33641[7] = inst_33602);
return statearr_33641;
})();var statearr_33642_33660 = state_33625__$1;(statearr_33642_33660[2] = null);
(statearr_33642_33660[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33646 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33646[0] = state_machine__5507__auto__);
(statearr_33646[1] = 1);
return statearr_33646;
});
var state_machine__5507__auto____1 = (function (state_33625){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33625);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33647){if((e33647 instanceof Object))
{var ex__5510__auto__ = e33647;var statearr_33648_33661 = state_33625;(statearr_33648_33661[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33662 = state_33625;
state_33625 = G__33662;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33625){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33649 = f__5522__auto__.call(null);(statearr_33649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33650);
return statearr_33649;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33767){var state_val_33768 = (state_33767[1]);if((state_val_33768 === 1))
{var inst_33730 = (new Array(n));var inst_33731 = inst_33730;var inst_33732 = 0;var state_33767__$1 = (function (){var statearr_33769 = state_33767;(statearr_33769[7] = inst_33731);
(statearr_33769[8] = inst_33732);
return statearr_33769;
})();var statearr_33770_33798 = state_33767__$1;(statearr_33770_33798[2] = null);
(statearr_33770_33798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 2))
{var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33767__$1,4,ch);
} else
{if((state_val_33768 === 3))
{var inst_33765 = (state_33767[2]);var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33767__$1,inst_33765);
} else
{if((state_val_33768 === 4))
{var inst_33735 = (state_33767[9]);var inst_33735__$1 = (state_33767[2]);var inst_33736 = (inst_33735__$1 == null);var inst_33737 = cljs.core.not.call(null,inst_33736);var state_33767__$1 = (function (){var statearr_33771 = state_33767;(statearr_33771[9] = inst_33735__$1);
return statearr_33771;
})();if(inst_33737)
{var statearr_33772_33799 = state_33767__$1;(statearr_33772_33799[1] = 5);
} else
{var statearr_33773_33800 = state_33767__$1;(statearr_33773_33800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 5))
{var inst_33735 = (state_33767[9]);var inst_33731 = (state_33767[7]);var inst_33740 = (state_33767[10]);var inst_33732 = (state_33767[8]);var inst_33739 = (inst_33731[inst_33732] = inst_33735);var inst_33740__$1 = (inst_33732 + 1);var inst_33741 = (inst_33740__$1 < n);var state_33767__$1 = (function (){var statearr_33774 = state_33767;(statearr_33774[11] = inst_33739);
(statearr_33774[10] = inst_33740__$1);
return statearr_33774;
})();if(cljs.core.truth_(inst_33741))
{var statearr_33775_33801 = state_33767__$1;(statearr_33775_33801[1] = 8);
} else
{var statearr_33776_33802 = state_33767__$1;(statearr_33776_33802[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 6))
{var inst_33732 = (state_33767[8]);var inst_33753 = (inst_33732 > 0);var state_33767__$1 = state_33767;if(cljs.core.truth_(inst_33753))
{var statearr_33778_33803 = state_33767__$1;(statearr_33778_33803[1] = 12);
} else
{var statearr_33779_33804 = state_33767__$1;(statearr_33779_33804[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 7))
{var inst_33763 = (state_33767[2]);var state_33767__$1 = state_33767;var statearr_33780_33805 = state_33767__$1;(statearr_33780_33805[2] = inst_33763);
(statearr_33780_33805[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 8))
{var inst_33731 = (state_33767[7]);var inst_33740 = (state_33767[10]);var tmp33777 = inst_33731;var inst_33731__$1 = tmp33777;var inst_33732 = inst_33740;var state_33767__$1 = (function (){var statearr_33781 = state_33767;(statearr_33781[7] = inst_33731__$1);
(statearr_33781[8] = inst_33732);
return statearr_33781;
})();var statearr_33782_33806 = state_33767__$1;(statearr_33782_33806[2] = null);
(statearr_33782_33806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 9))
{var inst_33731 = (state_33767[7]);var inst_33745 = cljs.core.vec.call(null,inst_33731);var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33767__$1,11,out,inst_33745);
} else
{if((state_val_33768 === 10))
{var inst_33751 = (state_33767[2]);var state_33767__$1 = state_33767;var statearr_33783_33807 = state_33767__$1;(statearr_33783_33807[2] = inst_33751);
(statearr_33783_33807[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 11))
{var inst_33747 = (state_33767[2]);var inst_33748 = (new Array(n));var inst_33731 = inst_33748;var inst_33732 = 0;var state_33767__$1 = (function (){var statearr_33784 = state_33767;(statearr_33784[12] = inst_33747);
(statearr_33784[7] = inst_33731);
(statearr_33784[8] = inst_33732);
return statearr_33784;
})();var statearr_33785_33808 = state_33767__$1;(statearr_33785_33808[2] = null);
(statearr_33785_33808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 12))
{var inst_33731 = (state_33767[7]);var inst_33755 = cljs.core.vec.call(null,inst_33731);var state_33767__$1 = state_33767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33767__$1,15,out,inst_33755);
} else
{if((state_val_33768 === 13))
{var state_33767__$1 = state_33767;var statearr_33786_33809 = state_33767__$1;(statearr_33786_33809[2] = null);
(statearr_33786_33809[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 14))
{var inst_33760 = (state_33767[2]);var inst_33761 = cljs.core.async.close_BANG_.call(null,out);var state_33767__$1 = (function (){var statearr_33787 = state_33767;(statearr_33787[13] = inst_33760);
return statearr_33787;
})();var statearr_33788_33810 = state_33767__$1;(statearr_33788_33810[2] = inst_33761);
(statearr_33788_33810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33768 === 15))
{var inst_33757 = (state_33767[2]);var state_33767__$1 = state_33767;var statearr_33789_33811 = state_33767__$1;(statearr_33789_33811[2] = inst_33757);
(statearr_33789_33811[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_33793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33793[0] = state_machine__5507__auto__);
(statearr_33793[1] = 1);
return statearr_33793;
});
var state_machine__5507__auto____1 = (function (state_33767){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33767);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33794){if((e33794 instanceof Object))
{var ex__5510__auto__ = e33794;var statearr_33795_33812 = state_33767;(statearr_33795_33812[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33813 = state_33767;
state_33767 = G__33813;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33767){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33796 = f__5522__auto__.call(null);(statearr_33796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33797);
return statearr_33796;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33956 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33926){var state_val_33927 = (state_33926[1]);if((state_val_33927 === 1))
{var inst_33885 = [];var inst_33886 = inst_33885;var inst_33887 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_33926__$1 = (function (){var statearr_33928 = state_33926;(statearr_33928[7] = inst_33886);
(statearr_33928[8] = inst_33887);
return statearr_33928;
})();var statearr_33929_33957 = state_33926__$1;(statearr_33929_33957[2] = null);
(statearr_33929_33957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 2))
{var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33926__$1,4,ch);
} else
{if((state_val_33927 === 3))
{var inst_33924 = (state_33926[2]);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33926__$1,inst_33924);
} else
{if((state_val_33927 === 4))
{var inst_33890 = (state_33926[9]);var inst_33890__$1 = (state_33926[2]);var inst_33891 = (inst_33890__$1 == null);var inst_33892 = cljs.core.not.call(null,inst_33891);var state_33926__$1 = (function (){var statearr_33930 = state_33926;(statearr_33930[9] = inst_33890__$1);
return statearr_33930;
})();if(inst_33892)
{var statearr_33931_33958 = state_33926__$1;(statearr_33931_33958[1] = 5);
} else
{var statearr_33932_33959 = state_33926__$1;(statearr_33932_33959[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 5))
{var inst_33890 = (state_33926[9]);var inst_33894 = (state_33926[10]);var inst_33887 = (state_33926[8]);var inst_33894__$1 = f.call(null,inst_33890);var inst_33895 = cljs.core._EQ_.call(null,inst_33894__$1,inst_33887);var inst_33896 = cljs.core.keyword_identical_QMARK_.call(null,inst_33887,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_33897 = (inst_33895) || (inst_33896);var state_33926__$1 = (function (){var statearr_33933 = state_33926;(statearr_33933[10] = inst_33894__$1);
return statearr_33933;
})();if(cljs.core.truth_(inst_33897))
{var statearr_33934_33960 = state_33926__$1;(statearr_33934_33960[1] = 8);
} else
{var statearr_33935_33961 = state_33926__$1;(statearr_33935_33961[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 6))
{var inst_33886 = (state_33926[7]);var inst_33911 = inst_33886.length;var inst_33912 = (inst_33911 > 0);var state_33926__$1 = state_33926;if(cljs.core.truth_(inst_33912))
{var statearr_33937_33962 = state_33926__$1;(statearr_33937_33962[1] = 12);
} else
{var statearr_33938_33963 = state_33926__$1;(statearr_33938_33963[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 7))
{var inst_33922 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33939_33964 = state_33926__$1;(statearr_33939_33964[2] = inst_33922);
(statearr_33939_33964[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 8))
{var inst_33890 = (state_33926[9]);var inst_33886 = (state_33926[7]);var inst_33894 = (state_33926[10]);var inst_33899 = inst_33886.push(inst_33890);var tmp33936 = inst_33886;var inst_33886__$1 = tmp33936;var inst_33887 = inst_33894;var state_33926__$1 = (function (){var statearr_33940 = state_33926;(statearr_33940[11] = inst_33899);
(statearr_33940[7] = inst_33886__$1);
(statearr_33940[8] = inst_33887);
return statearr_33940;
})();var statearr_33941_33965 = state_33926__$1;(statearr_33941_33965[2] = null);
(statearr_33941_33965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 9))
{var inst_33886 = (state_33926[7]);var inst_33902 = cljs.core.vec.call(null,inst_33886);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,11,out,inst_33902);
} else
{if((state_val_33927 === 10))
{var inst_33909 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33942_33966 = state_33926__$1;(statearr_33942_33966[2] = inst_33909);
(statearr_33942_33966[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 11))
{var inst_33890 = (state_33926[9]);var inst_33894 = (state_33926[10]);var inst_33904 = (state_33926[2]);var inst_33905 = [];var inst_33906 = inst_33905.push(inst_33890);var inst_33886 = inst_33905;var inst_33887 = inst_33894;var state_33926__$1 = (function (){var statearr_33943 = state_33926;(statearr_33943[12] = inst_33906);
(statearr_33943[13] = inst_33904);
(statearr_33943[7] = inst_33886);
(statearr_33943[8] = inst_33887);
return statearr_33943;
})();var statearr_33944_33967 = state_33926__$1;(statearr_33944_33967[2] = null);
(statearr_33944_33967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 12))
{var inst_33886 = (state_33926[7]);var inst_33914 = cljs.core.vec.call(null,inst_33886);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,15,out,inst_33914);
} else
{if((state_val_33927 === 13))
{var state_33926__$1 = state_33926;var statearr_33945_33968 = state_33926__$1;(statearr_33945_33968[2] = null);
(statearr_33945_33968[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 14))
{var inst_33919 = (state_33926[2]);var inst_33920 = cljs.core.async.close_BANG_.call(null,out);var state_33926__$1 = (function (){var statearr_33946 = state_33926;(statearr_33946[14] = inst_33919);
return statearr_33946;
})();var statearr_33947_33969 = state_33926__$1;(statearr_33947_33969[2] = inst_33920);
(statearr_33947_33969[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 15))
{var inst_33916 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33948_33970 = state_33926__$1;(statearr_33948_33970[2] = inst_33916);
(statearr_33948_33970[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_33952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33952[0] = state_machine__5507__auto__);
(statearr_33952[1] = 1);
return statearr_33952;
});
var state_machine__5507__auto____1 = (function (state_33926){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33926);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object))
{var ex__5510__auto__ = e33953;var statearr_33954_33971 = state_33926;(statearr_33954_33971[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33972 = state_33926;
state_33926 = G__33972;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33955 = f__5522__auto__.call(null);(statearr_33955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33956);
return statearr_33955;
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
