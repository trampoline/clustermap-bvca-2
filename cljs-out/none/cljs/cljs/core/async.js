// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24898 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24898 = (function (f,fn_handler,meta24899){
this.f = f;
this.fn_handler = fn_handler;
this.meta24899 = meta24899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24898.cljs$lang$type = true;
cljs.core.async.t24898.cljs$lang$ctorStr = "cljs.core.async/t24898";
cljs.core.async.t24898.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24898");
});
cljs.core.async.t24898.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24900){var self__ = this;
var _24900__$1 = this;return self__.meta24899;
});
cljs.core.async.t24898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24900,meta24899__$1){var self__ = this;
var _24900__$1 = this;return (new cljs.core.async.t24898(self__.f,self__.fn_handler,meta24899__$1));
});
cljs.core.async.__GT_t24898 = (function __GT_t24898(f__$1,fn_handler__$1,meta24899){return (new cljs.core.async.t24898(f__$1,fn_handler__$1,meta24899));
});
}
return (new cljs.core.async.t24898(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24902 = buff;if(G__24902)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__24902.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24902.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24902);
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
{var val_24903 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_24903);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_24903);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___24904 = n;var x_24905 = 0;while(true){
if((x_24905 < n__4289__auto___24904))
{(a[x_24905] = 0);
{
var G__24906 = (x_24905 + 1);
x_24905 = G__24906;
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
var G__24907 = (i + 1);
i = G__24907;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t24911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24911 = (function (flag,alt_flag,meta24912){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24912 = meta24912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24911.cljs$lang$type = true;
cljs.core.async.t24911.cljs$lang$ctorStr = "cljs.core.async/t24911";
cljs.core.async.t24911.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24911");
});
cljs.core.async.t24911.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t24911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t24911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24913){var self__ = this;
var _24913__$1 = this;return self__.meta24912;
});
cljs.core.async.t24911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24913,meta24912__$1){var self__ = this;
var _24913__$1 = this;return (new cljs.core.async.t24911(self__.flag,self__.alt_flag,meta24912__$1));
});
cljs.core.async.__GT_t24911 = (function __GT_t24911(flag__$1,alt_flag__$1,meta24912){return (new cljs.core.async.t24911(flag__$1,alt_flag__$1,meta24912));
});
}
return (new cljs.core.async.t24911(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24917 = (function (cb,flag,alt_handler,meta24918){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24918 = meta24918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24917.cljs$lang$type = true;
cljs.core.async.t24917.cljs$lang$ctorStr = "cljs.core.async/t24917";
cljs.core.async.t24917.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24917");
});
cljs.core.async.t24917.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24917.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t24917.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t24917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24919){var self__ = this;
var _24919__$1 = this;return self__.meta24918;
});
cljs.core.async.t24917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24919,meta24918__$1){var self__ = this;
var _24919__$1 = this;return (new cljs.core.async.t24917(self__.cb,self__.flag,self__.alt_handler,meta24918__$1));
});
cljs.core.async.__GT_t24917 = (function __GT_t24917(cb__$1,flag__$1,alt_handler__$1,meta24918){return (new cljs.core.async.t24917(cb__$1,flag__$1,alt_handler__$1,meta24918));
});
}
return (new cljs.core.async.t24917(cb,flag,alt_handler,null));
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
return (function (p1__24920_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24920_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24921 = (i + 1);
i = G__24921;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
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
var alts_BANG___delegate = function (ports,p__24922){var map__24924 = p__24922;var map__24924__$1 = ((cljs.core.seq_QMARK_.call(null,map__24924))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);var opts = map__24924__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24922 = null;if (arguments.length > 1) {
  p__24922 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24922);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24925){
var ports = cljs.core.first(arglist__24925);
var p__24922 = cljs.core.rest(arglist__24925);
return alts_BANG___delegate(ports,p__24922);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24933 = (function (ch,f,map_LT_,meta24934){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24934 = meta24934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24933.cljs$lang$type = true;
cljs.core.async.t24933.cljs$lang$ctorStr = "cljs.core.async/t24933";
cljs.core.async.t24933.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24933");
});
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t24936 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24936 = (function (fn1,_,meta24934,ch,f,map_LT_,meta24937){
this.fn1 = fn1;
this._ = _;
this.meta24934 = meta24934;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24937 = meta24937;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24936.cljs$lang$type = true;
cljs.core.async.t24936.cljs$lang$ctorStr = "cljs.core.async/t24936";
cljs.core.async.t24936.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24936");
});
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t24936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__24926_SHARP_){return f1.call(null,(((p1__24926_SHARP_ == null))?null:self__.f.call(null,p1__24926_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t24936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24938){var self__ = this;
var _24938__$1 = this;return self__.meta24937;
});
cljs.core.async.t24936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24938,meta24937__$1){var self__ = this;
var _24938__$1 = this;return (new cljs.core.async.t24936(self__.fn1,self__._,self__.meta24934,self__.ch,self__.f,self__.map_LT_,meta24937__$1));
});
cljs.core.async.__GT_t24936 = (function __GT_t24936(fn1__$1,___$2,meta24934__$1,ch__$2,f__$2,map_LT___$2,meta24937){return (new cljs.core.async.t24936(fn1__$1,___$2,meta24934__$1,ch__$2,f__$2,map_LT___$2,meta24937));
});
}
return (new cljs.core.async.t24936(fn1,___$1,self__.meta24934,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24935){var self__ = this;
var _24935__$1 = this;return self__.meta24934;
});
cljs.core.async.t24933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24935,meta24934__$1){var self__ = this;
var _24935__$1 = this;return (new cljs.core.async.t24933(self__.ch,self__.f,self__.map_LT_,meta24934__$1));
});
cljs.core.async.__GT_t24933 = (function __GT_t24933(ch__$1,f__$1,map_LT___$1,meta24934){return (new cljs.core.async.t24933(ch__$1,f__$1,map_LT___$1,meta24934));
});
}
return (new cljs.core.async.t24933(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24942 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24942 = (function (ch,f,map_GT_,meta24943){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24943 = meta24943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24942.cljs$lang$type = true;
cljs.core.async.t24942.cljs$lang$ctorStr = "cljs.core.async/t24942";
cljs.core.async.t24942.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24942");
});
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24942.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24944){var self__ = this;
var _24944__$1 = this;return self__.meta24943;
});
cljs.core.async.t24942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24944,meta24943__$1){var self__ = this;
var _24944__$1 = this;return (new cljs.core.async.t24942(self__.ch,self__.f,self__.map_GT_,meta24943__$1));
});
cljs.core.async.__GT_t24942 = (function __GT_t24942(ch__$1,f__$1,map_GT___$1,meta24943){return (new cljs.core.async.t24942(ch__$1,f__$1,map_GT___$1,meta24943));
});
}
return (new cljs.core.async.t24942(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24948 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24948 = (function (ch,p,filter_GT_,meta24949){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24949 = meta24949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24948.cljs$lang$type = true;
cljs.core.async.t24948.cljs$lang$ctorStr = "cljs.core.async/t24948";
cljs.core.async.t24948.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t24948");
});
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24948.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24950){var self__ = this;
var _24950__$1 = this;return self__.meta24949;
});
cljs.core.async.t24948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24950,meta24949__$1){var self__ = this;
var _24950__$1 = this;return (new cljs.core.async.t24948(self__.ch,self__.p,self__.filter_GT_,meta24949__$1));
});
cljs.core.async.__GT_t24948 = (function __GT_t24948(ch__$1,p__$1,filter_GT___$1,meta24949){return (new cljs.core.async.t24948(ch__$1,p__$1,filter_GT___$1,meta24949));
});
}
return (new cljs.core.async.t24948(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___25033 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25012){var state_val_25013 = (state_25012[1]);if((state_val_25013 === 1))
{var state_25012__$1 = state_25012;var statearr_25014_25034 = state_25012__$1;(statearr_25014_25034[2] = null);
(statearr_25014_25034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 2))
{var state_25012__$1 = state_25012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25012__$1,4,ch);
} else
{if((state_val_25013 === 3))
{var inst_25010 = (state_25012[2]);var state_25012__$1 = state_25012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25012__$1,inst_25010);
} else
{if((state_val_25013 === 4))
{var inst_24994 = (state_25012[7]);var inst_24994__$1 = (state_25012[2]);var inst_24995 = (inst_24994__$1 == null);var state_25012__$1 = (function (){var statearr_25015 = state_25012;(statearr_25015[7] = inst_24994__$1);
return statearr_25015;
})();if(cljs.core.truth_(inst_24995))
{var statearr_25016_25035 = state_25012__$1;(statearr_25016_25035[1] = 5);
} else
{var statearr_25017_25036 = state_25012__$1;(statearr_25017_25036[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 5))
{var inst_24997 = cljs.core.async.close_BANG_.call(null,out);var state_25012__$1 = state_25012;var statearr_25018_25037 = state_25012__$1;(statearr_25018_25037[2] = inst_24997);
(statearr_25018_25037[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 6))
{var inst_24994 = (state_25012[7]);var inst_24999 = p.call(null,inst_24994);var state_25012__$1 = state_25012;if(cljs.core.truth_(inst_24999))
{var statearr_25019_25038 = state_25012__$1;(statearr_25019_25038[1] = 8);
} else
{var statearr_25020_25039 = state_25012__$1;(statearr_25020_25039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 7))
{var inst_25008 = (state_25012[2]);var state_25012__$1 = state_25012;var statearr_25021_25040 = state_25012__$1;(statearr_25021_25040[2] = inst_25008);
(statearr_25021_25040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 8))
{var inst_24994 = (state_25012[7]);var state_25012__$1 = state_25012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25012__$1,11,out,inst_24994);
} else
{if((state_val_25013 === 9))
{var state_25012__$1 = state_25012;var statearr_25022_25041 = state_25012__$1;(statearr_25022_25041[2] = null);
(statearr_25022_25041[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 10))
{var inst_25005 = (state_25012[2]);var state_25012__$1 = (function (){var statearr_25023 = state_25012;(statearr_25023[8] = inst_25005);
return statearr_25023;
})();var statearr_25024_25042 = state_25012__$1;(statearr_25024_25042[2] = null);
(statearr_25024_25042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25013 === 11))
{var inst_25002 = (state_25012[2]);var state_25012__$1 = state_25012;var statearr_25025_25043 = state_25012__$1;(statearr_25025_25043[2] = inst_25002);
(statearr_25025_25043[1] = 10);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25029 = [null,null,null,null,null,null,null,null,null];(statearr_25029[0] = state_machine__5548__auto__);
(statearr_25029[1] = 1);
return statearr_25029;
});
var state_machine__5548__auto____1 = (function (state_25012){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25030){if((e25030 instanceof Object))
{var ex__5551__auto__ = e25030;var statearr_25031_25044 = state_25012;(statearr_25031_25044[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25030;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25045 = state_25012;
state_25012 = G__25045;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25012){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25032 = f__5563__auto__.call(null);(statearr_25032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25033);
return statearr_25032;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25197){var state_val_25198 = (state_25197[1]);if((state_val_25198 === 1))
{var state_25197__$1 = state_25197;var statearr_25199_25236 = state_25197__$1;(statearr_25199_25236[2] = null);
(statearr_25199_25236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 2))
{var state_25197__$1 = state_25197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25197__$1,4,in$);
} else
{if((state_val_25198 === 3))
{var inst_25195 = (state_25197[2]);var state_25197__$1 = state_25197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25197__$1,inst_25195);
} else
{if((state_val_25198 === 4))
{var inst_25143 = (state_25197[7]);var inst_25143__$1 = (state_25197[2]);var inst_25144 = (inst_25143__$1 == null);var state_25197__$1 = (function (){var statearr_25200 = state_25197;(statearr_25200[7] = inst_25143__$1);
return statearr_25200;
})();if(cljs.core.truth_(inst_25144))
{var statearr_25201_25237 = state_25197__$1;(statearr_25201_25237[1] = 5);
} else
{var statearr_25202_25238 = state_25197__$1;(statearr_25202_25238[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 5))
{var inst_25146 = cljs.core.async.close_BANG_.call(null,out);var state_25197__$1 = state_25197;var statearr_25203_25239 = state_25197__$1;(statearr_25203_25239[2] = inst_25146);
(statearr_25203_25239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 6))
{var inst_25143 = (state_25197[7]);var inst_25148 = f.call(null,inst_25143);var inst_25153 = cljs.core.seq.call(null,inst_25148);var inst_25154 = inst_25153;var inst_25155 = null;var inst_25156 = 0;var inst_25157 = 0;var state_25197__$1 = (function (){var statearr_25204 = state_25197;(statearr_25204[8] = inst_25156);
(statearr_25204[9] = inst_25157);
(statearr_25204[10] = inst_25154);
(statearr_25204[11] = inst_25155);
return statearr_25204;
})();var statearr_25205_25240 = state_25197__$1;(statearr_25205_25240[2] = null);
(statearr_25205_25240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 7))
{var inst_25193 = (state_25197[2]);var state_25197__$1 = state_25197;var statearr_25206_25241 = state_25197__$1;(statearr_25206_25241[2] = inst_25193);
(statearr_25206_25241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 8))
{var inst_25156 = (state_25197[8]);var inst_25157 = (state_25197[9]);var inst_25159 = (inst_25157 < inst_25156);var inst_25160 = inst_25159;var state_25197__$1 = state_25197;if(cljs.core.truth_(inst_25160))
{var statearr_25207_25242 = state_25197__$1;(statearr_25207_25242[1] = 10);
} else
{var statearr_25208_25243 = state_25197__$1;(statearr_25208_25243[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 9))
{var inst_25190 = (state_25197[2]);var state_25197__$1 = (function (){var statearr_25209 = state_25197;(statearr_25209[12] = inst_25190);
return statearr_25209;
})();var statearr_25210_25244 = state_25197__$1;(statearr_25210_25244[2] = null);
(statearr_25210_25244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 10))
{var inst_25157 = (state_25197[9]);var inst_25155 = (state_25197[11]);var inst_25162 = cljs.core._nth.call(null,inst_25155,inst_25157);var state_25197__$1 = state_25197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25197__$1,13,out,inst_25162);
} else
{if((state_val_25198 === 11))
{var inst_25154 = (state_25197[10]);var inst_25168 = (state_25197[13]);var inst_25168__$1 = cljs.core.seq.call(null,inst_25154);var state_25197__$1 = (function (){var statearr_25214 = state_25197;(statearr_25214[13] = inst_25168__$1);
return statearr_25214;
})();if(inst_25168__$1)
{var statearr_25215_25245 = state_25197__$1;(statearr_25215_25245[1] = 14);
} else
{var statearr_25216_25246 = state_25197__$1;(statearr_25216_25246[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 12))
{var inst_25188 = (state_25197[2]);var state_25197__$1 = state_25197;var statearr_25217_25247 = state_25197__$1;(statearr_25217_25247[2] = inst_25188);
(statearr_25217_25247[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 13))
{var inst_25156 = (state_25197[8]);var inst_25157 = (state_25197[9]);var inst_25154 = (state_25197[10]);var inst_25155 = (state_25197[11]);var inst_25164 = (state_25197[2]);var inst_25165 = (inst_25157 + 1);var tmp25211 = inst_25156;var tmp25212 = inst_25154;var tmp25213 = inst_25155;var inst_25154__$1 = tmp25212;var inst_25155__$1 = tmp25213;var inst_25156__$1 = tmp25211;var inst_25157__$1 = inst_25165;var state_25197__$1 = (function (){var statearr_25218 = state_25197;(statearr_25218[8] = inst_25156__$1);
(statearr_25218[9] = inst_25157__$1);
(statearr_25218[10] = inst_25154__$1);
(statearr_25218[11] = inst_25155__$1);
(statearr_25218[14] = inst_25164);
return statearr_25218;
})();var statearr_25219_25248 = state_25197__$1;(statearr_25219_25248[2] = null);
(statearr_25219_25248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 14))
{var inst_25168 = (state_25197[13]);var inst_25170 = cljs.core.chunked_seq_QMARK_.call(null,inst_25168);var state_25197__$1 = state_25197;if(inst_25170)
{var statearr_25220_25249 = state_25197__$1;(statearr_25220_25249[1] = 17);
} else
{var statearr_25221_25250 = state_25197__$1;(statearr_25221_25250[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 15))
{var state_25197__$1 = state_25197;var statearr_25222_25251 = state_25197__$1;(statearr_25222_25251[2] = null);
(statearr_25222_25251[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 16))
{var inst_25186 = (state_25197[2]);var state_25197__$1 = state_25197;var statearr_25223_25252 = state_25197__$1;(statearr_25223_25252[2] = inst_25186);
(statearr_25223_25252[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 17))
{var inst_25168 = (state_25197[13]);var inst_25172 = cljs.core.chunk_first.call(null,inst_25168);var inst_25173 = cljs.core.chunk_rest.call(null,inst_25168);var inst_25174 = cljs.core.count.call(null,inst_25172);var inst_25154 = inst_25173;var inst_25155 = inst_25172;var inst_25156 = inst_25174;var inst_25157 = 0;var state_25197__$1 = (function (){var statearr_25224 = state_25197;(statearr_25224[8] = inst_25156);
(statearr_25224[9] = inst_25157);
(statearr_25224[10] = inst_25154);
(statearr_25224[11] = inst_25155);
return statearr_25224;
})();var statearr_25225_25253 = state_25197__$1;(statearr_25225_25253[2] = null);
(statearr_25225_25253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 18))
{var inst_25168 = (state_25197[13]);var inst_25177 = cljs.core.first.call(null,inst_25168);var state_25197__$1 = state_25197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25197__$1,20,out,inst_25177);
} else
{if((state_val_25198 === 19))
{var inst_25183 = (state_25197[2]);var state_25197__$1 = state_25197;var statearr_25226_25254 = state_25197__$1;(statearr_25226_25254[2] = inst_25183);
(statearr_25226_25254[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25198 === 20))
{var inst_25168 = (state_25197[13]);var inst_25179 = (state_25197[2]);var inst_25180 = cljs.core.next.call(null,inst_25168);var inst_25154 = inst_25180;var inst_25155 = null;var inst_25156 = 0;var inst_25157 = 0;var state_25197__$1 = (function (){var statearr_25227 = state_25197;(statearr_25227[15] = inst_25179);
(statearr_25227[8] = inst_25156);
(statearr_25227[9] = inst_25157);
(statearr_25227[10] = inst_25154);
(statearr_25227[11] = inst_25155);
return statearr_25227;
})();var statearr_25228_25255 = state_25197__$1;(statearr_25228_25255[2] = null);
(statearr_25228_25255[1] = 8);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25232[0] = state_machine__5548__auto__);
(statearr_25232[1] = 1);
return statearr_25232;
});
var state_machine__5548__auto____1 = (function (state_25197){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25197);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25233){if((e25233 instanceof Object))
{var ex__5551__auto__ = e25233;var statearr_25234_25256 = state_25197;(statearr_25234_25256[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25257 = state_25197;
state_25197 = G__25257;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25197){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25235 = f__5563__auto__.call(null);(statearr_25235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25235;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___25338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25317){var state_val_25318 = (state_25317[1]);if((state_val_25318 === 1))
{var state_25317__$1 = state_25317;var statearr_25319_25339 = state_25317__$1;(statearr_25319_25339[2] = null);
(statearr_25319_25339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 2))
{var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25317__$1,4,from);
} else
{if((state_val_25318 === 3))
{var inst_25315 = (state_25317[2]);var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25317__$1,inst_25315);
} else
{if((state_val_25318 === 4))
{var inst_25300 = (state_25317[7]);var inst_25300__$1 = (state_25317[2]);var inst_25301 = (inst_25300__$1 == null);var state_25317__$1 = (function (){var statearr_25320 = state_25317;(statearr_25320[7] = inst_25300__$1);
return statearr_25320;
})();if(cljs.core.truth_(inst_25301))
{var statearr_25321_25340 = state_25317__$1;(statearr_25321_25340[1] = 5);
} else
{var statearr_25322_25341 = state_25317__$1;(statearr_25322_25341[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 5))
{var state_25317__$1 = state_25317;if(cljs.core.truth_(close_QMARK_))
{var statearr_25323_25342 = state_25317__$1;(statearr_25323_25342[1] = 8);
} else
{var statearr_25324_25343 = state_25317__$1;(statearr_25324_25343[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 6))
{var inst_25300 = (state_25317[7]);var state_25317__$1 = state_25317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25317__$1,11,to,inst_25300);
} else
{if((state_val_25318 === 7))
{var inst_25313 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25325_25344 = state_25317__$1;(statearr_25325_25344[2] = inst_25313);
(statearr_25325_25344[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 8))
{var inst_25304 = cljs.core.async.close_BANG_.call(null,to);var state_25317__$1 = state_25317;var statearr_25326_25345 = state_25317__$1;(statearr_25326_25345[2] = inst_25304);
(statearr_25326_25345[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 9))
{var state_25317__$1 = state_25317;var statearr_25327_25346 = state_25317__$1;(statearr_25327_25346[2] = null);
(statearr_25327_25346[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 10))
{var inst_25307 = (state_25317[2]);var state_25317__$1 = state_25317;var statearr_25328_25347 = state_25317__$1;(statearr_25328_25347[2] = inst_25307);
(statearr_25328_25347[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25318 === 11))
{var inst_25310 = (state_25317[2]);var state_25317__$1 = (function (){var statearr_25329 = state_25317;(statearr_25329[8] = inst_25310);
return statearr_25329;
})();var statearr_25330_25348 = state_25317__$1;(statearr_25330_25348[2] = null);
(statearr_25330_25348[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25334 = [null,null,null,null,null,null,null,null,null];(statearr_25334[0] = state_machine__5548__auto__);
(statearr_25334[1] = 1);
return statearr_25334;
});
var state_machine__5548__auto____1 = (function (state_25317){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25335){if((e25335 instanceof Object))
{var ex__5551__auto__ = e25335;var statearr_25336_25349 = state_25317;(statearr_25336_25349[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25350 = state_25317;
state_25317 = G__25350;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25317){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25337 = f__5563__auto__.call(null);(statearr_25337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25338);
return statearr_25337;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___25437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25415){var state_val_25416 = (state_25415[1]);if((state_val_25416 === 1))
{var state_25415__$1 = state_25415;var statearr_25417_25438 = state_25415__$1;(statearr_25417_25438[2] = null);
(statearr_25417_25438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 2))
{var state_25415__$1 = state_25415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25415__$1,4,ch);
} else
{if((state_val_25416 === 3))
{var inst_25413 = (state_25415[2]);var state_25415__$1 = state_25415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25415__$1,inst_25413);
} else
{if((state_val_25416 === 4))
{var inst_25396 = (state_25415[7]);var inst_25396__$1 = (state_25415[2]);var inst_25397 = (inst_25396__$1 == null);var state_25415__$1 = (function (){var statearr_25418 = state_25415;(statearr_25418[7] = inst_25396__$1);
return statearr_25418;
})();if(cljs.core.truth_(inst_25397))
{var statearr_25419_25439 = state_25415__$1;(statearr_25419_25439[1] = 5);
} else
{var statearr_25420_25440 = state_25415__$1;(statearr_25420_25440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 5))
{var inst_25399 = cljs.core.async.close_BANG_.call(null,tc);var inst_25400 = cljs.core.async.close_BANG_.call(null,fc);var state_25415__$1 = (function (){var statearr_25421 = state_25415;(statearr_25421[8] = inst_25399);
return statearr_25421;
})();var statearr_25422_25441 = state_25415__$1;(statearr_25422_25441[2] = inst_25400);
(statearr_25422_25441[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 6))
{var inst_25396 = (state_25415[7]);var inst_25402 = p.call(null,inst_25396);var state_25415__$1 = state_25415;if(cljs.core.truth_(inst_25402))
{var statearr_25423_25442 = state_25415__$1;(statearr_25423_25442[1] = 9);
} else
{var statearr_25424_25443 = state_25415__$1;(statearr_25424_25443[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 7))
{var inst_25411 = (state_25415[2]);var state_25415__$1 = state_25415;var statearr_25425_25444 = state_25415__$1;(statearr_25425_25444[2] = inst_25411);
(statearr_25425_25444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 8))
{var inst_25408 = (state_25415[2]);var state_25415__$1 = (function (){var statearr_25426 = state_25415;(statearr_25426[9] = inst_25408);
return statearr_25426;
})();var statearr_25427_25445 = state_25415__$1;(statearr_25427_25445[2] = null);
(statearr_25427_25445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 9))
{var state_25415__$1 = state_25415;var statearr_25428_25446 = state_25415__$1;(statearr_25428_25446[2] = tc);
(statearr_25428_25446[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 10))
{var state_25415__$1 = state_25415;var statearr_25429_25447 = state_25415__$1;(statearr_25429_25447[2] = fc);
(statearr_25429_25447[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25416 === 11))
{var inst_25396 = (state_25415[7]);var inst_25406 = (state_25415[2]);var state_25415__$1 = state_25415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25415__$1,8,inst_25406,inst_25396);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25433 = [null,null,null,null,null,null,null,null,null,null];(statearr_25433[0] = state_machine__5548__auto__);
(statearr_25433[1] = 1);
return statearr_25433;
});
var state_machine__5548__auto____1 = (function (state_25415){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25434){if((e25434 instanceof Object))
{var ex__5551__auto__ = e25434;var statearr_25435_25448 = state_25415;(statearr_25435_25448[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25449 = state_25415;
state_25415 = G__25449;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25415){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25436 = f__5563__auto__.call(null);(statearr_25436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___25437);
return statearr_25436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25496){var state_val_25497 = (state_25496[1]);if((state_val_25497 === 7))
{var inst_25492 = (state_25496[2]);var state_25496__$1 = state_25496;var statearr_25498_25514 = state_25496__$1;(statearr_25498_25514[2] = inst_25492);
(statearr_25498_25514[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25497 === 6))
{var inst_25485 = (state_25496[7]);var inst_25482 = (state_25496[8]);var inst_25489 = f.call(null,inst_25482,inst_25485);var inst_25482__$1 = inst_25489;var state_25496__$1 = (function (){var statearr_25499 = state_25496;(statearr_25499[8] = inst_25482__$1);
return statearr_25499;
})();var statearr_25500_25515 = state_25496__$1;(statearr_25500_25515[2] = null);
(statearr_25500_25515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25497 === 5))
{var inst_25482 = (state_25496[8]);var state_25496__$1 = state_25496;var statearr_25501_25516 = state_25496__$1;(statearr_25501_25516[2] = inst_25482);
(statearr_25501_25516[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25497 === 4))
{var inst_25485 = (state_25496[7]);var inst_25485__$1 = (state_25496[2]);var inst_25486 = (inst_25485__$1 == null);var state_25496__$1 = (function (){var statearr_25502 = state_25496;(statearr_25502[7] = inst_25485__$1);
return statearr_25502;
})();if(cljs.core.truth_(inst_25486))
{var statearr_25503_25517 = state_25496__$1;(statearr_25503_25517[1] = 5);
} else
{var statearr_25504_25518 = state_25496__$1;(statearr_25504_25518[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25497 === 3))
{var inst_25494 = (state_25496[2]);var state_25496__$1 = state_25496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25496__$1,inst_25494);
} else
{if((state_val_25497 === 2))
{var state_25496__$1 = state_25496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25496__$1,4,ch);
} else
{if((state_val_25497 === 1))
{var inst_25482 = init;var state_25496__$1 = (function (){var statearr_25505 = state_25496;(statearr_25505[8] = inst_25482);
return statearr_25505;
})();var statearr_25506_25519 = state_25496__$1;(statearr_25506_25519[2] = null);
(statearr_25506_25519[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25510 = [null,null,null,null,null,null,null,null,null];(statearr_25510[0] = state_machine__5548__auto__);
(statearr_25510[1] = 1);
return statearr_25510;
});
var state_machine__5548__auto____1 = (function (state_25496){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25496);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25511){if((e25511 instanceof Object))
{var ex__5551__auto__ = e25511;var statearr_25512_25520 = state_25496;(statearr_25512_25520[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25521 = state_25496;
state_25496 = G__25521;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25496){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25513 = f__5563__auto__.call(null);(statearr_25513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25583){var state_val_25584 = (state_25583[1]);if((state_val_25584 === 1))
{var inst_25563 = cljs.core.seq.call(null,coll);var inst_25564 = inst_25563;var state_25583__$1 = (function (){var statearr_25585 = state_25583;(statearr_25585[7] = inst_25564);
return statearr_25585;
})();var statearr_25586_25604 = state_25583__$1;(statearr_25586_25604[2] = null);
(statearr_25586_25604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 2))
{var inst_25564 = (state_25583[7]);var state_25583__$1 = state_25583;if(cljs.core.truth_(inst_25564))
{var statearr_25587_25605 = state_25583__$1;(statearr_25587_25605[1] = 4);
} else
{var statearr_25588_25606 = state_25583__$1;(statearr_25588_25606[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 3))
{var inst_25581 = (state_25583[2]);var state_25583__$1 = state_25583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25583__$1,inst_25581);
} else
{if((state_val_25584 === 4))
{var inst_25564 = (state_25583[7]);var inst_25567 = cljs.core.first.call(null,inst_25564);var state_25583__$1 = state_25583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25583__$1,7,ch,inst_25567);
} else
{if((state_val_25584 === 5))
{var state_25583__$1 = state_25583;if(cljs.core.truth_(close_QMARK_))
{var statearr_25589_25607 = state_25583__$1;(statearr_25589_25607[1] = 8);
} else
{var statearr_25590_25608 = state_25583__$1;(statearr_25590_25608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 6))
{var inst_25579 = (state_25583[2]);var state_25583__$1 = state_25583;var statearr_25591_25609 = state_25583__$1;(statearr_25591_25609[2] = inst_25579);
(statearr_25591_25609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 7))
{var inst_25564 = (state_25583[7]);var inst_25569 = (state_25583[2]);var inst_25570 = cljs.core.next.call(null,inst_25564);var inst_25564__$1 = inst_25570;var state_25583__$1 = (function (){var statearr_25592 = state_25583;(statearr_25592[8] = inst_25569);
(statearr_25592[7] = inst_25564__$1);
return statearr_25592;
})();var statearr_25593_25610 = state_25583__$1;(statearr_25593_25610[2] = null);
(statearr_25593_25610[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 8))
{var inst_25574 = cljs.core.async.close_BANG_.call(null,ch);var state_25583__$1 = state_25583;var statearr_25594_25611 = state_25583__$1;(statearr_25594_25611[2] = inst_25574);
(statearr_25594_25611[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 9))
{var state_25583__$1 = state_25583;var statearr_25595_25612 = state_25583__$1;(statearr_25595_25612[2] = null);
(statearr_25595_25612[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25584 === 10))
{var inst_25577 = (state_25583[2]);var state_25583__$1 = state_25583;var statearr_25596_25613 = state_25583__$1;(statearr_25596_25613[2] = inst_25577);
(statearr_25596_25613[1] = 6);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_25600 = [null,null,null,null,null,null,null,null,null];(statearr_25600[0] = state_machine__5548__auto__);
(statearr_25600[1] = 1);
return statearr_25600;
});
var state_machine__5548__auto____1 = (function (state_25583){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25583);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e25601){if((e25601 instanceof Object))
{var ex__5551__auto__ = e25601;var statearr_25602_25614 = state_25583;(statearr_25602_25614[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25615 = state_25583;
state_25583 = G__25615;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25583){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_25603 = f__5563__auto__.call(null);(statearr_25603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_25603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.Mux = (function (){var obj25617 = {};return obj25617;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj25619 = {};return obj25619;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25843 = (function (cs,ch,mult,meta25844){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25844 = meta25844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25843.cljs$lang$type = true;
cljs.core.async.t25843.cljs$lang$ctorStr = "cljs.core.async/t25843";
cljs.core.async.t25843.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t25843");
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25843.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25845){var self__ = this;
var _25845__$1 = this;return self__.meta25844;
});})(cs))
;
cljs.core.async.t25843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25845,meta25844__$1){var self__ = this;
var _25845__$1 = this;return (new cljs.core.async.t25843(self__.cs,self__.ch,self__.mult,meta25844__$1));
});})(cs))
;
cljs.core.async.__GT_t25843 = ((function (cs){
return (function __GT_t25843(cs__$1,ch__$1,mult__$1,meta25844){return (new cljs.core.async.t25843(cs__$1,ch__$1,mult__$1,meta25844));
});})(cs))
;
}
return (new cljs.core.async.t25843(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___26066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_25980){var state_val_25981 = (state_25980[1]);if((state_val_25981 === 32))
{var inst_25924 = (state_25980[7]);var inst_25848 = (state_25980[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25980,31,Object,null,30);var inst_25931 = cljs.core.async.put_BANG_.call(null,inst_25924,inst_25848,done);var state_25980__$1 = state_25980;var statearr_25982_26067 = state_25980__$1;(statearr_25982_26067[2] = inst_25931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 1))
{var state_25980__$1 = state_25980;var statearr_25983_26068 = state_25980__$1;(statearr_25983_26068[2] = null);
(statearr_25983_26068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 33))
{var inst_25937 = (state_25980[9]);var inst_25939 = cljs.core.chunked_seq_QMARK_.call(null,inst_25937);var state_25980__$1 = state_25980;if(inst_25939)
{var statearr_25984_26069 = state_25980__$1;(statearr_25984_26069[1] = 36);
} else
{var statearr_25985_26070 = state_25980__$1;(statearr_25985_26070[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 2))
{var state_25980__$1 = state_25980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,4,ch);
} else
{if((state_val_25981 === 34))
{var state_25980__$1 = state_25980;var statearr_25986_26071 = state_25980__$1;(statearr_25986_26071[2] = null);
(statearr_25986_26071[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 3))
{var inst_25978 = (state_25980[2]);var state_25980__$1 = state_25980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25980__$1,inst_25978);
} else
{if((state_val_25981 === 35))
{var inst_25962 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_25987_26072 = state_25980__$1;(statearr_25987_26072[2] = inst_25962);
(statearr_25987_26072[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 4))
{var inst_25848 = (state_25980[8]);var inst_25848__$1 = (state_25980[2]);var inst_25849 = (inst_25848__$1 == null);var state_25980__$1 = (function (){var statearr_25988 = state_25980;(statearr_25988[8] = inst_25848__$1);
return statearr_25988;
})();if(cljs.core.truth_(inst_25849))
{var statearr_25989_26073 = state_25980__$1;(statearr_25989_26073[1] = 5);
} else
{var statearr_25990_26074 = state_25980__$1;(statearr_25990_26074[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 36))
{var inst_25937 = (state_25980[9]);var inst_25941 = cljs.core.chunk_first.call(null,inst_25937);var inst_25942 = cljs.core.chunk_rest.call(null,inst_25937);var inst_25943 = cljs.core.count.call(null,inst_25941);var inst_25916 = inst_25942;var inst_25917 = inst_25941;var inst_25918 = inst_25943;var inst_25919 = 0;var state_25980__$1 = (function (){var statearr_25991 = state_25980;(statearr_25991[10] = inst_25917);
(statearr_25991[11] = inst_25916);
(statearr_25991[12] = inst_25918);
(statearr_25991[13] = inst_25919);
return statearr_25991;
})();var statearr_25992_26075 = state_25980__$1;(statearr_25992_26075[2] = null);
(statearr_25992_26075[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 5))
{var inst_25855 = cljs.core.deref.call(null,cs);var inst_25856 = cljs.core.seq.call(null,inst_25855);var inst_25857 = inst_25856;var inst_25858 = null;var inst_25859 = 0;var inst_25860 = 0;var state_25980__$1 = (function (){var statearr_25993 = state_25980;(statearr_25993[14] = inst_25857);
(statearr_25993[15] = inst_25858);
(statearr_25993[16] = inst_25860);
(statearr_25993[17] = inst_25859);
return statearr_25993;
})();var statearr_25994_26076 = state_25980__$1;(statearr_25994_26076[2] = null);
(statearr_25994_26076[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 37))
{var inst_25937 = (state_25980[9]);var inst_25946 = cljs.core.first.call(null,inst_25937);var state_25980__$1 = (function (){var statearr_25995 = state_25980;(statearr_25995[18] = inst_25946);
return statearr_25995;
})();var statearr_25996_26077 = state_25980__$1;(statearr_25996_26077[2] = null);
(statearr_25996_26077[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 6))
{var inst_25908 = (state_25980[19]);var inst_25907 = cljs.core.deref.call(null,cs);var inst_25908__$1 = cljs.core.keys.call(null,inst_25907);var inst_25909 = cljs.core.count.call(null,inst_25908__$1);var inst_25910 = cljs.core.reset_BANG_.call(null,dctr,inst_25909);var inst_25915 = cljs.core.seq.call(null,inst_25908__$1);var inst_25916 = inst_25915;var inst_25917 = null;var inst_25918 = 0;var inst_25919 = 0;var state_25980__$1 = (function (){var statearr_25997 = state_25980;(statearr_25997[19] = inst_25908__$1);
(statearr_25997[10] = inst_25917);
(statearr_25997[11] = inst_25916);
(statearr_25997[12] = inst_25918);
(statearr_25997[13] = inst_25919);
(statearr_25997[20] = inst_25910);
return statearr_25997;
})();var statearr_25998_26078 = state_25980__$1;(statearr_25998_26078[2] = null);
(statearr_25998_26078[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 38))
{var inst_25959 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_25999_26079 = state_25980__$1;(statearr_25999_26079[2] = inst_25959);
(statearr_25999_26079[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 7))
{var inst_25976 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26000_26080 = state_25980__$1;(statearr_26000_26080[2] = inst_25976);
(statearr_26000_26080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 39))
{var inst_25937 = (state_25980[9]);var inst_25955 = (state_25980[2]);var inst_25956 = cljs.core.next.call(null,inst_25937);var inst_25916 = inst_25956;var inst_25917 = null;var inst_25918 = 0;var inst_25919 = 0;var state_25980__$1 = (function (){var statearr_26001 = state_25980;(statearr_26001[10] = inst_25917);
(statearr_26001[11] = inst_25916);
(statearr_26001[12] = inst_25918);
(statearr_26001[13] = inst_25919);
(statearr_26001[21] = inst_25955);
return statearr_26001;
})();var statearr_26002_26081 = state_25980__$1;(statearr_26002_26081[2] = null);
(statearr_26002_26081[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 8))
{var inst_25860 = (state_25980[16]);var inst_25859 = (state_25980[17]);var inst_25862 = (inst_25860 < inst_25859);var inst_25863 = inst_25862;var state_25980__$1 = state_25980;if(cljs.core.truth_(inst_25863))
{var statearr_26003_26082 = state_25980__$1;(statearr_26003_26082[1] = 10);
} else
{var statearr_26004_26083 = state_25980__$1;(statearr_26004_26083[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 40))
{var inst_25946 = (state_25980[18]);var inst_25947 = (state_25980[2]);var inst_25948 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25949 = cljs.core.async.untap_STAR_.call(null,m,inst_25946);var state_25980__$1 = (function (){var statearr_26005 = state_25980;(statearr_26005[22] = inst_25948);
(statearr_26005[23] = inst_25947);
return statearr_26005;
})();var statearr_26006_26084 = state_25980__$1;(statearr_26006_26084[2] = inst_25949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 9))
{var inst_25905 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26007_26085 = state_25980__$1;(statearr_26007_26085[2] = inst_25905);
(statearr_26007_26085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 41))
{var inst_25848 = (state_25980[8]);var inst_25946 = (state_25980[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25980,40,Object,null,39);var inst_25953 = cljs.core.async.put_BANG_.call(null,inst_25946,inst_25848,done);var state_25980__$1 = state_25980;var statearr_26008_26086 = state_25980__$1;(statearr_26008_26086[2] = inst_25953);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 10))
{var inst_25858 = (state_25980[15]);var inst_25860 = (state_25980[16]);var inst_25866 = cljs.core._nth.call(null,inst_25858,inst_25860);var inst_25867 = cljs.core.nth.call(null,inst_25866,0,null);var inst_25868 = cljs.core.nth.call(null,inst_25866,1,null);var state_25980__$1 = (function (){var statearr_26009 = state_25980;(statearr_26009[24] = inst_25867);
return statearr_26009;
})();if(cljs.core.truth_(inst_25868))
{var statearr_26010_26087 = state_25980__$1;(statearr_26010_26087[1] = 13);
} else
{var statearr_26011_26088 = state_25980__$1;(statearr_26011_26088[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 42))
{var state_25980__$1 = state_25980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,45,dchan);
} else
{if((state_val_25981 === 11))
{var inst_25857 = (state_25980[14]);var inst_25877 = (state_25980[25]);var inst_25877__$1 = cljs.core.seq.call(null,inst_25857);var state_25980__$1 = (function (){var statearr_26012 = state_25980;(statearr_26012[25] = inst_25877__$1);
return statearr_26012;
})();if(inst_25877__$1)
{var statearr_26013_26089 = state_25980__$1;(statearr_26013_26089[1] = 16);
} else
{var statearr_26014_26090 = state_25980__$1;(statearr_26014_26090[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 43))
{var state_25980__$1 = state_25980;var statearr_26015_26091 = state_25980__$1;(statearr_26015_26091[2] = null);
(statearr_26015_26091[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 12))
{var inst_25903 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26016_26092 = state_25980__$1;(statearr_26016_26092[2] = inst_25903);
(statearr_26016_26092[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 44))
{var inst_25973 = (state_25980[2]);var state_25980__$1 = (function (){var statearr_26017 = state_25980;(statearr_26017[26] = inst_25973);
return statearr_26017;
})();var statearr_26018_26093 = state_25980__$1;(statearr_26018_26093[2] = null);
(statearr_26018_26093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 13))
{var inst_25867 = (state_25980[24]);var inst_25870 = cljs.core.async.close_BANG_.call(null,inst_25867);var state_25980__$1 = state_25980;var statearr_26019_26094 = state_25980__$1;(statearr_26019_26094[2] = inst_25870);
(statearr_26019_26094[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 45))
{var inst_25970 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26023_26095 = state_25980__$1;(statearr_26023_26095[2] = inst_25970);
(statearr_26023_26095[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 14))
{var state_25980__$1 = state_25980;var statearr_26024_26096 = state_25980__$1;(statearr_26024_26096[2] = null);
(statearr_26024_26096[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 15))
{var inst_25857 = (state_25980[14]);var inst_25858 = (state_25980[15]);var inst_25860 = (state_25980[16]);var inst_25859 = (state_25980[17]);var inst_25873 = (state_25980[2]);var inst_25874 = (inst_25860 + 1);var tmp26020 = inst_25857;var tmp26021 = inst_25858;var tmp26022 = inst_25859;var inst_25857__$1 = tmp26020;var inst_25858__$1 = tmp26021;var inst_25859__$1 = tmp26022;var inst_25860__$1 = inst_25874;var state_25980__$1 = (function (){var statearr_26025 = state_25980;(statearr_26025[14] = inst_25857__$1);
(statearr_26025[15] = inst_25858__$1);
(statearr_26025[16] = inst_25860__$1);
(statearr_26025[17] = inst_25859__$1);
(statearr_26025[27] = inst_25873);
return statearr_26025;
})();var statearr_26026_26097 = state_25980__$1;(statearr_26026_26097[2] = null);
(statearr_26026_26097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 16))
{var inst_25877 = (state_25980[25]);var inst_25879 = cljs.core.chunked_seq_QMARK_.call(null,inst_25877);var state_25980__$1 = state_25980;if(inst_25879)
{var statearr_26027_26098 = state_25980__$1;(statearr_26027_26098[1] = 19);
} else
{var statearr_26028_26099 = state_25980__$1;(statearr_26028_26099[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 17))
{var state_25980__$1 = state_25980;var statearr_26029_26100 = state_25980__$1;(statearr_26029_26100[2] = null);
(statearr_26029_26100[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 18))
{var inst_25901 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26030_26101 = state_25980__$1;(statearr_26030_26101[2] = inst_25901);
(statearr_26030_26101[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 19))
{var inst_25877 = (state_25980[25]);var inst_25881 = cljs.core.chunk_first.call(null,inst_25877);var inst_25882 = cljs.core.chunk_rest.call(null,inst_25877);var inst_25883 = cljs.core.count.call(null,inst_25881);var inst_25857 = inst_25882;var inst_25858 = inst_25881;var inst_25859 = inst_25883;var inst_25860 = 0;var state_25980__$1 = (function (){var statearr_26031 = state_25980;(statearr_26031[14] = inst_25857);
(statearr_26031[15] = inst_25858);
(statearr_26031[16] = inst_25860);
(statearr_26031[17] = inst_25859);
return statearr_26031;
})();var statearr_26032_26102 = state_25980__$1;(statearr_26032_26102[2] = null);
(statearr_26032_26102[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 20))
{var inst_25877 = (state_25980[25]);var inst_25887 = cljs.core.first.call(null,inst_25877);var inst_25888 = cljs.core.nth.call(null,inst_25887,0,null);var inst_25889 = cljs.core.nth.call(null,inst_25887,1,null);var state_25980__$1 = (function (){var statearr_26033 = state_25980;(statearr_26033[28] = inst_25888);
return statearr_26033;
})();if(cljs.core.truth_(inst_25889))
{var statearr_26034_26103 = state_25980__$1;(statearr_26034_26103[1] = 22);
} else
{var statearr_26035_26104 = state_25980__$1;(statearr_26035_26104[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 21))
{var inst_25898 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26036_26105 = state_25980__$1;(statearr_26036_26105[2] = inst_25898);
(statearr_26036_26105[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 22))
{var inst_25888 = (state_25980[28]);var inst_25891 = cljs.core.async.close_BANG_.call(null,inst_25888);var state_25980__$1 = state_25980;var statearr_26037_26106 = state_25980__$1;(statearr_26037_26106[2] = inst_25891);
(statearr_26037_26106[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 23))
{var state_25980__$1 = state_25980;var statearr_26038_26107 = state_25980__$1;(statearr_26038_26107[2] = null);
(statearr_26038_26107[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 24))
{var inst_25877 = (state_25980[25]);var inst_25894 = (state_25980[2]);var inst_25895 = cljs.core.next.call(null,inst_25877);var inst_25857 = inst_25895;var inst_25858 = null;var inst_25859 = 0;var inst_25860 = 0;var state_25980__$1 = (function (){var statearr_26039 = state_25980;(statearr_26039[29] = inst_25894);
(statearr_26039[14] = inst_25857);
(statearr_26039[15] = inst_25858);
(statearr_26039[16] = inst_25860);
(statearr_26039[17] = inst_25859);
return statearr_26039;
})();var statearr_26040_26108 = state_25980__$1;(statearr_26040_26108[2] = null);
(statearr_26040_26108[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 25))
{var inst_25918 = (state_25980[12]);var inst_25919 = (state_25980[13]);var inst_25921 = (inst_25919 < inst_25918);var inst_25922 = inst_25921;var state_25980__$1 = state_25980;if(cljs.core.truth_(inst_25922))
{var statearr_26041_26109 = state_25980__$1;(statearr_26041_26109[1] = 27);
} else
{var statearr_26042_26110 = state_25980__$1;(statearr_26042_26110[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 26))
{var inst_25908 = (state_25980[19]);var inst_25966 = (state_25980[2]);var inst_25967 = cljs.core.seq.call(null,inst_25908);var state_25980__$1 = (function (){var statearr_26043 = state_25980;(statearr_26043[30] = inst_25966);
return statearr_26043;
})();if(inst_25967)
{var statearr_26044_26111 = state_25980__$1;(statearr_26044_26111[1] = 42);
} else
{var statearr_26045_26112 = state_25980__$1;(statearr_26045_26112[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 27))
{var inst_25917 = (state_25980[10]);var inst_25919 = (state_25980[13]);var inst_25924 = cljs.core._nth.call(null,inst_25917,inst_25919);var state_25980__$1 = (function (){var statearr_26046 = state_25980;(statearr_26046[7] = inst_25924);
return statearr_26046;
})();var statearr_26047_26113 = state_25980__$1;(statearr_26047_26113[2] = null);
(statearr_26047_26113[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 28))
{var inst_25916 = (state_25980[11]);var inst_25937 = (state_25980[9]);var inst_25937__$1 = cljs.core.seq.call(null,inst_25916);var state_25980__$1 = (function (){var statearr_26051 = state_25980;(statearr_26051[9] = inst_25937__$1);
return statearr_26051;
})();if(inst_25937__$1)
{var statearr_26052_26114 = state_25980__$1;(statearr_26052_26114[1] = 33);
} else
{var statearr_26053_26115 = state_25980__$1;(statearr_26053_26115[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 29))
{var inst_25964 = (state_25980[2]);var state_25980__$1 = state_25980;var statearr_26054_26116 = state_25980__$1;(statearr_26054_26116[2] = inst_25964);
(statearr_26054_26116[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 30))
{var inst_25917 = (state_25980[10]);var inst_25916 = (state_25980[11]);var inst_25918 = (state_25980[12]);var inst_25919 = (state_25980[13]);var inst_25933 = (state_25980[2]);var inst_25934 = (inst_25919 + 1);var tmp26048 = inst_25917;var tmp26049 = inst_25916;var tmp26050 = inst_25918;var inst_25916__$1 = tmp26049;var inst_25917__$1 = tmp26048;var inst_25918__$1 = tmp26050;var inst_25919__$1 = inst_25934;var state_25980__$1 = (function (){var statearr_26055 = state_25980;(statearr_26055[31] = inst_25933);
(statearr_26055[10] = inst_25917__$1);
(statearr_26055[11] = inst_25916__$1);
(statearr_26055[12] = inst_25918__$1);
(statearr_26055[13] = inst_25919__$1);
return statearr_26055;
})();var statearr_26056_26117 = state_25980__$1;(statearr_26056_26117[2] = null);
(statearr_26056_26117[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25981 === 31))
{var inst_25924 = (state_25980[7]);var inst_25925 = (state_25980[2]);var inst_25926 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25927 = cljs.core.async.untap_STAR_.call(null,m,inst_25924);var state_25980__$1 = (function (){var statearr_26057 = state_25980;(statearr_26057[32] = inst_25926);
(statearr_26057[33] = inst_25925);
return statearr_26057;
})();var statearr_26058_26118 = state_25980__$1;(statearr_26058_26118[2] = inst_25927);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26062[0] = state_machine__5548__auto__);
(statearr_26062[1] = 1);
return statearr_26062;
});
var state_machine__5548__auto____1 = (function (state_25980){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_25980);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26063){if((e26063 instanceof Object))
{var ex__5551__auto__ = e26063;var statearr_26064_26119 = state_25980;(statearr_26064_26119[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26120 = state_25980;
state_25980 = G__26120;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_25980){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_25980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26065 = f__5563__auto__.call(null);(statearr_26065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26066);
return statearr_26065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Mix = (function (){var obj26122 = {};return obj26122;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t26232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26232 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta26233){
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
this.meta26233 = meta26233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26232.cljs$lang$type = true;
cljs.core.async.t26232.cljs$lang$ctorStr = "cljs.core.async/t26232";
cljs.core.async.t26232.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26232");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26234){var self__ = this;
var _26234__$1 = this;return self__.meta26233;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t26232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26234,meta26233__$1){var self__ = this;
var _26234__$1 = this;return (new cljs.core.async.t26232(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta26233__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t26232 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26232(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26233){return (new cljs.core.async.t26232(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta26233));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t26232(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___26341 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26299){var state_val_26300 = (state_26299[1]);if((state_val_26300 === 1))
{var inst_26238 = (state_26299[7]);var inst_26238__$1 = calc_state.call(null);var inst_26239 = cljs.core.seq_QMARK_.call(null,inst_26238__$1);var state_26299__$1 = (function (){var statearr_26301 = state_26299;(statearr_26301[7] = inst_26238__$1);
return statearr_26301;
})();if(inst_26239)
{var statearr_26302_26342 = state_26299__$1;(statearr_26302_26342[1] = 2);
} else
{var statearr_26303_26343 = state_26299__$1;(statearr_26303_26343[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 2))
{var inst_26238 = (state_26299[7]);var inst_26241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26238);var state_26299__$1 = state_26299;var statearr_26304_26344 = state_26299__$1;(statearr_26304_26344[2] = inst_26241);
(statearr_26304_26344[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 3))
{var inst_26238 = (state_26299[7]);var state_26299__$1 = state_26299;var statearr_26305_26345 = state_26299__$1;(statearr_26305_26345[2] = inst_26238);
(statearr_26305_26345[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 4))
{var inst_26238 = (state_26299[7]);var inst_26244 = (state_26299[2]);var inst_26245 = cljs.core.get.call(null,inst_26244,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26246 = cljs.core.get.call(null,inst_26244,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26247 = cljs.core.get.call(null,inst_26244,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_26248 = inst_26238;var state_26299__$1 = (function (){var statearr_26306 = state_26299;(statearr_26306[8] = inst_26245);
(statearr_26306[9] = inst_26246);
(statearr_26306[10] = inst_26248);
(statearr_26306[11] = inst_26247);
return statearr_26306;
})();var statearr_26307_26346 = state_26299__$1;(statearr_26307_26346[2] = null);
(statearr_26307_26346[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 5))
{var inst_26248 = (state_26299[10]);var inst_26251 = cljs.core.seq_QMARK_.call(null,inst_26248);var state_26299__$1 = state_26299;if(inst_26251)
{var statearr_26308_26347 = state_26299__$1;(statearr_26308_26347[1] = 7);
} else
{var statearr_26309_26348 = state_26299__$1;(statearr_26309_26348[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 6))
{var inst_26297 = (state_26299[2]);var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26299__$1,inst_26297);
} else
{if((state_val_26300 === 7))
{var inst_26248 = (state_26299[10]);var inst_26253 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26248);var state_26299__$1 = state_26299;var statearr_26310_26349 = state_26299__$1;(statearr_26310_26349[2] = inst_26253);
(statearr_26310_26349[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 8))
{var inst_26248 = (state_26299[10]);var state_26299__$1 = state_26299;var statearr_26311_26350 = state_26299__$1;(statearr_26311_26350[2] = inst_26248);
(statearr_26311_26350[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 9))
{var inst_26256 = (state_26299[12]);var inst_26256__$1 = (state_26299[2]);var inst_26257 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_26258 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_26259 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_26299__$1 = (function (){var statearr_26312 = state_26299;(statearr_26312[13] = inst_26259);
(statearr_26312[14] = inst_26258);
(statearr_26312[12] = inst_26256__$1);
return statearr_26312;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26299__$1,10,inst_26257);
} else
{if((state_val_26300 === 10))
{var inst_26264 = (state_26299[15]);var inst_26263 = (state_26299[16]);var inst_26262 = (state_26299[2]);var inst_26263__$1 = cljs.core.nth.call(null,inst_26262,0,null);var inst_26264__$1 = cljs.core.nth.call(null,inst_26262,1,null);var inst_26265 = (inst_26263__$1 == null);var inst_26266 = cljs.core._EQ_.call(null,inst_26264__$1,change);var inst_26267 = (inst_26265) || (inst_26266);var state_26299__$1 = (function (){var statearr_26313 = state_26299;(statearr_26313[15] = inst_26264__$1);
(statearr_26313[16] = inst_26263__$1);
return statearr_26313;
})();if(cljs.core.truth_(inst_26267))
{var statearr_26314_26351 = state_26299__$1;(statearr_26314_26351[1] = 11);
} else
{var statearr_26315_26352 = state_26299__$1;(statearr_26315_26352[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 11))
{var inst_26263 = (state_26299[16]);var inst_26269 = (inst_26263 == null);var state_26299__$1 = state_26299;if(cljs.core.truth_(inst_26269))
{var statearr_26316_26353 = state_26299__$1;(statearr_26316_26353[1] = 14);
} else
{var statearr_26317_26354 = state_26299__$1;(statearr_26317_26354[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 12))
{var inst_26264 = (state_26299[15]);var inst_26278 = (state_26299[17]);var inst_26259 = (state_26299[13]);var inst_26278__$1 = inst_26259.call(null,inst_26264);var state_26299__$1 = (function (){var statearr_26318 = state_26299;(statearr_26318[17] = inst_26278__$1);
return statearr_26318;
})();if(cljs.core.truth_(inst_26278__$1))
{var statearr_26319_26355 = state_26299__$1;(statearr_26319_26355[1] = 17);
} else
{var statearr_26320_26356 = state_26299__$1;(statearr_26320_26356[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 13))
{var inst_26295 = (state_26299[2]);var state_26299__$1 = state_26299;var statearr_26321_26357 = state_26299__$1;(statearr_26321_26357[2] = inst_26295);
(statearr_26321_26357[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 14))
{var inst_26264 = (state_26299[15]);var inst_26271 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26264);var state_26299__$1 = state_26299;var statearr_26322_26358 = state_26299__$1;(statearr_26322_26358[2] = inst_26271);
(statearr_26322_26358[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 15))
{var state_26299__$1 = state_26299;var statearr_26323_26359 = state_26299__$1;(statearr_26323_26359[2] = null);
(statearr_26323_26359[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 16))
{var inst_26274 = (state_26299[2]);var inst_26275 = calc_state.call(null);var inst_26248 = inst_26275;var state_26299__$1 = (function (){var statearr_26324 = state_26299;(statearr_26324[18] = inst_26274);
(statearr_26324[10] = inst_26248);
return statearr_26324;
})();var statearr_26325_26360 = state_26299__$1;(statearr_26325_26360[2] = null);
(statearr_26325_26360[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 17))
{var inst_26278 = (state_26299[17]);var state_26299__$1 = state_26299;var statearr_26326_26361 = state_26299__$1;(statearr_26326_26361[2] = inst_26278);
(statearr_26326_26361[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 18))
{var inst_26264 = (state_26299[15]);var inst_26259 = (state_26299[13]);var inst_26258 = (state_26299[14]);var inst_26281 = cljs.core.empty_QMARK_.call(null,inst_26259);var inst_26282 = inst_26258.call(null,inst_26264);var inst_26283 = cljs.core.not.call(null,inst_26282);var inst_26284 = (inst_26281) && (inst_26283);var state_26299__$1 = state_26299;var statearr_26327_26362 = state_26299__$1;(statearr_26327_26362[2] = inst_26284);
(statearr_26327_26362[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 19))
{var inst_26286 = (state_26299[2]);var state_26299__$1 = state_26299;if(cljs.core.truth_(inst_26286))
{var statearr_26328_26363 = state_26299__$1;(statearr_26328_26363[1] = 20);
} else
{var statearr_26329_26364 = state_26299__$1;(statearr_26329_26364[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 20))
{var inst_26263 = (state_26299[16]);var state_26299__$1 = state_26299;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26299__$1,23,out,inst_26263);
} else
{if((state_val_26300 === 21))
{var state_26299__$1 = state_26299;var statearr_26330_26365 = state_26299__$1;(statearr_26330_26365[2] = null);
(statearr_26330_26365[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 22))
{var inst_26256 = (state_26299[12]);var inst_26292 = (state_26299[2]);var inst_26248 = inst_26256;var state_26299__$1 = (function (){var statearr_26331 = state_26299;(statearr_26331[19] = inst_26292);
(statearr_26331[10] = inst_26248);
return statearr_26331;
})();var statearr_26332_26366 = state_26299__$1;(statearr_26332_26366[2] = null);
(statearr_26332_26366[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26300 === 23))
{var inst_26289 = (state_26299[2]);var state_26299__$1 = state_26299;var statearr_26333_26367 = state_26299__$1;(statearr_26333_26367[2] = inst_26289);
(statearr_26333_26367[1] = 22);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26337[0] = state_machine__5548__auto__);
(statearr_26337[1] = 1);
return statearr_26337;
});
var state_machine__5548__auto____1 = (function (state_26299){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26299);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26338){if((e26338 instanceof Object))
{var ex__5551__auto__ = e26338;var statearr_26339_26368 = state_26299;(statearr_26339_26368[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26299);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26338;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26369 = state_26299;
state_26299 = G__26369;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26299){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26340 = f__5563__auto__.call(null);(statearr_26340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26341);
return statearr_26340;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.Pub = (function (){var obj26371 = {};return obj26371;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__26372_SHARP_){if(cljs.core.truth_(p1__26372_SHARP_.call(null,topic)))
{return p1__26372_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__26372_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t26497 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26497 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26498){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26498 = meta26498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26497.cljs$lang$type = true;
cljs.core.async.t26497.cljs$lang$ctorStr = "cljs.core.async/t26497";
cljs.core.async.t26497.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t26497");
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t26497.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t26497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26499){var self__ = this;
var _26499__$1 = this;return self__.meta26498;
});})(mults,ensure_mult))
;
cljs.core.async.t26497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26499,meta26498__$1){var self__ = this;
var _26499__$1 = this;return (new cljs.core.async.t26497(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26498__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t26497 = ((function (mults,ensure_mult){
return (function __GT_t26497(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26498){return (new cljs.core.async.t26497(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26498));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t26497(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___26621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26573){var state_val_26574 = (state_26573[1]);if((state_val_26574 === 1))
{var state_26573__$1 = state_26573;var statearr_26575_26622 = state_26573__$1;(statearr_26575_26622[2] = null);
(statearr_26575_26622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 2))
{var state_26573__$1 = state_26573;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26573__$1,4,ch);
} else
{if((state_val_26574 === 3))
{var inst_26571 = (state_26573[2]);var state_26573__$1 = state_26573;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26573__$1,inst_26571);
} else
{if((state_val_26574 === 4))
{var inst_26502 = (state_26573[7]);var inst_26502__$1 = (state_26573[2]);var inst_26503 = (inst_26502__$1 == null);var state_26573__$1 = (function (){var statearr_26576 = state_26573;(statearr_26576[7] = inst_26502__$1);
return statearr_26576;
})();if(cljs.core.truth_(inst_26503))
{var statearr_26577_26623 = state_26573__$1;(statearr_26577_26623[1] = 5);
} else
{var statearr_26578_26624 = state_26573__$1;(statearr_26578_26624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 5))
{var inst_26509 = cljs.core.deref.call(null,mults);var inst_26510 = cljs.core.vals.call(null,inst_26509);var inst_26511 = cljs.core.seq.call(null,inst_26510);var inst_26512 = inst_26511;var inst_26513 = null;var inst_26514 = 0;var inst_26515 = 0;var state_26573__$1 = (function (){var statearr_26579 = state_26573;(statearr_26579[8] = inst_26514);
(statearr_26579[9] = inst_26513);
(statearr_26579[10] = inst_26512);
(statearr_26579[11] = inst_26515);
return statearr_26579;
})();var statearr_26580_26625 = state_26573__$1;(statearr_26580_26625[2] = null);
(statearr_26580_26625[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 6))
{var inst_26552 = (state_26573[12]);var inst_26502 = (state_26573[7]);var inst_26550 = (state_26573[13]);var inst_26550__$1 = topic_fn.call(null,inst_26502);var inst_26551 = cljs.core.deref.call(null,mults);var inst_26552__$1 = cljs.core.get.call(null,inst_26551,inst_26550__$1);var state_26573__$1 = (function (){var statearr_26581 = state_26573;(statearr_26581[12] = inst_26552__$1);
(statearr_26581[13] = inst_26550__$1);
return statearr_26581;
})();if(cljs.core.truth_(inst_26552__$1))
{var statearr_26582_26626 = state_26573__$1;(statearr_26582_26626[1] = 19);
} else
{var statearr_26583_26627 = state_26573__$1;(statearr_26583_26627[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 7))
{var inst_26569 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26584_26628 = state_26573__$1;(statearr_26584_26628[2] = inst_26569);
(statearr_26584_26628[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 8))
{var inst_26514 = (state_26573[8]);var inst_26515 = (state_26573[11]);var inst_26517 = (inst_26515 < inst_26514);var inst_26518 = inst_26517;var state_26573__$1 = state_26573;if(cljs.core.truth_(inst_26518))
{var statearr_26588_26629 = state_26573__$1;(statearr_26588_26629[1] = 10);
} else
{var statearr_26589_26630 = state_26573__$1;(statearr_26589_26630[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 9))
{var inst_26548 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26590_26631 = state_26573__$1;(statearr_26590_26631[2] = inst_26548);
(statearr_26590_26631[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 10))
{var inst_26514 = (state_26573[8]);var inst_26513 = (state_26573[9]);var inst_26512 = (state_26573[10]);var inst_26515 = (state_26573[11]);var inst_26520 = cljs.core._nth.call(null,inst_26513,inst_26515);var inst_26521 = cljs.core.async.muxch_STAR_.call(null,inst_26520);var inst_26522 = cljs.core.async.close_BANG_.call(null,inst_26521);var inst_26523 = (inst_26515 + 1);var tmp26585 = inst_26514;var tmp26586 = inst_26513;var tmp26587 = inst_26512;var inst_26512__$1 = tmp26587;var inst_26513__$1 = tmp26586;var inst_26514__$1 = tmp26585;var inst_26515__$1 = inst_26523;var state_26573__$1 = (function (){var statearr_26591 = state_26573;(statearr_26591[8] = inst_26514__$1);
(statearr_26591[9] = inst_26513__$1);
(statearr_26591[10] = inst_26512__$1);
(statearr_26591[11] = inst_26515__$1);
(statearr_26591[14] = inst_26522);
return statearr_26591;
})();var statearr_26592_26632 = state_26573__$1;(statearr_26592_26632[2] = null);
(statearr_26592_26632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 11))
{var inst_26512 = (state_26573[10]);var inst_26526 = (state_26573[15]);var inst_26526__$1 = cljs.core.seq.call(null,inst_26512);var state_26573__$1 = (function (){var statearr_26593 = state_26573;(statearr_26593[15] = inst_26526__$1);
return statearr_26593;
})();if(inst_26526__$1)
{var statearr_26594_26633 = state_26573__$1;(statearr_26594_26633[1] = 13);
} else
{var statearr_26595_26634 = state_26573__$1;(statearr_26595_26634[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 12))
{var inst_26546 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26596_26635 = state_26573__$1;(statearr_26596_26635[2] = inst_26546);
(statearr_26596_26635[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 13))
{var inst_26526 = (state_26573[15]);var inst_26528 = cljs.core.chunked_seq_QMARK_.call(null,inst_26526);var state_26573__$1 = state_26573;if(inst_26528)
{var statearr_26597_26636 = state_26573__$1;(statearr_26597_26636[1] = 16);
} else
{var statearr_26598_26637 = state_26573__$1;(statearr_26598_26637[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 14))
{var state_26573__$1 = state_26573;var statearr_26599_26638 = state_26573__$1;(statearr_26599_26638[2] = null);
(statearr_26599_26638[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 15))
{var inst_26544 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26600_26639 = state_26573__$1;(statearr_26600_26639[2] = inst_26544);
(statearr_26600_26639[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 16))
{var inst_26526 = (state_26573[15]);var inst_26530 = cljs.core.chunk_first.call(null,inst_26526);var inst_26531 = cljs.core.chunk_rest.call(null,inst_26526);var inst_26532 = cljs.core.count.call(null,inst_26530);var inst_26512 = inst_26531;var inst_26513 = inst_26530;var inst_26514 = inst_26532;var inst_26515 = 0;var state_26573__$1 = (function (){var statearr_26601 = state_26573;(statearr_26601[8] = inst_26514);
(statearr_26601[9] = inst_26513);
(statearr_26601[10] = inst_26512);
(statearr_26601[11] = inst_26515);
return statearr_26601;
})();var statearr_26602_26640 = state_26573__$1;(statearr_26602_26640[2] = null);
(statearr_26602_26640[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 17))
{var inst_26526 = (state_26573[15]);var inst_26535 = cljs.core.first.call(null,inst_26526);var inst_26536 = cljs.core.async.muxch_STAR_.call(null,inst_26535);var inst_26537 = cljs.core.async.close_BANG_.call(null,inst_26536);var inst_26538 = cljs.core.next.call(null,inst_26526);var inst_26512 = inst_26538;var inst_26513 = null;var inst_26514 = 0;var inst_26515 = 0;var state_26573__$1 = (function (){var statearr_26603 = state_26573;(statearr_26603[8] = inst_26514);
(statearr_26603[9] = inst_26513);
(statearr_26603[10] = inst_26512);
(statearr_26603[16] = inst_26537);
(statearr_26603[11] = inst_26515);
return statearr_26603;
})();var statearr_26604_26641 = state_26573__$1;(statearr_26604_26641[2] = null);
(statearr_26604_26641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 18))
{var inst_26541 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26605_26642 = state_26573__$1;(statearr_26605_26642[2] = inst_26541);
(statearr_26605_26642[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 19))
{var state_26573__$1 = state_26573;var statearr_26606_26643 = state_26573__$1;(statearr_26606_26643[2] = null);
(statearr_26606_26643[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 20))
{var state_26573__$1 = state_26573;var statearr_26607_26644 = state_26573__$1;(statearr_26607_26644[2] = null);
(statearr_26607_26644[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 21))
{var inst_26566 = (state_26573[2]);var state_26573__$1 = (function (){var statearr_26608 = state_26573;(statearr_26608[17] = inst_26566);
return statearr_26608;
})();var statearr_26609_26645 = state_26573__$1;(statearr_26609_26645[2] = null);
(statearr_26609_26645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 22))
{var inst_26563 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26610_26646 = state_26573__$1;(statearr_26610_26646[2] = inst_26563);
(statearr_26610_26646[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 23))
{var inst_26550 = (state_26573[13]);var inst_26554 = (state_26573[2]);var inst_26555 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26550);var state_26573__$1 = (function (){var statearr_26611 = state_26573;(statearr_26611[18] = inst_26554);
return statearr_26611;
})();var statearr_26612_26647 = state_26573__$1;(statearr_26612_26647[2] = inst_26555);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26573__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26574 === 24))
{var inst_26552 = (state_26573[12]);var inst_26502 = (state_26573[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26573,23,Object,null,22);var inst_26559 = cljs.core.async.muxch_STAR_.call(null,inst_26552);var state_26573__$1 = state_26573;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26573__$1,25,inst_26559,inst_26502);
} else
{if((state_val_26574 === 25))
{var inst_26561 = (state_26573[2]);var state_26573__$1 = state_26573;var statearr_26613_26648 = state_26573__$1;(statearr_26613_26648[2] = inst_26561);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26573__$1);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26617[0] = state_machine__5548__auto__);
(statearr_26617[1] = 1);
return statearr_26617;
});
var state_machine__5548__auto____1 = (function (state_26573){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26573);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26618){if((e26618 instanceof Object))
{var ex__5551__auto__ = e26618;var statearr_26619_26649 = state_26573;(statearr_26619_26649[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26573);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26650 = state_26573;
state_26573 = G__26650;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26573){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26620 = f__5563__auto__.call(null);(statearr_26620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26621);
return statearr_26620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
,cljs.core.range.call(null,cnt));var c__5562__auto___26787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26757){var state_val_26758 = (state_26757[1]);if((state_val_26758 === 1))
{var state_26757__$1 = state_26757;var statearr_26759_26788 = state_26757__$1;(statearr_26759_26788[2] = null);
(statearr_26759_26788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 2))
{var inst_26720 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_26721 = 0;var state_26757__$1 = (function (){var statearr_26760 = state_26757;(statearr_26760[7] = inst_26721);
(statearr_26760[8] = inst_26720);
return statearr_26760;
})();var statearr_26761_26789 = state_26757__$1;(statearr_26761_26789[2] = null);
(statearr_26761_26789[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 3))
{var inst_26755 = (state_26757[2]);var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26757__$1,inst_26755);
} else
{if((state_val_26758 === 4))
{var inst_26721 = (state_26757[7]);var inst_26723 = (inst_26721 < cnt);var state_26757__$1 = state_26757;if(cljs.core.truth_(inst_26723))
{var statearr_26762_26790 = state_26757__$1;(statearr_26762_26790[1] = 6);
} else
{var statearr_26763_26791 = state_26757__$1;(statearr_26763_26791[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 5))
{var inst_26741 = (state_26757[2]);var state_26757__$1 = (function (){var statearr_26764 = state_26757;(statearr_26764[9] = inst_26741);
return statearr_26764;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26757__$1,12,dchan);
} else
{if((state_val_26758 === 6))
{var state_26757__$1 = state_26757;var statearr_26765_26792 = state_26757__$1;(statearr_26765_26792[2] = null);
(statearr_26765_26792[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 7))
{var state_26757__$1 = state_26757;var statearr_26766_26793 = state_26757__$1;(statearr_26766_26793[2] = null);
(statearr_26766_26793[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 8))
{var inst_26739 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26767_26794 = state_26757__$1;(statearr_26767_26794[2] = inst_26739);
(statearr_26767_26794[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 9))
{var inst_26721 = (state_26757[7]);var inst_26734 = (state_26757[2]);var inst_26735 = (inst_26721 + 1);var inst_26721__$1 = inst_26735;var state_26757__$1 = (function (){var statearr_26768 = state_26757;(statearr_26768[10] = inst_26734);
(statearr_26768[7] = inst_26721__$1);
return statearr_26768;
})();var statearr_26769_26795 = state_26757__$1;(statearr_26769_26795[2] = null);
(statearr_26769_26795[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 10))
{var inst_26725 = (state_26757[2]);var inst_26726 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_26757__$1 = (function (){var statearr_26770 = state_26757;(statearr_26770[11] = inst_26725);
return statearr_26770;
})();var statearr_26771_26796 = state_26757__$1;(statearr_26771_26796[2] = inst_26726);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 11))
{var inst_26721 = (state_26757[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26757,10,Object,null,9);var inst_26730 = chs__$1.call(null,inst_26721);var inst_26731 = done.call(null,inst_26721);var inst_26732 = cljs.core.async.take_BANG_.call(null,inst_26730,inst_26731);var state_26757__$1 = state_26757;var statearr_26772_26797 = state_26757__$1;(statearr_26772_26797[2] = inst_26732);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 12))
{var inst_26743 = (state_26757[12]);var inst_26743__$1 = (state_26757[2]);var inst_26744 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26743__$1);var state_26757__$1 = (function (){var statearr_26773 = state_26757;(statearr_26773[12] = inst_26743__$1);
return statearr_26773;
})();if(cljs.core.truth_(inst_26744))
{var statearr_26774_26798 = state_26757__$1;(statearr_26774_26798[1] = 13);
} else
{var statearr_26775_26799 = state_26757__$1;(statearr_26775_26799[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 13))
{var inst_26746 = cljs.core.async.close_BANG_.call(null,out);var state_26757__$1 = state_26757;var statearr_26776_26800 = state_26757__$1;(statearr_26776_26800[2] = inst_26746);
(statearr_26776_26800[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 14))
{var inst_26743 = (state_26757[12]);var inst_26748 = cljs.core.apply.call(null,f,inst_26743);var state_26757__$1 = state_26757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26757__$1,16,out,inst_26748);
} else
{if((state_val_26758 === 15))
{var inst_26753 = (state_26757[2]);var state_26757__$1 = state_26757;var statearr_26777_26801 = state_26757__$1;(statearr_26777_26801[2] = inst_26753);
(statearr_26777_26801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26758 === 16))
{var inst_26750 = (state_26757[2]);var state_26757__$1 = (function (){var statearr_26778 = state_26757;(statearr_26778[13] = inst_26750);
return statearr_26778;
})();var statearr_26779_26802 = state_26757__$1;(statearr_26779_26802[2] = null);
(statearr_26779_26802[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26783[0] = state_machine__5548__auto__);
(statearr_26783[1] = 1);
return statearr_26783;
});
var state_machine__5548__auto____1 = (function (state_26757){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26757);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26784){if((e26784 instanceof Object))
{var ex__5551__auto__ = e26784;var statearr_26785_26803 = state_26757;(statearr_26785_26803[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26804 = state_26757;
state_26757 = G__26804;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26757){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26786 = f__5563__auto__.call(null);(statearr_26786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26787);
return statearr_26786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___26912 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26888){var state_val_26889 = (state_26888[1]);if((state_val_26889 === 1))
{var inst_26859 = cljs.core.vec.call(null,chs);var inst_26860 = inst_26859;var state_26888__$1 = (function (){var statearr_26890 = state_26888;(statearr_26890[7] = inst_26860);
return statearr_26890;
})();var statearr_26891_26913 = state_26888__$1;(statearr_26891_26913[2] = null);
(statearr_26891_26913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 2))
{var inst_26860 = (state_26888[7]);var inst_26862 = cljs.core.count.call(null,inst_26860);var inst_26863 = (inst_26862 > 0);var state_26888__$1 = state_26888;if(cljs.core.truth_(inst_26863))
{var statearr_26892_26914 = state_26888__$1;(statearr_26892_26914[1] = 4);
} else
{var statearr_26893_26915 = state_26888__$1;(statearr_26893_26915[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 3))
{var inst_26886 = (state_26888[2]);var state_26888__$1 = state_26888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26888__$1,inst_26886);
} else
{if((state_val_26889 === 4))
{var inst_26860 = (state_26888[7]);var state_26888__$1 = state_26888;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_26888__$1,7,inst_26860);
} else
{if((state_val_26889 === 5))
{var inst_26882 = cljs.core.async.close_BANG_.call(null,out);var state_26888__$1 = state_26888;var statearr_26894_26916 = state_26888__$1;(statearr_26894_26916[2] = inst_26882);
(statearr_26894_26916[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 6))
{var inst_26884 = (state_26888[2]);var state_26888__$1 = state_26888;var statearr_26895_26917 = state_26888__$1;(statearr_26895_26917[2] = inst_26884);
(statearr_26895_26917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 7))
{var inst_26867 = (state_26888[8]);var inst_26868 = (state_26888[9]);var inst_26867__$1 = (state_26888[2]);var inst_26868__$1 = cljs.core.nth.call(null,inst_26867__$1,0,null);var inst_26869 = cljs.core.nth.call(null,inst_26867__$1,1,null);var inst_26870 = (inst_26868__$1 == null);var state_26888__$1 = (function (){var statearr_26896 = state_26888;(statearr_26896[8] = inst_26867__$1);
(statearr_26896[9] = inst_26868__$1);
(statearr_26896[10] = inst_26869);
return statearr_26896;
})();if(cljs.core.truth_(inst_26870))
{var statearr_26897_26918 = state_26888__$1;(statearr_26897_26918[1] = 8);
} else
{var statearr_26898_26919 = state_26888__$1;(statearr_26898_26919[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 8))
{var inst_26860 = (state_26888[7]);var inst_26867 = (state_26888[8]);var inst_26868 = (state_26888[9]);var inst_26869 = (state_26888[10]);var inst_26872 = (function (){var c = inst_26869;var v = inst_26868;var vec__26865 = inst_26867;var cs = inst_26860;return ((function (c,v,vec__26865,cs,inst_26860,inst_26867,inst_26868,inst_26869,state_val_26889){
return (function (p1__26805_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__26805_SHARP_);
});
;})(c,v,vec__26865,cs,inst_26860,inst_26867,inst_26868,inst_26869,state_val_26889))
})();var inst_26873 = cljs.core.filterv.call(null,inst_26872,inst_26860);var inst_26860__$1 = inst_26873;var state_26888__$1 = (function (){var statearr_26899 = state_26888;(statearr_26899[7] = inst_26860__$1);
return statearr_26899;
})();var statearr_26900_26920 = state_26888__$1;(statearr_26900_26920[2] = null);
(statearr_26900_26920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 9))
{var inst_26868 = (state_26888[9]);var state_26888__$1 = state_26888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26888__$1,11,out,inst_26868);
} else
{if((state_val_26889 === 10))
{var inst_26880 = (state_26888[2]);var state_26888__$1 = state_26888;var statearr_26902_26921 = state_26888__$1;(statearr_26902_26921[2] = inst_26880);
(statearr_26902_26921[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26889 === 11))
{var inst_26860 = (state_26888[7]);var inst_26877 = (state_26888[2]);var tmp26901 = inst_26860;var inst_26860__$1 = tmp26901;var state_26888__$1 = (function (){var statearr_26903 = state_26888;(statearr_26903[7] = inst_26860__$1);
(statearr_26903[11] = inst_26877);
return statearr_26903;
})();var statearr_26904_26922 = state_26888__$1;(statearr_26904_26922[2] = null);
(statearr_26904_26922[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_26908 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26908[0] = state_machine__5548__auto__);
(statearr_26908[1] = 1);
return statearr_26908;
});
var state_machine__5548__auto____1 = (function (state_26888){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26888);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e26909){if((e26909 instanceof Object))
{var ex__5551__auto__ = e26909;var statearr_26910_26923 = state_26888;(statearr_26910_26923[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26888);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26909;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26924 = state_26888;
state_26888 = G__26924;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26888){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_26911 = f__5563__auto__.call(null);(statearr_26911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___26912);
return statearr_26911;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_26994){var state_val_26995 = (state_26994[1]);if((state_val_26995 === 1))
{var inst_26971 = 0;var state_26994__$1 = (function (){var statearr_26996 = state_26994;(statearr_26996[7] = inst_26971);
return statearr_26996;
})();var statearr_26997_27018 = state_26994__$1;(statearr_26997_27018[2] = null);
(statearr_26997_27018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 2))
{var inst_26971 = (state_26994[7]);var inst_26973 = (inst_26971 < n);var state_26994__$1 = state_26994;if(cljs.core.truth_(inst_26973))
{var statearr_26998_27019 = state_26994__$1;(statearr_26998_27019[1] = 4);
} else
{var statearr_26999_27020 = state_26994__$1;(statearr_26999_27020[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 3))
{var inst_26991 = (state_26994[2]);var inst_26992 = cljs.core.async.close_BANG_.call(null,out);var state_26994__$1 = (function (){var statearr_27000 = state_26994;(statearr_27000[8] = inst_26991);
return statearr_27000;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26994__$1,inst_26992);
} else
{if((state_val_26995 === 4))
{var state_26994__$1 = state_26994;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26994__$1,7,ch);
} else
{if((state_val_26995 === 5))
{var state_26994__$1 = state_26994;var statearr_27001_27021 = state_26994__$1;(statearr_27001_27021[2] = null);
(statearr_27001_27021[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 6))
{var inst_26989 = (state_26994[2]);var state_26994__$1 = state_26994;var statearr_27002_27022 = state_26994__$1;(statearr_27002_27022[2] = inst_26989);
(statearr_27002_27022[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 7))
{var inst_26976 = (state_26994[9]);var inst_26976__$1 = (state_26994[2]);var inst_26977 = (inst_26976__$1 == null);var inst_26978 = cljs.core.not.call(null,inst_26977);var state_26994__$1 = (function (){var statearr_27003 = state_26994;(statearr_27003[9] = inst_26976__$1);
return statearr_27003;
})();if(inst_26978)
{var statearr_27004_27023 = state_26994__$1;(statearr_27004_27023[1] = 8);
} else
{var statearr_27005_27024 = state_26994__$1;(statearr_27005_27024[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 8))
{var inst_26976 = (state_26994[9]);var state_26994__$1 = state_26994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26994__$1,11,out,inst_26976);
} else
{if((state_val_26995 === 9))
{var state_26994__$1 = state_26994;var statearr_27006_27025 = state_26994__$1;(statearr_27006_27025[2] = null);
(statearr_27006_27025[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 10))
{var inst_26986 = (state_26994[2]);var state_26994__$1 = state_26994;var statearr_27007_27026 = state_26994__$1;(statearr_27007_27026[2] = inst_26986);
(statearr_27007_27026[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26995 === 11))
{var inst_26971 = (state_26994[7]);var inst_26981 = (state_26994[2]);var inst_26982 = (inst_26971 + 1);var inst_26971__$1 = inst_26982;var state_26994__$1 = (function (){var statearr_27008 = state_26994;(statearr_27008[10] = inst_26981);
(statearr_27008[7] = inst_26971__$1);
return statearr_27008;
})();var statearr_27009_27027 = state_26994__$1;(statearr_27009_27027[2] = null);
(statearr_27009_27027[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27013 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27013[0] = state_machine__5548__auto__);
(statearr_27013[1] = 1);
return statearr_27013;
});
var state_machine__5548__auto____1 = (function (state_26994){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_26994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27014){if((e27014 instanceof Object))
{var ex__5551__auto__ = e27014;var statearr_27015_27028 = state_26994;(statearr_27015_27028[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27029 = state_26994;
state_26994 = G__27029;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_26994){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_26994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27016 = f__5563__auto__.call(null);(statearr_27016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27017);
return statearr_27016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27101){var state_val_27102 = (state_27101[1]);if((state_val_27102 === 1))
{var inst_27078 = null;var state_27101__$1 = (function (){var statearr_27103 = state_27101;(statearr_27103[7] = inst_27078);
return statearr_27103;
})();var statearr_27104_27127 = state_27101__$1;(statearr_27104_27127[2] = null);
(statearr_27104_27127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 2))
{var state_27101__$1 = state_27101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27101__$1,4,ch);
} else
{if((state_val_27102 === 3))
{var inst_27098 = (state_27101[2]);var inst_27099 = cljs.core.async.close_BANG_.call(null,out);var state_27101__$1 = (function (){var statearr_27105 = state_27101;(statearr_27105[8] = inst_27098);
return statearr_27105;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27101__$1,inst_27099);
} else
{if((state_val_27102 === 4))
{var inst_27081 = (state_27101[9]);var inst_27081__$1 = (state_27101[2]);var inst_27082 = (inst_27081__$1 == null);var inst_27083 = cljs.core.not.call(null,inst_27082);var state_27101__$1 = (function (){var statearr_27106 = state_27101;(statearr_27106[9] = inst_27081__$1);
return statearr_27106;
})();if(inst_27083)
{var statearr_27107_27128 = state_27101__$1;(statearr_27107_27128[1] = 5);
} else
{var statearr_27108_27129 = state_27101__$1;(statearr_27108_27129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 5))
{var inst_27078 = (state_27101[7]);var inst_27081 = (state_27101[9]);var inst_27085 = cljs.core._EQ_.call(null,inst_27081,inst_27078);var state_27101__$1 = state_27101;if(inst_27085)
{var statearr_27109_27130 = state_27101__$1;(statearr_27109_27130[1] = 8);
} else
{var statearr_27110_27131 = state_27101__$1;(statearr_27110_27131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 6))
{var state_27101__$1 = state_27101;var statearr_27112_27132 = state_27101__$1;(statearr_27112_27132[2] = null);
(statearr_27112_27132[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 7))
{var inst_27096 = (state_27101[2]);var state_27101__$1 = state_27101;var statearr_27113_27133 = state_27101__$1;(statearr_27113_27133[2] = inst_27096);
(statearr_27113_27133[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 8))
{var inst_27078 = (state_27101[7]);var tmp27111 = inst_27078;var inst_27078__$1 = tmp27111;var state_27101__$1 = (function (){var statearr_27114 = state_27101;(statearr_27114[7] = inst_27078__$1);
return statearr_27114;
})();var statearr_27115_27134 = state_27101__$1;(statearr_27115_27134[2] = null);
(statearr_27115_27134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 9))
{var inst_27081 = (state_27101[9]);var state_27101__$1 = state_27101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27101__$1,11,out,inst_27081);
} else
{if((state_val_27102 === 10))
{var inst_27093 = (state_27101[2]);var state_27101__$1 = state_27101;var statearr_27116_27135 = state_27101__$1;(statearr_27116_27135[2] = inst_27093);
(statearr_27116_27135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27102 === 11))
{var inst_27081 = (state_27101[9]);var inst_27090 = (state_27101[2]);var inst_27078 = inst_27081;var state_27101__$1 = (function (){var statearr_27117 = state_27101;(statearr_27117[7] = inst_27078);
(statearr_27117[10] = inst_27090);
return statearr_27117;
})();var statearr_27118_27136 = state_27101__$1;(statearr_27118_27136[2] = null);
(statearr_27118_27136[1] = 2);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27122 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_27122[0] = state_machine__5548__auto__);
(statearr_27122[1] = 1);
return statearr_27122;
});
var state_machine__5548__auto____1 = (function (state_27101){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27123){if((e27123 instanceof Object))
{var ex__5551__auto__ = e27123;var statearr_27124_27137 = state_27101;(statearr_27124_27137[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27138 = state_27101;
state_27101 = G__27138;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27101){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27125 = f__5563__auto__.call(null);(statearr_27125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27126);
return statearr_27125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27273 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27243){var state_val_27244 = (state_27243[1]);if((state_val_27244 === 1))
{var inst_27206 = (new Array(n));var inst_27207 = inst_27206;var inst_27208 = 0;var state_27243__$1 = (function (){var statearr_27245 = state_27243;(statearr_27245[7] = inst_27207);
(statearr_27245[8] = inst_27208);
return statearr_27245;
})();var statearr_27246_27274 = state_27243__$1;(statearr_27246_27274[2] = null);
(statearr_27246_27274[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 2))
{var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27243__$1,4,ch);
} else
{if((state_val_27244 === 3))
{var inst_27241 = (state_27243[2]);var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27243__$1,inst_27241);
} else
{if((state_val_27244 === 4))
{var inst_27211 = (state_27243[9]);var inst_27211__$1 = (state_27243[2]);var inst_27212 = (inst_27211__$1 == null);var inst_27213 = cljs.core.not.call(null,inst_27212);var state_27243__$1 = (function (){var statearr_27247 = state_27243;(statearr_27247[9] = inst_27211__$1);
return statearr_27247;
})();if(inst_27213)
{var statearr_27248_27275 = state_27243__$1;(statearr_27248_27275[1] = 5);
} else
{var statearr_27249_27276 = state_27243__$1;(statearr_27249_27276[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 5))
{var inst_27207 = (state_27243[7]);var inst_27211 = (state_27243[9]);var inst_27208 = (state_27243[8]);var inst_27216 = (state_27243[10]);var inst_27215 = (inst_27207[inst_27208] = inst_27211);var inst_27216__$1 = (inst_27208 + 1);var inst_27217 = (inst_27216__$1 < n);var state_27243__$1 = (function (){var statearr_27250 = state_27243;(statearr_27250[10] = inst_27216__$1);
(statearr_27250[11] = inst_27215);
return statearr_27250;
})();if(cljs.core.truth_(inst_27217))
{var statearr_27251_27277 = state_27243__$1;(statearr_27251_27277[1] = 8);
} else
{var statearr_27252_27278 = state_27243__$1;(statearr_27252_27278[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 6))
{var inst_27208 = (state_27243[8]);var inst_27229 = (inst_27208 > 0);var state_27243__$1 = state_27243;if(cljs.core.truth_(inst_27229))
{var statearr_27254_27279 = state_27243__$1;(statearr_27254_27279[1] = 12);
} else
{var statearr_27255_27280 = state_27243__$1;(statearr_27255_27280[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 7))
{var inst_27239 = (state_27243[2]);var state_27243__$1 = state_27243;var statearr_27256_27281 = state_27243__$1;(statearr_27256_27281[2] = inst_27239);
(statearr_27256_27281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 8))
{var inst_27207 = (state_27243[7]);var inst_27216 = (state_27243[10]);var tmp27253 = inst_27207;var inst_27207__$1 = tmp27253;var inst_27208 = inst_27216;var state_27243__$1 = (function (){var statearr_27257 = state_27243;(statearr_27257[7] = inst_27207__$1);
(statearr_27257[8] = inst_27208);
return statearr_27257;
})();var statearr_27258_27282 = state_27243__$1;(statearr_27258_27282[2] = null);
(statearr_27258_27282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 9))
{var inst_27207 = (state_27243[7]);var inst_27221 = cljs.core.vec.call(null,inst_27207);var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27243__$1,11,out,inst_27221);
} else
{if((state_val_27244 === 10))
{var inst_27227 = (state_27243[2]);var state_27243__$1 = state_27243;var statearr_27259_27283 = state_27243__$1;(statearr_27259_27283[2] = inst_27227);
(statearr_27259_27283[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 11))
{var inst_27223 = (state_27243[2]);var inst_27224 = (new Array(n));var inst_27207 = inst_27224;var inst_27208 = 0;var state_27243__$1 = (function (){var statearr_27260 = state_27243;(statearr_27260[7] = inst_27207);
(statearr_27260[12] = inst_27223);
(statearr_27260[8] = inst_27208);
return statearr_27260;
})();var statearr_27261_27284 = state_27243__$1;(statearr_27261_27284[2] = null);
(statearr_27261_27284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 12))
{var inst_27207 = (state_27243[7]);var inst_27231 = cljs.core.vec.call(null,inst_27207);var state_27243__$1 = state_27243;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27243__$1,15,out,inst_27231);
} else
{if((state_val_27244 === 13))
{var state_27243__$1 = state_27243;var statearr_27262_27285 = state_27243__$1;(statearr_27262_27285[2] = null);
(statearr_27262_27285[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 14))
{var inst_27236 = (state_27243[2]);var inst_27237 = cljs.core.async.close_BANG_.call(null,out);var state_27243__$1 = (function (){var statearr_27263 = state_27243;(statearr_27263[13] = inst_27236);
return statearr_27263;
})();var statearr_27264_27286 = state_27243__$1;(statearr_27264_27286[2] = inst_27237);
(statearr_27264_27286[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27244 === 15))
{var inst_27233 = (state_27243[2]);var state_27243__$1 = state_27243;var statearr_27265_27287 = state_27243__$1;(statearr_27265_27287[2] = inst_27233);
(statearr_27265_27287[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27269[0] = state_machine__5548__auto__);
(statearr_27269[1] = 1);
return statearr_27269;
});
var state_machine__5548__auto____1 = (function (state_27243){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27243);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27270){if((e27270 instanceof Object))
{var ex__5551__auto__ = e27270;var statearr_27271_27288 = state_27243;(statearr_27271_27288[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27243);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27270;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27289 = state_27243;
state_27243 = G__27289;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27243){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27272 = f__5563__auto__.call(null);(statearr_27272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27273);
return statearr_27272;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___27432 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_27402){var state_val_27403 = (state_27402[1]);if((state_val_27403 === 1))
{var inst_27361 = [];var inst_27362 = inst_27361;var inst_27363 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_27402__$1 = (function (){var statearr_27404 = state_27402;(statearr_27404[7] = inst_27362);
(statearr_27404[8] = inst_27363);
return statearr_27404;
})();var statearr_27405_27433 = state_27402__$1;(statearr_27405_27433[2] = null);
(statearr_27405_27433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 2))
{var state_27402__$1 = state_27402;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27402__$1,4,ch);
} else
{if((state_val_27403 === 3))
{var inst_27400 = (state_27402[2]);var state_27402__$1 = state_27402;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else
{if((state_val_27403 === 4))
{var inst_27366 = (state_27402[9]);var inst_27366__$1 = (state_27402[2]);var inst_27367 = (inst_27366__$1 == null);var inst_27368 = cljs.core.not.call(null,inst_27367);var state_27402__$1 = (function (){var statearr_27406 = state_27402;(statearr_27406[9] = inst_27366__$1);
return statearr_27406;
})();if(inst_27368)
{var statearr_27407_27434 = state_27402__$1;(statearr_27407_27434[1] = 5);
} else
{var statearr_27408_27435 = state_27402__$1;(statearr_27408_27435[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 5))
{var inst_27370 = (state_27402[10]);var inst_27366 = (state_27402[9]);var inst_27363 = (state_27402[8]);var inst_27370__$1 = f.call(null,inst_27366);var inst_27371 = cljs.core._EQ_.call(null,inst_27370__$1,inst_27363);var inst_27372 = cljs.core.keyword_identical_QMARK_.call(null,inst_27363,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_27373 = (inst_27371) || (inst_27372);var state_27402__$1 = (function (){var statearr_27409 = state_27402;(statearr_27409[10] = inst_27370__$1);
return statearr_27409;
})();if(cljs.core.truth_(inst_27373))
{var statearr_27410_27436 = state_27402__$1;(statearr_27410_27436[1] = 8);
} else
{var statearr_27411_27437 = state_27402__$1;(statearr_27411_27437[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 6))
{var inst_27362 = (state_27402[7]);var inst_27387 = inst_27362.length;var inst_27388 = (inst_27387 > 0);var state_27402__$1 = state_27402;if(cljs.core.truth_(inst_27388))
{var statearr_27413_27438 = state_27402__$1;(statearr_27413_27438[1] = 12);
} else
{var statearr_27414_27439 = state_27402__$1;(statearr_27414_27439[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 7))
{var inst_27398 = (state_27402[2]);var state_27402__$1 = state_27402;var statearr_27415_27440 = state_27402__$1;(statearr_27415_27440[2] = inst_27398);
(statearr_27415_27440[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 8))
{var inst_27370 = (state_27402[10]);var inst_27366 = (state_27402[9]);var inst_27362 = (state_27402[7]);var inst_27375 = inst_27362.push(inst_27366);var tmp27412 = inst_27362;var inst_27362__$1 = tmp27412;var inst_27363 = inst_27370;var state_27402__$1 = (function (){var statearr_27416 = state_27402;(statearr_27416[7] = inst_27362__$1);
(statearr_27416[8] = inst_27363);
(statearr_27416[11] = inst_27375);
return statearr_27416;
})();var statearr_27417_27441 = state_27402__$1;(statearr_27417_27441[2] = null);
(statearr_27417_27441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 9))
{var inst_27362 = (state_27402[7]);var inst_27378 = cljs.core.vec.call(null,inst_27362);var state_27402__$1 = state_27402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,11,out,inst_27378);
} else
{if((state_val_27403 === 10))
{var inst_27385 = (state_27402[2]);var state_27402__$1 = state_27402;var statearr_27418_27442 = state_27402__$1;(statearr_27418_27442[2] = inst_27385);
(statearr_27418_27442[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 11))
{var inst_27370 = (state_27402[10]);var inst_27366 = (state_27402[9]);var inst_27380 = (state_27402[2]);var inst_27381 = [];var inst_27382 = inst_27381.push(inst_27366);var inst_27362 = inst_27381;var inst_27363 = inst_27370;var state_27402__$1 = (function (){var statearr_27419 = state_27402;(statearr_27419[12] = inst_27380);
(statearr_27419[13] = inst_27382);
(statearr_27419[7] = inst_27362);
(statearr_27419[8] = inst_27363);
return statearr_27419;
})();var statearr_27420_27443 = state_27402__$1;(statearr_27420_27443[2] = null);
(statearr_27420_27443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 12))
{var inst_27362 = (state_27402[7]);var inst_27390 = cljs.core.vec.call(null,inst_27362);var state_27402__$1 = state_27402;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,15,out,inst_27390);
} else
{if((state_val_27403 === 13))
{var state_27402__$1 = state_27402;var statearr_27421_27444 = state_27402__$1;(statearr_27421_27444[2] = null);
(statearr_27421_27444[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 14))
{var inst_27395 = (state_27402[2]);var inst_27396 = cljs.core.async.close_BANG_.call(null,out);var state_27402__$1 = (function (){var statearr_27422 = state_27402;(statearr_27422[14] = inst_27395);
return statearr_27422;
})();var statearr_27423_27445 = state_27402__$1;(statearr_27423_27445[2] = inst_27396);
(statearr_27423_27445[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27403 === 15))
{var inst_27392 = (state_27402[2]);var state_27402__$1 = state_27402;var statearr_27424_27446 = state_27402__$1;(statearr_27424_27446[2] = inst_27392);
(statearr_27424_27446[1] = 14);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_27428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27428[0] = state_machine__5548__auto__);
(statearr_27428[1] = 1);
return statearr_27428;
});
var state_machine__5548__auto____1 = (function (state_27402){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_27402);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e27429){if((e27429 instanceof Object))
{var ex__5551__auto__ = e27429;var statearr_27430_27447 = state_27402;(statearr_27430_27447[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27448 = state_27402;
state_27402 = G__27448;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_27431 = f__5563__auto__.call(null);(statearr_27431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___27432);
return statearr_27431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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