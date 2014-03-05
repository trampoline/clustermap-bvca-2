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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t47068 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47068 = (function (f,fn_handler,meta47069){
this.f = f;
this.fn_handler = fn_handler;
this.meta47069 = meta47069;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47068.cljs$lang$type = true;
cljs.core.async.t47068.cljs$lang$ctorStr = "cljs.core.async/t47068";
cljs.core.async.t47068.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47068");
});
cljs.core.async.t47068.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t47068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t47068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47070){var self__ = this;
var _47070__$1 = this;return self__.meta47069;
});
cljs.core.async.t47068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47070,meta47069__$1){var self__ = this;
var _47070__$1 = this;return (new cljs.core.async.t47068(self__.f,self__.fn_handler,meta47069__$1));
});
cljs.core.async.__GT_t47068 = (function __GT_t47068(f__$1,fn_handler__$1,meta47069){return (new cljs.core.async.t47068(f__$1,fn_handler__$1,meta47069));
});
}
return (new cljs.core.async.t47068(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__47072 = buff;if(G__47072)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__47072.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__47072.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47072);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__47072);
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
{var val_47073 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_47073);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_47073);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___47074 = n;var x_47075 = 0;while(true){
if((x_47075 < n__4289__auto___47074))
{(a[x_47075] = 0);
{
var G__47076 = (x_47075 + 1);
x_47075 = G__47076;
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
var G__47077 = (i + 1);
i = G__47077;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t47081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47081 = (function (flag,alt_flag,meta47082){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta47082 = meta47082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47081.cljs$lang$type = true;
cljs.core.async.t47081.cljs$lang$ctorStr = "cljs.core.async/t47081";
cljs.core.async.t47081.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47081");
});
cljs.core.async.t47081.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t47081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t47081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47083){var self__ = this;
var _47083__$1 = this;return self__.meta47082;
});
cljs.core.async.t47081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47083,meta47082__$1){var self__ = this;
var _47083__$1 = this;return (new cljs.core.async.t47081(self__.flag,self__.alt_flag,meta47082__$1));
});
cljs.core.async.__GT_t47081 = (function __GT_t47081(flag__$1,alt_flag__$1,meta47082){return (new cljs.core.async.t47081(flag__$1,alt_flag__$1,meta47082));
});
}
return (new cljs.core.async.t47081(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t47087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47087 = (function (cb,flag,alt_handler,meta47088){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta47088 = meta47088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47087.cljs$lang$type = true;
cljs.core.async.t47087.cljs$lang$ctorStr = "cljs.core.async/t47087";
cljs.core.async.t47087.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47087");
});
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t47087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t47087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47089){var self__ = this;
var _47089__$1 = this;return self__.meta47088;
});
cljs.core.async.t47087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47089,meta47088__$1){var self__ = this;
var _47089__$1 = this;return (new cljs.core.async.t47087(self__.cb,self__.flag,self__.alt_handler,meta47088__$1));
});
cljs.core.async.__GT_t47087 = (function __GT_t47087(cb__$1,flag__$1,alt_handler__$1,meta47088){return (new cljs.core.async.t47087(cb__$1,flag__$1,alt_handler__$1,meta47088));
});
}
return (new cljs.core.async.t47087(cb,flag,alt_handler,null));
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
return (function (p1__47090_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47090_SHARP_,port], null));
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
var G__47091 = (i + 1);
i = G__47091;
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
var alts_BANG___delegate = function (ports,p__47092){var map__47094 = p__47092;var map__47094__$1 = ((cljs.core.seq_QMARK_.call(null,map__47094))?cljs.core.apply.call(null,cljs.core.hash_map,map__47094):map__47094);var opts = map__47094__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__47092 = null;if (arguments.length > 1) {
  p__47092 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__47092);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__47095){
var ports = cljs.core.first(arglist__47095);
var p__47092 = cljs.core.rest(arglist__47095);
return alts_BANG___delegate(ports,p__47092);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t47103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47103 = (function (ch,f,map_LT_,meta47104){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47104 = meta47104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47103.cljs$lang$type = true;
cljs.core.async.t47103.cljs$lang$ctorStr = "cljs.core.async/t47103";
cljs.core.async.t47103.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47103");
});
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t47106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47106 = (function (fn1,_,meta47104,ch,f,map_LT_,meta47107){
this.fn1 = fn1;
this._ = _;
this.meta47104 = meta47104;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta47107 = meta47107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47106.cljs$lang$type = true;
cljs.core.async.t47106.cljs$lang$ctorStr = "cljs.core.async/t47106";
cljs.core.async.t47106.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47106");
});
cljs.core.async.t47106.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t47106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t47106.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t47106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__47096_SHARP_){return f1.call(null,(((p1__47096_SHARP_ == null))?null:self__.f.call(null,p1__47096_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t47106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47108){var self__ = this;
var _47108__$1 = this;return self__.meta47107;
});
cljs.core.async.t47106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47108,meta47107__$1){var self__ = this;
var _47108__$1 = this;return (new cljs.core.async.t47106(self__.fn1,self__._,self__.meta47104,self__.ch,self__.f,self__.map_LT_,meta47107__$1));
});
cljs.core.async.__GT_t47106 = (function __GT_t47106(fn1__$1,___$2,meta47104__$1,ch__$2,f__$2,map_LT___$2,meta47107){return (new cljs.core.async.t47106(fn1__$1,___$2,meta47104__$1,ch__$2,f__$2,map_LT___$2,meta47107));
});
}
return (new cljs.core.async.t47106(fn1,___$1,self__.meta47104,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47103.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47105){var self__ = this;
var _47105__$1 = this;return self__.meta47104;
});
cljs.core.async.t47103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47105,meta47104__$1){var self__ = this;
var _47105__$1 = this;return (new cljs.core.async.t47103(self__.ch,self__.f,self__.map_LT_,meta47104__$1));
});
cljs.core.async.__GT_t47103 = (function __GT_t47103(ch__$1,f__$1,map_LT___$1,meta47104){return (new cljs.core.async.t47103(ch__$1,f__$1,map_LT___$1,meta47104));
});
}
return (new cljs.core.async.t47103(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t47112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47112 = (function (ch,f,map_GT_,meta47113){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta47113 = meta47113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47112.cljs$lang$type = true;
cljs.core.async.t47112.cljs$lang$ctorStr = "cljs.core.async/t47112";
cljs.core.async.t47112.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47112");
});
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47114){var self__ = this;
var _47114__$1 = this;return self__.meta47113;
});
cljs.core.async.t47112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47114,meta47113__$1){var self__ = this;
var _47114__$1 = this;return (new cljs.core.async.t47112(self__.ch,self__.f,self__.map_GT_,meta47113__$1));
});
cljs.core.async.__GT_t47112 = (function __GT_t47112(ch__$1,f__$1,map_GT___$1,meta47113){return (new cljs.core.async.t47112(ch__$1,f__$1,map_GT___$1,meta47113));
});
}
return (new cljs.core.async.t47112(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t47118 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t47118 = (function (ch,p,filter_GT_,meta47119){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta47119 = meta47119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t47118.cljs$lang$type = true;
cljs.core.async.t47118.cljs$lang$ctorStr = "cljs.core.async/t47118";
cljs.core.async.t47118.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t47118");
});
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t47118.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t47118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47120){var self__ = this;
var _47120__$1 = this;return self__.meta47119;
});
cljs.core.async.t47118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47120,meta47119__$1){var self__ = this;
var _47120__$1 = this;return (new cljs.core.async.t47118(self__.ch,self__.p,self__.filter_GT_,meta47119__$1));
});
cljs.core.async.__GT_t47118 = (function __GT_t47118(ch__$1,p__$1,filter_GT___$1,meta47119){return (new cljs.core.async.t47118(ch__$1,p__$1,filter_GT___$1,meta47119));
});
}
return (new cljs.core.async.t47118(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___47203 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47182){var state_val_47183 = (state_47182[1]);if((state_val_47183 === 1))
{var state_47182__$1 = state_47182;var statearr_47184_47204 = state_47182__$1;(statearr_47184_47204[2] = null);
(statearr_47184_47204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 2))
{var state_47182__$1 = state_47182;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47182__$1,4,ch);
} else
{if((state_val_47183 === 3))
{var inst_47180 = (state_47182[2]);var state_47182__$1 = state_47182;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47182__$1,inst_47180);
} else
{if((state_val_47183 === 4))
{var inst_47164 = (state_47182[7]);var inst_47164__$1 = (state_47182[2]);var inst_47165 = (inst_47164__$1 == null);var state_47182__$1 = (function (){var statearr_47185 = state_47182;(statearr_47185[7] = inst_47164__$1);
return statearr_47185;
})();if(cljs.core.truth_(inst_47165))
{var statearr_47186_47205 = state_47182__$1;(statearr_47186_47205[1] = 5);
} else
{var statearr_47187_47206 = state_47182__$1;(statearr_47187_47206[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 5))
{var inst_47167 = cljs.core.async.close_BANG_.call(null,out);var state_47182__$1 = state_47182;var statearr_47188_47207 = state_47182__$1;(statearr_47188_47207[2] = inst_47167);
(statearr_47188_47207[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 6))
{var inst_47164 = (state_47182[7]);var inst_47169 = p.call(null,inst_47164);var state_47182__$1 = state_47182;if(cljs.core.truth_(inst_47169))
{var statearr_47189_47208 = state_47182__$1;(statearr_47189_47208[1] = 8);
} else
{var statearr_47190_47209 = state_47182__$1;(statearr_47190_47209[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 7))
{var inst_47178 = (state_47182[2]);var state_47182__$1 = state_47182;var statearr_47191_47210 = state_47182__$1;(statearr_47191_47210[2] = inst_47178);
(statearr_47191_47210[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 8))
{var inst_47164 = (state_47182[7]);var state_47182__$1 = state_47182;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47182__$1,11,out,inst_47164);
} else
{if((state_val_47183 === 9))
{var state_47182__$1 = state_47182;var statearr_47192_47211 = state_47182__$1;(statearr_47192_47211[2] = null);
(statearr_47192_47211[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 10))
{var inst_47175 = (state_47182[2]);var state_47182__$1 = (function (){var statearr_47193 = state_47182;(statearr_47193[8] = inst_47175);
return statearr_47193;
})();var statearr_47194_47212 = state_47182__$1;(statearr_47194_47212[2] = null);
(statearr_47194_47212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47183 === 11))
{var inst_47172 = (state_47182[2]);var state_47182__$1 = state_47182;var statearr_47195_47213 = state_47182__$1;(statearr_47195_47213[2] = inst_47172);
(statearr_47195_47213[1] = 10);
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
var state_machine__5548__auto____0 = (function (){var statearr_47199 = [null,null,null,null,null,null,null,null,null];(statearr_47199[0] = state_machine__5548__auto__);
(statearr_47199[1] = 1);
return statearr_47199;
});
var state_machine__5548__auto____1 = (function (state_47182){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47182);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47200){if((e47200 instanceof Object))
{var ex__5551__auto__ = e47200;var statearr_47201_47214 = state_47182;(statearr_47201_47214[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47215 = state_47182;
state_47182 = G__47215;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47182){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47202 = f__5563__auto__.call(null);(statearr_47202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47203);
return statearr_47202;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47367){var state_val_47368 = (state_47367[1]);if((state_val_47368 === 1))
{var state_47367__$1 = state_47367;var statearr_47369_47406 = state_47367__$1;(statearr_47369_47406[2] = null);
(statearr_47369_47406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 2))
{var state_47367__$1 = state_47367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47367__$1,4,in$);
} else
{if((state_val_47368 === 3))
{var inst_47365 = (state_47367[2]);var state_47367__$1 = state_47367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47367__$1,inst_47365);
} else
{if((state_val_47368 === 4))
{var inst_47313 = (state_47367[7]);var inst_47313__$1 = (state_47367[2]);var inst_47314 = (inst_47313__$1 == null);var state_47367__$1 = (function (){var statearr_47370 = state_47367;(statearr_47370[7] = inst_47313__$1);
return statearr_47370;
})();if(cljs.core.truth_(inst_47314))
{var statearr_47371_47407 = state_47367__$1;(statearr_47371_47407[1] = 5);
} else
{var statearr_47372_47408 = state_47367__$1;(statearr_47372_47408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 5))
{var inst_47316 = cljs.core.async.close_BANG_.call(null,out);var state_47367__$1 = state_47367;var statearr_47373_47409 = state_47367__$1;(statearr_47373_47409[2] = inst_47316);
(statearr_47373_47409[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 6))
{var inst_47313 = (state_47367[7]);var inst_47318 = f.call(null,inst_47313);var inst_47323 = cljs.core.seq.call(null,inst_47318);var inst_47324 = inst_47323;var inst_47325 = null;var inst_47326 = 0;var inst_47327 = 0;var state_47367__$1 = (function (){var statearr_47374 = state_47367;(statearr_47374[8] = inst_47326);
(statearr_47374[9] = inst_47325);
(statearr_47374[10] = inst_47324);
(statearr_47374[11] = inst_47327);
return statearr_47374;
})();var statearr_47375_47410 = state_47367__$1;(statearr_47375_47410[2] = null);
(statearr_47375_47410[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 7))
{var inst_47363 = (state_47367[2]);var state_47367__$1 = state_47367;var statearr_47376_47411 = state_47367__$1;(statearr_47376_47411[2] = inst_47363);
(statearr_47376_47411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 8))
{var inst_47326 = (state_47367[8]);var inst_47327 = (state_47367[11]);var inst_47329 = (inst_47327 < inst_47326);var inst_47330 = inst_47329;var state_47367__$1 = state_47367;if(cljs.core.truth_(inst_47330))
{var statearr_47377_47412 = state_47367__$1;(statearr_47377_47412[1] = 10);
} else
{var statearr_47378_47413 = state_47367__$1;(statearr_47378_47413[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 9))
{var inst_47360 = (state_47367[2]);var state_47367__$1 = (function (){var statearr_47379 = state_47367;(statearr_47379[12] = inst_47360);
return statearr_47379;
})();var statearr_47380_47414 = state_47367__$1;(statearr_47380_47414[2] = null);
(statearr_47380_47414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 10))
{var inst_47325 = (state_47367[9]);var inst_47327 = (state_47367[11]);var inst_47332 = cljs.core._nth.call(null,inst_47325,inst_47327);var state_47367__$1 = state_47367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47367__$1,13,out,inst_47332);
} else
{if((state_val_47368 === 11))
{var inst_47324 = (state_47367[10]);var inst_47338 = (state_47367[13]);var inst_47338__$1 = cljs.core.seq.call(null,inst_47324);var state_47367__$1 = (function (){var statearr_47384 = state_47367;(statearr_47384[13] = inst_47338__$1);
return statearr_47384;
})();if(inst_47338__$1)
{var statearr_47385_47415 = state_47367__$1;(statearr_47385_47415[1] = 14);
} else
{var statearr_47386_47416 = state_47367__$1;(statearr_47386_47416[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 12))
{var inst_47358 = (state_47367[2]);var state_47367__$1 = state_47367;var statearr_47387_47417 = state_47367__$1;(statearr_47387_47417[2] = inst_47358);
(statearr_47387_47417[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 13))
{var inst_47326 = (state_47367[8]);var inst_47325 = (state_47367[9]);var inst_47324 = (state_47367[10]);var inst_47327 = (state_47367[11]);var inst_47334 = (state_47367[2]);var inst_47335 = (inst_47327 + 1);var tmp47381 = inst_47326;var tmp47382 = inst_47325;var tmp47383 = inst_47324;var inst_47324__$1 = tmp47383;var inst_47325__$1 = tmp47382;var inst_47326__$1 = tmp47381;var inst_47327__$1 = inst_47335;var state_47367__$1 = (function (){var statearr_47388 = state_47367;(statearr_47388[8] = inst_47326__$1);
(statearr_47388[9] = inst_47325__$1);
(statearr_47388[10] = inst_47324__$1);
(statearr_47388[11] = inst_47327__$1);
(statearr_47388[14] = inst_47334);
return statearr_47388;
})();var statearr_47389_47418 = state_47367__$1;(statearr_47389_47418[2] = null);
(statearr_47389_47418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 14))
{var inst_47338 = (state_47367[13]);var inst_47340 = cljs.core.chunked_seq_QMARK_.call(null,inst_47338);var state_47367__$1 = state_47367;if(inst_47340)
{var statearr_47390_47419 = state_47367__$1;(statearr_47390_47419[1] = 17);
} else
{var statearr_47391_47420 = state_47367__$1;(statearr_47391_47420[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 15))
{var state_47367__$1 = state_47367;var statearr_47392_47421 = state_47367__$1;(statearr_47392_47421[2] = null);
(statearr_47392_47421[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 16))
{var inst_47356 = (state_47367[2]);var state_47367__$1 = state_47367;var statearr_47393_47422 = state_47367__$1;(statearr_47393_47422[2] = inst_47356);
(statearr_47393_47422[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 17))
{var inst_47338 = (state_47367[13]);var inst_47342 = cljs.core.chunk_first.call(null,inst_47338);var inst_47343 = cljs.core.chunk_rest.call(null,inst_47338);var inst_47344 = cljs.core.count.call(null,inst_47342);var inst_47324 = inst_47343;var inst_47325 = inst_47342;var inst_47326 = inst_47344;var inst_47327 = 0;var state_47367__$1 = (function (){var statearr_47394 = state_47367;(statearr_47394[8] = inst_47326);
(statearr_47394[9] = inst_47325);
(statearr_47394[10] = inst_47324);
(statearr_47394[11] = inst_47327);
return statearr_47394;
})();var statearr_47395_47423 = state_47367__$1;(statearr_47395_47423[2] = null);
(statearr_47395_47423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 18))
{var inst_47338 = (state_47367[13]);var inst_47347 = cljs.core.first.call(null,inst_47338);var state_47367__$1 = state_47367;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47367__$1,20,out,inst_47347);
} else
{if((state_val_47368 === 19))
{var inst_47353 = (state_47367[2]);var state_47367__$1 = state_47367;var statearr_47396_47424 = state_47367__$1;(statearr_47396_47424[2] = inst_47353);
(statearr_47396_47424[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47368 === 20))
{var inst_47338 = (state_47367[13]);var inst_47349 = (state_47367[2]);var inst_47350 = cljs.core.next.call(null,inst_47338);var inst_47324 = inst_47350;var inst_47325 = null;var inst_47326 = 0;var inst_47327 = 0;var state_47367__$1 = (function (){var statearr_47397 = state_47367;(statearr_47397[8] = inst_47326);
(statearr_47397[9] = inst_47325);
(statearr_47397[10] = inst_47324);
(statearr_47397[15] = inst_47349);
(statearr_47397[11] = inst_47327);
return statearr_47397;
})();var statearr_47398_47425 = state_47367__$1;(statearr_47398_47425[2] = null);
(statearr_47398_47425[1] = 8);
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
var state_machine__5548__auto____0 = (function (){var statearr_47402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_47402[0] = state_machine__5548__auto__);
(statearr_47402[1] = 1);
return statearr_47402;
});
var state_machine__5548__auto____1 = (function (state_47367){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47367);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47403){if((e47403 instanceof Object))
{var ex__5551__auto__ = e47403;var statearr_47404_47426 = state_47367;(statearr_47404_47426[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47367);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47427 = state_47367;
state_47367 = G__47427;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47367){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47405 = f__5563__auto__.call(null);(statearr_47405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47405;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___47508 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47487){var state_val_47488 = (state_47487[1]);if((state_val_47488 === 1))
{var state_47487__$1 = state_47487;var statearr_47489_47509 = state_47487__$1;(statearr_47489_47509[2] = null);
(statearr_47489_47509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 2))
{var state_47487__$1 = state_47487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47487__$1,4,from);
} else
{if((state_val_47488 === 3))
{var inst_47485 = (state_47487[2]);var state_47487__$1 = state_47487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47487__$1,inst_47485);
} else
{if((state_val_47488 === 4))
{var inst_47470 = (state_47487[7]);var inst_47470__$1 = (state_47487[2]);var inst_47471 = (inst_47470__$1 == null);var state_47487__$1 = (function (){var statearr_47490 = state_47487;(statearr_47490[7] = inst_47470__$1);
return statearr_47490;
})();if(cljs.core.truth_(inst_47471))
{var statearr_47491_47510 = state_47487__$1;(statearr_47491_47510[1] = 5);
} else
{var statearr_47492_47511 = state_47487__$1;(statearr_47492_47511[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 5))
{var state_47487__$1 = state_47487;if(cljs.core.truth_(close_QMARK_))
{var statearr_47493_47512 = state_47487__$1;(statearr_47493_47512[1] = 8);
} else
{var statearr_47494_47513 = state_47487__$1;(statearr_47494_47513[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 6))
{var inst_47470 = (state_47487[7]);var state_47487__$1 = state_47487;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47487__$1,11,to,inst_47470);
} else
{if((state_val_47488 === 7))
{var inst_47483 = (state_47487[2]);var state_47487__$1 = state_47487;var statearr_47495_47514 = state_47487__$1;(statearr_47495_47514[2] = inst_47483);
(statearr_47495_47514[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 8))
{var inst_47474 = cljs.core.async.close_BANG_.call(null,to);var state_47487__$1 = state_47487;var statearr_47496_47515 = state_47487__$1;(statearr_47496_47515[2] = inst_47474);
(statearr_47496_47515[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 9))
{var state_47487__$1 = state_47487;var statearr_47497_47516 = state_47487__$1;(statearr_47497_47516[2] = null);
(statearr_47497_47516[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 10))
{var inst_47477 = (state_47487[2]);var state_47487__$1 = state_47487;var statearr_47498_47517 = state_47487__$1;(statearr_47498_47517[2] = inst_47477);
(statearr_47498_47517[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47488 === 11))
{var inst_47480 = (state_47487[2]);var state_47487__$1 = (function (){var statearr_47499 = state_47487;(statearr_47499[8] = inst_47480);
return statearr_47499;
})();var statearr_47500_47518 = state_47487__$1;(statearr_47500_47518[2] = null);
(statearr_47500_47518[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47504 = [null,null,null,null,null,null,null,null,null];(statearr_47504[0] = state_machine__5548__auto__);
(statearr_47504[1] = 1);
return statearr_47504;
});
var state_machine__5548__auto____1 = (function (state_47487){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47487);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47505){if((e47505 instanceof Object))
{var ex__5551__auto__ = e47505;var statearr_47506_47519 = state_47487;(statearr_47506_47519[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47520 = state_47487;
state_47487 = G__47520;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47487){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47507 = f__5563__auto__.call(null);(statearr_47507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47508);
return statearr_47507;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___47607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47585){var state_val_47586 = (state_47585[1]);if((state_val_47586 === 1))
{var state_47585__$1 = state_47585;var statearr_47587_47608 = state_47585__$1;(statearr_47587_47608[2] = null);
(statearr_47587_47608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 2))
{var state_47585__$1 = state_47585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47585__$1,4,ch);
} else
{if((state_val_47586 === 3))
{var inst_47583 = (state_47585[2]);var state_47585__$1 = state_47585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47585__$1,inst_47583);
} else
{if((state_val_47586 === 4))
{var inst_47566 = (state_47585[7]);var inst_47566__$1 = (state_47585[2]);var inst_47567 = (inst_47566__$1 == null);var state_47585__$1 = (function (){var statearr_47588 = state_47585;(statearr_47588[7] = inst_47566__$1);
return statearr_47588;
})();if(cljs.core.truth_(inst_47567))
{var statearr_47589_47609 = state_47585__$1;(statearr_47589_47609[1] = 5);
} else
{var statearr_47590_47610 = state_47585__$1;(statearr_47590_47610[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 5))
{var inst_47569 = cljs.core.async.close_BANG_.call(null,tc);var inst_47570 = cljs.core.async.close_BANG_.call(null,fc);var state_47585__$1 = (function (){var statearr_47591 = state_47585;(statearr_47591[8] = inst_47569);
return statearr_47591;
})();var statearr_47592_47611 = state_47585__$1;(statearr_47592_47611[2] = inst_47570);
(statearr_47592_47611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 6))
{var inst_47566 = (state_47585[7]);var inst_47572 = p.call(null,inst_47566);var state_47585__$1 = state_47585;if(cljs.core.truth_(inst_47572))
{var statearr_47593_47612 = state_47585__$1;(statearr_47593_47612[1] = 9);
} else
{var statearr_47594_47613 = state_47585__$1;(statearr_47594_47613[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 7))
{var inst_47581 = (state_47585[2]);var state_47585__$1 = state_47585;var statearr_47595_47614 = state_47585__$1;(statearr_47595_47614[2] = inst_47581);
(statearr_47595_47614[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 8))
{var inst_47578 = (state_47585[2]);var state_47585__$1 = (function (){var statearr_47596 = state_47585;(statearr_47596[9] = inst_47578);
return statearr_47596;
})();var statearr_47597_47615 = state_47585__$1;(statearr_47597_47615[2] = null);
(statearr_47597_47615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 9))
{var state_47585__$1 = state_47585;var statearr_47598_47616 = state_47585__$1;(statearr_47598_47616[2] = tc);
(statearr_47598_47616[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 10))
{var state_47585__$1 = state_47585;var statearr_47599_47617 = state_47585__$1;(statearr_47599_47617[2] = fc);
(statearr_47599_47617[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47586 === 11))
{var inst_47566 = (state_47585[7]);var inst_47576 = (state_47585[2]);var state_47585__$1 = state_47585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47585__$1,8,inst_47576,inst_47566);
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
var state_machine__5548__auto____0 = (function (){var statearr_47603 = [null,null,null,null,null,null,null,null,null,null];(statearr_47603[0] = state_machine__5548__auto__);
(statearr_47603[1] = 1);
return statearr_47603;
});
var state_machine__5548__auto____1 = (function (state_47585){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47604){if((e47604 instanceof Object))
{var ex__5551__auto__ = e47604;var statearr_47605_47618 = state_47585;(statearr_47605_47618[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47585);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47619 = state_47585;
state_47585 = G__47619;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47585){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47606 = f__5563__auto__.call(null);(statearr_47606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___47607);
return statearr_47606;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47666){var state_val_47667 = (state_47666[1]);if((state_val_47667 === 7))
{var inst_47662 = (state_47666[2]);var state_47666__$1 = state_47666;var statearr_47668_47684 = state_47666__$1;(statearr_47668_47684[2] = inst_47662);
(statearr_47668_47684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47667 === 6))
{var inst_47652 = (state_47666[7]);var inst_47655 = (state_47666[8]);var inst_47659 = f.call(null,inst_47652,inst_47655);var inst_47652__$1 = inst_47659;var state_47666__$1 = (function (){var statearr_47669 = state_47666;(statearr_47669[7] = inst_47652__$1);
return statearr_47669;
})();var statearr_47670_47685 = state_47666__$1;(statearr_47670_47685[2] = null);
(statearr_47670_47685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47667 === 5))
{var inst_47652 = (state_47666[7]);var state_47666__$1 = state_47666;var statearr_47671_47686 = state_47666__$1;(statearr_47671_47686[2] = inst_47652);
(statearr_47671_47686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47667 === 4))
{var inst_47655 = (state_47666[8]);var inst_47655__$1 = (state_47666[2]);var inst_47656 = (inst_47655__$1 == null);var state_47666__$1 = (function (){var statearr_47672 = state_47666;(statearr_47672[8] = inst_47655__$1);
return statearr_47672;
})();if(cljs.core.truth_(inst_47656))
{var statearr_47673_47687 = state_47666__$1;(statearr_47673_47687[1] = 5);
} else
{var statearr_47674_47688 = state_47666__$1;(statearr_47674_47688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47667 === 3))
{var inst_47664 = (state_47666[2]);var state_47666__$1 = state_47666;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47666__$1,inst_47664);
} else
{if((state_val_47667 === 2))
{var state_47666__$1 = state_47666;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47666__$1,4,ch);
} else
{if((state_val_47667 === 1))
{var inst_47652 = init;var state_47666__$1 = (function (){var statearr_47675 = state_47666;(statearr_47675[7] = inst_47652);
return statearr_47675;
})();var statearr_47676_47689 = state_47666__$1;(statearr_47676_47689[2] = null);
(statearr_47676_47689[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_47680 = [null,null,null,null,null,null,null,null,null];(statearr_47680[0] = state_machine__5548__auto__);
(statearr_47680[1] = 1);
return statearr_47680;
});
var state_machine__5548__auto____1 = (function (state_47666){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47666);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47681){if((e47681 instanceof Object))
{var ex__5551__auto__ = e47681;var statearr_47682_47690 = state_47666;(statearr_47682_47690[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47666);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47691 = state_47666;
state_47666 = G__47691;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47666){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47683 = f__5563__auto__.call(null);(statearr_47683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47683;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_47753){var state_val_47754 = (state_47753[1]);if((state_val_47754 === 1))
{var inst_47733 = cljs.core.seq.call(null,coll);var inst_47734 = inst_47733;var state_47753__$1 = (function (){var statearr_47755 = state_47753;(statearr_47755[7] = inst_47734);
return statearr_47755;
})();var statearr_47756_47774 = state_47753__$1;(statearr_47756_47774[2] = null);
(statearr_47756_47774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 2))
{var inst_47734 = (state_47753[7]);var state_47753__$1 = state_47753;if(cljs.core.truth_(inst_47734))
{var statearr_47757_47775 = state_47753__$1;(statearr_47757_47775[1] = 4);
} else
{var statearr_47758_47776 = state_47753__$1;(statearr_47758_47776[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 3))
{var inst_47751 = (state_47753[2]);var state_47753__$1 = state_47753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47753__$1,inst_47751);
} else
{if((state_val_47754 === 4))
{var inst_47734 = (state_47753[7]);var inst_47737 = cljs.core.first.call(null,inst_47734);var state_47753__$1 = state_47753;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47753__$1,7,ch,inst_47737);
} else
{if((state_val_47754 === 5))
{var state_47753__$1 = state_47753;if(cljs.core.truth_(close_QMARK_))
{var statearr_47759_47777 = state_47753__$1;(statearr_47759_47777[1] = 8);
} else
{var statearr_47760_47778 = state_47753__$1;(statearr_47760_47778[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 6))
{var inst_47749 = (state_47753[2]);var state_47753__$1 = state_47753;var statearr_47761_47779 = state_47753__$1;(statearr_47761_47779[2] = inst_47749);
(statearr_47761_47779[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 7))
{var inst_47734 = (state_47753[7]);var inst_47739 = (state_47753[2]);var inst_47740 = cljs.core.next.call(null,inst_47734);var inst_47734__$1 = inst_47740;var state_47753__$1 = (function (){var statearr_47762 = state_47753;(statearr_47762[8] = inst_47739);
(statearr_47762[7] = inst_47734__$1);
return statearr_47762;
})();var statearr_47763_47780 = state_47753__$1;(statearr_47763_47780[2] = null);
(statearr_47763_47780[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 8))
{var inst_47744 = cljs.core.async.close_BANG_.call(null,ch);var state_47753__$1 = state_47753;var statearr_47764_47781 = state_47753__$1;(statearr_47764_47781[2] = inst_47744);
(statearr_47764_47781[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 9))
{var state_47753__$1 = state_47753;var statearr_47765_47782 = state_47753__$1;(statearr_47765_47782[2] = null);
(statearr_47765_47782[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47754 === 10))
{var inst_47747 = (state_47753[2]);var state_47753__$1 = state_47753;var statearr_47766_47783 = state_47753__$1;(statearr_47766_47783[2] = inst_47747);
(statearr_47766_47783[1] = 6);
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
var state_machine__5548__auto____0 = (function (){var statearr_47770 = [null,null,null,null,null,null,null,null,null];(statearr_47770[0] = state_machine__5548__auto__);
(statearr_47770[1] = 1);
return statearr_47770;
});
var state_machine__5548__auto____1 = (function (state_47753){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_47753);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e47771){if((e47771 instanceof Object))
{var ex__5551__auto__ = e47771;var statearr_47772_47784 = state_47753;(statearr_47772_47784[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47753);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47785 = state_47753;
state_47753 = G__47785;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_47753){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_47753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_47773 = f__5563__auto__.call(null);(statearr_47773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_47773;
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
cljs.core.async.Mux = (function (){var obj47787 = {};return obj47787;
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
cljs.core.async.Mult = (function (){var obj47789 = {};return obj47789;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t48013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48013 = (function (cs,ch,mult,meta48014){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta48014 = meta48014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48013.cljs$lang$type = true;
cljs.core.async.t48013.cljs$lang$ctorStr = "cljs.core.async/t48013";
cljs.core.async.t48013.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48013");
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t48013.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48013.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48015){var self__ = this;
var _48015__$1 = this;return self__.meta48014;
});})(cs))
;
cljs.core.async.t48013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48015,meta48014__$1){var self__ = this;
var _48015__$1 = this;return (new cljs.core.async.t48013(self__.cs,self__.ch,self__.mult,meta48014__$1));
});})(cs))
;
cljs.core.async.__GT_t48013 = ((function (cs){
return (function __GT_t48013(cs__$1,ch__$1,mult__$1,meta48014){return (new cljs.core.async.t48013(cs__$1,ch__$1,mult__$1,meta48014));
});})(cs))
;
}
return (new cljs.core.async.t48013(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___48236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48150){var state_val_48151 = (state_48150[1]);if((state_val_48151 === 32))
{var inst_48018 = (state_48150[7]);var inst_48094 = (state_48150[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48150,31,Object,null,30);var inst_48101 = cljs.core.async.put_BANG_.call(null,inst_48094,inst_48018,done);var state_48150__$1 = state_48150;var statearr_48152_48237 = state_48150__$1;(statearr_48152_48237[2] = inst_48101);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48150__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 1))
{var state_48150__$1 = state_48150;var statearr_48153_48238 = state_48150__$1;(statearr_48153_48238[2] = null);
(statearr_48153_48238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 33))
{var inst_48107 = (state_48150[9]);var inst_48109 = cljs.core.chunked_seq_QMARK_.call(null,inst_48107);var state_48150__$1 = state_48150;if(inst_48109)
{var statearr_48154_48239 = state_48150__$1;(statearr_48154_48239[1] = 36);
} else
{var statearr_48155_48240 = state_48150__$1;(statearr_48155_48240[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 2))
{var state_48150__$1 = state_48150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48150__$1,4,ch);
} else
{if((state_val_48151 === 34))
{var state_48150__$1 = state_48150;var statearr_48156_48241 = state_48150__$1;(statearr_48156_48241[2] = null);
(statearr_48156_48241[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 3))
{var inst_48148 = (state_48150[2]);var state_48150__$1 = state_48150;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48150__$1,inst_48148);
} else
{if((state_val_48151 === 35))
{var inst_48132 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48157_48242 = state_48150__$1;(statearr_48157_48242[2] = inst_48132);
(statearr_48157_48242[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 4))
{var inst_48018 = (state_48150[7]);var inst_48018__$1 = (state_48150[2]);var inst_48019 = (inst_48018__$1 == null);var state_48150__$1 = (function (){var statearr_48158 = state_48150;(statearr_48158[7] = inst_48018__$1);
return statearr_48158;
})();if(cljs.core.truth_(inst_48019))
{var statearr_48159_48243 = state_48150__$1;(statearr_48159_48243[1] = 5);
} else
{var statearr_48160_48244 = state_48150__$1;(statearr_48160_48244[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 36))
{var inst_48107 = (state_48150[9]);var inst_48111 = cljs.core.chunk_first.call(null,inst_48107);var inst_48112 = cljs.core.chunk_rest.call(null,inst_48107);var inst_48113 = cljs.core.count.call(null,inst_48111);var inst_48086 = inst_48112;var inst_48087 = inst_48111;var inst_48088 = inst_48113;var inst_48089 = 0;var state_48150__$1 = (function (){var statearr_48161 = state_48150;(statearr_48161[10] = inst_48089);
(statearr_48161[11] = inst_48086);
(statearr_48161[12] = inst_48088);
(statearr_48161[13] = inst_48087);
return statearr_48161;
})();var statearr_48162_48245 = state_48150__$1;(statearr_48162_48245[2] = null);
(statearr_48162_48245[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 5))
{var inst_48025 = cljs.core.deref.call(null,cs);var inst_48026 = cljs.core.seq.call(null,inst_48025);var inst_48027 = inst_48026;var inst_48028 = null;var inst_48029 = 0;var inst_48030 = 0;var state_48150__$1 = (function (){var statearr_48163 = state_48150;(statearr_48163[14] = inst_48030);
(statearr_48163[15] = inst_48029);
(statearr_48163[16] = inst_48028);
(statearr_48163[17] = inst_48027);
return statearr_48163;
})();var statearr_48164_48246 = state_48150__$1;(statearr_48164_48246[2] = null);
(statearr_48164_48246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 37))
{var inst_48107 = (state_48150[9]);var inst_48116 = cljs.core.first.call(null,inst_48107);var state_48150__$1 = (function (){var statearr_48165 = state_48150;(statearr_48165[18] = inst_48116);
return statearr_48165;
})();var statearr_48166_48247 = state_48150__$1;(statearr_48166_48247[2] = null);
(statearr_48166_48247[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 6))
{var inst_48078 = (state_48150[19]);var inst_48077 = cljs.core.deref.call(null,cs);var inst_48078__$1 = cljs.core.keys.call(null,inst_48077);var inst_48079 = cljs.core.count.call(null,inst_48078__$1);var inst_48080 = cljs.core.reset_BANG_.call(null,dctr,inst_48079);var inst_48085 = cljs.core.seq.call(null,inst_48078__$1);var inst_48086 = inst_48085;var inst_48087 = null;var inst_48088 = 0;var inst_48089 = 0;var state_48150__$1 = (function (){var statearr_48167 = state_48150;(statearr_48167[10] = inst_48089);
(statearr_48167[11] = inst_48086);
(statearr_48167[12] = inst_48088);
(statearr_48167[13] = inst_48087);
(statearr_48167[20] = inst_48080);
(statearr_48167[19] = inst_48078__$1);
return statearr_48167;
})();var statearr_48168_48248 = state_48150__$1;(statearr_48168_48248[2] = null);
(statearr_48168_48248[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 38))
{var inst_48129 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48169_48249 = state_48150__$1;(statearr_48169_48249[2] = inst_48129);
(statearr_48169_48249[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 7))
{var inst_48146 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48170_48250 = state_48150__$1;(statearr_48170_48250[2] = inst_48146);
(statearr_48170_48250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 39))
{var inst_48107 = (state_48150[9]);var inst_48125 = (state_48150[2]);var inst_48126 = cljs.core.next.call(null,inst_48107);var inst_48086 = inst_48126;var inst_48087 = null;var inst_48088 = 0;var inst_48089 = 0;var state_48150__$1 = (function (){var statearr_48171 = state_48150;(statearr_48171[21] = inst_48125);
(statearr_48171[10] = inst_48089);
(statearr_48171[11] = inst_48086);
(statearr_48171[12] = inst_48088);
(statearr_48171[13] = inst_48087);
return statearr_48171;
})();var statearr_48172_48251 = state_48150__$1;(statearr_48172_48251[2] = null);
(statearr_48172_48251[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 8))
{var inst_48030 = (state_48150[14]);var inst_48029 = (state_48150[15]);var inst_48032 = (inst_48030 < inst_48029);var inst_48033 = inst_48032;var state_48150__$1 = state_48150;if(cljs.core.truth_(inst_48033))
{var statearr_48173_48252 = state_48150__$1;(statearr_48173_48252[1] = 10);
} else
{var statearr_48174_48253 = state_48150__$1;(statearr_48174_48253[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 40))
{var inst_48116 = (state_48150[18]);var inst_48117 = (state_48150[2]);var inst_48118 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48119 = cljs.core.async.untap_STAR_.call(null,m,inst_48116);var state_48150__$1 = (function (){var statearr_48175 = state_48150;(statearr_48175[22] = inst_48118);
(statearr_48175[23] = inst_48117);
return statearr_48175;
})();var statearr_48176_48254 = state_48150__$1;(statearr_48176_48254[2] = inst_48119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48150__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 9))
{var inst_48075 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48177_48255 = state_48150__$1;(statearr_48177_48255[2] = inst_48075);
(statearr_48177_48255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 41))
{var inst_48018 = (state_48150[7]);var inst_48116 = (state_48150[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48150,40,Object,null,39);var inst_48123 = cljs.core.async.put_BANG_.call(null,inst_48116,inst_48018,done);var state_48150__$1 = state_48150;var statearr_48178_48256 = state_48150__$1;(statearr_48178_48256[2] = inst_48123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48150__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 10))
{var inst_48030 = (state_48150[14]);var inst_48028 = (state_48150[16]);var inst_48036 = cljs.core._nth.call(null,inst_48028,inst_48030);var inst_48037 = cljs.core.nth.call(null,inst_48036,0,null);var inst_48038 = cljs.core.nth.call(null,inst_48036,1,null);var state_48150__$1 = (function (){var statearr_48179 = state_48150;(statearr_48179[24] = inst_48037);
return statearr_48179;
})();if(cljs.core.truth_(inst_48038))
{var statearr_48180_48257 = state_48150__$1;(statearr_48180_48257[1] = 13);
} else
{var statearr_48181_48258 = state_48150__$1;(statearr_48181_48258[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 42))
{var state_48150__$1 = state_48150;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48150__$1,45,dchan);
} else
{if((state_val_48151 === 11))
{var inst_48047 = (state_48150[25]);var inst_48027 = (state_48150[17]);var inst_48047__$1 = cljs.core.seq.call(null,inst_48027);var state_48150__$1 = (function (){var statearr_48182 = state_48150;(statearr_48182[25] = inst_48047__$1);
return statearr_48182;
})();if(inst_48047__$1)
{var statearr_48183_48259 = state_48150__$1;(statearr_48183_48259[1] = 16);
} else
{var statearr_48184_48260 = state_48150__$1;(statearr_48184_48260[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 43))
{var state_48150__$1 = state_48150;var statearr_48185_48261 = state_48150__$1;(statearr_48185_48261[2] = null);
(statearr_48185_48261[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 12))
{var inst_48073 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48186_48262 = state_48150__$1;(statearr_48186_48262[2] = inst_48073);
(statearr_48186_48262[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 44))
{var inst_48143 = (state_48150[2]);var state_48150__$1 = (function (){var statearr_48187 = state_48150;(statearr_48187[26] = inst_48143);
return statearr_48187;
})();var statearr_48188_48263 = state_48150__$1;(statearr_48188_48263[2] = null);
(statearr_48188_48263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 13))
{var inst_48037 = (state_48150[24]);var inst_48040 = cljs.core.async.close_BANG_.call(null,inst_48037);var state_48150__$1 = state_48150;var statearr_48189_48264 = state_48150__$1;(statearr_48189_48264[2] = inst_48040);
(statearr_48189_48264[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 45))
{var inst_48140 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48193_48265 = state_48150__$1;(statearr_48193_48265[2] = inst_48140);
(statearr_48193_48265[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 14))
{var state_48150__$1 = state_48150;var statearr_48194_48266 = state_48150__$1;(statearr_48194_48266[2] = null);
(statearr_48194_48266[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 15))
{var inst_48030 = (state_48150[14]);var inst_48029 = (state_48150[15]);var inst_48028 = (state_48150[16]);var inst_48027 = (state_48150[17]);var inst_48043 = (state_48150[2]);var inst_48044 = (inst_48030 + 1);var tmp48190 = inst_48029;var tmp48191 = inst_48028;var tmp48192 = inst_48027;var inst_48027__$1 = tmp48192;var inst_48028__$1 = tmp48191;var inst_48029__$1 = tmp48190;var inst_48030__$1 = inst_48044;var state_48150__$1 = (function (){var statearr_48195 = state_48150;(statearr_48195[27] = inst_48043);
(statearr_48195[14] = inst_48030__$1);
(statearr_48195[15] = inst_48029__$1);
(statearr_48195[16] = inst_48028__$1);
(statearr_48195[17] = inst_48027__$1);
return statearr_48195;
})();var statearr_48196_48267 = state_48150__$1;(statearr_48196_48267[2] = null);
(statearr_48196_48267[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 16))
{var inst_48047 = (state_48150[25]);var inst_48049 = cljs.core.chunked_seq_QMARK_.call(null,inst_48047);var state_48150__$1 = state_48150;if(inst_48049)
{var statearr_48197_48268 = state_48150__$1;(statearr_48197_48268[1] = 19);
} else
{var statearr_48198_48269 = state_48150__$1;(statearr_48198_48269[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 17))
{var state_48150__$1 = state_48150;var statearr_48199_48270 = state_48150__$1;(statearr_48199_48270[2] = null);
(statearr_48199_48270[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 18))
{var inst_48071 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48200_48271 = state_48150__$1;(statearr_48200_48271[2] = inst_48071);
(statearr_48200_48271[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 19))
{var inst_48047 = (state_48150[25]);var inst_48051 = cljs.core.chunk_first.call(null,inst_48047);var inst_48052 = cljs.core.chunk_rest.call(null,inst_48047);var inst_48053 = cljs.core.count.call(null,inst_48051);var inst_48027 = inst_48052;var inst_48028 = inst_48051;var inst_48029 = inst_48053;var inst_48030 = 0;var state_48150__$1 = (function (){var statearr_48201 = state_48150;(statearr_48201[14] = inst_48030);
(statearr_48201[15] = inst_48029);
(statearr_48201[16] = inst_48028);
(statearr_48201[17] = inst_48027);
return statearr_48201;
})();var statearr_48202_48272 = state_48150__$1;(statearr_48202_48272[2] = null);
(statearr_48202_48272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 20))
{var inst_48047 = (state_48150[25]);var inst_48057 = cljs.core.first.call(null,inst_48047);var inst_48058 = cljs.core.nth.call(null,inst_48057,0,null);var inst_48059 = cljs.core.nth.call(null,inst_48057,1,null);var state_48150__$1 = (function (){var statearr_48203 = state_48150;(statearr_48203[28] = inst_48058);
return statearr_48203;
})();if(cljs.core.truth_(inst_48059))
{var statearr_48204_48273 = state_48150__$1;(statearr_48204_48273[1] = 22);
} else
{var statearr_48205_48274 = state_48150__$1;(statearr_48205_48274[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 21))
{var inst_48068 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48206_48275 = state_48150__$1;(statearr_48206_48275[2] = inst_48068);
(statearr_48206_48275[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 22))
{var inst_48058 = (state_48150[28]);var inst_48061 = cljs.core.async.close_BANG_.call(null,inst_48058);var state_48150__$1 = state_48150;var statearr_48207_48276 = state_48150__$1;(statearr_48207_48276[2] = inst_48061);
(statearr_48207_48276[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 23))
{var state_48150__$1 = state_48150;var statearr_48208_48277 = state_48150__$1;(statearr_48208_48277[2] = null);
(statearr_48208_48277[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 24))
{var inst_48047 = (state_48150[25]);var inst_48064 = (state_48150[2]);var inst_48065 = cljs.core.next.call(null,inst_48047);var inst_48027 = inst_48065;var inst_48028 = null;var inst_48029 = 0;var inst_48030 = 0;var state_48150__$1 = (function (){var statearr_48209 = state_48150;(statearr_48209[29] = inst_48064);
(statearr_48209[14] = inst_48030);
(statearr_48209[15] = inst_48029);
(statearr_48209[16] = inst_48028);
(statearr_48209[17] = inst_48027);
return statearr_48209;
})();var statearr_48210_48278 = state_48150__$1;(statearr_48210_48278[2] = null);
(statearr_48210_48278[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 25))
{var inst_48089 = (state_48150[10]);var inst_48088 = (state_48150[12]);var inst_48091 = (inst_48089 < inst_48088);var inst_48092 = inst_48091;var state_48150__$1 = state_48150;if(cljs.core.truth_(inst_48092))
{var statearr_48211_48279 = state_48150__$1;(statearr_48211_48279[1] = 27);
} else
{var statearr_48212_48280 = state_48150__$1;(statearr_48212_48280[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 26))
{var inst_48078 = (state_48150[19]);var inst_48136 = (state_48150[2]);var inst_48137 = cljs.core.seq.call(null,inst_48078);var state_48150__$1 = (function (){var statearr_48213 = state_48150;(statearr_48213[30] = inst_48136);
return statearr_48213;
})();if(inst_48137)
{var statearr_48214_48281 = state_48150__$1;(statearr_48214_48281[1] = 42);
} else
{var statearr_48215_48282 = state_48150__$1;(statearr_48215_48282[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 27))
{var inst_48089 = (state_48150[10]);var inst_48087 = (state_48150[13]);var inst_48094 = cljs.core._nth.call(null,inst_48087,inst_48089);var state_48150__$1 = (function (){var statearr_48216 = state_48150;(statearr_48216[8] = inst_48094);
return statearr_48216;
})();var statearr_48217_48283 = state_48150__$1;(statearr_48217_48283[2] = null);
(statearr_48217_48283[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 28))
{var inst_48086 = (state_48150[11]);var inst_48107 = (state_48150[9]);var inst_48107__$1 = cljs.core.seq.call(null,inst_48086);var state_48150__$1 = (function (){var statearr_48221 = state_48150;(statearr_48221[9] = inst_48107__$1);
return statearr_48221;
})();if(inst_48107__$1)
{var statearr_48222_48284 = state_48150__$1;(statearr_48222_48284[1] = 33);
} else
{var statearr_48223_48285 = state_48150__$1;(statearr_48223_48285[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 29))
{var inst_48134 = (state_48150[2]);var state_48150__$1 = state_48150;var statearr_48224_48286 = state_48150__$1;(statearr_48224_48286[2] = inst_48134);
(statearr_48224_48286[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 30))
{var inst_48089 = (state_48150[10]);var inst_48086 = (state_48150[11]);var inst_48088 = (state_48150[12]);var inst_48087 = (state_48150[13]);var inst_48103 = (state_48150[2]);var inst_48104 = (inst_48089 + 1);var tmp48218 = inst_48086;var tmp48219 = inst_48088;var tmp48220 = inst_48087;var inst_48086__$1 = tmp48218;var inst_48087__$1 = tmp48220;var inst_48088__$1 = tmp48219;var inst_48089__$1 = inst_48104;var state_48150__$1 = (function (){var statearr_48225 = state_48150;(statearr_48225[10] = inst_48089__$1);
(statearr_48225[11] = inst_48086__$1);
(statearr_48225[12] = inst_48088__$1);
(statearr_48225[13] = inst_48087__$1);
(statearr_48225[31] = inst_48103);
return statearr_48225;
})();var statearr_48226_48287 = state_48150__$1;(statearr_48226_48287[2] = null);
(statearr_48226_48287[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48151 === 31))
{var inst_48094 = (state_48150[8]);var inst_48095 = (state_48150[2]);var inst_48096 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_48097 = cljs.core.async.untap_STAR_.call(null,m,inst_48094);var state_48150__$1 = (function (){var statearr_48227 = state_48150;(statearr_48227[32] = inst_48096);
(statearr_48227[33] = inst_48095);
return statearr_48227;
})();var statearr_48228_48288 = state_48150__$1;(statearr_48228_48288[2] = inst_48097);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48150__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48232[0] = state_machine__5548__auto__);
(statearr_48232[1] = 1);
return statearr_48232;
});
var state_machine__5548__auto____1 = (function (state_48150){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48150);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48233){if((e48233 instanceof Object))
{var ex__5551__auto__ = e48233;var statearr_48234_48289 = state_48150;(statearr_48234_48289[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48150);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48290 = state_48150;
state_48150 = G__48290;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48150){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48235 = f__5563__auto__.call(null);(statearr_48235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48236);
return statearr_48235;
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
cljs.core.async.Mix = (function (){var obj48292 = {};return obj48292;
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
;var m = (function (){if(typeof cljs.core.async.t48402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48402 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta48403){
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
this.meta48403 = meta48403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48402.cljs$lang$type = true;
cljs.core.async.t48402.cljs$lang$ctorStr = "cljs.core.async/t48402";
cljs.core.async.t48402.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48402");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48402.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48404){var self__ = this;
var _48404__$1 = this;return self__.meta48403;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t48402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48404,meta48403__$1){var self__ = this;
var _48404__$1 = this;return (new cljs.core.async.t48402(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta48403__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t48402 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t48402(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48403){return (new cljs.core.async.t48402(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta48403));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t48402(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___48511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48469){var state_val_48470 = (state_48469[1]);if((state_val_48470 === 1))
{var inst_48408 = (state_48469[7]);var inst_48408__$1 = calc_state.call(null);var inst_48409 = cljs.core.seq_QMARK_.call(null,inst_48408__$1);var state_48469__$1 = (function (){var statearr_48471 = state_48469;(statearr_48471[7] = inst_48408__$1);
return statearr_48471;
})();if(inst_48409)
{var statearr_48472_48512 = state_48469__$1;(statearr_48472_48512[1] = 2);
} else
{var statearr_48473_48513 = state_48469__$1;(statearr_48473_48513[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 2))
{var inst_48408 = (state_48469[7]);var inst_48411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48408);var state_48469__$1 = state_48469;var statearr_48474_48514 = state_48469__$1;(statearr_48474_48514[2] = inst_48411);
(statearr_48474_48514[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 3))
{var inst_48408 = (state_48469[7]);var state_48469__$1 = state_48469;var statearr_48475_48515 = state_48469__$1;(statearr_48475_48515[2] = inst_48408);
(statearr_48475_48515[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 4))
{var inst_48408 = (state_48469[7]);var inst_48414 = (state_48469[2]);var inst_48415 = cljs.core.get.call(null,inst_48414,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48416 = cljs.core.get.call(null,inst_48414,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48417 = cljs.core.get.call(null,inst_48414,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_48418 = inst_48408;var state_48469__$1 = (function (){var statearr_48476 = state_48469;(statearr_48476[8] = inst_48415);
(statearr_48476[9] = inst_48416);
(statearr_48476[10] = inst_48417);
(statearr_48476[11] = inst_48418);
return statearr_48476;
})();var statearr_48477_48516 = state_48469__$1;(statearr_48477_48516[2] = null);
(statearr_48477_48516[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 5))
{var inst_48418 = (state_48469[11]);var inst_48421 = cljs.core.seq_QMARK_.call(null,inst_48418);var state_48469__$1 = state_48469;if(inst_48421)
{var statearr_48478_48517 = state_48469__$1;(statearr_48478_48517[1] = 7);
} else
{var statearr_48479_48518 = state_48469__$1;(statearr_48479_48518[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 6))
{var inst_48467 = (state_48469[2]);var state_48469__$1 = state_48469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48469__$1,inst_48467);
} else
{if((state_val_48470 === 7))
{var inst_48418 = (state_48469[11]);var inst_48423 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48418);var state_48469__$1 = state_48469;var statearr_48480_48519 = state_48469__$1;(statearr_48480_48519[2] = inst_48423);
(statearr_48480_48519[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 8))
{var inst_48418 = (state_48469[11]);var state_48469__$1 = state_48469;var statearr_48481_48520 = state_48469__$1;(statearr_48481_48520[2] = inst_48418);
(statearr_48481_48520[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 9))
{var inst_48426 = (state_48469[12]);var inst_48426__$1 = (state_48469[2]);var inst_48427 = cljs.core.get.call(null,inst_48426__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_48428 = cljs.core.get.call(null,inst_48426__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_48429 = cljs.core.get.call(null,inst_48426__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_48469__$1 = (function (){var statearr_48482 = state_48469;(statearr_48482[13] = inst_48428);
(statearr_48482[14] = inst_48429);
(statearr_48482[12] = inst_48426__$1);
return statearr_48482;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_48469__$1,10,inst_48427);
} else
{if((state_val_48470 === 10))
{var inst_48434 = (state_48469[15]);var inst_48433 = (state_48469[16]);var inst_48432 = (state_48469[2]);var inst_48433__$1 = cljs.core.nth.call(null,inst_48432,0,null);var inst_48434__$1 = cljs.core.nth.call(null,inst_48432,1,null);var inst_48435 = (inst_48433__$1 == null);var inst_48436 = cljs.core._EQ_.call(null,inst_48434__$1,change);var inst_48437 = (inst_48435) || (inst_48436);var state_48469__$1 = (function (){var statearr_48483 = state_48469;(statearr_48483[15] = inst_48434__$1);
(statearr_48483[16] = inst_48433__$1);
return statearr_48483;
})();if(cljs.core.truth_(inst_48437))
{var statearr_48484_48521 = state_48469__$1;(statearr_48484_48521[1] = 11);
} else
{var statearr_48485_48522 = state_48469__$1;(statearr_48485_48522[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 11))
{var inst_48433 = (state_48469[16]);var inst_48439 = (inst_48433 == null);var state_48469__$1 = state_48469;if(cljs.core.truth_(inst_48439))
{var statearr_48486_48523 = state_48469__$1;(statearr_48486_48523[1] = 14);
} else
{var statearr_48487_48524 = state_48469__$1;(statearr_48487_48524[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 12))
{var inst_48448 = (state_48469[17]);var inst_48429 = (state_48469[14]);var inst_48434 = (state_48469[15]);var inst_48448__$1 = inst_48429.call(null,inst_48434);var state_48469__$1 = (function (){var statearr_48488 = state_48469;(statearr_48488[17] = inst_48448__$1);
return statearr_48488;
})();if(cljs.core.truth_(inst_48448__$1))
{var statearr_48489_48525 = state_48469__$1;(statearr_48489_48525[1] = 17);
} else
{var statearr_48490_48526 = state_48469__$1;(statearr_48490_48526[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 13))
{var inst_48465 = (state_48469[2]);var state_48469__$1 = state_48469;var statearr_48491_48527 = state_48469__$1;(statearr_48491_48527[2] = inst_48465);
(statearr_48491_48527[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 14))
{var inst_48434 = (state_48469[15]);var inst_48441 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48434);var state_48469__$1 = state_48469;var statearr_48492_48528 = state_48469__$1;(statearr_48492_48528[2] = inst_48441);
(statearr_48492_48528[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 15))
{var state_48469__$1 = state_48469;var statearr_48493_48529 = state_48469__$1;(statearr_48493_48529[2] = null);
(statearr_48493_48529[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 16))
{var inst_48444 = (state_48469[2]);var inst_48445 = calc_state.call(null);var inst_48418 = inst_48445;var state_48469__$1 = (function (){var statearr_48494 = state_48469;(statearr_48494[18] = inst_48444);
(statearr_48494[11] = inst_48418);
return statearr_48494;
})();var statearr_48495_48530 = state_48469__$1;(statearr_48495_48530[2] = null);
(statearr_48495_48530[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 17))
{var inst_48448 = (state_48469[17]);var state_48469__$1 = state_48469;var statearr_48496_48531 = state_48469__$1;(statearr_48496_48531[2] = inst_48448);
(statearr_48496_48531[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 18))
{var inst_48428 = (state_48469[13]);var inst_48429 = (state_48469[14]);var inst_48434 = (state_48469[15]);var inst_48451 = cljs.core.empty_QMARK_.call(null,inst_48429);var inst_48452 = inst_48428.call(null,inst_48434);var inst_48453 = cljs.core.not.call(null,inst_48452);var inst_48454 = (inst_48451) && (inst_48453);var state_48469__$1 = state_48469;var statearr_48497_48532 = state_48469__$1;(statearr_48497_48532[2] = inst_48454);
(statearr_48497_48532[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 19))
{var inst_48456 = (state_48469[2]);var state_48469__$1 = state_48469;if(cljs.core.truth_(inst_48456))
{var statearr_48498_48533 = state_48469__$1;(statearr_48498_48533[1] = 20);
} else
{var statearr_48499_48534 = state_48469__$1;(statearr_48499_48534[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 20))
{var inst_48433 = (state_48469[16]);var state_48469__$1 = state_48469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48469__$1,23,out,inst_48433);
} else
{if((state_val_48470 === 21))
{var state_48469__$1 = state_48469;var statearr_48500_48535 = state_48469__$1;(statearr_48500_48535[2] = null);
(statearr_48500_48535[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 22))
{var inst_48426 = (state_48469[12]);var inst_48462 = (state_48469[2]);var inst_48418 = inst_48426;var state_48469__$1 = (function (){var statearr_48501 = state_48469;(statearr_48501[19] = inst_48462);
(statearr_48501[11] = inst_48418);
return statearr_48501;
})();var statearr_48502_48536 = state_48469__$1;(statearr_48502_48536[2] = null);
(statearr_48502_48536[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48470 === 23))
{var inst_48459 = (state_48469[2]);var state_48469__$1 = state_48469;var statearr_48503_48537 = state_48469__$1;(statearr_48503_48537[2] = inst_48459);
(statearr_48503_48537[1] = 22);
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
var state_machine__5548__auto____0 = (function (){var statearr_48507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48507[0] = state_machine__5548__auto__);
(statearr_48507[1] = 1);
return statearr_48507;
});
var state_machine__5548__auto____1 = (function (state_48469){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48508){if((e48508 instanceof Object))
{var ex__5551__auto__ = e48508;var statearr_48509_48538 = state_48469;(statearr_48509_48538[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48539 = state_48469;
state_48469 = G__48539;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48469){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48510 = f__5563__auto__.call(null);(statearr_48510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48511);
return statearr_48510;
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
cljs.core.async.Pub = (function (){var obj48541 = {};return obj48541;
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
return (function (p1__48542_SHARP_){if(cljs.core.truth_(p1__48542_SHARP_.call(null,topic)))
{return p1__48542_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__48542_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t48667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48667 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta48668){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta48668 = meta48668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48667.cljs$lang$type = true;
cljs.core.async.t48667.cljs$lang$ctorStr = "cljs.core.async/t48667";
cljs.core.async.t48667.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t48667");
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t48667.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t48667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48669){var self__ = this;
var _48669__$1 = this;return self__.meta48668;
});})(mults,ensure_mult))
;
cljs.core.async.t48667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48669,meta48668__$1){var self__ = this;
var _48669__$1 = this;return (new cljs.core.async.t48667(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta48668__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t48667 = ((function (mults,ensure_mult){
return (function __GT_t48667(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48668){return (new cljs.core.async.t48667(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta48668));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t48667(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___48791 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48743){var state_val_48744 = (state_48743[1]);if((state_val_48744 === 1))
{var state_48743__$1 = state_48743;var statearr_48745_48792 = state_48743__$1;(statearr_48745_48792[2] = null);
(statearr_48745_48792[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 2))
{var state_48743__$1 = state_48743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48743__$1,4,ch);
} else
{if((state_val_48744 === 3))
{var inst_48741 = (state_48743[2]);var state_48743__$1 = state_48743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48743__$1,inst_48741);
} else
{if((state_val_48744 === 4))
{var inst_48672 = (state_48743[7]);var inst_48672__$1 = (state_48743[2]);var inst_48673 = (inst_48672__$1 == null);var state_48743__$1 = (function (){var statearr_48746 = state_48743;(statearr_48746[7] = inst_48672__$1);
return statearr_48746;
})();if(cljs.core.truth_(inst_48673))
{var statearr_48747_48793 = state_48743__$1;(statearr_48747_48793[1] = 5);
} else
{var statearr_48748_48794 = state_48743__$1;(statearr_48748_48794[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 5))
{var inst_48679 = cljs.core.deref.call(null,mults);var inst_48680 = cljs.core.vals.call(null,inst_48679);var inst_48681 = cljs.core.seq.call(null,inst_48680);var inst_48682 = inst_48681;var inst_48683 = null;var inst_48684 = 0;var inst_48685 = 0;var state_48743__$1 = (function (){var statearr_48749 = state_48743;(statearr_48749[8] = inst_48685);
(statearr_48749[9] = inst_48683);
(statearr_48749[10] = inst_48684);
(statearr_48749[11] = inst_48682);
return statearr_48749;
})();var statearr_48750_48795 = state_48743__$1;(statearr_48750_48795[2] = null);
(statearr_48750_48795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 6))
{var inst_48722 = (state_48743[12]);var inst_48720 = (state_48743[13]);var inst_48672 = (state_48743[7]);var inst_48720__$1 = topic_fn.call(null,inst_48672);var inst_48721 = cljs.core.deref.call(null,mults);var inst_48722__$1 = cljs.core.get.call(null,inst_48721,inst_48720__$1);var state_48743__$1 = (function (){var statearr_48751 = state_48743;(statearr_48751[12] = inst_48722__$1);
(statearr_48751[13] = inst_48720__$1);
return statearr_48751;
})();if(cljs.core.truth_(inst_48722__$1))
{var statearr_48752_48796 = state_48743__$1;(statearr_48752_48796[1] = 19);
} else
{var statearr_48753_48797 = state_48743__$1;(statearr_48753_48797[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 7))
{var inst_48739 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48754_48798 = state_48743__$1;(statearr_48754_48798[2] = inst_48739);
(statearr_48754_48798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 8))
{var inst_48685 = (state_48743[8]);var inst_48684 = (state_48743[10]);var inst_48687 = (inst_48685 < inst_48684);var inst_48688 = inst_48687;var state_48743__$1 = state_48743;if(cljs.core.truth_(inst_48688))
{var statearr_48758_48799 = state_48743__$1;(statearr_48758_48799[1] = 10);
} else
{var statearr_48759_48800 = state_48743__$1;(statearr_48759_48800[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 9))
{var inst_48718 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48760_48801 = state_48743__$1;(statearr_48760_48801[2] = inst_48718);
(statearr_48760_48801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 10))
{var inst_48685 = (state_48743[8]);var inst_48683 = (state_48743[9]);var inst_48684 = (state_48743[10]);var inst_48682 = (state_48743[11]);var inst_48690 = cljs.core._nth.call(null,inst_48683,inst_48685);var inst_48691 = cljs.core.async.muxch_STAR_.call(null,inst_48690);var inst_48692 = cljs.core.async.close_BANG_.call(null,inst_48691);var inst_48693 = (inst_48685 + 1);var tmp48755 = inst_48683;var tmp48756 = inst_48684;var tmp48757 = inst_48682;var inst_48682__$1 = tmp48757;var inst_48683__$1 = tmp48755;var inst_48684__$1 = tmp48756;var inst_48685__$1 = inst_48693;var state_48743__$1 = (function (){var statearr_48761 = state_48743;(statearr_48761[8] = inst_48685__$1);
(statearr_48761[9] = inst_48683__$1);
(statearr_48761[10] = inst_48684__$1);
(statearr_48761[11] = inst_48682__$1);
(statearr_48761[14] = inst_48692);
return statearr_48761;
})();var statearr_48762_48802 = state_48743__$1;(statearr_48762_48802[2] = null);
(statearr_48762_48802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 11))
{var inst_48682 = (state_48743[11]);var inst_48696 = (state_48743[15]);var inst_48696__$1 = cljs.core.seq.call(null,inst_48682);var state_48743__$1 = (function (){var statearr_48763 = state_48743;(statearr_48763[15] = inst_48696__$1);
return statearr_48763;
})();if(inst_48696__$1)
{var statearr_48764_48803 = state_48743__$1;(statearr_48764_48803[1] = 13);
} else
{var statearr_48765_48804 = state_48743__$1;(statearr_48765_48804[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 12))
{var inst_48716 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48766_48805 = state_48743__$1;(statearr_48766_48805[2] = inst_48716);
(statearr_48766_48805[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 13))
{var inst_48696 = (state_48743[15]);var inst_48698 = cljs.core.chunked_seq_QMARK_.call(null,inst_48696);var state_48743__$1 = state_48743;if(inst_48698)
{var statearr_48767_48806 = state_48743__$1;(statearr_48767_48806[1] = 16);
} else
{var statearr_48768_48807 = state_48743__$1;(statearr_48768_48807[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 14))
{var state_48743__$1 = state_48743;var statearr_48769_48808 = state_48743__$1;(statearr_48769_48808[2] = null);
(statearr_48769_48808[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 15))
{var inst_48714 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48770_48809 = state_48743__$1;(statearr_48770_48809[2] = inst_48714);
(statearr_48770_48809[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 16))
{var inst_48696 = (state_48743[15]);var inst_48700 = cljs.core.chunk_first.call(null,inst_48696);var inst_48701 = cljs.core.chunk_rest.call(null,inst_48696);var inst_48702 = cljs.core.count.call(null,inst_48700);var inst_48682 = inst_48701;var inst_48683 = inst_48700;var inst_48684 = inst_48702;var inst_48685 = 0;var state_48743__$1 = (function (){var statearr_48771 = state_48743;(statearr_48771[8] = inst_48685);
(statearr_48771[9] = inst_48683);
(statearr_48771[10] = inst_48684);
(statearr_48771[11] = inst_48682);
return statearr_48771;
})();var statearr_48772_48810 = state_48743__$1;(statearr_48772_48810[2] = null);
(statearr_48772_48810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 17))
{var inst_48696 = (state_48743[15]);var inst_48705 = cljs.core.first.call(null,inst_48696);var inst_48706 = cljs.core.async.muxch_STAR_.call(null,inst_48705);var inst_48707 = cljs.core.async.close_BANG_.call(null,inst_48706);var inst_48708 = cljs.core.next.call(null,inst_48696);var inst_48682 = inst_48708;var inst_48683 = null;var inst_48684 = 0;var inst_48685 = 0;var state_48743__$1 = (function (){var statearr_48773 = state_48743;(statearr_48773[8] = inst_48685);
(statearr_48773[9] = inst_48683);
(statearr_48773[10] = inst_48684);
(statearr_48773[11] = inst_48682);
(statearr_48773[16] = inst_48707);
return statearr_48773;
})();var statearr_48774_48811 = state_48743__$1;(statearr_48774_48811[2] = null);
(statearr_48774_48811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 18))
{var inst_48711 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48775_48812 = state_48743__$1;(statearr_48775_48812[2] = inst_48711);
(statearr_48775_48812[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 19))
{var state_48743__$1 = state_48743;var statearr_48776_48813 = state_48743__$1;(statearr_48776_48813[2] = null);
(statearr_48776_48813[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 20))
{var state_48743__$1 = state_48743;var statearr_48777_48814 = state_48743__$1;(statearr_48777_48814[2] = null);
(statearr_48777_48814[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 21))
{var inst_48736 = (state_48743[2]);var state_48743__$1 = (function (){var statearr_48778 = state_48743;(statearr_48778[17] = inst_48736);
return statearr_48778;
})();var statearr_48779_48815 = state_48743__$1;(statearr_48779_48815[2] = null);
(statearr_48779_48815[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 22))
{var inst_48733 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48780_48816 = state_48743__$1;(statearr_48780_48816[2] = inst_48733);
(statearr_48780_48816[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 23))
{var inst_48720 = (state_48743[13]);var inst_48724 = (state_48743[2]);var inst_48725 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48720);var state_48743__$1 = (function (){var statearr_48781 = state_48743;(statearr_48781[18] = inst_48724);
return statearr_48781;
})();var statearr_48782_48817 = state_48743__$1;(statearr_48782_48817[2] = inst_48725);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48743__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48744 === 24))
{var inst_48722 = (state_48743[12]);var inst_48672 = (state_48743[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48743,23,Object,null,22);var inst_48729 = cljs.core.async.muxch_STAR_.call(null,inst_48722);var state_48743__$1 = state_48743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48743__$1,25,inst_48729,inst_48672);
} else
{if((state_val_48744 === 25))
{var inst_48731 = (state_48743[2]);var state_48743__$1 = state_48743;var statearr_48783_48818 = state_48743__$1;(statearr_48783_48818[2] = inst_48731);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48743__$1);
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
var state_machine__5548__auto____0 = (function (){var statearr_48787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48787[0] = state_machine__5548__auto__);
(statearr_48787[1] = 1);
return statearr_48787;
});
var state_machine__5548__auto____1 = (function (state_48743){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48743);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48788){if((e48788 instanceof Object))
{var ex__5551__auto__ = e48788;var statearr_48789_48819 = state_48743;(statearr_48789_48819[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48743);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48820 = state_48743;
state_48743 = G__48820;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48743){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48790 = f__5563__auto__.call(null);(statearr_48790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48791);
return statearr_48790;
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
,cljs.core.range.call(null,cnt));var c__5562__auto___48957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_48927){var state_val_48928 = (state_48927[1]);if((state_val_48928 === 1))
{var state_48927__$1 = state_48927;var statearr_48929_48958 = state_48927__$1;(statearr_48929_48958[2] = null);
(statearr_48929_48958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 2))
{var inst_48890 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_48891 = 0;var state_48927__$1 = (function (){var statearr_48930 = state_48927;(statearr_48930[7] = inst_48891);
(statearr_48930[8] = inst_48890);
return statearr_48930;
})();var statearr_48931_48959 = state_48927__$1;(statearr_48931_48959[2] = null);
(statearr_48931_48959[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 3))
{var inst_48925 = (state_48927[2]);var state_48927__$1 = state_48927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48927__$1,inst_48925);
} else
{if((state_val_48928 === 4))
{var inst_48891 = (state_48927[7]);var inst_48893 = (inst_48891 < cnt);var state_48927__$1 = state_48927;if(cljs.core.truth_(inst_48893))
{var statearr_48932_48960 = state_48927__$1;(statearr_48932_48960[1] = 6);
} else
{var statearr_48933_48961 = state_48927__$1;(statearr_48933_48961[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 5))
{var inst_48911 = (state_48927[2]);var state_48927__$1 = (function (){var statearr_48934 = state_48927;(statearr_48934[9] = inst_48911);
return statearr_48934;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48927__$1,12,dchan);
} else
{if((state_val_48928 === 6))
{var state_48927__$1 = state_48927;var statearr_48935_48962 = state_48927__$1;(statearr_48935_48962[2] = null);
(statearr_48935_48962[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 7))
{var state_48927__$1 = state_48927;var statearr_48936_48963 = state_48927__$1;(statearr_48936_48963[2] = null);
(statearr_48936_48963[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 8))
{var inst_48909 = (state_48927[2]);var state_48927__$1 = state_48927;var statearr_48937_48964 = state_48927__$1;(statearr_48937_48964[2] = inst_48909);
(statearr_48937_48964[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 9))
{var inst_48891 = (state_48927[7]);var inst_48904 = (state_48927[2]);var inst_48905 = (inst_48891 + 1);var inst_48891__$1 = inst_48905;var state_48927__$1 = (function (){var statearr_48938 = state_48927;(statearr_48938[10] = inst_48904);
(statearr_48938[7] = inst_48891__$1);
return statearr_48938;
})();var statearr_48939_48965 = state_48927__$1;(statearr_48939_48965[2] = null);
(statearr_48939_48965[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 10))
{var inst_48895 = (state_48927[2]);var inst_48896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_48927__$1 = (function (){var statearr_48940 = state_48927;(statearr_48940[11] = inst_48895);
return statearr_48940;
})();var statearr_48941_48966 = state_48927__$1;(statearr_48941_48966[2] = inst_48896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 11))
{var inst_48891 = (state_48927[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48927,10,Object,null,9);var inst_48900 = chs__$1.call(null,inst_48891);var inst_48901 = done.call(null,inst_48891);var inst_48902 = cljs.core.async.take_BANG_.call(null,inst_48900,inst_48901);var state_48927__$1 = state_48927;var statearr_48942_48967 = state_48927__$1;(statearr_48942_48967[2] = inst_48902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 12))
{var inst_48913 = (state_48927[12]);var inst_48913__$1 = (state_48927[2]);var inst_48914 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48913__$1);var state_48927__$1 = (function (){var statearr_48943 = state_48927;(statearr_48943[12] = inst_48913__$1);
return statearr_48943;
})();if(cljs.core.truth_(inst_48914))
{var statearr_48944_48968 = state_48927__$1;(statearr_48944_48968[1] = 13);
} else
{var statearr_48945_48969 = state_48927__$1;(statearr_48945_48969[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 13))
{var inst_48916 = cljs.core.async.close_BANG_.call(null,out);var state_48927__$1 = state_48927;var statearr_48946_48970 = state_48927__$1;(statearr_48946_48970[2] = inst_48916);
(statearr_48946_48970[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 14))
{var inst_48913 = (state_48927[12]);var inst_48918 = cljs.core.apply.call(null,f,inst_48913);var state_48927__$1 = state_48927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48927__$1,16,out,inst_48918);
} else
{if((state_val_48928 === 15))
{var inst_48923 = (state_48927[2]);var state_48927__$1 = state_48927;var statearr_48947_48971 = state_48927__$1;(statearr_48947_48971[2] = inst_48923);
(statearr_48947_48971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_48928 === 16))
{var inst_48920 = (state_48927[2]);var state_48927__$1 = (function (){var statearr_48948 = state_48927;(statearr_48948[13] = inst_48920);
return statearr_48948;
})();var statearr_48949_48972 = state_48927__$1;(statearr_48949_48972[2] = null);
(statearr_48949_48972[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_48953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48953[0] = state_machine__5548__auto__);
(statearr_48953[1] = 1);
return statearr_48953;
});
var state_machine__5548__auto____1 = (function (state_48927){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_48927);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e48954){if((e48954 instanceof Object))
{var ex__5551__auto__ = e48954;var statearr_48955_48973 = state_48927;(statearr_48955_48973[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e48954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__48974 = state_48927;
state_48927 = G__48974;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_48927){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_48927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_48956 = f__5563__auto__.call(null);(statearr_48956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___48957);
return statearr_48956;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49082 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49058){var state_val_49059 = (state_49058[1]);if((state_val_49059 === 1))
{var inst_49029 = cljs.core.vec.call(null,chs);var inst_49030 = inst_49029;var state_49058__$1 = (function (){var statearr_49060 = state_49058;(statearr_49060[7] = inst_49030);
return statearr_49060;
})();var statearr_49061_49083 = state_49058__$1;(statearr_49061_49083[2] = null);
(statearr_49061_49083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 2))
{var inst_49030 = (state_49058[7]);var inst_49032 = cljs.core.count.call(null,inst_49030);var inst_49033 = (inst_49032 > 0);var state_49058__$1 = state_49058;if(cljs.core.truth_(inst_49033))
{var statearr_49062_49084 = state_49058__$1;(statearr_49062_49084[1] = 4);
} else
{var statearr_49063_49085 = state_49058__$1;(statearr_49063_49085[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 3))
{var inst_49056 = (state_49058[2]);var state_49058__$1 = state_49058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49058__$1,inst_49056);
} else
{if((state_val_49059 === 4))
{var inst_49030 = (state_49058[7]);var state_49058__$1 = state_49058;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49058__$1,7,inst_49030);
} else
{if((state_val_49059 === 5))
{var inst_49052 = cljs.core.async.close_BANG_.call(null,out);var state_49058__$1 = state_49058;var statearr_49064_49086 = state_49058__$1;(statearr_49064_49086[2] = inst_49052);
(statearr_49064_49086[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 6))
{var inst_49054 = (state_49058[2]);var state_49058__$1 = state_49058;var statearr_49065_49087 = state_49058__$1;(statearr_49065_49087[2] = inst_49054);
(statearr_49065_49087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 7))
{var inst_49037 = (state_49058[8]);var inst_49038 = (state_49058[9]);var inst_49037__$1 = (state_49058[2]);var inst_49038__$1 = cljs.core.nth.call(null,inst_49037__$1,0,null);var inst_49039 = cljs.core.nth.call(null,inst_49037__$1,1,null);var inst_49040 = (inst_49038__$1 == null);var state_49058__$1 = (function (){var statearr_49066 = state_49058;(statearr_49066[8] = inst_49037__$1);
(statearr_49066[9] = inst_49038__$1);
(statearr_49066[10] = inst_49039);
return statearr_49066;
})();if(cljs.core.truth_(inst_49040))
{var statearr_49067_49088 = state_49058__$1;(statearr_49067_49088[1] = 8);
} else
{var statearr_49068_49089 = state_49058__$1;(statearr_49068_49089[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 8))
{var inst_49030 = (state_49058[7]);var inst_49037 = (state_49058[8]);var inst_49038 = (state_49058[9]);var inst_49039 = (state_49058[10]);var inst_49042 = (function (){var c = inst_49039;var v = inst_49038;var vec__49035 = inst_49037;var cs = inst_49030;return ((function (c,v,vec__49035,cs,inst_49030,inst_49037,inst_49038,inst_49039,state_val_49059){
return (function (p1__48975_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__48975_SHARP_);
});
;})(c,v,vec__49035,cs,inst_49030,inst_49037,inst_49038,inst_49039,state_val_49059))
})();var inst_49043 = cljs.core.filterv.call(null,inst_49042,inst_49030);var inst_49030__$1 = inst_49043;var state_49058__$1 = (function (){var statearr_49069 = state_49058;(statearr_49069[7] = inst_49030__$1);
return statearr_49069;
})();var statearr_49070_49090 = state_49058__$1;(statearr_49070_49090[2] = null);
(statearr_49070_49090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 9))
{var inst_49038 = (state_49058[9]);var state_49058__$1 = state_49058;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49058__$1,11,out,inst_49038);
} else
{if((state_val_49059 === 10))
{var inst_49050 = (state_49058[2]);var state_49058__$1 = state_49058;var statearr_49072_49091 = state_49058__$1;(statearr_49072_49091[2] = inst_49050);
(statearr_49072_49091[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49059 === 11))
{var inst_49030 = (state_49058[7]);var inst_49047 = (state_49058[2]);var tmp49071 = inst_49030;var inst_49030__$1 = tmp49071;var state_49058__$1 = (function (){var statearr_49073 = state_49058;(statearr_49073[7] = inst_49030__$1);
(statearr_49073[11] = inst_49047);
return statearr_49073;
})();var statearr_49074_49092 = state_49058__$1;(statearr_49074_49092[2] = null);
(statearr_49074_49092[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49078 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49078[0] = state_machine__5548__auto__);
(statearr_49078[1] = 1);
return statearr_49078;
});
var state_machine__5548__auto____1 = (function (state_49058){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49058);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49079){if((e49079 instanceof Object))
{var ex__5551__auto__ = e49079;var statearr_49080_49093 = state_49058;(statearr_49080_49093[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49094 = state_49058;
state_49058 = G__49094;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49058){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49081 = f__5563__auto__.call(null);(statearr_49081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49082);
return statearr_49081;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49164){var state_val_49165 = (state_49164[1]);if((state_val_49165 === 1))
{var inst_49141 = 0;var state_49164__$1 = (function (){var statearr_49166 = state_49164;(statearr_49166[7] = inst_49141);
return statearr_49166;
})();var statearr_49167_49188 = state_49164__$1;(statearr_49167_49188[2] = null);
(statearr_49167_49188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 2))
{var inst_49141 = (state_49164[7]);var inst_49143 = (inst_49141 < n);var state_49164__$1 = state_49164;if(cljs.core.truth_(inst_49143))
{var statearr_49168_49189 = state_49164__$1;(statearr_49168_49189[1] = 4);
} else
{var statearr_49169_49190 = state_49164__$1;(statearr_49169_49190[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 3))
{var inst_49161 = (state_49164[2]);var inst_49162 = cljs.core.async.close_BANG_.call(null,out);var state_49164__$1 = (function (){var statearr_49170 = state_49164;(statearr_49170[8] = inst_49161);
return statearr_49170;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49164__$1,inst_49162);
} else
{if((state_val_49165 === 4))
{var state_49164__$1 = state_49164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49164__$1,7,ch);
} else
{if((state_val_49165 === 5))
{var state_49164__$1 = state_49164;var statearr_49171_49191 = state_49164__$1;(statearr_49171_49191[2] = null);
(statearr_49171_49191[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 6))
{var inst_49159 = (state_49164[2]);var state_49164__$1 = state_49164;var statearr_49172_49192 = state_49164__$1;(statearr_49172_49192[2] = inst_49159);
(statearr_49172_49192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 7))
{var inst_49146 = (state_49164[9]);var inst_49146__$1 = (state_49164[2]);var inst_49147 = (inst_49146__$1 == null);var inst_49148 = cljs.core.not.call(null,inst_49147);var state_49164__$1 = (function (){var statearr_49173 = state_49164;(statearr_49173[9] = inst_49146__$1);
return statearr_49173;
})();if(inst_49148)
{var statearr_49174_49193 = state_49164__$1;(statearr_49174_49193[1] = 8);
} else
{var statearr_49175_49194 = state_49164__$1;(statearr_49175_49194[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 8))
{var inst_49146 = (state_49164[9]);var state_49164__$1 = state_49164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49164__$1,11,out,inst_49146);
} else
{if((state_val_49165 === 9))
{var state_49164__$1 = state_49164;var statearr_49176_49195 = state_49164__$1;(statearr_49176_49195[2] = null);
(statearr_49176_49195[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 10))
{var inst_49156 = (state_49164[2]);var state_49164__$1 = state_49164;var statearr_49177_49196 = state_49164__$1;(statearr_49177_49196[2] = inst_49156);
(statearr_49177_49196[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49165 === 11))
{var inst_49141 = (state_49164[7]);var inst_49151 = (state_49164[2]);var inst_49152 = (inst_49141 + 1);var inst_49141__$1 = inst_49152;var state_49164__$1 = (function (){var statearr_49178 = state_49164;(statearr_49178[10] = inst_49151);
(statearr_49178[7] = inst_49141__$1);
return statearr_49178;
})();var statearr_49179_49197 = state_49164__$1;(statearr_49179_49197[2] = null);
(statearr_49179_49197[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49183 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49183[0] = state_machine__5548__auto__);
(statearr_49183[1] = 1);
return statearr_49183;
});
var state_machine__5548__auto____1 = (function (state_49164){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49184){if((e49184 instanceof Object))
{var ex__5551__auto__ = e49184;var statearr_49185_49198 = state_49164;(statearr_49185_49198[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49199 = state_49164;
state_49164 = G__49199;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49164){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49186 = f__5563__auto__.call(null);(statearr_49186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49187);
return statearr_49186;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49271){var state_val_49272 = (state_49271[1]);if((state_val_49272 === 1))
{var inst_49248 = null;var state_49271__$1 = (function (){var statearr_49273 = state_49271;(statearr_49273[7] = inst_49248);
return statearr_49273;
})();var statearr_49274_49297 = state_49271__$1;(statearr_49274_49297[2] = null);
(statearr_49274_49297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 2))
{var state_49271__$1 = state_49271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49271__$1,4,ch);
} else
{if((state_val_49272 === 3))
{var inst_49268 = (state_49271[2]);var inst_49269 = cljs.core.async.close_BANG_.call(null,out);var state_49271__$1 = (function (){var statearr_49275 = state_49271;(statearr_49275[8] = inst_49268);
return statearr_49275;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49271__$1,inst_49269);
} else
{if((state_val_49272 === 4))
{var inst_49251 = (state_49271[9]);var inst_49251__$1 = (state_49271[2]);var inst_49252 = (inst_49251__$1 == null);var inst_49253 = cljs.core.not.call(null,inst_49252);var state_49271__$1 = (function (){var statearr_49276 = state_49271;(statearr_49276[9] = inst_49251__$1);
return statearr_49276;
})();if(inst_49253)
{var statearr_49277_49298 = state_49271__$1;(statearr_49277_49298[1] = 5);
} else
{var statearr_49278_49299 = state_49271__$1;(statearr_49278_49299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 5))
{var inst_49251 = (state_49271[9]);var inst_49248 = (state_49271[7]);var inst_49255 = cljs.core._EQ_.call(null,inst_49251,inst_49248);var state_49271__$1 = state_49271;if(inst_49255)
{var statearr_49279_49300 = state_49271__$1;(statearr_49279_49300[1] = 8);
} else
{var statearr_49280_49301 = state_49271__$1;(statearr_49280_49301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 6))
{var state_49271__$1 = state_49271;var statearr_49282_49302 = state_49271__$1;(statearr_49282_49302[2] = null);
(statearr_49282_49302[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 7))
{var inst_49266 = (state_49271[2]);var state_49271__$1 = state_49271;var statearr_49283_49303 = state_49271__$1;(statearr_49283_49303[2] = inst_49266);
(statearr_49283_49303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 8))
{var inst_49248 = (state_49271[7]);var tmp49281 = inst_49248;var inst_49248__$1 = tmp49281;var state_49271__$1 = (function (){var statearr_49284 = state_49271;(statearr_49284[7] = inst_49248__$1);
return statearr_49284;
})();var statearr_49285_49304 = state_49271__$1;(statearr_49285_49304[2] = null);
(statearr_49285_49304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 9))
{var inst_49251 = (state_49271[9]);var state_49271__$1 = state_49271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49271__$1,11,out,inst_49251);
} else
{if((state_val_49272 === 10))
{var inst_49263 = (state_49271[2]);var state_49271__$1 = state_49271;var statearr_49286_49305 = state_49271__$1;(statearr_49286_49305[2] = inst_49263);
(statearr_49286_49305[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49272 === 11))
{var inst_49251 = (state_49271[9]);var inst_49260 = (state_49271[2]);var inst_49248 = inst_49251;var state_49271__$1 = (function (){var statearr_49287 = state_49271;(statearr_49287[10] = inst_49260);
(statearr_49287[7] = inst_49248);
return statearr_49287;
})();var statearr_49288_49306 = state_49271__$1;(statearr_49288_49306[2] = null);
(statearr_49288_49306[1] = 2);
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
var state_machine__5548__auto____0 = (function (){var statearr_49292 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_49292[0] = state_machine__5548__auto__);
(statearr_49292[1] = 1);
return statearr_49292;
});
var state_machine__5548__auto____1 = (function (state_49271){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49293){if((e49293 instanceof Object))
{var ex__5551__auto__ = e49293;var statearr_49294_49307 = state_49271;(statearr_49294_49307[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49308 = state_49271;
state_49271 = G__49308;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49271){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49295 = f__5563__auto__.call(null);(statearr_49295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49296);
return statearr_49295;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49443 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49413){var state_val_49414 = (state_49413[1]);if((state_val_49414 === 1))
{var inst_49376 = (new Array(n));var inst_49377 = inst_49376;var inst_49378 = 0;var state_49413__$1 = (function (){var statearr_49415 = state_49413;(statearr_49415[7] = inst_49378);
(statearr_49415[8] = inst_49377);
return statearr_49415;
})();var statearr_49416_49444 = state_49413__$1;(statearr_49416_49444[2] = null);
(statearr_49416_49444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 2))
{var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49413__$1,4,ch);
} else
{if((state_val_49414 === 3))
{var inst_49411 = (state_49413[2]);var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49413__$1,inst_49411);
} else
{if((state_val_49414 === 4))
{var inst_49381 = (state_49413[9]);var inst_49381__$1 = (state_49413[2]);var inst_49382 = (inst_49381__$1 == null);var inst_49383 = cljs.core.not.call(null,inst_49382);var state_49413__$1 = (function (){var statearr_49417 = state_49413;(statearr_49417[9] = inst_49381__$1);
return statearr_49417;
})();if(inst_49383)
{var statearr_49418_49445 = state_49413__$1;(statearr_49418_49445[1] = 5);
} else
{var statearr_49419_49446 = state_49413__$1;(statearr_49419_49446[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 5))
{var inst_49378 = (state_49413[7]);var inst_49377 = (state_49413[8]);var inst_49386 = (state_49413[10]);var inst_49381 = (state_49413[9]);var inst_49385 = (inst_49377[inst_49378] = inst_49381);var inst_49386__$1 = (inst_49378 + 1);var inst_49387 = (inst_49386__$1 < n);var state_49413__$1 = (function (){var statearr_49420 = state_49413;(statearr_49420[10] = inst_49386__$1);
(statearr_49420[11] = inst_49385);
return statearr_49420;
})();if(cljs.core.truth_(inst_49387))
{var statearr_49421_49447 = state_49413__$1;(statearr_49421_49447[1] = 8);
} else
{var statearr_49422_49448 = state_49413__$1;(statearr_49422_49448[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 6))
{var inst_49378 = (state_49413[7]);var inst_49399 = (inst_49378 > 0);var state_49413__$1 = state_49413;if(cljs.core.truth_(inst_49399))
{var statearr_49424_49449 = state_49413__$1;(statearr_49424_49449[1] = 12);
} else
{var statearr_49425_49450 = state_49413__$1;(statearr_49425_49450[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 7))
{var inst_49409 = (state_49413[2]);var state_49413__$1 = state_49413;var statearr_49426_49451 = state_49413__$1;(statearr_49426_49451[2] = inst_49409);
(statearr_49426_49451[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 8))
{var inst_49377 = (state_49413[8]);var inst_49386 = (state_49413[10]);var tmp49423 = inst_49377;var inst_49377__$1 = tmp49423;var inst_49378 = inst_49386;var state_49413__$1 = (function (){var statearr_49427 = state_49413;(statearr_49427[7] = inst_49378);
(statearr_49427[8] = inst_49377__$1);
return statearr_49427;
})();var statearr_49428_49452 = state_49413__$1;(statearr_49428_49452[2] = null);
(statearr_49428_49452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 9))
{var inst_49377 = (state_49413[8]);var inst_49391 = cljs.core.vec.call(null,inst_49377);var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49413__$1,11,out,inst_49391);
} else
{if((state_val_49414 === 10))
{var inst_49397 = (state_49413[2]);var state_49413__$1 = state_49413;var statearr_49429_49453 = state_49413__$1;(statearr_49429_49453[2] = inst_49397);
(statearr_49429_49453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 11))
{var inst_49393 = (state_49413[2]);var inst_49394 = (new Array(n));var inst_49377 = inst_49394;var inst_49378 = 0;var state_49413__$1 = (function (){var statearr_49430 = state_49413;(statearr_49430[7] = inst_49378);
(statearr_49430[8] = inst_49377);
(statearr_49430[12] = inst_49393);
return statearr_49430;
})();var statearr_49431_49454 = state_49413__$1;(statearr_49431_49454[2] = null);
(statearr_49431_49454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 12))
{var inst_49377 = (state_49413[8]);var inst_49401 = cljs.core.vec.call(null,inst_49377);var state_49413__$1 = state_49413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49413__$1,15,out,inst_49401);
} else
{if((state_val_49414 === 13))
{var state_49413__$1 = state_49413;var statearr_49432_49455 = state_49413__$1;(statearr_49432_49455[2] = null);
(statearr_49432_49455[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 14))
{var inst_49406 = (state_49413[2]);var inst_49407 = cljs.core.async.close_BANG_.call(null,out);var state_49413__$1 = (function (){var statearr_49433 = state_49413;(statearr_49433[13] = inst_49406);
return statearr_49433;
})();var statearr_49434_49456 = state_49413__$1;(statearr_49434_49456[2] = inst_49407);
(statearr_49434_49456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49414 === 15))
{var inst_49403 = (state_49413[2]);var state_49413__$1 = state_49413;var statearr_49435_49457 = state_49413__$1;(statearr_49435_49457[2] = inst_49403);
(statearr_49435_49457[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49439[0] = state_machine__5548__auto__);
(statearr_49439[1] = 1);
return statearr_49439;
});
var state_machine__5548__auto____1 = (function (state_49413){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49440){if((e49440 instanceof Object))
{var ex__5551__auto__ = e49440;var statearr_49441_49458 = state_49413;(statearr_49441_49458[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49459 = state_49413;
state_49413 = G__49459;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49413){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49442 = f__5563__auto__.call(null);(statearr_49442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49443);
return statearr_49442;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___49602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_49572){var state_val_49573 = (state_49572[1]);if((state_val_49573 === 1))
{var inst_49531 = [];var inst_49532 = inst_49531;var inst_49533 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_49572__$1 = (function (){var statearr_49574 = state_49572;(statearr_49574[7] = inst_49532);
(statearr_49574[8] = inst_49533);
return statearr_49574;
})();var statearr_49575_49603 = state_49572__$1;(statearr_49575_49603[2] = null);
(statearr_49575_49603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 2))
{var state_49572__$1 = state_49572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49572__$1,4,ch);
} else
{if((state_val_49573 === 3))
{var inst_49570 = (state_49572[2]);var state_49572__$1 = state_49572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49572__$1,inst_49570);
} else
{if((state_val_49573 === 4))
{var inst_49536 = (state_49572[9]);var inst_49536__$1 = (state_49572[2]);var inst_49537 = (inst_49536__$1 == null);var inst_49538 = cljs.core.not.call(null,inst_49537);var state_49572__$1 = (function (){var statearr_49576 = state_49572;(statearr_49576[9] = inst_49536__$1);
return statearr_49576;
})();if(inst_49538)
{var statearr_49577_49604 = state_49572__$1;(statearr_49577_49604[1] = 5);
} else
{var statearr_49578_49605 = state_49572__$1;(statearr_49578_49605[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 5))
{var inst_49533 = (state_49572[8]);var inst_49536 = (state_49572[9]);var inst_49540 = (state_49572[10]);var inst_49540__$1 = f.call(null,inst_49536);var inst_49541 = cljs.core._EQ_.call(null,inst_49540__$1,inst_49533);var inst_49542 = cljs.core.keyword_identical_QMARK_.call(null,inst_49533,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_49543 = (inst_49541) || (inst_49542);var state_49572__$1 = (function (){var statearr_49579 = state_49572;(statearr_49579[10] = inst_49540__$1);
return statearr_49579;
})();if(cljs.core.truth_(inst_49543))
{var statearr_49580_49606 = state_49572__$1;(statearr_49580_49606[1] = 8);
} else
{var statearr_49581_49607 = state_49572__$1;(statearr_49581_49607[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 6))
{var inst_49532 = (state_49572[7]);var inst_49557 = inst_49532.length;var inst_49558 = (inst_49557 > 0);var state_49572__$1 = state_49572;if(cljs.core.truth_(inst_49558))
{var statearr_49583_49608 = state_49572__$1;(statearr_49583_49608[1] = 12);
} else
{var statearr_49584_49609 = state_49572__$1;(statearr_49584_49609[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 7))
{var inst_49568 = (state_49572[2]);var state_49572__$1 = state_49572;var statearr_49585_49610 = state_49572__$1;(statearr_49585_49610[2] = inst_49568);
(statearr_49585_49610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 8))
{var inst_49532 = (state_49572[7]);var inst_49536 = (state_49572[9]);var inst_49540 = (state_49572[10]);var inst_49545 = inst_49532.push(inst_49536);var tmp49582 = inst_49532;var inst_49532__$1 = tmp49582;var inst_49533 = inst_49540;var state_49572__$1 = (function (){var statearr_49586 = state_49572;(statearr_49586[7] = inst_49532__$1);
(statearr_49586[8] = inst_49533);
(statearr_49586[11] = inst_49545);
return statearr_49586;
})();var statearr_49587_49611 = state_49572__$1;(statearr_49587_49611[2] = null);
(statearr_49587_49611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 9))
{var inst_49532 = (state_49572[7]);var inst_49548 = cljs.core.vec.call(null,inst_49532);var state_49572__$1 = state_49572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49572__$1,11,out,inst_49548);
} else
{if((state_val_49573 === 10))
{var inst_49555 = (state_49572[2]);var state_49572__$1 = state_49572;var statearr_49588_49612 = state_49572__$1;(statearr_49588_49612[2] = inst_49555);
(statearr_49588_49612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 11))
{var inst_49536 = (state_49572[9]);var inst_49540 = (state_49572[10]);var inst_49550 = (state_49572[2]);var inst_49551 = [];var inst_49552 = inst_49551.push(inst_49536);var inst_49532 = inst_49551;var inst_49533 = inst_49540;var state_49572__$1 = (function (){var statearr_49589 = state_49572;(statearr_49589[7] = inst_49532);
(statearr_49589[8] = inst_49533);
(statearr_49589[12] = inst_49552);
(statearr_49589[13] = inst_49550);
return statearr_49589;
})();var statearr_49590_49613 = state_49572__$1;(statearr_49590_49613[2] = null);
(statearr_49590_49613[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 12))
{var inst_49532 = (state_49572[7]);var inst_49560 = cljs.core.vec.call(null,inst_49532);var state_49572__$1 = state_49572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49572__$1,15,out,inst_49560);
} else
{if((state_val_49573 === 13))
{var state_49572__$1 = state_49572;var statearr_49591_49614 = state_49572__$1;(statearr_49591_49614[2] = null);
(statearr_49591_49614[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 14))
{var inst_49565 = (state_49572[2]);var inst_49566 = cljs.core.async.close_BANG_.call(null,out);var state_49572__$1 = (function (){var statearr_49592 = state_49572;(statearr_49592[14] = inst_49565);
return statearr_49592;
})();var statearr_49593_49615 = state_49572__$1;(statearr_49593_49615[2] = inst_49566);
(statearr_49593_49615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_49573 === 15))
{var inst_49562 = (state_49572[2]);var state_49572__$1 = state_49572;var statearr_49594_49616 = state_49572__$1;(statearr_49594_49616[2] = inst_49562);
(statearr_49594_49616[1] = 14);
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
var state_machine__5548__auto____0 = (function (){var statearr_49598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49598[0] = state_machine__5548__auto__);
(statearr_49598[1] = 1);
return statearr_49598;
});
var state_machine__5548__auto____1 = (function (state_49572){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_49572);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e49599){if((e49599 instanceof Object))
{var ex__5551__auto__ = e49599;var statearr_49600_49617 = state_49572;(statearr_49600_49617[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e49599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__49618 = state_49572;
state_49572 = G__49618;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_49572){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_49572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_49601 = f__5563__auto__.call(null);(statearr_49601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___49602);
return statearr_49601;
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
