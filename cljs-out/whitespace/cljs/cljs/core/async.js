// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47678 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47678 = (function (f,fn_handler,meta47679){
this.f = f;
this.fn_handler = fn_handler;
this.meta47679 = meta47679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47678.cljs$lang$type = true;
cljs.core.async.t47678.cljs$lang$ctorStr = "cljs.core.async/t47678";
cljs.core.async.t47678.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47678");
});
cljs.core.async.t47678.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47680){var self__ = this;
var _47680__$1 = this;return self__.meta47679;
});
cljs.core.async.t47678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47680,meta47679__$1){var self__ = this;
var _47680__$1 = this;return (new cljs.core.async.t47678(self__.f,self__.fn_handler,meta47679__$1));
});
cljs.core.async.__GT_t47678 = (function __GT_t47678(f__$1,fn_handler__$1,meta47679){return (new cljs.core.async.t47678(f__$1,fn_handler__$1,meta47679));
});
}
return (new cljs.core.async.t47678(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47682 = buff;if(G__47682)
{var bit__4189__auto__ = null;if(cljs.core.truth_((function (){var or__3539__auto__ = bit__4189__auto__;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return G__47682.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47682);
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
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
{var val_47683 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47683);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_47683,ret){
return (function (){return fn1.call(null,val_47683);
});})(val_47683,ret))
);
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
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3527__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4395__auto___47684 = n;var x_47685 = 0;while(true){
if((x_47685 < n__4395__auto___47684))
{(a[x_47685] = 0);
{
var G__47686 = (x_47685 + 1);
x_47685 = G__47686;
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
var G__47687 = (i + 1);
i = G__47687;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47691 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47691 = (function (flag,alt_flag,meta47692){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47692 = meta47692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47691.cljs$lang$type = true;
cljs.core.async.t47691.cljs$lang$ctorStr = "cljs.core.async/t47691";
cljs.core.async.t47691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47691");
});})(flag))
;
cljs.core.async.t47691.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t47691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t47691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_47693){var self__ = this;
var _47693__$1 = this;return self__.meta47692;
});})(flag))
;
cljs.core.async.t47691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_47693,meta47692__$1){var self__ = this;
var _47693__$1 = this;return (new cljs.core.async.t47691(self__.flag,self__.alt_flag,meta47692__$1));
});})(flag))
;
cljs.core.async.__GT_t47691 = ((function (flag){
return (function __GT_t47691(flag__$1,alt_flag__$1,meta47692){return (new cljs.core.async.t47691(flag__$1,alt_flag__$1,meta47692));
});})(flag))
;
}
return (new cljs.core.async.t47691(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47697 = (function (cb,flag,alt_handler,meta47698){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47698 = meta47698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47697.cljs$lang$type = true;
cljs.core.async.t47697.cljs$lang$ctorStr = "cljs.core.async/t47697";
cljs.core.async.t47697.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47697");
});
cljs.core.async.t47697.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47699){var self__ = this;
var _47699__$1 = this;return self__.meta47698;
});
cljs.core.async.t47697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47699,meta47698__$1){var self__ = this;
var _47699__$1 = this;return (new cljs.core.async.t47697(self__.cb,self__.flag,self__.alt_handler,meta47698__$1));
});
cljs.core.async.__GT_t47697 = (function __GT_t47697(cb__$1,flag__$1,alt_handler__$1,meta47698){return (new cljs.core.async.t47697(cb__$1,flag__$1,alt_handler__$1,meta47698));
});
}
return (new cljs.core.async.t47697(cb,flag,alt_handler,null));
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
return (function (p1__47700_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47700_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3539__auto__ = wport;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__47701 = (i + 1);
i = G__47701;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3539__auto__ = ret;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__3527__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3527__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3527__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__47702){var map__47704 = p__47702;var map__47704__$1 = ((cljs.core.seq_QMARK_.call(null,map__47704))?cljs.core.apply.call(null,cljs.core.hash_map,map__47704):map__47704);var opts = map__47704__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47702 = null;if (arguments.length > 1) {
  p__47702 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47702);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47705){
var ports = cljs.core.first(arglist__47705);
var p__47702 = cljs.core.rest(arglist__47705);
return alts_BANG___delegate(ports,p__47702);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47713 = (function (ch,f,map_LT_,meta47714){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47714 = meta47714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47713.cljs$lang$type = true;
cljs.core.async.t47713.cljs$lang$ctorStr = "cljs.core.async/t47713";
cljs.core.async.t47713.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47713");
});
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47716 = (function (fn1,_,meta47714,ch,f,map_LT_,meta47717){
this.fn1 = fn1;
this._ = _;
this.meta47714 = meta47714;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47717 = meta47717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47716.cljs$lang$type = true;
cljs.core.async.t47716.cljs$lang$ctorStr = "cljs.core.async/t47716";
cljs.core.async.t47716.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47716");
});})(___$1))
;
cljs.core.async.t47716.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47716.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47716.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t47716.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__47706_SHARP_){return f1.call(null,(((p1__47706_SHARP_ == null))?null:self__.f.call(null,p1__47706_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t47716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_47718){var self__ = this;
var _47718__$1 = this;return self__.meta47717;
});})(___$1))
;
cljs.core.async.t47716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_47718,meta47717__$1){var self__ = this;
var _47718__$1 = this;return (new cljs.core.async.t47716(self__.fn1,self__._,self__.meta47714,self__.ch,self__.f,self__.map_LT_,meta47717__$1));
});})(___$1))
;
cljs.core.async.__GT_t47716 = ((function (___$1){
return (function __GT_t47716(fn1__$1,___$2,meta47714__$1,ch__$2,f__$2,map_LT___$2,meta47717){return (new cljs.core.async.t47716(fn1__$1,___$2,meta47714__$1,ch__$2,f__$2,map_LT___$2,meta47717));
});})(___$1))
;
}
return (new cljs.core.async.t47716(fn1,___$1,self__.meta47714,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3527__auto__ = ret;if(cljs.core.truth_(and__3527__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3527__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47715){var self__ = this;
var _47715__$1 = this;return self__.meta47714;
});
cljs.core.async.t47713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47715,meta47714__$1){var self__ = this;
var _47715__$1 = this;return (new cljs.core.async.t47713(self__.ch,self__.f,self__.map_LT_,meta47714__$1));
});
cljs.core.async.__GT_t47713 = (function __GT_t47713(ch__$1,f__$1,map_LT___$1,meta47714){return (new cljs.core.async.t47713(ch__$1,f__$1,map_LT___$1,meta47714));
});
}
return (new cljs.core.async.t47713(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47722 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47722 = (function (ch,f,map_GT_,meta47723){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47723 = meta47723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47722.cljs$lang$type = true;
cljs.core.async.t47722.cljs$lang$ctorStr = "cljs.core.async/t47722";
cljs.core.async.t47722.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47722");
});
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47724){var self__ = this;
var _47724__$1 = this;return self__.meta47723;
});
cljs.core.async.t47722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47724,meta47723__$1){var self__ = this;
var _47724__$1 = this;return (new cljs.core.async.t47722(self__.ch,self__.f,self__.map_GT_,meta47723__$1));
});
cljs.core.async.__GT_t47722 = (function __GT_t47722(ch__$1,f__$1,map_GT___$1,meta47723){return (new cljs.core.async.t47722(ch__$1,f__$1,map_GT___$1,meta47723));
});
}
return (new cljs.core.async.t47722(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47728 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47728 = (function (ch,p,filter_GT_,meta47729){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47729 = meta47729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47728.cljs$lang$type = true;
cljs.core.async.t47728.cljs$lang$ctorStr = "cljs.core.async/t47728";
cljs.core.async.t47728.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t47728");
});
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47730){var self__ = this;
var _47730__$1 = this;return self__.meta47729;
});
cljs.core.async.t47728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47730,meta47729__$1){var self__ = this;
var _47730__$1 = this;return (new cljs.core.async.t47728(self__.ch,self__.p,self__.filter_GT_,meta47729__$1));
});
cljs.core.async.__GT_t47728 = (function __GT_t47728(ch__$1,p__$1,filter_GT___$1,meta47729){return (new cljs.core.async.t47728(ch__$1,p__$1,filter_GT___$1,meta47729));
});
}
return (new cljs.core.async.t47728(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___47813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___47813,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___47813,out){
return (function (state_47792){var state_val_47793 = (state_47792[1]);if((state_val_47793 === 7))
{var inst_47788 = (state_47792[2]);var state_47792__$1 = state_47792;var statearr_47794_47814 = state_47792__$1;(statearr_47794_47814[2] = inst_47788);
(statearr_47794_47814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 1))
{var state_47792__$1 = state_47792;var statearr_47795_47815 = state_47792__$1;(statearr_47795_47815[2] = null);
(statearr_47795_47815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 4))
{var inst_47774 = (state_47792[7]);var inst_47774__$1 = (state_47792[2]);var inst_47775 = (inst_47774__$1 == null);var state_47792__$1 = (function (){var statearr_47796 = state_47792;(statearr_47796[7] = inst_47774__$1);
return statearr_47796;
})();if(cljs.core.truth_(inst_47775))
{var statearr_47797_47816 = state_47792__$1;(statearr_47797_47816[1] = 5);
} else
{var statearr_47798_47817 = state_47792__$1;(statearr_47798_47817[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 6))
{var inst_47774 = (state_47792[7]);var inst_47779 = p.call(null,inst_47774);var state_47792__$1 = state_47792;if(cljs.core.truth_(inst_47779))
{var statearr_47799_47818 = state_47792__$1;(statearr_47799_47818[1] = 8);
} else
{var statearr_47800_47819 = state_47792__$1;(statearr_47800_47819[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 3))
{var inst_47790 = (state_47792[2]);var state_47792__$1 = state_47792;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47792__$1,inst_47790);
} else
{if((state_val_47793 === 2))
{var state_47792__$1 = state_47792;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47792__$1,4,ch);
} else
{if((state_val_47793 === 11))
{var inst_47782 = (state_47792[2]);var state_47792__$1 = state_47792;var statearr_47801_47820 = state_47792__$1;(statearr_47801_47820[2] = inst_47782);
(statearr_47801_47820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 9))
{var state_47792__$1 = state_47792;var statearr_47802_47821 = state_47792__$1;(statearr_47802_47821[2] = null);
(statearr_47802_47821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 5))
{var inst_47777 = cljs.core.async.close_BANG_.call(null,out);var state_47792__$1 = state_47792;var statearr_47803_47822 = state_47792__$1;(statearr_47803_47822[2] = inst_47777);
(statearr_47803_47822[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 10))
{var inst_47785 = (state_47792[2]);var state_47792__$1 = (function (){var statearr_47804 = state_47792;(statearr_47804[8] = inst_47785);
return statearr_47804;
})();var statearr_47805_47823 = state_47792__$1;(statearr_47805_47823[2] = null);
(statearr_47805_47823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47793 === 8))
{var inst_47774 = (state_47792[7]);var state_47792__$1 = state_47792;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47792__$1,11,out,inst_47774);
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
});})(c__5689__auto___47813,out))
;return ((function (switch__5674__auto__,c__5689__auto___47813,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_47809 = [null,null,null,null,null,null,null,null,null];(statearr_47809[0] = state_machine__5675__auto__);
(statearr_47809[1] = 1);
return statearr_47809;
});
var state_machine__5675__auto____1 = (function (state_47792){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_47792);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e47810){if((e47810 instanceof Object))
{var ex__5678__auto__ = e47810;var statearr_47811_47824 = state_47792;(statearr_47811_47824[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47792);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47825 = state_47792;
state_47792 = G__47825;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_47792){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_47792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___47813,out))
})();var state__5691__auto__ = (function (){var statearr_47812 = f__5690__auto__.call(null);(statearr_47812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___47813);
return statearr_47812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___47813,out))
);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_47977){var state_val_47978 = (state_47977[1]);if((state_val_47978 === 7))
{var inst_47973 = (state_47977[2]);var state_47977__$1 = state_47977;var statearr_47979_48016 = state_47977__$1;(statearr_47979_48016[2] = inst_47973);
(statearr_47979_48016[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 20))
{var inst_47948 = (state_47977[7]);var inst_47959 = (state_47977[2]);var inst_47960 = cljs.core.next.call(null,inst_47948);var inst_47934 = inst_47960;var inst_47935 = null;var inst_47936 = 0;var inst_47937 = 0;var state_47977__$1 = (function (){var statearr_47980 = state_47977;(statearr_47980[8] = inst_47935);
(statearr_47980[9] = inst_47937);
(statearr_47980[10] = inst_47934);
(statearr_47980[11] = inst_47959);
(statearr_47980[12] = inst_47936);
return statearr_47980;
})();var statearr_47981_48017 = state_47977__$1;(statearr_47981_48017[2] = null);
(statearr_47981_48017[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 1))
{var state_47977__$1 = state_47977;var statearr_47982_48018 = state_47977__$1;(statearr_47982_48018[2] = null);
(statearr_47982_48018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 4))
{var inst_47923 = (state_47977[13]);var inst_47923__$1 = (state_47977[2]);var inst_47924 = (inst_47923__$1 == null);var state_47977__$1 = (function (){var statearr_47986 = state_47977;(statearr_47986[13] = inst_47923__$1);
return statearr_47986;
})();if(cljs.core.truth_(inst_47924))
{var statearr_47987_48019 = state_47977__$1;(statearr_47987_48019[1] = 5);
} else
{var statearr_47988_48020 = state_47977__$1;(statearr_47988_48020[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 15))
{var state_47977__$1 = state_47977;var statearr_47989_48021 = state_47977__$1;(statearr_47989_48021[2] = null);
(statearr_47989_48021[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 13))
{var inst_47935 = (state_47977[8]);var inst_47937 = (state_47977[9]);var inst_47934 = (state_47977[10]);var inst_47936 = (state_47977[12]);var inst_47944 = (state_47977[2]);var inst_47945 = (inst_47937 + 1);var tmp47983 = inst_47935;var tmp47984 = inst_47934;var tmp47985 = inst_47936;var inst_47934__$1 = tmp47984;var inst_47935__$1 = tmp47983;var inst_47936__$1 = tmp47985;var inst_47937__$1 = inst_47945;var state_47977__$1 = (function (){var statearr_47990 = state_47977;(statearr_47990[8] = inst_47935__$1);
(statearr_47990[9] = inst_47937__$1);
(statearr_47990[14] = inst_47944);
(statearr_47990[10] = inst_47934__$1);
(statearr_47990[12] = inst_47936__$1);
return statearr_47990;
})();var statearr_47991_48022 = state_47977__$1;(statearr_47991_48022[2] = null);
(statearr_47991_48022[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 6))
{var inst_47923 = (state_47977[13]);var inst_47928 = f.call(null,inst_47923);var inst_47933 = cljs.core.seq.call(null,inst_47928);var inst_47934 = inst_47933;var inst_47935 = null;var inst_47936 = 0;var inst_47937 = 0;var state_47977__$1 = (function (){var statearr_47992 = state_47977;(statearr_47992[8] = inst_47935);
(statearr_47992[9] = inst_47937);
(statearr_47992[10] = inst_47934);
(statearr_47992[12] = inst_47936);
return statearr_47992;
})();var statearr_47993_48023 = state_47977__$1;(statearr_47993_48023[2] = null);
(statearr_47993_48023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 17))
{var inst_47948 = (state_47977[7]);var inst_47952 = cljs.core.chunk_first.call(null,inst_47948);var inst_47953 = cljs.core.chunk_rest.call(null,inst_47948);var inst_47954 = cljs.core.count.call(null,inst_47952);var inst_47934 = inst_47953;var inst_47935 = inst_47952;var inst_47936 = inst_47954;var inst_47937 = 0;var state_47977__$1 = (function (){var statearr_47994 = state_47977;(statearr_47994[8] = inst_47935);
(statearr_47994[9] = inst_47937);
(statearr_47994[10] = inst_47934);
(statearr_47994[12] = inst_47936);
return statearr_47994;
})();var statearr_47995_48024 = state_47977__$1;(statearr_47995_48024[2] = null);
(statearr_47995_48024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 3))
{var inst_47975 = (state_47977[2]);var state_47977__$1 = state_47977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47977__$1,inst_47975);
} else
{if((state_val_47978 === 12))
{var inst_47968 = (state_47977[2]);var state_47977__$1 = state_47977;var statearr_47996_48025 = state_47977__$1;(statearr_47996_48025[2] = inst_47968);
(statearr_47996_48025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 2))
{var state_47977__$1 = state_47977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47977__$1,4,in$);
} else
{if((state_val_47978 === 19))
{var inst_47963 = (state_47977[2]);var state_47977__$1 = state_47977;var statearr_47997_48026 = state_47977__$1;(statearr_47997_48026[2] = inst_47963);
(statearr_47997_48026[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 11))
{var inst_47934 = (state_47977[10]);var inst_47948 = (state_47977[7]);var inst_47948__$1 = cljs.core.seq.call(null,inst_47934);var state_47977__$1 = (function (){var statearr_47998 = state_47977;(statearr_47998[7] = inst_47948__$1);
return statearr_47998;
})();if(inst_47948__$1)
{var statearr_47999_48027 = state_47977__$1;(statearr_47999_48027[1] = 14);
} else
{var statearr_48000_48028 = state_47977__$1;(statearr_48000_48028[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 9))
{var inst_47970 = (state_47977[2]);var state_47977__$1 = (function (){var statearr_48001 = state_47977;(statearr_48001[15] = inst_47970);
return statearr_48001;
})();var statearr_48002_48029 = state_47977__$1;(statearr_48002_48029[2] = null);
(statearr_48002_48029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 5))
{var inst_47926 = cljs.core.async.close_BANG_.call(null,out);var state_47977__$1 = state_47977;var statearr_48003_48030 = state_47977__$1;(statearr_48003_48030[2] = inst_47926);
(statearr_48003_48030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 14))
{var inst_47948 = (state_47977[7]);var inst_47950 = cljs.core.chunked_seq_QMARK_.call(null,inst_47948);var state_47977__$1 = state_47977;if(inst_47950)
{var statearr_48004_48031 = state_47977__$1;(statearr_48004_48031[1] = 17);
} else
{var statearr_48005_48032 = state_47977__$1;(statearr_48005_48032[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 16))
{var inst_47966 = (state_47977[2]);var state_47977__$1 = state_47977;var statearr_48006_48033 = state_47977__$1;(statearr_48006_48033[2] = inst_47966);
(statearr_48006_48033[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47978 === 10))
{var inst_47935 = (state_47977[8]);var inst_47937 = (state_47977[9]);var inst_47942 = cljs.core._nth.call(null,inst_47935,inst_47937);var state_47977__$1 = state_47977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47977__$1,13,out,inst_47942);
} else
{if((state_val_47978 === 18))
{var inst_47948 = (state_47977[7]);var inst_47957 = cljs.core.first.call(null,inst_47948);var state_47977__$1 = state_47977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47977__$1,20,out,inst_47957);
} else
{if((state_val_47978 === 8))
{var inst_47937 = (state_47977[9]);var inst_47936 = (state_47977[12]);var inst_47939 = (inst_47937 < inst_47936);var inst_47940 = inst_47939;var state_47977__$1 = state_47977;if(cljs.core.truth_(inst_47940))
{var statearr_48007_48034 = state_47977__$1;(statearr_48007_48034[1] = 10);
} else
{var statearr_48008_48035 = state_47977__$1;(statearr_48008_48035[1] = 11);
}
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48012[0] = state_machine__5675__auto__);
(statearr_48012[1] = 1);
return statearr_48012;
});
var state_machine__5675__auto____1 = (function (state_47977){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_47977);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48013){if((e48013 instanceof Object))
{var ex__5678__auto__ = e48013;var statearr_48014_48036 = state_47977;(statearr_48014_48036[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48037 = state_47977;
state_47977 = G__48037;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_47977){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_47977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_48015 = f__5690__auto__.call(null);(statearr_48015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_48015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5689__auto___48118 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48118){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48118){
return (function (state_48097){var state_val_48098 = (state_48097[1]);if((state_val_48098 === 7))
{var inst_48093 = (state_48097[2]);var state_48097__$1 = state_48097;var statearr_48099_48119 = state_48097__$1;(statearr_48099_48119[2] = inst_48093);
(statearr_48099_48119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 1))
{var state_48097__$1 = state_48097;var statearr_48100_48120 = state_48097__$1;(statearr_48100_48120[2] = null);
(statearr_48100_48120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 4))
{var inst_48080 = (state_48097[7]);var inst_48080__$1 = (state_48097[2]);var inst_48081 = (inst_48080__$1 == null);var state_48097__$1 = (function (){var statearr_48101 = state_48097;(statearr_48101[7] = inst_48080__$1);
return statearr_48101;
})();if(cljs.core.truth_(inst_48081))
{var statearr_48102_48121 = state_48097__$1;(statearr_48102_48121[1] = 5);
} else
{var statearr_48103_48122 = state_48097__$1;(statearr_48103_48122[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 6))
{var inst_48080 = (state_48097[7]);var state_48097__$1 = state_48097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48097__$1,11,to,inst_48080);
} else
{if((state_val_48098 === 3))
{var inst_48095 = (state_48097[2]);var state_48097__$1 = state_48097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48097__$1,inst_48095);
} else
{if((state_val_48098 === 2))
{var state_48097__$1 = state_48097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48097__$1,4,from);
} else
{if((state_val_48098 === 11))
{var inst_48090 = (state_48097[2]);var state_48097__$1 = (function (){var statearr_48104 = state_48097;(statearr_48104[8] = inst_48090);
return statearr_48104;
})();var statearr_48105_48123 = state_48097__$1;(statearr_48105_48123[2] = null);
(statearr_48105_48123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 9))
{var state_48097__$1 = state_48097;var statearr_48106_48124 = state_48097__$1;(statearr_48106_48124[2] = null);
(statearr_48106_48124[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 5))
{var state_48097__$1 = state_48097;if(cljs.core.truth_(close_QMARK_))
{var statearr_48107_48125 = state_48097__$1;(statearr_48107_48125[1] = 8);
} else
{var statearr_48108_48126 = state_48097__$1;(statearr_48108_48126[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 10))
{var inst_48087 = (state_48097[2]);var state_48097__$1 = state_48097;var statearr_48109_48127 = state_48097__$1;(statearr_48109_48127[2] = inst_48087);
(statearr_48109_48127[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48098 === 8))
{var inst_48084 = cljs.core.async.close_BANG_.call(null,to);var state_48097__$1 = state_48097;var statearr_48110_48128 = state_48097__$1;(statearr_48110_48128[2] = inst_48084);
(statearr_48110_48128[1] = 10);
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
});})(c__5689__auto___48118))
;return ((function (switch__5674__auto__,c__5689__auto___48118){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48114 = [null,null,null,null,null,null,null,null,null];(statearr_48114[0] = state_machine__5675__auto__);
(statearr_48114[1] = 1);
return statearr_48114;
});
var state_machine__5675__auto____1 = (function (state_48097){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48115){if((e48115 instanceof Object))
{var ex__5678__auto__ = e48115;var statearr_48116_48129 = state_48097;(statearr_48116_48129[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48130 = state_48097;
state_48097 = G__48130;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48097){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48118))
})();var state__5691__auto__ = (function (){var statearr_48117 = f__5690__auto__.call(null);(statearr_48117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48118);
return statearr_48117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48118))
);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5689__auto___48217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48217,tc,fc){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48217,tc,fc){
return (function (state_48195){var state_val_48196 = (state_48195[1]);if((state_val_48196 === 7))
{var inst_48191 = (state_48195[2]);var state_48195__$1 = state_48195;var statearr_48197_48218 = state_48195__$1;(statearr_48197_48218[2] = inst_48191);
(statearr_48197_48218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 1))
{var state_48195__$1 = state_48195;var statearr_48198_48219 = state_48195__$1;(statearr_48198_48219[2] = null);
(statearr_48198_48219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 4))
{var inst_48176 = (state_48195[7]);var inst_48176__$1 = (state_48195[2]);var inst_48177 = (inst_48176__$1 == null);var state_48195__$1 = (function (){var statearr_48199 = state_48195;(statearr_48199[7] = inst_48176__$1);
return statearr_48199;
})();if(cljs.core.truth_(inst_48177))
{var statearr_48200_48220 = state_48195__$1;(statearr_48200_48220[1] = 5);
} else
{var statearr_48201_48221 = state_48195__$1;(statearr_48201_48221[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 6))
{var inst_48176 = (state_48195[7]);var inst_48182 = p.call(null,inst_48176);var state_48195__$1 = state_48195;if(cljs.core.truth_(inst_48182))
{var statearr_48202_48222 = state_48195__$1;(statearr_48202_48222[1] = 9);
} else
{var statearr_48203_48223 = state_48195__$1;(statearr_48203_48223[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 3))
{var inst_48193 = (state_48195[2]);var state_48195__$1 = state_48195;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48195__$1,inst_48193);
} else
{if((state_val_48196 === 2))
{var state_48195__$1 = state_48195;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48195__$1,4,ch);
} else
{if((state_val_48196 === 11))
{var inst_48176 = (state_48195[7]);var inst_48186 = (state_48195[2]);var state_48195__$1 = state_48195;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48195__$1,8,inst_48186,inst_48176);
} else
{if((state_val_48196 === 9))
{var state_48195__$1 = state_48195;var statearr_48204_48224 = state_48195__$1;(statearr_48204_48224[2] = tc);
(statearr_48204_48224[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 5))
{var inst_48179 = cljs.core.async.close_BANG_.call(null,tc);var inst_48180 = cljs.core.async.close_BANG_.call(null,fc);var state_48195__$1 = (function (){var statearr_48205 = state_48195;(statearr_48205[8] = inst_48179);
return statearr_48205;
})();var statearr_48206_48225 = state_48195__$1;(statearr_48206_48225[2] = inst_48180);
(statearr_48206_48225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 10))
{var state_48195__$1 = state_48195;var statearr_48207_48226 = state_48195__$1;(statearr_48207_48226[2] = fc);
(statearr_48207_48226[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48196 === 8))
{var inst_48188 = (state_48195[2]);var state_48195__$1 = (function (){var statearr_48208 = state_48195;(statearr_48208[9] = inst_48188);
return statearr_48208;
})();var statearr_48209_48227 = state_48195__$1;(statearr_48209_48227[2] = null);
(statearr_48209_48227[1] = 2);
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
});})(c__5689__auto___48217,tc,fc))
;return ((function (switch__5674__auto__,c__5689__auto___48217,tc,fc){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48213 = [null,null,null,null,null,null,null,null,null,null];(statearr_48213[0] = state_machine__5675__auto__);
(statearr_48213[1] = 1);
return statearr_48213;
});
var state_machine__5675__auto____1 = (function (state_48195){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48195);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48214){if((e48214 instanceof Object))
{var ex__5678__auto__ = e48214;var statearr_48215_48228 = state_48195;(statearr_48215_48228[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48195);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48229 = state_48195;
state_48195 = G__48229;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48195){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48217,tc,fc))
})();var state__5691__auto__ = (function (){var statearr_48216 = f__5690__auto__.call(null);(statearr_48216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48217);
return statearr_48216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48217,tc,fc))
);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_48276){var state_val_48277 = (state_48276[1]);if((state_val_48277 === 7))
{var inst_48272 = (state_48276[2]);var state_48276__$1 = state_48276;var statearr_48278_48294 = state_48276__$1;(statearr_48278_48294[2] = inst_48272);
(statearr_48278_48294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48277 === 6))
{var inst_48265 = (state_48276[7]);var inst_48262 = (state_48276[8]);var inst_48269 = f.call(null,inst_48262,inst_48265);var inst_48262__$1 = inst_48269;var state_48276__$1 = (function (){var statearr_48279 = state_48276;(statearr_48279[8] = inst_48262__$1);
return statearr_48279;
})();var statearr_48280_48295 = state_48276__$1;(statearr_48280_48295[2] = null);
(statearr_48280_48295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48277 === 5))
{var inst_48262 = (state_48276[8]);var state_48276__$1 = state_48276;var statearr_48281_48296 = state_48276__$1;(statearr_48281_48296[2] = inst_48262);
(statearr_48281_48296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48277 === 4))
{var inst_48265 = (state_48276[7]);var inst_48265__$1 = (state_48276[2]);var inst_48266 = (inst_48265__$1 == null);var state_48276__$1 = (function (){var statearr_48282 = state_48276;(statearr_48282[7] = inst_48265__$1);
return statearr_48282;
})();if(cljs.core.truth_(inst_48266))
{var statearr_48283_48297 = state_48276__$1;(statearr_48283_48297[1] = 5);
} else
{var statearr_48284_48298 = state_48276__$1;(statearr_48284_48298[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48277 === 3))
{var inst_48274 = (state_48276[2]);var state_48276__$1 = state_48276;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48276__$1,inst_48274);
} else
{if((state_val_48277 === 2))
{var state_48276__$1 = state_48276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48276__$1,4,ch);
} else
{if((state_val_48277 === 1))
{var inst_48262 = init;var state_48276__$1 = (function (){var statearr_48285 = state_48276;(statearr_48285[8] = inst_48262);
return statearr_48285;
})();var statearr_48286_48299 = state_48276__$1;(statearr_48286_48299[2] = null);
(statearr_48286_48299[1] = 2);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48290 = [null,null,null,null,null,null,null,null,null];(statearr_48290[0] = state_machine__5675__auto__);
(statearr_48290[1] = 1);
return statearr_48290;
});
var state_machine__5675__auto____1 = (function (state_48276){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48276);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48291){if((e48291 instanceof Object))
{var ex__5678__auto__ = e48291;var statearr_48292_48300 = state_48276;(statearr_48292_48300[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48276);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48301 = state_48276;
state_48276 = G__48301;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48276){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_48293 = f__5690__auto__.call(null);(statearr_48293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_48293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5689__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto__){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto__){
return (function (state_48363){var state_val_48364 = (state_48363[1]);if((state_val_48364 === 7))
{var inst_48344 = (state_48363[7]);var inst_48349 = (state_48363[2]);var inst_48350 = cljs.core.next.call(null,inst_48344);var inst_48344__$1 = inst_48350;var state_48363__$1 = (function (){var statearr_48365 = state_48363;(statearr_48365[7] = inst_48344__$1);
(statearr_48365[8] = inst_48349);
return statearr_48365;
})();var statearr_48366_48384 = state_48363__$1;(statearr_48366_48384[2] = null);
(statearr_48366_48384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 1))
{var inst_48343 = cljs.core.seq.call(null,coll);var inst_48344 = inst_48343;var state_48363__$1 = (function (){var statearr_48367 = state_48363;(statearr_48367[7] = inst_48344);
return statearr_48367;
})();var statearr_48368_48385 = state_48363__$1;(statearr_48368_48385[2] = null);
(statearr_48368_48385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 4))
{var inst_48344 = (state_48363[7]);var inst_48347 = cljs.core.first.call(null,inst_48344);var state_48363__$1 = state_48363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48363__$1,7,ch,inst_48347);
} else
{if((state_val_48364 === 6))
{var inst_48359 = (state_48363[2]);var state_48363__$1 = state_48363;var statearr_48369_48386 = state_48363__$1;(statearr_48369_48386[2] = inst_48359);
(statearr_48369_48386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 3))
{var inst_48361 = (state_48363[2]);var state_48363__$1 = state_48363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48363__$1,inst_48361);
} else
{if((state_val_48364 === 2))
{var inst_48344 = (state_48363[7]);var state_48363__$1 = state_48363;if(cljs.core.truth_(inst_48344))
{var statearr_48370_48387 = state_48363__$1;(statearr_48370_48387[1] = 4);
} else
{var statearr_48371_48388 = state_48363__$1;(statearr_48371_48388[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 9))
{var state_48363__$1 = state_48363;var statearr_48372_48389 = state_48363__$1;(statearr_48372_48389[2] = null);
(statearr_48372_48389[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 5))
{var state_48363__$1 = state_48363;if(cljs.core.truth_(close_QMARK_))
{var statearr_48373_48390 = state_48363__$1;(statearr_48373_48390[1] = 8);
} else
{var statearr_48374_48391 = state_48363__$1;(statearr_48374_48391[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 10))
{var inst_48357 = (state_48363[2]);var state_48363__$1 = state_48363;var statearr_48375_48392 = state_48363__$1;(statearr_48375_48392[2] = inst_48357);
(statearr_48375_48392[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48364 === 8))
{var inst_48354 = cljs.core.async.close_BANG_.call(null,ch);var state_48363__$1 = state_48363;var statearr_48376_48393 = state_48363__$1;(statearr_48376_48393[2] = inst_48354);
(statearr_48376_48393[1] = 10);
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
});})(c__5689__auto__))
;return ((function (switch__5674__auto__,c__5689__auto__){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48380 = [null,null,null,null,null,null,null,null,null];(statearr_48380[0] = state_machine__5675__auto__);
(statearr_48380[1] = 1);
return statearr_48380;
});
var state_machine__5675__auto____1 = (function (state_48363){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48381){if((e48381 instanceof Object))
{var ex__5678__auto__ = e48381;var statearr_48382_48394 = state_48363;(statearr_48382_48394[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48395 = state_48363;
state_48363 = G__48395;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48363){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto__))
})();var state__5691__auto__ = (function (){var statearr_48383 = f__5690__auto__.call(null);(statearr_48383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto__);
return statearr_48383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto__))
);
return c__5689__auto__;
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
cljs.core.async.Mux = (function (){var obj48397 = {};return obj48397;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3527__auto__ = _;if(and__3527__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4166__auto__ = (((_ == null))?null:_);return (function (){var or__3539__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj48399 = {};return obj48399;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t48623 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48623 = (function (cs,ch,mult,meta48624){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta48624 = meta48624;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48623.cljs$lang$type = true;
cljs.core.async.t48623.cljs$lang$ctorStr = "cljs.core.async/t48623";
cljs.core.async.t48623.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t48623");
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t48623.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48625){var self__ = this;
var _48625__$1 = this;return self__.meta48624;
});})(cs))
;
cljs.core.async.t48623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48625,meta48624__$1){var self__ = this;
var _48625__$1 = this;return (new cljs.core.async.t48623(self__.cs,self__.ch,self__.mult,meta48624__$1));
});})(cs))
;
cljs.core.async.__GT_t48623 = ((function (cs){
return (function __GT_t48623(cs__$1,ch__$1,mult__$1,meta48624){return (new cljs.core.async.t48623(cs__$1,ch__$1,mult__$1,meta48624));
});})(cs))
;
}
return (new cljs.core.async.t48623(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5689__auto___48846 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___48846,cs,m,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___48846,cs,m,dchan,dctr,done){
return (function (state_48760){var state_val_48761 = (state_48760[1]);if((state_val_48761 === 7))
{var inst_48756 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48762_48847 = state_48760__$1;(statearr_48762_48847[2] = inst_48756);
(statearr_48762_48847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 20))
{var inst_48657 = (state_48760[7]);var inst_48667 = cljs.core.first.call(null,inst_48657);var inst_48668 = cljs.core.nth.call(null,inst_48667,0,null);var inst_48669 = cljs.core.nth.call(null,inst_48667,1,null);var state_48760__$1 = (function (){var statearr_48763 = state_48760;(statearr_48763[8] = inst_48668);
return statearr_48763;
})();if(cljs.core.truth_(inst_48669))
{var statearr_48764_48848 = state_48760__$1;(statearr_48764_48848[1] = 22);
} else
{var statearr_48765_48849 = state_48760__$1;(statearr_48765_48849[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 27))
{var inst_48697 = (state_48760[9]);var inst_48699 = (state_48760[10]);var inst_48704 = cljs.core._nth.call(null,inst_48697,inst_48699);var state_48760__$1 = (function (){var statearr_48766 = state_48760;(statearr_48766[11] = inst_48704);
return statearr_48766;
})();var statearr_48767_48850 = state_48760__$1;(statearr_48767_48850[2] = null);
(statearr_48767_48850[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 1))
{var state_48760__$1 = state_48760;var statearr_48768_48851 = state_48760__$1;(statearr_48768_48851[2] = null);
(statearr_48768_48851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 24))
{var inst_48657 = (state_48760[7]);var inst_48674 = (state_48760[2]);var inst_48675 = cljs.core.next.call(null,inst_48657);var inst_48637 = inst_48675;var inst_48638 = null;var inst_48639 = 0;var inst_48640 = 0;var state_48760__$1 = (function (){var statearr_48769 = state_48760;(statearr_48769[12] = inst_48674);
(statearr_48769[13] = inst_48638);
(statearr_48769[14] = inst_48640);
(statearr_48769[15] = inst_48637);
(statearr_48769[16] = inst_48639);
return statearr_48769;
})();var statearr_48770_48852 = state_48760__$1;(statearr_48770_48852[2] = null);
(statearr_48770_48852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 39))
{var inst_48717 = (state_48760[17]);var inst_48735 = (state_48760[2]);var inst_48736 = cljs.core.next.call(null,inst_48717);var inst_48696 = inst_48736;var inst_48697 = null;var inst_48698 = 0;var inst_48699 = 0;var state_48760__$1 = (function (){var statearr_48774 = state_48760;(statearr_48774[18] = inst_48735);
(statearr_48774[9] = inst_48697);
(statearr_48774[10] = inst_48699);
(statearr_48774[19] = inst_48698);
(statearr_48774[20] = inst_48696);
return statearr_48774;
})();var statearr_48775_48853 = state_48760__$1;(statearr_48775_48853[2] = null);
(statearr_48775_48853[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 4))
{var inst_48628 = (state_48760[21]);var inst_48628__$1 = (state_48760[2]);var inst_48629 = (inst_48628__$1 == null);var state_48760__$1 = (function (){var statearr_48776 = state_48760;(statearr_48776[21] = inst_48628__$1);
return statearr_48776;
})();if(cljs.core.truth_(inst_48629))
{var statearr_48777_48854 = state_48760__$1;(statearr_48777_48854[1] = 5);
} else
{var statearr_48778_48855 = state_48760__$1;(statearr_48778_48855[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 15))
{var inst_48638 = (state_48760[13]);var inst_48640 = (state_48760[14]);var inst_48637 = (state_48760[15]);var inst_48639 = (state_48760[16]);var inst_48653 = (state_48760[2]);var inst_48654 = (inst_48640 + 1);var tmp48771 = inst_48638;var tmp48772 = inst_48637;var tmp48773 = inst_48639;var inst_48637__$1 = tmp48772;var inst_48638__$1 = tmp48771;var inst_48639__$1 = tmp48773;var inst_48640__$1 = inst_48654;var state_48760__$1 = (function (){var statearr_48779 = state_48760;(statearr_48779[13] = inst_48638__$1);
(statearr_48779[14] = inst_48640__$1);
(statearr_48779[15] = inst_48637__$1);
(statearr_48779[22] = inst_48653);
(statearr_48779[16] = inst_48639__$1);
return statearr_48779;
})();var statearr_48780_48856 = state_48760__$1;(statearr_48780_48856[2] = null);
(statearr_48780_48856[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 21))
{var inst_48678 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48781_48857 = state_48760__$1;(statearr_48781_48857[2] = inst_48678);
(statearr_48781_48857[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 31))
{var inst_48704 = (state_48760[11]);var inst_48705 = (state_48760[2]);var inst_48706 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48707 = cljs.core.async.untap_STAR_.call(null,m,inst_48704);var state_48760__$1 = (function (){var statearr_48782 = state_48760;(statearr_48782[23] = inst_48706);
(statearr_48782[24] = inst_48705);
return statearr_48782;
})();var statearr_48783_48858 = state_48760__$1;(statearr_48783_48858[2] = inst_48707);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 32))
{var inst_48628 = (state_48760[21]);var inst_48704 = (state_48760[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48760,31,Object,null,30);var inst_48711 = cljs.core.async.put_BANG_.call(null,inst_48704,inst_48628,done);var state_48760__$1 = state_48760;var statearr_48784_48859 = state_48760__$1;(statearr_48784_48859[2] = inst_48711);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 40))
{var inst_48726 = (state_48760[25]);var inst_48727 = (state_48760[2]);var inst_48728 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48729 = cljs.core.async.untap_STAR_.call(null,m,inst_48726);var state_48760__$1 = (function (){var statearr_48785 = state_48760;(statearr_48785[26] = inst_48727);
(statearr_48785[27] = inst_48728);
return statearr_48785;
})();var statearr_48786_48860 = state_48760__$1;(statearr_48786_48860[2] = inst_48729);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 33))
{var inst_48717 = (state_48760[17]);var inst_48719 = cljs.core.chunked_seq_QMARK_.call(null,inst_48717);var state_48760__$1 = state_48760;if(inst_48719)
{var statearr_48787_48861 = state_48760__$1;(statearr_48787_48861[1] = 36);
} else
{var statearr_48788_48862 = state_48760__$1;(statearr_48788_48862[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 13))
{var inst_48647 = (state_48760[28]);var inst_48650 = cljs.core.async.close_BANG_.call(null,inst_48647);var state_48760__$1 = state_48760;var statearr_48789_48863 = state_48760__$1;(statearr_48789_48863[2] = inst_48650);
(statearr_48789_48863[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 22))
{var inst_48668 = (state_48760[8]);var inst_48671 = cljs.core.async.close_BANG_.call(null,inst_48668);var state_48760__$1 = state_48760;var statearr_48790_48864 = state_48760__$1;(statearr_48790_48864[2] = inst_48671);
(statearr_48790_48864[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 36))
{var inst_48717 = (state_48760[17]);var inst_48721 = cljs.core.chunk_first.call(null,inst_48717);var inst_48722 = cljs.core.chunk_rest.call(null,inst_48717);var inst_48723 = cljs.core.count.call(null,inst_48721);var inst_48696 = inst_48722;var inst_48697 = inst_48721;var inst_48698 = inst_48723;var inst_48699 = 0;var state_48760__$1 = (function (){var statearr_48791 = state_48760;(statearr_48791[9] = inst_48697);
(statearr_48791[10] = inst_48699);
(statearr_48791[19] = inst_48698);
(statearr_48791[20] = inst_48696);
return statearr_48791;
})();var statearr_48792_48865 = state_48760__$1;(statearr_48792_48865[2] = null);
(statearr_48792_48865[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 41))
{var inst_48628 = (state_48760[21]);var inst_48726 = (state_48760[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48760,40,Object,null,39);var inst_48733 = cljs.core.async.put_BANG_.call(null,inst_48726,inst_48628,done);var state_48760__$1 = state_48760;var statearr_48793_48866 = state_48760__$1;(statearr_48793_48866[2] = inst_48733);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48760__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 43))
{var state_48760__$1 = state_48760;var statearr_48794_48867 = state_48760__$1;(statearr_48794_48867[2] = null);
(statearr_48794_48867[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 29))
{var inst_48744 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48795_48868 = state_48760__$1;(statearr_48795_48868[2] = inst_48744);
(statearr_48795_48868[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 44))
{var inst_48753 = (state_48760[2]);var state_48760__$1 = (function (){var statearr_48796 = state_48760;(statearr_48796[29] = inst_48753);
return statearr_48796;
})();var statearr_48797_48869 = state_48760__$1;(statearr_48797_48869[2] = null);
(statearr_48797_48869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 6))
{var inst_48688 = (state_48760[30]);var inst_48687 = cljs.core.deref.call(null,cs);var inst_48688__$1 = cljs.core.keys.call(null,inst_48687);var inst_48689 = cljs.core.count.call(null,inst_48688__$1);var inst_48690 = cljs.core.reset_BANG_.call(null,dctr,inst_48689);var inst_48695 = cljs.core.seq.call(null,inst_48688__$1);var inst_48696 = inst_48695;var inst_48697 = null;var inst_48698 = 0;var inst_48699 = 0;var state_48760__$1 = (function (){var statearr_48798 = state_48760;(statearr_48798[30] = inst_48688__$1);
(statearr_48798[9] = inst_48697);
(statearr_48798[10] = inst_48699);
(statearr_48798[31] = inst_48690);
(statearr_48798[19] = inst_48698);
(statearr_48798[20] = inst_48696);
return statearr_48798;
})();var statearr_48799_48870 = state_48760__$1;(statearr_48799_48870[2] = null);
(statearr_48799_48870[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 28))
{var inst_48696 = (state_48760[20]);var inst_48717 = (state_48760[17]);var inst_48717__$1 = cljs.core.seq.call(null,inst_48696);var state_48760__$1 = (function (){var statearr_48800 = state_48760;(statearr_48800[17] = inst_48717__$1);
return statearr_48800;
})();if(inst_48717__$1)
{var statearr_48801_48871 = state_48760__$1;(statearr_48801_48871[1] = 33);
} else
{var statearr_48802_48872 = state_48760__$1;(statearr_48802_48872[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 25))
{var inst_48699 = (state_48760[10]);var inst_48698 = (state_48760[19]);var inst_48701 = (inst_48699 < inst_48698);var inst_48702 = inst_48701;var state_48760__$1 = state_48760;if(cljs.core.truth_(inst_48702))
{var statearr_48803_48873 = state_48760__$1;(statearr_48803_48873[1] = 27);
} else
{var statearr_48804_48874 = state_48760__$1;(statearr_48804_48874[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 34))
{var state_48760__$1 = state_48760;var statearr_48805_48875 = state_48760__$1;(statearr_48805_48875[2] = null);
(statearr_48805_48875[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 17))
{var state_48760__$1 = state_48760;var statearr_48806_48876 = state_48760__$1;(statearr_48806_48876[2] = null);
(statearr_48806_48876[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 3))
{var inst_48758 = (state_48760[2]);var state_48760__$1 = state_48760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48760__$1,inst_48758);
} else
{if((state_val_48761 === 12))
{var inst_48683 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48807_48877 = state_48760__$1;(statearr_48807_48877[2] = inst_48683);
(statearr_48807_48877[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 2))
{var state_48760__$1 = state_48760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48760__$1,4,ch);
} else
{if((state_val_48761 === 23))
{var state_48760__$1 = state_48760;var statearr_48808_48878 = state_48760__$1;(statearr_48808_48878[2] = null);
(statearr_48808_48878[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 35))
{var inst_48742 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48809_48879 = state_48760__$1;(statearr_48809_48879[2] = inst_48742);
(statearr_48809_48879[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 19))
{var inst_48657 = (state_48760[7]);var inst_48661 = cljs.core.chunk_first.call(null,inst_48657);var inst_48662 = cljs.core.chunk_rest.call(null,inst_48657);var inst_48663 = cljs.core.count.call(null,inst_48661);var inst_48637 = inst_48662;var inst_48638 = inst_48661;var inst_48639 = inst_48663;var inst_48640 = 0;var state_48760__$1 = (function (){var statearr_48810 = state_48760;(statearr_48810[13] = inst_48638);
(statearr_48810[14] = inst_48640);
(statearr_48810[15] = inst_48637);
(statearr_48810[16] = inst_48639);
return statearr_48810;
})();var statearr_48811_48880 = state_48760__$1;(statearr_48811_48880[2] = null);
(statearr_48811_48880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 11))
{var inst_48657 = (state_48760[7]);var inst_48637 = (state_48760[15]);var inst_48657__$1 = cljs.core.seq.call(null,inst_48637);var state_48760__$1 = (function (){var statearr_48812 = state_48760;(statearr_48812[7] = inst_48657__$1);
return statearr_48812;
})();if(inst_48657__$1)
{var statearr_48813_48881 = state_48760__$1;(statearr_48813_48881[1] = 16);
} else
{var statearr_48814_48882 = state_48760__$1;(statearr_48814_48882[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 9))
{var inst_48685 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48815_48883 = state_48760__$1;(statearr_48815_48883[2] = inst_48685);
(statearr_48815_48883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 5))
{var inst_48635 = cljs.core.deref.call(null,cs);var inst_48636 = cljs.core.seq.call(null,inst_48635);var inst_48637 = inst_48636;var inst_48638 = null;var inst_48639 = 0;var inst_48640 = 0;var state_48760__$1 = (function (){var statearr_48816 = state_48760;(statearr_48816[13] = inst_48638);
(statearr_48816[14] = inst_48640);
(statearr_48816[15] = inst_48637);
(statearr_48816[16] = inst_48639);
return statearr_48816;
})();var statearr_48817_48884 = state_48760__$1;(statearr_48817_48884[2] = null);
(statearr_48817_48884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 14))
{var state_48760__$1 = state_48760;var statearr_48818_48885 = state_48760__$1;(statearr_48818_48885[2] = null);
(statearr_48818_48885[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 45))
{var inst_48750 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48819_48886 = state_48760__$1;(statearr_48819_48886[2] = inst_48750);
(statearr_48819_48886[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 26))
{var inst_48688 = (state_48760[30]);var inst_48746 = (state_48760[2]);var inst_48747 = cljs.core.seq.call(null,inst_48688);var state_48760__$1 = (function (){var statearr_48820 = state_48760;(statearr_48820[32] = inst_48746);
return statearr_48820;
})();if(inst_48747)
{var statearr_48821_48887 = state_48760__$1;(statearr_48821_48887[1] = 42);
} else
{var statearr_48822_48888 = state_48760__$1;(statearr_48822_48888[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 16))
{var inst_48657 = (state_48760[7]);var inst_48659 = cljs.core.chunked_seq_QMARK_.call(null,inst_48657);var state_48760__$1 = state_48760;if(inst_48659)
{var statearr_48826_48889 = state_48760__$1;(statearr_48826_48889[1] = 19);
} else
{var statearr_48827_48890 = state_48760__$1;(statearr_48827_48890[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 38))
{var inst_48739 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48828_48891 = state_48760__$1;(statearr_48828_48891[2] = inst_48739);
(statearr_48828_48891[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 30))
{var inst_48697 = (state_48760[9]);var inst_48699 = (state_48760[10]);var inst_48698 = (state_48760[19]);var inst_48696 = (state_48760[20]);var inst_48713 = (state_48760[2]);var inst_48714 = (inst_48699 + 1);var tmp48823 = inst_48697;var tmp48824 = inst_48698;var tmp48825 = inst_48696;var inst_48696__$1 = tmp48825;var inst_48697__$1 = tmp48823;var inst_48698__$1 = tmp48824;var inst_48699__$1 = inst_48714;var state_48760__$1 = (function (){var statearr_48829 = state_48760;(statearr_48829[9] = inst_48697__$1);
(statearr_48829[10] = inst_48699__$1);
(statearr_48829[19] = inst_48698__$1);
(statearr_48829[20] = inst_48696__$1);
(statearr_48829[33] = inst_48713);
return statearr_48829;
})();var statearr_48830_48892 = state_48760__$1;(statearr_48830_48892[2] = null);
(statearr_48830_48892[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 10))
{var inst_48638 = (state_48760[13]);var inst_48640 = (state_48760[14]);var inst_48646 = cljs.core._nth.call(null,inst_48638,inst_48640);var inst_48647 = cljs.core.nth.call(null,inst_48646,0,null);var inst_48648 = cljs.core.nth.call(null,inst_48646,1,null);var state_48760__$1 = (function (){var statearr_48831 = state_48760;(statearr_48831[28] = inst_48647);
return statearr_48831;
})();if(cljs.core.truth_(inst_48648))
{var statearr_48832_48893 = state_48760__$1;(statearr_48832_48893[1] = 13);
} else
{var statearr_48833_48894 = state_48760__$1;(statearr_48833_48894[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 18))
{var inst_48681 = (state_48760[2]);var state_48760__$1 = state_48760;var statearr_48834_48895 = state_48760__$1;(statearr_48834_48895[2] = inst_48681);
(statearr_48834_48895[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 42))
{var state_48760__$1 = state_48760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48760__$1,45,dchan);
} else
{if((state_val_48761 === 37))
{var inst_48717 = (state_48760[17]);var inst_48726 = cljs.core.first.call(null,inst_48717);var state_48760__$1 = (function (){var statearr_48835 = state_48760;(statearr_48835[25] = inst_48726);
return statearr_48835;
})();var statearr_48836_48896 = state_48760__$1;(statearr_48836_48896[2] = null);
(statearr_48836_48896[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48761 === 8))
{var inst_48640 = (state_48760[14]);var inst_48639 = (state_48760[16]);var inst_48642 = (inst_48640 < inst_48639);var inst_48643 = inst_48642;var state_48760__$1 = state_48760;if(cljs.core.truth_(inst_48643))
{var statearr_48837_48897 = state_48760__$1;(statearr_48837_48897[1] = 10);
} else
{var statearr_48838_48898 = state_48760__$1;(statearr_48838_48898[1] = 11);
}
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
});})(c__5689__auto___48846,cs,m,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___48846,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_48842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48842[0] = state_machine__5675__auto__);
(statearr_48842[1] = 1);
return statearr_48842;
});
var state_machine__5675__auto____1 = (function (state_48760){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_48760);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e48843){if((e48843 instanceof Object))
{var ex__5678__auto__ = e48843;var statearr_48844_48899 = state_48760;(statearr_48844_48899[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48760);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48900 = state_48760;
state_48760 = G__48900;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_48760){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_48760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___48846,cs,m,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_48845 = f__5690__auto__.call(null);(statearr_48845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___48846);
return statearr_48845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___48846,cs,m,dchan,dctr,done))
);
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
cljs.core.async.Mix = (function (){var obj48902 = {};return obj48902;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3527__auto__ = m;if(and__3527__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4166__auto__ = (((m == null))?null:m);return (function (){var or__3539__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t49012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49012 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49013){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49013 = meta49013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49012.cljs$lang$type = true;
cljs.core.async.t49012.cljs$lang$ctorStr = "cljs.core.async/t49012";
cljs.core.async.t49012.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t49012");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49014){var self__ = this;
var _49014__$1 = this;return self__.meta49013;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49014,meta49013__$1){var self__ = this;
var _49014__$1 = this;return (new cljs.core.async.t49012(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49013__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t49012 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t49012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49013){return (new cljs.core.async.t49012(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49013));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t49012(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5689__auto___49121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49079){var state_val_49080 = (state_49079[1]);if((state_val_49080 === 7))
{var inst_49028 = (state_49079[7]);var inst_49033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49028);var state_49079__$1 = state_49079;var statearr_49081_49122 = state_49079__$1;(statearr_49081_49122[2] = inst_49033);
(statearr_49081_49122[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 20))
{var inst_49043 = (state_49079[8]);var state_49079__$1 = state_49079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49079__$1,23,out,inst_49043);
} else
{if((state_val_49080 === 1))
{var inst_49018 = (state_49079[9]);var inst_49018__$1 = calc_state.call(null);var inst_49019 = cljs.core.seq_QMARK_.call(null,inst_49018__$1);var state_49079__$1 = (function (){var statearr_49082 = state_49079;(statearr_49082[9] = inst_49018__$1);
return statearr_49082;
})();if(inst_49019)
{var statearr_49083_49123 = state_49079__$1;(statearr_49083_49123[1] = 2);
} else
{var statearr_49084_49124 = state_49079__$1;(statearr_49084_49124[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 4))
{var inst_49018 = (state_49079[9]);var inst_49024 = (state_49079[2]);var inst_49025 = cljs.core.get.call(null,inst_49024,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49026 = cljs.core.get.call(null,inst_49024,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49027 = cljs.core.get.call(null,inst_49024,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_49028 = inst_49018;var state_49079__$1 = (function (){var statearr_49085 = state_49079;(statearr_49085[10] = inst_49026);
(statearr_49085[11] = inst_49025);
(statearr_49085[12] = inst_49027);
(statearr_49085[7] = inst_49028);
return statearr_49085;
})();var statearr_49086_49125 = state_49079__$1;(statearr_49086_49125[2] = null);
(statearr_49086_49125[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 15))
{var state_49079__$1 = state_49079;var statearr_49087_49126 = state_49079__$1;(statearr_49087_49126[2] = null);
(statearr_49087_49126[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 21))
{var state_49079__$1 = state_49079;var statearr_49088_49127 = state_49079__$1;(statearr_49088_49127[2] = null);
(statearr_49088_49127[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 13))
{var inst_49075 = (state_49079[2]);var state_49079__$1 = state_49079;var statearr_49089_49128 = state_49079__$1;(statearr_49089_49128[2] = inst_49075);
(statearr_49089_49128[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 22))
{var inst_49036 = (state_49079[13]);var inst_49072 = (state_49079[2]);var inst_49028 = inst_49036;var state_49079__$1 = (function (){var statearr_49090 = state_49079;(statearr_49090[14] = inst_49072);
(statearr_49090[7] = inst_49028);
return statearr_49090;
})();var statearr_49091_49129 = state_49079__$1;(statearr_49091_49129[2] = null);
(statearr_49091_49129[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 6))
{var inst_49077 = (state_49079[2]);var state_49079__$1 = state_49079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49079__$1,inst_49077);
} else
{if((state_val_49080 === 17))
{var inst_49058 = (state_49079[15]);var state_49079__$1 = state_49079;var statearr_49092_49130 = state_49079__$1;(statearr_49092_49130[2] = inst_49058);
(statearr_49092_49130[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 3))
{var inst_49018 = (state_49079[9]);var state_49079__$1 = state_49079;var statearr_49093_49131 = state_49079__$1;(statearr_49093_49131[2] = inst_49018);
(statearr_49093_49131[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 12))
{var inst_49039 = (state_49079[16]);var inst_49044 = (state_49079[17]);var inst_49058 = (state_49079[15]);var inst_49058__$1 = inst_49039.call(null,inst_49044);var state_49079__$1 = (function (){var statearr_49094 = state_49079;(statearr_49094[15] = inst_49058__$1);
return statearr_49094;
})();if(cljs.core.truth_(inst_49058__$1))
{var statearr_49095_49132 = state_49079__$1;(statearr_49095_49132[1] = 17);
} else
{var statearr_49096_49133 = state_49079__$1;(statearr_49096_49133[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 2))
{var inst_49018 = (state_49079[9]);var inst_49021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49018);var state_49079__$1 = state_49079;var statearr_49097_49134 = state_49079__$1;(statearr_49097_49134[2] = inst_49021);
(statearr_49097_49134[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 23))
{var inst_49069 = (state_49079[2]);var state_49079__$1 = state_49079;var statearr_49098_49135 = state_49079__$1;(statearr_49098_49135[2] = inst_49069);
(statearr_49098_49135[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 19))
{var inst_49066 = (state_49079[2]);var state_49079__$1 = state_49079;if(cljs.core.truth_(inst_49066))
{var statearr_49099_49136 = state_49079__$1;(statearr_49099_49136[1] = 20);
} else
{var statearr_49100_49137 = state_49079__$1;(statearr_49100_49137[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 11))
{var inst_49043 = (state_49079[8]);var inst_49049 = (inst_49043 == null);var state_49079__$1 = state_49079;if(cljs.core.truth_(inst_49049))
{var statearr_49101_49138 = state_49079__$1;(statearr_49101_49138[1] = 14);
} else
{var statearr_49102_49139 = state_49079__$1;(statearr_49102_49139[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 9))
{var inst_49036 = (state_49079[13]);var inst_49036__$1 = (state_49079[2]);var inst_49037 = cljs.core.get.call(null,inst_49036__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_49038 = cljs.core.get.call(null,inst_49036__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_49039 = cljs.core.get.call(null,inst_49036__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_49079__$1 = (function (){var statearr_49103 = state_49079;(statearr_49103[16] = inst_49039);
(statearr_49103[13] = inst_49036__$1);
(statearr_49103[18] = inst_49038);
return statearr_49103;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49079__$1,10,inst_49037);
} else
{if((state_val_49080 === 5))
{var inst_49028 = (state_49079[7]);var inst_49031 = cljs.core.seq_QMARK_.call(null,inst_49028);var state_49079__$1 = state_49079;if(inst_49031)
{var statearr_49104_49140 = state_49079__$1;(statearr_49104_49140[1] = 7);
} else
{var statearr_49105_49141 = state_49079__$1;(statearr_49105_49141[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 14))
{var inst_49044 = (state_49079[17]);var inst_49051 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49044);var state_49079__$1 = state_49079;var statearr_49106_49142 = state_49079__$1;(statearr_49106_49142[2] = inst_49051);
(statearr_49106_49142[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 16))
{var inst_49054 = (state_49079[2]);var inst_49055 = calc_state.call(null);var inst_49028 = inst_49055;var state_49079__$1 = (function (){var statearr_49107 = state_49079;(statearr_49107[19] = inst_49054);
(statearr_49107[7] = inst_49028);
return statearr_49107;
})();var statearr_49108_49143 = state_49079__$1;(statearr_49108_49143[2] = null);
(statearr_49108_49143[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 10))
{var inst_49044 = (state_49079[17]);var inst_49043 = (state_49079[8]);var inst_49042 = (state_49079[2]);var inst_49043__$1 = cljs.core.nth.call(null,inst_49042,0,null);var inst_49044__$1 = cljs.core.nth.call(null,inst_49042,1,null);var inst_49045 = (inst_49043__$1 == null);var inst_49046 = cljs.core._EQ_.call(null,inst_49044__$1,change);var inst_49047 = (inst_49045) || (inst_49046);var state_49079__$1 = (function (){var statearr_49109 = state_49079;(statearr_49109[17] = inst_49044__$1);
(statearr_49109[8] = inst_49043__$1);
return statearr_49109;
})();if(cljs.core.truth_(inst_49047))
{var statearr_49110_49144 = state_49079__$1;(statearr_49110_49144[1] = 11);
} else
{var statearr_49111_49145 = state_49079__$1;(statearr_49111_49145[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 18))
{var inst_49039 = (state_49079[16]);var inst_49044 = (state_49079[17]);var inst_49038 = (state_49079[18]);var inst_49061 = cljs.core.empty_QMARK_.call(null,inst_49039);var inst_49062 = inst_49038.call(null,inst_49044);var inst_49063 = cljs.core.not.call(null,inst_49062);var inst_49064 = (inst_49061) && (inst_49063);var state_49079__$1 = state_49079;var statearr_49112_49146 = state_49079__$1;(statearr_49112_49146[2] = inst_49064);
(statearr_49112_49146[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49080 === 8))
{var inst_49028 = (state_49079[7]);var state_49079__$1 = state_49079;var statearr_49113_49147 = state_49079__$1;(statearr_49113_49147[2] = inst_49028);
(statearr_49113_49147[1] = 9);
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
});})(c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5674__auto__,c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49117[0] = state_machine__5675__auto__);
(statearr_49117[1] = 1);
return statearr_49117;
});
var state_machine__5675__auto____1 = (function (state_49079){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49118){if((e49118 instanceof Object))
{var ex__5678__auto__ = e49118;var statearr_49119_49148 = state_49079;(statearr_49119_49148[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49149 = state_49079;
state_49079 = G__49149;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49079){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5691__auto__ = (function (){var statearr_49120 = f__5690__auto__.call(null);(statearr_49120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49121);
return statearr_49120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49121,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
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
cljs.core.async.Pub = (function (){var obj49151 = {};return obj49151;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3527__auto__ = p;if(and__3527__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3527__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4166__auto__ = (((p == null))?null:p);return (function (){var or__3539__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
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
return (function (topic){var or__3539__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3539__auto__,mults){
return (function (p1__49152_SHARP_){if(cljs.core.truth_(p1__49152_SHARP_.call(null,topic)))
{return p1__49152_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__49152_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3539__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t49277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49277 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49278){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49278 = meta49278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49277.cljs$lang$type = true;
cljs.core.async.t49277.cljs$lang$ctorStr = "cljs.core.async/t49277";
cljs.core.async.t49277.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"cljs.core.async/t49277");
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t49277.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49279){var self__ = this;
var _49279__$1 = this;return self__.meta49278;
});})(mults,ensure_mult))
;
cljs.core.async.t49277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49279,meta49278__$1){var self__ = this;
var _49279__$1 = this;return (new cljs.core.async.t49277(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49278__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t49277 = ((function (mults,ensure_mult){
return (function __GT_t49277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49278){return (new cljs.core.async.t49277(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49278));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t49277(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5689__auto___49401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49401,mults,ensure_mult,p){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49401,mults,ensure_mult,p){
return (function (state_49353){var state_val_49354 = (state_49353[1]);if((state_val_49354 === 7))
{var inst_49349 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49355_49402 = state_49353__$1;(statearr_49355_49402[2] = inst_49349);
(statearr_49355_49402[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 20))
{var state_49353__$1 = state_49353;var statearr_49356_49403 = state_49353__$1;(statearr_49356_49403[2] = null);
(statearr_49356_49403[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 1))
{var state_49353__$1 = state_49353;var statearr_49357_49404 = state_49353__$1;(statearr_49357_49404[2] = null);
(statearr_49357_49404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 24))
{var inst_49332 = (state_49353[7]);var inst_49282 = (state_49353[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49353,23,Object,null,22);var inst_49339 = cljs.core.async.muxch_STAR_.call(null,inst_49332);var state_49353__$1 = state_49353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49353__$1,25,inst_49339,inst_49282);
} else
{if((state_val_49354 === 4))
{var inst_49282 = (state_49353[8]);var inst_49282__$1 = (state_49353[2]);var inst_49283 = (inst_49282__$1 == null);var state_49353__$1 = (function (){var statearr_49358 = state_49353;(statearr_49358[8] = inst_49282__$1);
return statearr_49358;
})();if(cljs.core.truth_(inst_49283))
{var statearr_49359_49405 = state_49353__$1;(statearr_49359_49405[1] = 5);
} else
{var statearr_49360_49406 = state_49353__$1;(statearr_49360_49406[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 15))
{var inst_49324 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49361_49407 = state_49353__$1;(statearr_49361_49407[2] = inst_49324);
(statearr_49361_49407[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 21))
{var inst_49346 = (state_49353[2]);var state_49353__$1 = (function (){var statearr_49362 = state_49353;(statearr_49362[9] = inst_49346);
return statearr_49362;
})();var statearr_49363_49408 = state_49353__$1;(statearr_49363_49408[2] = null);
(statearr_49363_49408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 13))
{var inst_49306 = (state_49353[10]);var inst_49308 = cljs.core.chunked_seq_QMARK_.call(null,inst_49306);var state_49353__$1 = state_49353;if(inst_49308)
{var statearr_49364_49409 = state_49353__$1;(statearr_49364_49409[1] = 16);
} else
{var statearr_49365_49410 = state_49353__$1;(statearr_49365_49410[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 22))
{var inst_49343 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49366_49411 = state_49353__$1;(statearr_49366_49411[2] = inst_49343);
(statearr_49366_49411[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 6))
{var inst_49330 = (state_49353[11]);var inst_49332 = (state_49353[7]);var inst_49282 = (state_49353[8]);var inst_49330__$1 = topic_fn.call(null,inst_49282);var inst_49331 = cljs.core.deref.call(null,mults);var inst_49332__$1 = cljs.core.get.call(null,inst_49331,inst_49330__$1);var state_49353__$1 = (function (){var statearr_49367 = state_49353;(statearr_49367[11] = inst_49330__$1);
(statearr_49367[7] = inst_49332__$1);
return statearr_49367;
})();if(cljs.core.truth_(inst_49332__$1))
{var statearr_49368_49412 = state_49353__$1;(statearr_49368_49412[1] = 19);
} else
{var statearr_49369_49413 = state_49353__$1;(statearr_49369_49413[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 25))
{var inst_49341 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49370_49414 = state_49353__$1;(statearr_49370_49414[2] = inst_49341);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49353__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 17))
{var inst_49306 = (state_49353[10]);var inst_49315 = cljs.core.first.call(null,inst_49306);var inst_49316 = cljs.core.async.muxch_STAR_.call(null,inst_49315);var inst_49317 = cljs.core.async.close_BANG_.call(null,inst_49316);var inst_49318 = cljs.core.next.call(null,inst_49306);var inst_49292 = inst_49318;var inst_49293 = null;var inst_49294 = 0;var inst_49295 = 0;var state_49353__$1 = (function (){var statearr_49371 = state_49353;(statearr_49371[12] = inst_49292);
(statearr_49371[13] = inst_49295);
(statearr_49371[14] = inst_49294);
(statearr_49371[15] = inst_49293);
(statearr_49371[16] = inst_49317);
return statearr_49371;
})();var statearr_49372_49415 = state_49353__$1;(statearr_49372_49415[2] = null);
(statearr_49372_49415[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 3))
{var inst_49351 = (state_49353[2]);var state_49353__$1 = state_49353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49353__$1,inst_49351);
} else
{if((state_val_49354 === 12))
{var inst_49326 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49373_49416 = state_49353__$1;(statearr_49373_49416[2] = inst_49326);
(statearr_49373_49416[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 2))
{var state_49353__$1 = state_49353;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49353__$1,4,ch);
} else
{if((state_val_49354 === 23))
{var inst_49330 = (state_49353[11]);var inst_49334 = (state_49353[2]);var inst_49335 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49330);var state_49353__$1 = (function (){var statearr_49374 = state_49353;(statearr_49374[17] = inst_49334);
return statearr_49374;
})();var statearr_49375_49417 = state_49353__$1;(statearr_49375_49417[2] = inst_49335);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49353__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 19))
{var state_49353__$1 = state_49353;var statearr_49376_49418 = state_49353__$1;(statearr_49376_49418[2] = null);
(statearr_49376_49418[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 11))
{var inst_49306 = (state_49353[10]);var inst_49292 = (state_49353[12]);var inst_49306__$1 = cljs.core.seq.call(null,inst_49292);var state_49353__$1 = (function (){var statearr_49377 = state_49353;(statearr_49377[10] = inst_49306__$1);
return statearr_49377;
})();if(inst_49306__$1)
{var statearr_49378_49419 = state_49353__$1;(statearr_49378_49419[1] = 13);
} else
{var statearr_49379_49420 = state_49353__$1;(statearr_49379_49420[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 9))
{var inst_49328 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49380_49421 = state_49353__$1;(statearr_49380_49421[2] = inst_49328);
(statearr_49380_49421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 5))
{var inst_49289 = cljs.core.deref.call(null,mults);var inst_49290 = cljs.core.vals.call(null,inst_49289);var inst_49291 = cljs.core.seq.call(null,inst_49290);var inst_49292 = inst_49291;var inst_49293 = null;var inst_49294 = 0;var inst_49295 = 0;var state_49353__$1 = (function (){var statearr_49381 = state_49353;(statearr_49381[12] = inst_49292);
(statearr_49381[13] = inst_49295);
(statearr_49381[14] = inst_49294);
(statearr_49381[15] = inst_49293);
return statearr_49381;
})();var statearr_49382_49422 = state_49353__$1;(statearr_49382_49422[2] = null);
(statearr_49382_49422[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 14))
{var state_49353__$1 = state_49353;var statearr_49386_49423 = state_49353__$1;(statearr_49386_49423[2] = null);
(statearr_49386_49423[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 16))
{var inst_49306 = (state_49353[10]);var inst_49310 = cljs.core.chunk_first.call(null,inst_49306);var inst_49311 = cljs.core.chunk_rest.call(null,inst_49306);var inst_49312 = cljs.core.count.call(null,inst_49310);var inst_49292 = inst_49311;var inst_49293 = inst_49310;var inst_49294 = inst_49312;var inst_49295 = 0;var state_49353__$1 = (function (){var statearr_49387 = state_49353;(statearr_49387[12] = inst_49292);
(statearr_49387[13] = inst_49295);
(statearr_49387[14] = inst_49294);
(statearr_49387[15] = inst_49293);
return statearr_49387;
})();var statearr_49388_49424 = state_49353__$1;(statearr_49388_49424[2] = null);
(statearr_49388_49424[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 10))
{var inst_49292 = (state_49353[12]);var inst_49295 = (state_49353[13]);var inst_49294 = (state_49353[14]);var inst_49293 = (state_49353[15]);var inst_49300 = cljs.core._nth.call(null,inst_49293,inst_49295);var inst_49301 = cljs.core.async.muxch_STAR_.call(null,inst_49300);var inst_49302 = cljs.core.async.close_BANG_.call(null,inst_49301);var inst_49303 = (inst_49295 + 1);var tmp49383 = inst_49292;var tmp49384 = inst_49294;var tmp49385 = inst_49293;var inst_49292__$1 = tmp49383;var inst_49293__$1 = tmp49385;var inst_49294__$1 = tmp49384;var inst_49295__$1 = inst_49303;var state_49353__$1 = (function (){var statearr_49389 = state_49353;(statearr_49389[18] = inst_49302);
(statearr_49389[12] = inst_49292__$1);
(statearr_49389[13] = inst_49295__$1);
(statearr_49389[14] = inst_49294__$1);
(statearr_49389[15] = inst_49293__$1);
return statearr_49389;
})();var statearr_49390_49425 = state_49353__$1;(statearr_49390_49425[2] = null);
(statearr_49390_49425[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 18))
{var inst_49321 = (state_49353[2]);var state_49353__$1 = state_49353;var statearr_49391_49426 = state_49353__$1;(statearr_49391_49426[2] = inst_49321);
(statearr_49391_49426[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49354 === 8))
{var inst_49295 = (state_49353[13]);var inst_49294 = (state_49353[14]);var inst_49297 = (inst_49295 < inst_49294);var inst_49298 = inst_49297;var state_49353__$1 = state_49353;if(cljs.core.truth_(inst_49298))
{var statearr_49392_49427 = state_49353__$1;(statearr_49392_49427[1] = 10);
} else
{var statearr_49393_49428 = state_49353__$1;(statearr_49393_49428[1] = 11);
}
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
});})(c__5689__auto___49401,mults,ensure_mult,p))
;return ((function (switch__5674__auto__,c__5689__auto___49401,mults,ensure_mult,p){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49397[0] = state_machine__5675__auto__);
(statearr_49397[1] = 1);
return statearr_49397;
});
var state_machine__5675__auto____1 = (function (state_49353){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49398){if((e49398 instanceof Object))
{var ex__5678__auto__ = e49398;var statearr_49399_49429 = state_49353;(statearr_49399_49429[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49353);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49430 = state_49353;
state_49353 = G__49430;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49353){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49401,mults,ensure_mult,p))
})();var state__5691__auto__ = (function (){var statearr_49400 = f__5690__auto__.call(null);(statearr_49400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49401);
return statearr_49400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49401,mults,ensure_mult,p))
);
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
,cljs.core.range.call(null,cnt));var c__5689__auto___49567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49537){var state_val_49538 = (state_49537[1]);if((state_val_49538 === 7))
{var state_49537__$1 = state_49537;var statearr_49539_49568 = state_49537__$1;(statearr_49539_49568[2] = null);
(statearr_49539_49568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 1))
{var state_49537__$1 = state_49537;var statearr_49540_49569 = state_49537__$1;(statearr_49540_49569[2] = null);
(statearr_49540_49569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 4))
{var inst_49501 = (state_49537[7]);var inst_49503 = (inst_49501 < cnt);var state_49537__$1 = state_49537;if(cljs.core.truth_(inst_49503))
{var statearr_49541_49570 = state_49537__$1;(statearr_49541_49570[1] = 6);
} else
{var statearr_49542_49571 = state_49537__$1;(statearr_49542_49571[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 15))
{var inst_49533 = (state_49537[2]);var state_49537__$1 = state_49537;var statearr_49543_49572 = state_49537__$1;(statearr_49543_49572[2] = inst_49533);
(statearr_49543_49572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 13))
{var inst_49526 = cljs.core.async.close_BANG_.call(null,out);var state_49537__$1 = state_49537;var statearr_49544_49573 = state_49537__$1;(statearr_49544_49573[2] = inst_49526);
(statearr_49544_49573[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 6))
{var state_49537__$1 = state_49537;var statearr_49545_49574 = state_49537__$1;(statearr_49545_49574[2] = null);
(statearr_49545_49574[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 3))
{var inst_49535 = (state_49537[2]);var state_49537__$1 = state_49537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49537__$1,inst_49535);
} else
{if((state_val_49538 === 12))
{var inst_49523 = (state_49537[8]);var inst_49523__$1 = (state_49537[2]);var inst_49524 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49523__$1);var state_49537__$1 = (function (){var statearr_49546 = state_49537;(statearr_49546[8] = inst_49523__$1);
return statearr_49546;
})();if(cljs.core.truth_(inst_49524))
{var statearr_49547_49575 = state_49537__$1;(statearr_49547_49575[1] = 13);
} else
{var statearr_49548_49576 = state_49537__$1;(statearr_49548_49576[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 2))
{var inst_49500 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_49501 = 0;var state_49537__$1 = (function (){var statearr_49549 = state_49537;(statearr_49549[7] = inst_49501);
(statearr_49549[9] = inst_49500);
return statearr_49549;
})();var statearr_49550_49577 = state_49537__$1;(statearr_49550_49577[2] = null);
(statearr_49550_49577[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 11))
{var inst_49501 = (state_49537[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49537,10,Object,null,9);var inst_49510 = chs__$1.call(null,inst_49501);var inst_49511 = done.call(null,inst_49501);var inst_49512 = cljs.core.async.take_BANG_.call(null,inst_49510,inst_49511);var state_49537__$1 = state_49537;var statearr_49551_49578 = state_49537__$1;(statearr_49551_49578[2] = inst_49512);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49537__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 9))
{var inst_49501 = (state_49537[7]);var inst_49514 = (state_49537[2]);var inst_49515 = (inst_49501 + 1);var inst_49501__$1 = inst_49515;var state_49537__$1 = (function (){var statearr_49552 = state_49537;(statearr_49552[7] = inst_49501__$1);
(statearr_49552[10] = inst_49514);
return statearr_49552;
})();var statearr_49553_49579 = state_49537__$1;(statearr_49553_49579[2] = null);
(statearr_49553_49579[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 5))
{var inst_49521 = (state_49537[2]);var state_49537__$1 = (function (){var statearr_49554 = state_49537;(statearr_49554[11] = inst_49521);
return statearr_49554;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49537__$1,12,dchan);
} else
{if((state_val_49538 === 14))
{var inst_49523 = (state_49537[8]);var inst_49528 = cljs.core.apply.call(null,f,inst_49523);var state_49537__$1 = state_49537;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49537__$1,16,out,inst_49528);
} else
{if((state_val_49538 === 16))
{var inst_49530 = (state_49537[2]);var state_49537__$1 = (function (){var statearr_49555 = state_49537;(statearr_49555[12] = inst_49530);
return statearr_49555;
})();var statearr_49556_49580 = state_49537__$1;(statearr_49556_49580[2] = null);
(statearr_49556_49580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 10))
{var inst_49505 = (state_49537[2]);var inst_49506 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_49537__$1 = (function (){var statearr_49557 = state_49537;(statearr_49557[13] = inst_49505);
return statearr_49557;
})();var statearr_49558_49581 = state_49537__$1;(statearr_49558_49581[2] = inst_49506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49537__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49538 === 8))
{var inst_49519 = (state_49537[2]);var state_49537__$1 = state_49537;var statearr_49559_49582 = state_49537__$1;(statearr_49559_49582[2] = inst_49519);
(statearr_49559_49582[1] = 5);
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
});})(c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5674__auto__,c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49563[0] = state_machine__5675__auto__);
(statearr_49563[1] = 1);
return statearr_49563;
});
var state_machine__5675__auto____1 = (function (state_49537){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49564){if((e49564 instanceof Object))
{var ex__5678__auto__ = e49564;var statearr_49565_49583 = state_49537;(statearr_49565_49583[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49537);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49584 = state_49537;
state_49537 = G__49584;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49537){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5691__auto__ = (function (){var statearr_49566 = f__5690__auto__.call(null);(statearr_49566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49567);
return statearr_49566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49567,chs__$1,out,cnt,rets,dchan,dctr,done))
);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49692 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49692,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49692,out){
return (function (state_49668){var state_val_49669 = (state_49668[1]);if((state_val_49669 === 7))
{var inst_49647 = (state_49668[7]);var inst_49648 = (state_49668[8]);var inst_49647__$1 = (state_49668[2]);var inst_49648__$1 = cljs.core.nth.call(null,inst_49647__$1,0,null);var inst_49649 = cljs.core.nth.call(null,inst_49647__$1,1,null);var inst_49650 = (inst_49648__$1 == null);var state_49668__$1 = (function (){var statearr_49670 = state_49668;(statearr_49670[7] = inst_49647__$1);
(statearr_49670[9] = inst_49649);
(statearr_49670[8] = inst_49648__$1);
return statearr_49670;
})();if(cljs.core.truth_(inst_49650))
{var statearr_49671_49693 = state_49668__$1;(statearr_49671_49693[1] = 8);
} else
{var statearr_49672_49694 = state_49668__$1;(statearr_49672_49694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 1))
{var inst_49639 = cljs.core.vec.call(null,chs);var inst_49640 = inst_49639;var state_49668__$1 = (function (){var statearr_49673 = state_49668;(statearr_49673[10] = inst_49640);
return statearr_49673;
})();var statearr_49674_49695 = state_49668__$1;(statearr_49674_49695[2] = null);
(statearr_49674_49695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 4))
{var inst_49640 = (state_49668[10]);var state_49668__$1 = state_49668;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49668__$1,7,inst_49640);
} else
{if((state_val_49669 === 6))
{var inst_49664 = (state_49668[2]);var state_49668__$1 = state_49668;var statearr_49675_49696 = state_49668__$1;(statearr_49675_49696[2] = inst_49664);
(statearr_49675_49696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 3))
{var inst_49666 = (state_49668[2]);var state_49668__$1 = state_49668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49668__$1,inst_49666);
} else
{if((state_val_49669 === 2))
{var inst_49640 = (state_49668[10]);var inst_49642 = cljs.core.count.call(null,inst_49640);var inst_49643 = (inst_49642 > 0);var state_49668__$1 = state_49668;if(cljs.core.truth_(inst_49643))
{var statearr_49677_49697 = state_49668__$1;(statearr_49677_49697[1] = 4);
} else
{var statearr_49678_49698 = state_49668__$1;(statearr_49678_49698[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 11))
{var inst_49640 = (state_49668[10]);var inst_49657 = (state_49668[2]);var tmp49676 = inst_49640;var inst_49640__$1 = tmp49676;var state_49668__$1 = (function (){var statearr_49679 = state_49668;(statearr_49679[11] = inst_49657);
(statearr_49679[10] = inst_49640__$1);
return statearr_49679;
})();var statearr_49680_49699 = state_49668__$1;(statearr_49680_49699[2] = null);
(statearr_49680_49699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 9))
{var inst_49648 = (state_49668[8]);var state_49668__$1 = state_49668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49668__$1,11,out,inst_49648);
} else
{if((state_val_49669 === 5))
{var inst_49662 = cljs.core.async.close_BANG_.call(null,out);var state_49668__$1 = state_49668;var statearr_49681_49700 = state_49668__$1;(statearr_49681_49700[2] = inst_49662);
(statearr_49681_49700[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 10))
{var inst_49660 = (state_49668[2]);var state_49668__$1 = state_49668;var statearr_49682_49701 = state_49668__$1;(statearr_49682_49701[2] = inst_49660);
(statearr_49682_49701[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49669 === 8))
{var inst_49647 = (state_49668[7]);var inst_49640 = (state_49668[10]);var inst_49649 = (state_49668[9]);var inst_49648 = (state_49668[8]);var inst_49652 = (function (){var c = inst_49649;var v = inst_49648;var vec__49645 = inst_49647;var cs = inst_49640;return ((function (c,v,vec__49645,cs,inst_49647,inst_49640,inst_49649,inst_49648,state_val_49669,c__5689__auto___49692,out){
return (function (p1__49585_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__49585_SHARP_);
});
;})(c,v,vec__49645,cs,inst_49647,inst_49640,inst_49649,inst_49648,state_val_49669,c__5689__auto___49692,out))
})();var inst_49653 = cljs.core.filterv.call(null,inst_49652,inst_49640);var inst_49640__$1 = inst_49653;var state_49668__$1 = (function (){var statearr_49683 = state_49668;(statearr_49683[10] = inst_49640__$1);
return statearr_49683;
})();var statearr_49684_49702 = state_49668__$1;(statearr_49684_49702[2] = null);
(statearr_49684_49702[1] = 2);
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
});})(c__5689__auto___49692,out))
;return ((function (switch__5674__auto__,c__5689__auto___49692,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49688 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49688[0] = state_machine__5675__auto__);
(statearr_49688[1] = 1);
return statearr_49688;
});
var state_machine__5675__auto____1 = (function (state_49668){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49668);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49689){if((e49689 instanceof Object))
{var ex__5678__auto__ = e49689;var statearr_49690_49703 = state_49668;(statearr_49690_49703[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49689;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49704 = state_49668;
state_49668 = G__49704;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49668){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49692,out))
})();var state__5691__auto__ = (function (){var statearr_49691 = f__5690__auto__.call(null);(statearr_49691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49692);
return statearr_49691;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49692,out))
);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49797,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49797,out){
return (function (state_49774){var state_val_49775 = (state_49774[1]);if((state_val_49775 === 7))
{var inst_49756 = (state_49774[7]);var inst_49756__$1 = (state_49774[2]);var inst_49757 = (inst_49756__$1 == null);var inst_49758 = cljs.core.not.call(null,inst_49757);var state_49774__$1 = (function (){var statearr_49776 = state_49774;(statearr_49776[7] = inst_49756__$1);
return statearr_49776;
})();if(inst_49758)
{var statearr_49777_49798 = state_49774__$1;(statearr_49777_49798[1] = 8);
} else
{var statearr_49778_49799 = state_49774__$1;(statearr_49778_49799[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 1))
{var inst_49751 = 0;var state_49774__$1 = (function (){var statearr_49779 = state_49774;(statearr_49779[8] = inst_49751);
return statearr_49779;
})();var statearr_49780_49800 = state_49774__$1;(statearr_49780_49800[2] = null);
(statearr_49780_49800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 4))
{var state_49774__$1 = state_49774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49774__$1,7,ch);
} else
{if((state_val_49775 === 6))
{var inst_49769 = (state_49774[2]);var state_49774__$1 = state_49774;var statearr_49781_49801 = state_49774__$1;(statearr_49781_49801[2] = inst_49769);
(statearr_49781_49801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 3))
{var inst_49771 = (state_49774[2]);var inst_49772 = cljs.core.async.close_BANG_.call(null,out);var state_49774__$1 = (function (){var statearr_49782 = state_49774;(statearr_49782[9] = inst_49771);
return statearr_49782;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49774__$1,inst_49772);
} else
{if((state_val_49775 === 2))
{var inst_49751 = (state_49774[8]);var inst_49753 = (inst_49751 < n);var state_49774__$1 = state_49774;if(cljs.core.truth_(inst_49753))
{var statearr_49783_49802 = state_49774__$1;(statearr_49783_49802[1] = 4);
} else
{var statearr_49784_49803 = state_49774__$1;(statearr_49784_49803[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 11))
{var inst_49751 = (state_49774[8]);var inst_49761 = (state_49774[2]);var inst_49762 = (inst_49751 + 1);var inst_49751__$1 = inst_49762;var state_49774__$1 = (function (){var statearr_49785 = state_49774;(statearr_49785[8] = inst_49751__$1);
(statearr_49785[10] = inst_49761);
return statearr_49785;
})();var statearr_49786_49804 = state_49774__$1;(statearr_49786_49804[2] = null);
(statearr_49786_49804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 9))
{var state_49774__$1 = state_49774;var statearr_49787_49805 = state_49774__$1;(statearr_49787_49805[2] = null);
(statearr_49787_49805[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 5))
{var state_49774__$1 = state_49774;var statearr_49788_49806 = state_49774__$1;(statearr_49788_49806[2] = null);
(statearr_49788_49806[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 10))
{var inst_49766 = (state_49774[2]);var state_49774__$1 = state_49774;var statearr_49789_49807 = state_49774__$1;(statearr_49789_49807[2] = inst_49766);
(statearr_49789_49807[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49775 === 8))
{var inst_49756 = (state_49774[7]);var state_49774__$1 = state_49774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49774__$1,11,out,inst_49756);
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
});})(c__5689__auto___49797,out))
;return ((function (switch__5674__auto__,c__5689__auto___49797,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49793 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49793[0] = state_machine__5675__auto__);
(statearr_49793[1] = 1);
return statearr_49793;
});
var state_machine__5675__auto____1 = (function (state_49774){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49794){if((e49794 instanceof Object))
{var ex__5678__auto__ = e49794;var statearr_49795_49808 = state_49774;(statearr_49795_49808[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49774);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49809 = state_49774;
state_49774 = G__49809;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49774){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49797,out))
})();var state__5691__auto__ = (function (){var statearr_49796 = f__5690__auto__.call(null);(statearr_49796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49797);
return statearr_49796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49797,out))
);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___49906 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___49906,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___49906,out){
return (function (state_49881){var state_val_49882 = (state_49881[1]);if((state_val_49882 === 7))
{var inst_49876 = (state_49881[2]);var state_49881__$1 = state_49881;var statearr_49883_49907 = state_49881__$1;(statearr_49883_49907[2] = inst_49876);
(statearr_49883_49907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 1))
{var inst_49858 = null;var state_49881__$1 = (function (){var statearr_49884 = state_49881;(statearr_49884[7] = inst_49858);
return statearr_49884;
})();var statearr_49885_49908 = state_49881__$1;(statearr_49885_49908[2] = null);
(statearr_49885_49908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 4))
{var inst_49861 = (state_49881[8]);var inst_49861__$1 = (state_49881[2]);var inst_49862 = (inst_49861__$1 == null);var inst_49863 = cljs.core.not.call(null,inst_49862);var state_49881__$1 = (function (){var statearr_49886 = state_49881;(statearr_49886[8] = inst_49861__$1);
return statearr_49886;
})();if(inst_49863)
{var statearr_49887_49909 = state_49881__$1;(statearr_49887_49909[1] = 5);
} else
{var statearr_49888_49910 = state_49881__$1;(statearr_49888_49910[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 6))
{var state_49881__$1 = state_49881;var statearr_49889_49911 = state_49881__$1;(statearr_49889_49911[2] = null);
(statearr_49889_49911[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 3))
{var inst_49878 = (state_49881[2]);var inst_49879 = cljs.core.async.close_BANG_.call(null,out);var state_49881__$1 = (function (){var statearr_49890 = state_49881;(statearr_49890[9] = inst_49878);
return statearr_49890;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49881__$1,inst_49879);
} else
{if((state_val_49882 === 2))
{var state_49881__$1 = state_49881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49881__$1,4,ch);
} else
{if((state_val_49882 === 11))
{var inst_49861 = (state_49881[8]);var inst_49870 = (state_49881[2]);var inst_49858 = inst_49861;var state_49881__$1 = (function (){var statearr_49891 = state_49881;(statearr_49891[10] = inst_49870);
(statearr_49891[7] = inst_49858);
return statearr_49891;
})();var statearr_49892_49912 = state_49881__$1;(statearr_49892_49912[2] = null);
(statearr_49892_49912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 9))
{var inst_49861 = (state_49881[8]);var state_49881__$1 = state_49881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49881__$1,11,out,inst_49861);
} else
{if((state_val_49882 === 5))
{var inst_49858 = (state_49881[7]);var inst_49861 = (state_49881[8]);var inst_49865 = cljs.core._EQ_.call(null,inst_49861,inst_49858);var state_49881__$1 = state_49881;if(inst_49865)
{var statearr_49894_49913 = state_49881__$1;(statearr_49894_49913[1] = 8);
} else
{var statearr_49895_49914 = state_49881__$1;(statearr_49895_49914[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 10))
{var inst_49873 = (state_49881[2]);var state_49881__$1 = state_49881;var statearr_49896_49915 = state_49881__$1;(statearr_49896_49915[2] = inst_49873);
(statearr_49896_49915[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49882 === 8))
{var inst_49858 = (state_49881[7]);var tmp49893 = inst_49858;var inst_49858__$1 = tmp49893;var state_49881__$1 = (function (){var statearr_49897 = state_49881;(statearr_49897[7] = inst_49858__$1);
return statearr_49897;
})();var statearr_49898_49916 = state_49881__$1;(statearr_49898_49916[2] = null);
(statearr_49898_49916[1] = 2);
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
});})(c__5689__auto___49906,out))
;return ((function (switch__5674__auto__,c__5689__auto___49906,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_49902 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49902[0] = state_machine__5675__auto__);
(statearr_49902[1] = 1);
return statearr_49902;
});
var state_machine__5675__auto____1 = (function (state_49881){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_49881);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e49903){if((e49903 instanceof Object))
{var ex__5678__auto__ = e49903;var statearr_49904_49917 = state_49881;(statearr_49904_49917[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49918 = state_49881;
state_49881 = G__49918;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_49881){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_49881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___49906,out))
})();var state__5691__auto__ = (function (){var statearr_49905 = f__5690__auto__.call(null);(statearr_49905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___49906);
return statearr_49905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___49906,out))
);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___50053 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___50053,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___50053,out){
return (function (state_50023){var state_val_50024 = (state_50023[1]);if((state_val_50024 === 7))
{var inst_50019 = (state_50023[2]);var state_50023__$1 = state_50023;var statearr_50025_50054 = state_50023__$1;(statearr_50025_50054[2] = inst_50019);
(statearr_50025_50054[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 1))
{var inst_49986 = (new Array(n));var inst_49987 = inst_49986;var inst_49988 = 0;var state_50023__$1 = (function (){var statearr_50026 = state_50023;(statearr_50026[7] = inst_49987);
(statearr_50026[8] = inst_49988);
return statearr_50026;
})();var statearr_50027_50055 = state_50023__$1;(statearr_50027_50055[2] = null);
(statearr_50027_50055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 4))
{var inst_49991 = (state_50023[9]);var inst_49991__$1 = (state_50023[2]);var inst_49992 = (inst_49991__$1 == null);var inst_49993 = cljs.core.not.call(null,inst_49992);var state_50023__$1 = (function (){var statearr_50028 = state_50023;(statearr_50028[9] = inst_49991__$1);
return statearr_50028;
})();if(inst_49993)
{var statearr_50029_50056 = state_50023__$1;(statearr_50029_50056[1] = 5);
} else
{var statearr_50030_50057 = state_50023__$1;(statearr_50030_50057[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 15))
{var inst_50013 = (state_50023[2]);var state_50023__$1 = state_50023;var statearr_50031_50058 = state_50023__$1;(statearr_50031_50058[2] = inst_50013);
(statearr_50031_50058[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 13))
{var state_50023__$1 = state_50023;var statearr_50032_50059 = state_50023__$1;(statearr_50032_50059[2] = null);
(statearr_50032_50059[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 6))
{var inst_49988 = (state_50023[8]);var inst_50009 = (inst_49988 > 0);var state_50023__$1 = state_50023;if(cljs.core.truth_(inst_50009))
{var statearr_50033_50060 = state_50023__$1;(statearr_50033_50060[1] = 12);
} else
{var statearr_50034_50061 = state_50023__$1;(statearr_50034_50061[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 3))
{var inst_50021 = (state_50023[2]);var state_50023__$1 = state_50023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50023__$1,inst_50021);
} else
{if((state_val_50024 === 12))
{var inst_49987 = (state_50023[7]);var inst_50011 = cljs.core.vec.call(null,inst_49987);var state_50023__$1 = state_50023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50023__$1,15,out,inst_50011);
} else
{if((state_val_50024 === 2))
{var state_50023__$1 = state_50023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50023__$1,4,ch);
} else
{if((state_val_50024 === 11))
{var inst_50003 = (state_50023[2]);var inst_50004 = (new Array(n));var inst_49987 = inst_50004;var inst_49988 = 0;var state_50023__$1 = (function (){var statearr_50035 = state_50023;(statearr_50035[7] = inst_49987);
(statearr_50035[10] = inst_50003);
(statearr_50035[8] = inst_49988);
return statearr_50035;
})();var statearr_50036_50062 = state_50023__$1;(statearr_50036_50062[2] = null);
(statearr_50036_50062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 9))
{var inst_49987 = (state_50023[7]);var inst_50001 = cljs.core.vec.call(null,inst_49987);var state_50023__$1 = state_50023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50023__$1,11,out,inst_50001);
} else
{if((state_val_50024 === 5))
{var inst_49991 = (state_50023[9]);var inst_49987 = (state_50023[7]);var inst_49996 = (state_50023[11]);var inst_49988 = (state_50023[8]);var inst_49995 = (inst_49987[inst_49988] = inst_49991);var inst_49996__$1 = (inst_49988 + 1);var inst_49997 = (inst_49996__$1 < n);var state_50023__$1 = (function (){var statearr_50037 = state_50023;(statearr_50037[11] = inst_49996__$1);
(statearr_50037[12] = inst_49995);
return statearr_50037;
})();if(cljs.core.truth_(inst_49997))
{var statearr_50038_50063 = state_50023__$1;(statearr_50038_50063[1] = 8);
} else
{var statearr_50039_50064 = state_50023__$1;(statearr_50039_50064[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 14))
{var inst_50016 = (state_50023[2]);var inst_50017 = cljs.core.async.close_BANG_.call(null,out);var state_50023__$1 = (function (){var statearr_50041 = state_50023;(statearr_50041[13] = inst_50016);
return statearr_50041;
})();var statearr_50042_50065 = state_50023__$1;(statearr_50042_50065[2] = inst_50017);
(statearr_50042_50065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 10))
{var inst_50007 = (state_50023[2]);var state_50023__$1 = state_50023;var statearr_50043_50066 = state_50023__$1;(statearr_50043_50066[2] = inst_50007);
(statearr_50043_50066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50024 === 8))
{var inst_49987 = (state_50023[7]);var inst_49996 = (state_50023[11]);var tmp50040 = inst_49987;var inst_49987__$1 = tmp50040;var inst_49988 = inst_49996;var state_50023__$1 = (function (){var statearr_50044 = state_50023;(statearr_50044[7] = inst_49987__$1);
(statearr_50044[8] = inst_49988);
return statearr_50044;
})();var statearr_50045_50067 = state_50023__$1;(statearr_50045_50067[2] = null);
(statearr_50045_50067[1] = 2);
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
});})(c__5689__auto___50053,out))
;return ((function (switch__5674__auto__,c__5689__auto___50053,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_50049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50049[0] = state_machine__5675__auto__);
(statearr_50049[1] = 1);
return statearr_50049;
});
var state_machine__5675__auto____1 = (function (state_50023){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_50023);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e50050){if((e50050 instanceof Object))
{var ex__5678__auto__ = e50050;var statearr_50051_50068 = state_50023;(statearr_50051_50068[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50050;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50069 = state_50023;
state_50023 = G__50069;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_50023){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_50023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___50053,out))
})();var state__5691__auto__ = (function (){var statearr_50052 = f__5690__auto__.call(null);(statearr_50052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___50053);
return statearr_50052;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___50053,out))
);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5689__auto___50212 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5689__auto___50212,out){
return (function (){var f__5690__auto__ = (function (){var switch__5674__auto__ = ((function (c__5689__auto___50212,out){
return (function (state_50182){var state_val_50183 = (state_50182[1]);if((state_val_50183 === 7))
{var inst_50178 = (state_50182[2]);var state_50182__$1 = state_50182;var statearr_50184_50213 = state_50182__$1;(statearr_50184_50213[2] = inst_50178);
(statearr_50184_50213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 1))
{var inst_50141 = [];var inst_50142 = inst_50141;var inst_50143 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_50182__$1 = (function (){var statearr_50185 = state_50182;(statearr_50185[7] = inst_50142);
(statearr_50185[8] = inst_50143);
return statearr_50185;
})();var statearr_50186_50214 = state_50182__$1;(statearr_50186_50214[2] = null);
(statearr_50186_50214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 4))
{var inst_50146 = (state_50182[9]);var inst_50146__$1 = (state_50182[2]);var inst_50147 = (inst_50146__$1 == null);var inst_50148 = cljs.core.not.call(null,inst_50147);var state_50182__$1 = (function (){var statearr_50187 = state_50182;(statearr_50187[9] = inst_50146__$1);
return statearr_50187;
})();if(inst_50148)
{var statearr_50188_50215 = state_50182__$1;(statearr_50188_50215[1] = 5);
} else
{var statearr_50189_50216 = state_50182__$1;(statearr_50189_50216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 15))
{var inst_50172 = (state_50182[2]);var state_50182__$1 = state_50182;var statearr_50190_50217 = state_50182__$1;(statearr_50190_50217[2] = inst_50172);
(statearr_50190_50217[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 13))
{var state_50182__$1 = state_50182;var statearr_50191_50218 = state_50182__$1;(statearr_50191_50218[2] = null);
(statearr_50191_50218[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 6))
{var inst_50142 = (state_50182[7]);var inst_50167 = inst_50142.length;var inst_50168 = (inst_50167 > 0);var state_50182__$1 = state_50182;if(cljs.core.truth_(inst_50168))
{var statearr_50192_50219 = state_50182__$1;(statearr_50192_50219[1] = 12);
} else
{var statearr_50193_50220 = state_50182__$1;(statearr_50193_50220[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 3))
{var inst_50180 = (state_50182[2]);var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50182__$1,inst_50180);
} else
{if((state_val_50183 === 12))
{var inst_50142 = (state_50182[7]);var inst_50170 = cljs.core.vec.call(null,inst_50142);var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50182__$1,15,out,inst_50170);
} else
{if((state_val_50183 === 2))
{var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50182__$1,4,ch);
} else
{if((state_val_50183 === 11))
{var inst_50146 = (state_50182[9]);var inst_50150 = (state_50182[10]);var inst_50160 = (state_50182[2]);var inst_50161 = [];var inst_50162 = inst_50161.push(inst_50146);var inst_50142 = inst_50161;var inst_50143 = inst_50150;var state_50182__$1 = (function (){var statearr_50194 = state_50182;(statearr_50194[7] = inst_50142);
(statearr_50194[8] = inst_50143);
(statearr_50194[11] = inst_50160);
(statearr_50194[12] = inst_50162);
return statearr_50194;
})();var statearr_50195_50221 = state_50182__$1;(statearr_50195_50221[2] = null);
(statearr_50195_50221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 9))
{var inst_50142 = (state_50182[7]);var inst_50158 = cljs.core.vec.call(null,inst_50142);var state_50182__$1 = state_50182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50182__$1,11,out,inst_50158);
} else
{if((state_val_50183 === 5))
{var inst_50146 = (state_50182[9]);var inst_50143 = (state_50182[8]);var inst_50150 = (state_50182[10]);var inst_50150__$1 = f.call(null,inst_50146);var inst_50151 = cljs.core._EQ_.call(null,inst_50150__$1,inst_50143);var inst_50152 = cljs.core.keyword_identical_QMARK_.call(null,inst_50143,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_50153 = (inst_50151) || (inst_50152);var state_50182__$1 = (function (){var statearr_50196 = state_50182;(statearr_50196[10] = inst_50150__$1);
return statearr_50196;
})();if(cljs.core.truth_(inst_50153))
{var statearr_50197_50222 = state_50182__$1;(statearr_50197_50222[1] = 8);
} else
{var statearr_50198_50223 = state_50182__$1;(statearr_50198_50223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 14))
{var inst_50175 = (state_50182[2]);var inst_50176 = cljs.core.async.close_BANG_.call(null,out);var state_50182__$1 = (function (){var statearr_50200 = state_50182;(statearr_50200[13] = inst_50175);
return statearr_50200;
})();var statearr_50201_50224 = state_50182__$1;(statearr_50201_50224[2] = inst_50176);
(statearr_50201_50224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 10))
{var inst_50165 = (state_50182[2]);var state_50182__$1 = state_50182;var statearr_50202_50225 = state_50182__$1;(statearr_50202_50225[2] = inst_50165);
(statearr_50202_50225[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_50183 === 8))
{var inst_50146 = (state_50182[9]);var inst_50142 = (state_50182[7]);var inst_50150 = (state_50182[10]);var inst_50155 = inst_50142.push(inst_50146);var tmp50199 = inst_50142;var inst_50142__$1 = tmp50199;var inst_50143 = inst_50150;var state_50182__$1 = (function (){var statearr_50203 = state_50182;(statearr_50203[14] = inst_50155);
(statearr_50203[7] = inst_50142__$1);
(statearr_50203[8] = inst_50143);
return statearr_50203;
})();var statearr_50204_50226 = state_50182__$1;(statearr_50204_50226[2] = null);
(statearr_50204_50226[1] = 2);
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
});})(c__5689__auto___50212,out))
;return ((function (switch__5674__auto__,c__5689__auto___50212,out){
return (function() {
var state_machine__5675__auto__ = null;
var state_machine__5675__auto____0 = (function (){var statearr_50208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50208[0] = state_machine__5675__auto__);
(statearr_50208[1] = 1);
return statearr_50208;
});
var state_machine__5675__auto____1 = (function (state_50182){while(true){
var ret_value__5676__auto__ = (function (){try{while(true){
var result__5677__auto__ = switch__5674__auto__.call(null,state_50182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5677__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5677__auto__;
}
break;
}
}catch (e50209){if((e50209 instanceof Object))
{var ex__5678__auto__ = e50209;var statearr_50210_50227 = state_50182;(statearr_50210_50227[5] = ex__5678__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5676__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__50228 = state_50182;
state_50182 = G__50228;
continue;
}
} else
{return ret_value__5676__auto__;
}
break;
}
});
state_machine__5675__auto__ = function(state_50182){
switch(arguments.length){
case 0:
return state_machine__5675__auto____0.call(this);
case 1:
return state_machine__5675__auto____1.call(this,state_50182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5675__auto____0;
state_machine__5675__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5675__auto____1;
return state_machine__5675__auto__;
})()
;})(switch__5674__auto__,c__5689__auto___50212,out))
})();var state__5691__auto__ = (function (){var statearr_50211 = f__5690__auto__.call(null);(statearr_50211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5689__auto___50212);
return statearr_50211;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5691__auto__);
});})(c__5689__auto___50212,out))
);
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
