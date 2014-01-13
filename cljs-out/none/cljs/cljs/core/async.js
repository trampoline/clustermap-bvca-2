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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11916 = (function (f,fn_handler,meta11917){
this.f = f;
this.fn_handler = fn_handler;
this.meta11917 = meta11917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11916.cljs$lang$type = true;
cljs.core.async.t11916.cljs$lang$ctorStr = "cljs.core.async/t11916";
cljs.core.async.t11916.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11916");
});
cljs.core.async.t11916.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11918){var self__ = this;
var _11918__$1 = this;return self__.meta11917;
});
cljs.core.async.t11916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11918,meta11917__$1){var self__ = this;
var _11918__$1 = this;return (new cljs.core.async.t11916(self__.f,self__.fn_handler,meta11917__$1));
});
cljs.core.async.__GT_t11916 = (function __GT_t11916(f__$1,fn_handler__$1,meta11917){return (new cljs.core.async.t11916(f__$1,fn_handler__$1,meta11917));
});
}
return (new cljs.core.async.t11916(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11920 = buff;if(G__11920)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11920.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11920.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11920);
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
{var val_11921 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11921);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11921);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11922 = n;var x_11923 = 0;while(true){
if((x_11923 < n__4248__auto___11922))
{(a[x_11923] = 0);
{
var G__11924 = (x_11923 + 1);
x_11923 = G__11924;
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
var G__11925 = (i + 1);
i = G__11925;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11929 = (function (flag,alt_flag,meta11930){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11930 = meta11930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11929.cljs$lang$type = true;
cljs.core.async.t11929.cljs$lang$ctorStr = "cljs.core.async/t11929";
cljs.core.async.t11929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11929");
});
cljs.core.async.t11929.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11931){var self__ = this;
var _11931__$1 = this;return self__.meta11930;
});
cljs.core.async.t11929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11931,meta11930__$1){var self__ = this;
var _11931__$1 = this;return (new cljs.core.async.t11929(self__.flag,self__.alt_flag,meta11930__$1));
});
cljs.core.async.__GT_t11929 = (function __GT_t11929(flag__$1,alt_flag__$1,meta11930){return (new cljs.core.async.t11929(flag__$1,alt_flag__$1,meta11930));
});
}
return (new cljs.core.async.t11929(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11935 = (function (cb,flag,alt_handler,meta11936){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11936 = meta11936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11935.cljs$lang$type = true;
cljs.core.async.t11935.cljs$lang$ctorStr = "cljs.core.async/t11935";
cljs.core.async.t11935.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11935");
});
cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11937){var self__ = this;
var _11937__$1 = this;return self__.meta11936;
});
cljs.core.async.t11935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11937,meta11936__$1){var self__ = this;
var _11937__$1 = this;return (new cljs.core.async.t11935(self__.cb,self__.flag,self__.alt_handler,meta11936__$1));
});
cljs.core.async.__GT_t11935 = (function __GT_t11935(cb__$1,flag__$1,alt_handler__$1,meta11936){return (new cljs.core.async.t11935(cb__$1,flag__$1,alt_handler__$1,meta11936));
});
}
return (new cljs.core.async.t11935(cb,flag,alt_handler,null));
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
return (function (p1__11938_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11938_SHARP_,port], null));
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
var G__11939 = (i + 1);
i = G__11939;
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
var alts_BANG___delegate = function (ports,p__11940){var map__11942 = p__11940;var map__11942__$1 = ((cljs.core.seq_QMARK_.call(null,map__11942))?cljs.core.apply.call(null,cljs.core.hash_map,map__11942):map__11942);var opts = map__11942__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11940 = null;if (arguments.length > 1) {
  p__11940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11940);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11943){
var ports = cljs.core.first(arglist__11943);
var p__11940 = cljs.core.rest(arglist__11943);
return alts_BANG___delegate(ports,p__11940);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11951 = (function (ch,f,map_LT_,meta11952){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11952 = meta11952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11951.cljs$lang$type = true;
cljs.core.async.t11951.cljs$lang$ctorStr = "cljs.core.async/t11951";
cljs.core.async.t11951.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11951");
});
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11954 = (function (fn1,_,meta11952,ch,f,map_LT_,meta11955){
this.fn1 = fn1;
this._ = _;
this.meta11952 = meta11952;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11955 = meta11955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11954.cljs$lang$type = true;
cljs.core.async.t11954.cljs$lang$ctorStr = "cljs.core.async/t11954";
cljs.core.async.t11954.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11954");
});
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11944_SHARP_){return f1.call(null,(((p1__11944_SHARP_ == null))?null:self__.f.call(null,p1__11944_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11956){var self__ = this;
var _11956__$1 = this;return self__.meta11955;
});
cljs.core.async.t11954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11956,meta11955__$1){var self__ = this;
var _11956__$1 = this;return (new cljs.core.async.t11954(self__.fn1,self__._,self__.meta11952,self__.ch,self__.f,self__.map_LT_,meta11955__$1));
});
cljs.core.async.__GT_t11954 = (function __GT_t11954(fn1__$1,___$2,meta11952__$1,ch__$2,f__$2,map_LT___$2,meta11955){return (new cljs.core.async.t11954(fn1__$1,___$2,meta11952__$1,ch__$2,f__$2,map_LT___$2,meta11955));
});
}
return (new cljs.core.async.t11954(fn1,___$1,self__.meta11952,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11953){var self__ = this;
var _11953__$1 = this;return self__.meta11952;
});
cljs.core.async.t11951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11953,meta11952__$1){var self__ = this;
var _11953__$1 = this;return (new cljs.core.async.t11951(self__.ch,self__.f,self__.map_LT_,meta11952__$1));
});
cljs.core.async.__GT_t11951 = (function __GT_t11951(ch__$1,f__$1,map_LT___$1,meta11952){return (new cljs.core.async.t11951(ch__$1,f__$1,map_LT___$1,meta11952));
});
}
return (new cljs.core.async.t11951(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11960 = (function (ch,f,map_GT_,meta11961){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11961 = meta11961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11960.cljs$lang$type = true;
cljs.core.async.t11960.cljs$lang$ctorStr = "cljs.core.async/t11960";
cljs.core.async.t11960.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11960");
});
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11962){var self__ = this;
var _11962__$1 = this;return self__.meta11961;
});
cljs.core.async.t11960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11962,meta11961__$1){var self__ = this;
var _11962__$1 = this;return (new cljs.core.async.t11960(self__.ch,self__.f,self__.map_GT_,meta11961__$1));
});
cljs.core.async.__GT_t11960 = (function __GT_t11960(ch__$1,f__$1,map_GT___$1,meta11961){return (new cljs.core.async.t11960(ch__$1,f__$1,map_GT___$1,meta11961));
});
}
return (new cljs.core.async.t11960(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11966 = (function (ch,p,filter_GT_,meta11967){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11967 = meta11967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11966.cljs$lang$type = true;
cljs.core.async.t11966.cljs$lang$ctorStr = "cljs.core.async/t11966";
cljs.core.async.t11966.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11966");
});
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11968){var self__ = this;
var _11968__$1 = this;return self__.meta11967;
});
cljs.core.async.t11966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11968,meta11967__$1){var self__ = this;
var _11968__$1 = this;return (new cljs.core.async.t11966(self__.ch,self__.p,self__.filter_GT_,meta11967__$1));
});
cljs.core.async.__GT_t11966 = (function __GT_t11966(ch__$1,p__$1,filter_GT___$1,meta11967){return (new cljs.core.async.t11966(ch__$1,p__$1,filter_GT___$1,meta11967));
});
}
return (new cljs.core.async.t11966(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12030){var state_val_12031 = (state_12030[1]);if((state_val_12031 === 1))
{var state_12030__$1 = state_12030;var statearr_12032_12052 = state_12030__$1;(statearr_12032_12052[2] = null);
(statearr_12032_12052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 2))
{var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12030__$1,4,ch);
} else
{if((state_val_12031 === 3))
{var inst_12028 = (state_12030[2]);var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12030__$1,inst_12028);
} else
{if((state_val_12031 === 4))
{var inst_12012 = (state_12030[7]);var inst_12012__$1 = (state_12030[2]);var inst_12013 = (inst_12012__$1 == null);var state_12030__$1 = (function (){var statearr_12033 = state_12030;(statearr_12033[7] = inst_12012__$1);
return statearr_12033;
})();if(cljs.core.truth_(inst_12013))
{var statearr_12034_12053 = state_12030__$1;(statearr_12034_12053[1] = 5);
} else
{var statearr_12035_12054 = state_12030__$1;(statearr_12035_12054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 5))
{var inst_12015 = cljs.core.async.close_BANG_.call(null,out);var state_12030__$1 = state_12030;var statearr_12036_12055 = state_12030__$1;(statearr_12036_12055[2] = inst_12015);
(statearr_12036_12055[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 6))
{var inst_12012 = (state_12030[7]);var inst_12017 = p.call(null,inst_12012);var state_12030__$1 = state_12030;if(cljs.core.truth_(inst_12017))
{var statearr_12037_12056 = state_12030__$1;(statearr_12037_12056[1] = 8);
} else
{var statearr_12038_12057 = state_12030__$1;(statearr_12038_12057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 7))
{var inst_12026 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12039_12058 = state_12030__$1;(statearr_12039_12058[2] = inst_12026);
(statearr_12039_12058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 8))
{var inst_12012 = (state_12030[7]);var state_12030__$1 = state_12030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12030__$1,11,out,inst_12012);
} else
{if((state_val_12031 === 9))
{var state_12030__$1 = state_12030;var statearr_12040_12059 = state_12030__$1;(statearr_12040_12059[2] = null);
(statearr_12040_12059[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 10))
{var inst_12023 = (state_12030[2]);var state_12030__$1 = (function (){var statearr_12041 = state_12030;(statearr_12041[8] = inst_12023);
return statearr_12041;
})();var statearr_12042_12060 = state_12030__$1;(statearr_12042_12060[2] = null);
(statearr_12042_12060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12031 === 11))
{var inst_12020 = (state_12030[2]);var state_12030__$1 = state_12030;var statearr_12043_12061 = state_12030__$1;(statearr_12043_12061[2] = inst_12020);
(statearr_12043_12061[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12047 = [null,null,null,null,null,null,null,null,null];(statearr_12047[0] = state_machine__5507__auto__);
(statearr_12047[1] = 1);
return statearr_12047;
});
var state_machine__5507__auto____1 = (function (state_12030){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12048){if((e12048 instanceof Object))
{var ex__5510__auto__ = e12048;var statearr_12049_12062 = state_12030;(statearr_12049_12062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12063 = state_12030;
state_12030 = G__12063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12030){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12050 = f__5522__auto__.call(null);(statearr_12050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12051);
return statearr_12050;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12215){var state_val_12216 = (state_12215[1]);if((state_val_12216 === 1))
{var state_12215__$1 = state_12215;var statearr_12217_12254 = state_12215__$1;(statearr_12217_12254[2] = null);
(statearr_12217_12254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 2))
{var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12215__$1,4,in$);
} else
{if((state_val_12216 === 3))
{var inst_12213 = (state_12215[2]);var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12215__$1,inst_12213);
} else
{if((state_val_12216 === 4))
{var inst_12161 = (state_12215[7]);var inst_12161__$1 = (state_12215[2]);var inst_12162 = (inst_12161__$1 == null);var state_12215__$1 = (function (){var statearr_12218 = state_12215;(statearr_12218[7] = inst_12161__$1);
return statearr_12218;
})();if(cljs.core.truth_(inst_12162))
{var statearr_12219_12255 = state_12215__$1;(statearr_12219_12255[1] = 5);
} else
{var statearr_12220_12256 = state_12215__$1;(statearr_12220_12256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 5))
{var inst_12164 = cljs.core.async.close_BANG_.call(null,out);var state_12215__$1 = state_12215;var statearr_12221_12257 = state_12215__$1;(statearr_12221_12257[2] = inst_12164);
(statearr_12221_12257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 6))
{var inst_12161 = (state_12215[7]);var inst_12166 = f.call(null,inst_12161);var inst_12171 = cljs.core.seq.call(null,inst_12166);var inst_12172 = inst_12171;var inst_12173 = null;var inst_12174 = 0;var inst_12175 = 0;var state_12215__$1 = (function (){var statearr_12222 = state_12215;(statearr_12222[8] = inst_12174);
(statearr_12222[9] = inst_12175);
(statearr_12222[10] = inst_12173);
(statearr_12222[11] = inst_12172);
return statearr_12222;
})();var statearr_12223_12258 = state_12215__$1;(statearr_12223_12258[2] = null);
(statearr_12223_12258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 7))
{var inst_12211 = (state_12215[2]);var state_12215__$1 = state_12215;var statearr_12224_12259 = state_12215__$1;(statearr_12224_12259[2] = inst_12211);
(statearr_12224_12259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 8))
{var inst_12174 = (state_12215[8]);var inst_12175 = (state_12215[9]);var inst_12177 = (inst_12175 < inst_12174);var inst_12178 = inst_12177;var state_12215__$1 = state_12215;if(cljs.core.truth_(inst_12178))
{var statearr_12225_12260 = state_12215__$1;(statearr_12225_12260[1] = 10);
} else
{var statearr_12226_12261 = state_12215__$1;(statearr_12226_12261[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 9))
{var inst_12208 = (state_12215[2]);var state_12215__$1 = (function (){var statearr_12227 = state_12215;(statearr_12227[12] = inst_12208);
return statearr_12227;
})();var statearr_12228_12262 = state_12215__$1;(statearr_12228_12262[2] = null);
(statearr_12228_12262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 10))
{var inst_12175 = (state_12215[9]);var inst_12173 = (state_12215[10]);var inst_12180 = cljs.core._nth.call(null,inst_12173,inst_12175);var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12215__$1,13,out,inst_12180);
} else
{if((state_val_12216 === 11))
{var inst_12186 = (state_12215[13]);var inst_12172 = (state_12215[11]);var inst_12186__$1 = cljs.core.seq.call(null,inst_12172);var state_12215__$1 = (function (){var statearr_12232 = state_12215;(statearr_12232[13] = inst_12186__$1);
return statearr_12232;
})();if(inst_12186__$1)
{var statearr_12233_12263 = state_12215__$1;(statearr_12233_12263[1] = 14);
} else
{var statearr_12234_12264 = state_12215__$1;(statearr_12234_12264[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 12))
{var inst_12206 = (state_12215[2]);var state_12215__$1 = state_12215;var statearr_12235_12265 = state_12215__$1;(statearr_12235_12265[2] = inst_12206);
(statearr_12235_12265[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 13))
{var inst_12174 = (state_12215[8]);var inst_12175 = (state_12215[9]);var inst_12173 = (state_12215[10]);var inst_12172 = (state_12215[11]);var inst_12182 = (state_12215[2]);var inst_12183 = (inst_12175 + 1);var tmp12229 = inst_12174;var tmp12230 = inst_12173;var tmp12231 = inst_12172;var inst_12172__$1 = tmp12231;var inst_12173__$1 = tmp12230;var inst_12174__$1 = tmp12229;var inst_12175__$1 = inst_12183;var state_12215__$1 = (function (){var statearr_12236 = state_12215;(statearr_12236[14] = inst_12182);
(statearr_12236[8] = inst_12174__$1);
(statearr_12236[9] = inst_12175__$1);
(statearr_12236[10] = inst_12173__$1);
(statearr_12236[11] = inst_12172__$1);
return statearr_12236;
})();var statearr_12237_12266 = state_12215__$1;(statearr_12237_12266[2] = null);
(statearr_12237_12266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 14))
{var inst_12186 = (state_12215[13]);var inst_12188 = cljs.core.chunked_seq_QMARK_.call(null,inst_12186);var state_12215__$1 = state_12215;if(inst_12188)
{var statearr_12238_12267 = state_12215__$1;(statearr_12238_12267[1] = 17);
} else
{var statearr_12239_12268 = state_12215__$1;(statearr_12239_12268[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 15))
{var state_12215__$1 = state_12215;var statearr_12240_12269 = state_12215__$1;(statearr_12240_12269[2] = null);
(statearr_12240_12269[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 16))
{var inst_12204 = (state_12215[2]);var state_12215__$1 = state_12215;var statearr_12241_12270 = state_12215__$1;(statearr_12241_12270[2] = inst_12204);
(statearr_12241_12270[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 17))
{var inst_12186 = (state_12215[13]);var inst_12190 = cljs.core.chunk_first.call(null,inst_12186);var inst_12191 = cljs.core.chunk_rest.call(null,inst_12186);var inst_12192 = cljs.core.count.call(null,inst_12190);var inst_12172 = inst_12191;var inst_12173 = inst_12190;var inst_12174 = inst_12192;var inst_12175 = 0;var state_12215__$1 = (function (){var statearr_12242 = state_12215;(statearr_12242[8] = inst_12174);
(statearr_12242[9] = inst_12175);
(statearr_12242[10] = inst_12173);
(statearr_12242[11] = inst_12172);
return statearr_12242;
})();var statearr_12243_12271 = state_12215__$1;(statearr_12243_12271[2] = null);
(statearr_12243_12271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 18))
{var inst_12186 = (state_12215[13]);var inst_12195 = cljs.core.first.call(null,inst_12186);var state_12215__$1 = state_12215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12215__$1,20,out,inst_12195);
} else
{if((state_val_12216 === 19))
{var inst_12201 = (state_12215[2]);var state_12215__$1 = state_12215;var statearr_12244_12272 = state_12215__$1;(statearr_12244_12272[2] = inst_12201);
(statearr_12244_12272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12216 === 20))
{var inst_12186 = (state_12215[13]);var inst_12197 = (state_12215[2]);var inst_12198 = cljs.core.next.call(null,inst_12186);var inst_12172 = inst_12198;var inst_12173 = null;var inst_12174 = 0;var inst_12175 = 0;var state_12215__$1 = (function (){var statearr_12245 = state_12215;(statearr_12245[15] = inst_12197);
(statearr_12245[8] = inst_12174);
(statearr_12245[9] = inst_12175);
(statearr_12245[10] = inst_12173);
(statearr_12245[11] = inst_12172);
return statearr_12245;
})();var statearr_12246_12273 = state_12215__$1;(statearr_12246_12273[2] = null);
(statearr_12246_12273[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12250[0] = state_machine__5507__auto__);
(statearr_12250[1] = 1);
return statearr_12250;
});
var state_machine__5507__auto____1 = (function (state_12215){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12215);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12251){if((e12251 instanceof Object))
{var ex__5510__auto__ = e12251;var statearr_12252_12274 = state_12215;(statearr_12252_12274[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12275 = state_12215;
state_12215 = G__12275;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12215){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12253 = f__5522__auto__.call(null);(statearr_12253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12253;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12335){var state_val_12336 = (state_12335[1]);if((state_val_12336 === 1))
{var state_12335__$1 = state_12335;var statearr_12337_12357 = state_12335__$1;(statearr_12337_12357[2] = null);
(statearr_12337_12357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 2))
{var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12335__$1,4,from);
} else
{if((state_val_12336 === 3))
{var inst_12333 = (state_12335[2]);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12335__$1,inst_12333);
} else
{if((state_val_12336 === 4))
{var inst_12318 = (state_12335[7]);var inst_12318__$1 = (state_12335[2]);var inst_12319 = (inst_12318__$1 == null);var state_12335__$1 = (function (){var statearr_12338 = state_12335;(statearr_12338[7] = inst_12318__$1);
return statearr_12338;
})();if(cljs.core.truth_(inst_12319))
{var statearr_12339_12358 = state_12335__$1;(statearr_12339_12358[1] = 5);
} else
{var statearr_12340_12359 = state_12335__$1;(statearr_12340_12359[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 5))
{var state_12335__$1 = state_12335;if(cljs.core.truth_(close_QMARK_))
{var statearr_12341_12360 = state_12335__$1;(statearr_12341_12360[1] = 8);
} else
{var statearr_12342_12361 = state_12335__$1;(statearr_12342_12361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 6))
{var inst_12318 = (state_12335[7]);var state_12335__$1 = state_12335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12335__$1,11,to,inst_12318);
} else
{if((state_val_12336 === 7))
{var inst_12331 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12343_12362 = state_12335__$1;(statearr_12343_12362[2] = inst_12331);
(statearr_12343_12362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 8))
{var inst_12322 = cljs.core.async.close_BANG_.call(null,to);var state_12335__$1 = state_12335;var statearr_12344_12363 = state_12335__$1;(statearr_12344_12363[2] = inst_12322);
(statearr_12344_12363[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 9))
{var state_12335__$1 = state_12335;var statearr_12345_12364 = state_12335__$1;(statearr_12345_12364[2] = null);
(statearr_12345_12364[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 10))
{var inst_12325 = (state_12335[2]);var state_12335__$1 = state_12335;var statearr_12346_12365 = state_12335__$1;(statearr_12346_12365[2] = inst_12325);
(statearr_12346_12365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12336 === 11))
{var inst_12328 = (state_12335[2]);var state_12335__$1 = (function (){var statearr_12347 = state_12335;(statearr_12347[8] = inst_12328);
return statearr_12347;
})();var statearr_12348_12366 = state_12335__$1;(statearr_12348_12366[2] = null);
(statearr_12348_12366[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12352 = [null,null,null,null,null,null,null,null,null];(statearr_12352[0] = state_machine__5507__auto__);
(statearr_12352[1] = 1);
return statearr_12352;
});
var state_machine__5507__auto____1 = (function (state_12335){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12353){if((e12353 instanceof Object))
{var ex__5510__auto__ = e12353;var statearr_12354_12367 = state_12335;(statearr_12354_12367[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12368 = state_12335;
state_12335 = G__12368;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12335){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12355 = f__5522__auto__.call(null);(statearr_12355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12356);
return statearr_12355;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12433){var state_val_12434 = (state_12433[1]);if((state_val_12434 === 1))
{var state_12433__$1 = state_12433;var statearr_12435_12456 = state_12433__$1;(statearr_12435_12456[2] = null);
(statearr_12435_12456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 2))
{var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12433__$1,4,ch);
} else
{if((state_val_12434 === 3))
{var inst_12431 = (state_12433[2]);var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12433__$1,inst_12431);
} else
{if((state_val_12434 === 4))
{var inst_12414 = (state_12433[7]);var inst_12414__$1 = (state_12433[2]);var inst_12415 = (inst_12414__$1 == null);var state_12433__$1 = (function (){var statearr_12436 = state_12433;(statearr_12436[7] = inst_12414__$1);
return statearr_12436;
})();if(cljs.core.truth_(inst_12415))
{var statearr_12437_12457 = state_12433__$1;(statearr_12437_12457[1] = 5);
} else
{var statearr_12438_12458 = state_12433__$1;(statearr_12438_12458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 5))
{var inst_12417 = cljs.core.async.close_BANG_.call(null,tc);var inst_12418 = cljs.core.async.close_BANG_.call(null,fc);var state_12433__$1 = (function (){var statearr_12439 = state_12433;(statearr_12439[8] = inst_12417);
return statearr_12439;
})();var statearr_12440_12459 = state_12433__$1;(statearr_12440_12459[2] = inst_12418);
(statearr_12440_12459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 6))
{var inst_12414 = (state_12433[7]);var inst_12420 = p.call(null,inst_12414);var state_12433__$1 = state_12433;if(cljs.core.truth_(inst_12420))
{var statearr_12441_12460 = state_12433__$1;(statearr_12441_12460[1] = 9);
} else
{var statearr_12442_12461 = state_12433__$1;(statearr_12442_12461[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 7))
{var inst_12429 = (state_12433[2]);var state_12433__$1 = state_12433;var statearr_12443_12462 = state_12433__$1;(statearr_12443_12462[2] = inst_12429);
(statearr_12443_12462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 8))
{var inst_12426 = (state_12433[2]);var state_12433__$1 = (function (){var statearr_12444 = state_12433;(statearr_12444[9] = inst_12426);
return statearr_12444;
})();var statearr_12445_12463 = state_12433__$1;(statearr_12445_12463[2] = null);
(statearr_12445_12463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 9))
{var state_12433__$1 = state_12433;var statearr_12446_12464 = state_12433__$1;(statearr_12446_12464[2] = tc);
(statearr_12446_12464[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 10))
{var state_12433__$1 = state_12433;var statearr_12447_12465 = state_12433__$1;(statearr_12447_12465[2] = fc);
(statearr_12447_12465[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12434 === 11))
{var inst_12414 = (state_12433[7]);var inst_12424 = (state_12433[2]);var state_12433__$1 = state_12433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12433__$1,8,inst_12424,inst_12414);
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
var state_machine__5507__auto____0 = (function (){var statearr_12451 = [null,null,null,null,null,null,null,null,null,null];(statearr_12451[0] = state_machine__5507__auto__);
(statearr_12451[1] = 1);
return statearr_12451;
});
var state_machine__5507__auto____1 = (function (state_12433){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object))
{var ex__5510__auto__ = e12452;var statearr_12453_12466 = state_12433;(statearr_12453_12466[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12467 = state_12433;
state_12433 = G__12467;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12433){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12454 = f__5522__auto__.call(null);(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12455);
return statearr_12454;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12514){var state_val_12515 = (state_12514[1]);if((state_val_12515 === 7))
{var inst_12510 = (state_12514[2]);var state_12514__$1 = state_12514;var statearr_12516_12532 = state_12514__$1;(statearr_12516_12532[2] = inst_12510);
(statearr_12516_12532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12515 === 6))
{var inst_12503 = (state_12514[7]);var inst_12500 = (state_12514[8]);var inst_12507 = f.call(null,inst_12500,inst_12503);var inst_12500__$1 = inst_12507;var state_12514__$1 = (function (){var statearr_12517 = state_12514;(statearr_12517[8] = inst_12500__$1);
return statearr_12517;
})();var statearr_12518_12533 = state_12514__$1;(statearr_12518_12533[2] = null);
(statearr_12518_12533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12515 === 5))
{var inst_12500 = (state_12514[8]);var state_12514__$1 = state_12514;var statearr_12519_12534 = state_12514__$1;(statearr_12519_12534[2] = inst_12500);
(statearr_12519_12534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12515 === 4))
{var inst_12503 = (state_12514[7]);var inst_12503__$1 = (state_12514[2]);var inst_12504 = (inst_12503__$1 == null);var state_12514__$1 = (function (){var statearr_12520 = state_12514;(statearr_12520[7] = inst_12503__$1);
return statearr_12520;
})();if(cljs.core.truth_(inst_12504))
{var statearr_12521_12535 = state_12514__$1;(statearr_12521_12535[1] = 5);
} else
{var statearr_12522_12536 = state_12514__$1;(statearr_12522_12536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12515 === 3))
{var inst_12512 = (state_12514[2]);var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12514__$1,inst_12512);
} else
{if((state_val_12515 === 2))
{var state_12514__$1 = state_12514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12514__$1,4,ch);
} else
{if((state_val_12515 === 1))
{var inst_12500 = init;var state_12514__$1 = (function (){var statearr_12523 = state_12514;(statearr_12523[8] = inst_12500);
return statearr_12523;
})();var statearr_12524_12537 = state_12514__$1;(statearr_12524_12537[2] = null);
(statearr_12524_12537[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12528 = [null,null,null,null,null,null,null,null,null];(statearr_12528[0] = state_machine__5507__auto__);
(statearr_12528[1] = 1);
return statearr_12528;
});
var state_machine__5507__auto____1 = (function (state_12514){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12529){if((e12529 instanceof Object))
{var ex__5510__auto__ = e12529;var statearr_12530_12538 = state_12514;(statearr_12530_12538[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12539 = state_12514;
state_12514 = G__12539;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12514){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12531 = f__5522__auto__.call(null);(statearr_12531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12531;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12601){var state_val_12602 = (state_12601[1]);if((state_val_12602 === 1))
{var inst_12581 = cljs.core.seq.call(null,coll);var inst_12582 = inst_12581;var state_12601__$1 = (function (){var statearr_12603 = state_12601;(statearr_12603[7] = inst_12582);
return statearr_12603;
})();var statearr_12604_12622 = state_12601__$1;(statearr_12604_12622[2] = null);
(statearr_12604_12622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 2))
{var inst_12582 = (state_12601[7]);var state_12601__$1 = state_12601;if(cljs.core.truth_(inst_12582))
{var statearr_12605_12623 = state_12601__$1;(statearr_12605_12623[1] = 4);
} else
{var statearr_12606_12624 = state_12601__$1;(statearr_12606_12624[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 3))
{var inst_12599 = (state_12601[2]);var state_12601__$1 = state_12601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12601__$1,inst_12599);
} else
{if((state_val_12602 === 4))
{var inst_12582 = (state_12601[7]);var inst_12585 = cljs.core.first.call(null,inst_12582);var state_12601__$1 = state_12601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12601__$1,7,ch,inst_12585);
} else
{if((state_val_12602 === 5))
{var state_12601__$1 = state_12601;if(cljs.core.truth_(close_QMARK_))
{var statearr_12607_12625 = state_12601__$1;(statearr_12607_12625[1] = 8);
} else
{var statearr_12608_12626 = state_12601__$1;(statearr_12608_12626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 6))
{var inst_12597 = (state_12601[2]);var state_12601__$1 = state_12601;var statearr_12609_12627 = state_12601__$1;(statearr_12609_12627[2] = inst_12597);
(statearr_12609_12627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 7))
{var inst_12582 = (state_12601[7]);var inst_12587 = (state_12601[2]);var inst_12588 = cljs.core.next.call(null,inst_12582);var inst_12582__$1 = inst_12588;var state_12601__$1 = (function (){var statearr_12610 = state_12601;(statearr_12610[7] = inst_12582__$1);
(statearr_12610[8] = inst_12587);
return statearr_12610;
})();var statearr_12611_12628 = state_12601__$1;(statearr_12611_12628[2] = null);
(statearr_12611_12628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 8))
{var inst_12592 = cljs.core.async.close_BANG_.call(null,ch);var state_12601__$1 = state_12601;var statearr_12612_12629 = state_12601__$1;(statearr_12612_12629[2] = inst_12592);
(statearr_12612_12629[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 9))
{var state_12601__$1 = state_12601;var statearr_12613_12630 = state_12601__$1;(statearr_12613_12630[2] = null);
(statearr_12613_12630[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12602 === 10))
{var inst_12595 = (state_12601[2]);var state_12601__$1 = state_12601;var statearr_12614_12631 = state_12601__$1;(statearr_12614_12631[2] = inst_12595);
(statearr_12614_12631[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12618 = [null,null,null,null,null,null,null,null,null];(statearr_12618[0] = state_machine__5507__auto__);
(statearr_12618[1] = 1);
return statearr_12618;
});
var state_machine__5507__auto____1 = (function (state_12601){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12619){if((e12619 instanceof Object))
{var ex__5510__auto__ = e12619;var statearr_12620_12632 = state_12601;(statearr_12620_12632[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12633 = state_12601;
state_12601 = G__12633;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12601){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12621 = f__5522__auto__.call(null);(statearr_12621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12621;
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
cljs.core.async.Mux = (function (){var obj12635 = {};return obj12635;
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
cljs.core.async.Mult = (function (){var obj12637 = {};return obj12637;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12861 = (function (cs,ch,mult,meta12862){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12862 = meta12862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12861.cljs$lang$type = true;
cljs.core.async.t12861.cljs$lang$ctorStr = "cljs.core.async/t12861";
cljs.core.async.t12861.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12861");
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12861.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12863){var self__ = this;
var _12863__$1 = this;return self__.meta12862;
});})(cs))
;
cljs.core.async.t12861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12863,meta12862__$1){var self__ = this;
var _12863__$1 = this;return (new cljs.core.async.t12861(self__.cs,self__.ch,self__.mult,meta12862__$1));
});})(cs))
;
cljs.core.async.__GT_t12861 = ((function (cs){
return (function __GT_t12861(cs__$1,ch__$1,mult__$1,meta12862){return (new cljs.core.async.t12861(cs__$1,ch__$1,mult__$1,meta12862));
});})(cs))
;
}
return (new cljs.core.async.t12861(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12998){var state_val_12999 = (state_12998[1]);if((state_val_12999 === 32))
{var inst_12942 = (state_12998[7]);var inst_12866 = (state_12998[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12998,31,Object,null,30);var inst_12949 = cljs.core.async.put_BANG_.call(null,inst_12942,inst_12866,done);var state_12998__$1 = state_12998;var statearr_13000_13085 = state_12998__$1;(statearr_13000_13085[2] = inst_12949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 1))
{var state_12998__$1 = state_12998;var statearr_13001_13086 = state_12998__$1;(statearr_13001_13086[2] = null);
(statearr_13001_13086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 33))
{var inst_12955 = (state_12998[9]);var inst_12957 = cljs.core.chunked_seq_QMARK_.call(null,inst_12955);var state_12998__$1 = state_12998;if(inst_12957)
{var statearr_13002_13087 = state_12998__$1;(statearr_13002_13087[1] = 36);
} else
{var statearr_13003_13088 = state_12998__$1;(statearr_13003_13088[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 2))
{var state_12998__$1 = state_12998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12998__$1,4,ch);
} else
{if((state_val_12999 === 34))
{var state_12998__$1 = state_12998;var statearr_13004_13089 = state_12998__$1;(statearr_13004_13089[2] = null);
(statearr_13004_13089[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 3))
{var inst_12996 = (state_12998[2]);var state_12998__$1 = state_12998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12998__$1,inst_12996);
} else
{if((state_val_12999 === 35))
{var inst_12980 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13005_13090 = state_12998__$1;(statearr_13005_13090[2] = inst_12980);
(statearr_13005_13090[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 4))
{var inst_12866 = (state_12998[8]);var inst_12866__$1 = (state_12998[2]);var inst_12867 = (inst_12866__$1 == null);var state_12998__$1 = (function (){var statearr_13006 = state_12998;(statearr_13006[8] = inst_12866__$1);
return statearr_13006;
})();if(cljs.core.truth_(inst_12867))
{var statearr_13007_13091 = state_12998__$1;(statearr_13007_13091[1] = 5);
} else
{var statearr_13008_13092 = state_12998__$1;(statearr_13008_13092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 36))
{var inst_12955 = (state_12998[9]);var inst_12959 = cljs.core.chunk_first.call(null,inst_12955);var inst_12960 = cljs.core.chunk_rest.call(null,inst_12955);var inst_12961 = cljs.core.count.call(null,inst_12959);var inst_12934 = inst_12960;var inst_12935 = inst_12959;var inst_12936 = inst_12961;var inst_12937 = 0;var state_12998__$1 = (function (){var statearr_13009 = state_12998;(statearr_13009[10] = inst_12935);
(statearr_13009[11] = inst_12934);
(statearr_13009[12] = inst_12937);
(statearr_13009[13] = inst_12936);
return statearr_13009;
})();var statearr_13010_13093 = state_12998__$1;(statearr_13010_13093[2] = null);
(statearr_13010_13093[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 5))
{var inst_12873 = cljs.core.deref.call(null,cs);var inst_12874 = cljs.core.seq.call(null,inst_12873);var inst_12875 = inst_12874;var inst_12876 = null;var inst_12877 = 0;var inst_12878 = 0;var state_12998__$1 = (function (){var statearr_13011 = state_12998;(statearr_13011[14] = inst_12875);
(statearr_13011[15] = inst_12876);
(statearr_13011[16] = inst_12877);
(statearr_13011[17] = inst_12878);
return statearr_13011;
})();var statearr_13012_13094 = state_12998__$1;(statearr_13012_13094[2] = null);
(statearr_13012_13094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 37))
{var inst_12955 = (state_12998[9]);var inst_12964 = cljs.core.first.call(null,inst_12955);var state_12998__$1 = (function (){var statearr_13013 = state_12998;(statearr_13013[18] = inst_12964);
return statearr_13013;
})();var statearr_13014_13095 = state_12998__$1;(statearr_13014_13095[2] = null);
(statearr_13014_13095[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 6))
{var inst_12926 = (state_12998[19]);var inst_12925 = cljs.core.deref.call(null,cs);var inst_12926__$1 = cljs.core.keys.call(null,inst_12925);var inst_12927 = cljs.core.count.call(null,inst_12926__$1);var inst_12928 = cljs.core.reset_BANG_.call(null,dctr,inst_12927);var inst_12933 = cljs.core.seq.call(null,inst_12926__$1);var inst_12934 = inst_12933;var inst_12935 = null;var inst_12936 = 0;var inst_12937 = 0;var state_12998__$1 = (function (){var statearr_13015 = state_12998;(statearr_13015[19] = inst_12926__$1);
(statearr_13015[20] = inst_12928);
(statearr_13015[10] = inst_12935);
(statearr_13015[11] = inst_12934);
(statearr_13015[12] = inst_12937);
(statearr_13015[13] = inst_12936);
return statearr_13015;
})();var statearr_13016_13096 = state_12998__$1;(statearr_13016_13096[2] = null);
(statearr_13016_13096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 38))
{var inst_12977 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13017_13097 = state_12998__$1;(statearr_13017_13097[2] = inst_12977);
(statearr_13017_13097[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 7))
{var inst_12994 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13018_13098 = state_12998__$1;(statearr_13018_13098[2] = inst_12994);
(statearr_13018_13098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 39))
{var inst_12955 = (state_12998[9]);var inst_12973 = (state_12998[2]);var inst_12974 = cljs.core.next.call(null,inst_12955);var inst_12934 = inst_12974;var inst_12935 = null;var inst_12936 = 0;var inst_12937 = 0;var state_12998__$1 = (function (){var statearr_13019 = state_12998;(statearr_13019[10] = inst_12935);
(statearr_13019[11] = inst_12934);
(statearr_13019[12] = inst_12937);
(statearr_13019[13] = inst_12936);
(statearr_13019[21] = inst_12973);
return statearr_13019;
})();var statearr_13020_13099 = state_12998__$1;(statearr_13020_13099[2] = null);
(statearr_13020_13099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 8))
{var inst_12877 = (state_12998[16]);var inst_12878 = (state_12998[17]);var inst_12880 = (inst_12878 < inst_12877);var inst_12881 = inst_12880;var state_12998__$1 = state_12998;if(cljs.core.truth_(inst_12881))
{var statearr_13021_13100 = state_12998__$1;(statearr_13021_13100[1] = 10);
} else
{var statearr_13022_13101 = state_12998__$1;(statearr_13022_13101[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 40))
{var inst_12964 = (state_12998[18]);var inst_12965 = (state_12998[2]);var inst_12966 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12967 = cljs.core.async.untap_STAR_.call(null,m,inst_12964);var state_12998__$1 = (function (){var statearr_13023 = state_12998;(statearr_13023[22] = inst_12965);
(statearr_13023[23] = inst_12966);
return statearr_13023;
})();var statearr_13024_13102 = state_12998__$1;(statearr_13024_13102[2] = inst_12967);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 9))
{var inst_12923 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13025_13103 = state_12998__$1;(statearr_13025_13103[2] = inst_12923);
(statearr_13025_13103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 41))
{var inst_12866 = (state_12998[8]);var inst_12964 = (state_12998[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12998,40,Object,null,39);var inst_12971 = cljs.core.async.put_BANG_.call(null,inst_12964,inst_12866,done);var state_12998__$1 = state_12998;var statearr_13026_13104 = state_12998__$1;(statearr_13026_13104[2] = inst_12971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 10))
{var inst_12876 = (state_12998[15]);var inst_12878 = (state_12998[17]);var inst_12884 = cljs.core._nth.call(null,inst_12876,inst_12878);var inst_12885 = cljs.core.nth.call(null,inst_12884,0,null);var inst_12886 = cljs.core.nth.call(null,inst_12884,1,null);var state_12998__$1 = (function (){var statearr_13027 = state_12998;(statearr_13027[24] = inst_12885);
return statearr_13027;
})();if(cljs.core.truth_(inst_12886))
{var statearr_13028_13105 = state_12998__$1;(statearr_13028_13105[1] = 13);
} else
{var statearr_13029_13106 = state_12998__$1;(statearr_13029_13106[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 42))
{var state_12998__$1 = state_12998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12998__$1,45,dchan);
} else
{if((state_val_12999 === 11))
{var inst_12895 = (state_12998[25]);var inst_12875 = (state_12998[14]);var inst_12895__$1 = cljs.core.seq.call(null,inst_12875);var state_12998__$1 = (function (){var statearr_13030 = state_12998;(statearr_13030[25] = inst_12895__$1);
return statearr_13030;
})();if(inst_12895__$1)
{var statearr_13031_13107 = state_12998__$1;(statearr_13031_13107[1] = 16);
} else
{var statearr_13032_13108 = state_12998__$1;(statearr_13032_13108[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 43))
{var state_12998__$1 = state_12998;var statearr_13033_13109 = state_12998__$1;(statearr_13033_13109[2] = null);
(statearr_13033_13109[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 12))
{var inst_12921 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13034_13110 = state_12998__$1;(statearr_13034_13110[2] = inst_12921);
(statearr_13034_13110[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 44))
{var inst_12991 = (state_12998[2]);var state_12998__$1 = (function (){var statearr_13035 = state_12998;(statearr_13035[26] = inst_12991);
return statearr_13035;
})();var statearr_13036_13111 = state_12998__$1;(statearr_13036_13111[2] = null);
(statearr_13036_13111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 13))
{var inst_12885 = (state_12998[24]);var inst_12888 = cljs.core.async.close_BANG_.call(null,inst_12885);var state_12998__$1 = state_12998;var statearr_13037_13112 = state_12998__$1;(statearr_13037_13112[2] = inst_12888);
(statearr_13037_13112[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 45))
{var inst_12988 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13041_13113 = state_12998__$1;(statearr_13041_13113[2] = inst_12988);
(statearr_13041_13113[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 14))
{var state_12998__$1 = state_12998;var statearr_13042_13114 = state_12998__$1;(statearr_13042_13114[2] = null);
(statearr_13042_13114[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 15))
{var inst_12875 = (state_12998[14]);var inst_12876 = (state_12998[15]);var inst_12877 = (state_12998[16]);var inst_12878 = (state_12998[17]);var inst_12891 = (state_12998[2]);var inst_12892 = (inst_12878 + 1);var tmp13038 = inst_12875;var tmp13039 = inst_12876;var tmp13040 = inst_12877;var inst_12875__$1 = tmp13038;var inst_12876__$1 = tmp13039;var inst_12877__$1 = tmp13040;var inst_12878__$1 = inst_12892;var state_12998__$1 = (function (){var statearr_13043 = state_12998;(statearr_13043[27] = inst_12891);
(statearr_13043[14] = inst_12875__$1);
(statearr_13043[15] = inst_12876__$1);
(statearr_13043[16] = inst_12877__$1);
(statearr_13043[17] = inst_12878__$1);
return statearr_13043;
})();var statearr_13044_13115 = state_12998__$1;(statearr_13044_13115[2] = null);
(statearr_13044_13115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 16))
{var inst_12895 = (state_12998[25]);var inst_12897 = cljs.core.chunked_seq_QMARK_.call(null,inst_12895);var state_12998__$1 = state_12998;if(inst_12897)
{var statearr_13045_13116 = state_12998__$1;(statearr_13045_13116[1] = 19);
} else
{var statearr_13046_13117 = state_12998__$1;(statearr_13046_13117[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 17))
{var state_12998__$1 = state_12998;var statearr_13047_13118 = state_12998__$1;(statearr_13047_13118[2] = null);
(statearr_13047_13118[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 18))
{var inst_12919 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13048_13119 = state_12998__$1;(statearr_13048_13119[2] = inst_12919);
(statearr_13048_13119[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 19))
{var inst_12895 = (state_12998[25]);var inst_12899 = cljs.core.chunk_first.call(null,inst_12895);var inst_12900 = cljs.core.chunk_rest.call(null,inst_12895);var inst_12901 = cljs.core.count.call(null,inst_12899);var inst_12875 = inst_12900;var inst_12876 = inst_12899;var inst_12877 = inst_12901;var inst_12878 = 0;var state_12998__$1 = (function (){var statearr_13049 = state_12998;(statearr_13049[14] = inst_12875);
(statearr_13049[15] = inst_12876);
(statearr_13049[16] = inst_12877);
(statearr_13049[17] = inst_12878);
return statearr_13049;
})();var statearr_13050_13120 = state_12998__$1;(statearr_13050_13120[2] = null);
(statearr_13050_13120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 20))
{var inst_12895 = (state_12998[25]);var inst_12905 = cljs.core.first.call(null,inst_12895);var inst_12906 = cljs.core.nth.call(null,inst_12905,0,null);var inst_12907 = cljs.core.nth.call(null,inst_12905,1,null);var state_12998__$1 = (function (){var statearr_13051 = state_12998;(statearr_13051[28] = inst_12906);
return statearr_13051;
})();if(cljs.core.truth_(inst_12907))
{var statearr_13052_13121 = state_12998__$1;(statearr_13052_13121[1] = 22);
} else
{var statearr_13053_13122 = state_12998__$1;(statearr_13053_13122[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 21))
{var inst_12916 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13054_13123 = state_12998__$1;(statearr_13054_13123[2] = inst_12916);
(statearr_13054_13123[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 22))
{var inst_12906 = (state_12998[28]);var inst_12909 = cljs.core.async.close_BANG_.call(null,inst_12906);var state_12998__$1 = state_12998;var statearr_13055_13124 = state_12998__$1;(statearr_13055_13124[2] = inst_12909);
(statearr_13055_13124[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 23))
{var state_12998__$1 = state_12998;var statearr_13056_13125 = state_12998__$1;(statearr_13056_13125[2] = null);
(statearr_13056_13125[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 24))
{var inst_12895 = (state_12998[25]);var inst_12912 = (state_12998[2]);var inst_12913 = cljs.core.next.call(null,inst_12895);var inst_12875 = inst_12913;var inst_12876 = null;var inst_12877 = 0;var inst_12878 = 0;var state_12998__$1 = (function (){var statearr_13057 = state_12998;(statearr_13057[29] = inst_12912);
(statearr_13057[14] = inst_12875);
(statearr_13057[15] = inst_12876);
(statearr_13057[16] = inst_12877);
(statearr_13057[17] = inst_12878);
return statearr_13057;
})();var statearr_13058_13126 = state_12998__$1;(statearr_13058_13126[2] = null);
(statearr_13058_13126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 25))
{var inst_12937 = (state_12998[12]);var inst_12936 = (state_12998[13]);var inst_12939 = (inst_12937 < inst_12936);var inst_12940 = inst_12939;var state_12998__$1 = state_12998;if(cljs.core.truth_(inst_12940))
{var statearr_13059_13127 = state_12998__$1;(statearr_13059_13127[1] = 27);
} else
{var statearr_13060_13128 = state_12998__$1;(statearr_13060_13128[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 26))
{var inst_12926 = (state_12998[19]);var inst_12984 = (state_12998[2]);var inst_12985 = cljs.core.seq.call(null,inst_12926);var state_12998__$1 = (function (){var statearr_13061 = state_12998;(statearr_13061[30] = inst_12984);
return statearr_13061;
})();if(inst_12985)
{var statearr_13062_13129 = state_12998__$1;(statearr_13062_13129[1] = 42);
} else
{var statearr_13063_13130 = state_12998__$1;(statearr_13063_13130[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 27))
{var inst_12935 = (state_12998[10]);var inst_12937 = (state_12998[12]);var inst_12942 = cljs.core._nth.call(null,inst_12935,inst_12937);var state_12998__$1 = (function (){var statearr_13064 = state_12998;(statearr_13064[7] = inst_12942);
return statearr_13064;
})();var statearr_13065_13131 = state_12998__$1;(statearr_13065_13131[2] = null);
(statearr_13065_13131[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 28))
{var inst_12934 = (state_12998[11]);var inst_12955 = (state_12998[9]);var inst_12955__$1 = cljs.core.seq.call(null,inst_12934);var state_12998__$1 = (function (){var statearr_13069 = state_12998;(statearr_13069[9] = inst_12955__$1);
return statearr_13069;
})();if(inst_12955__$1)
{var statearr_13070_13132 = state_12998__$1;(statearr_13070_13132[1] = 33);
} else
{var statearr_13071_13133 = state_12998__$1;(statearr_13071_13133[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 29))
{var inst_12982 = (state_12998[2]);var state_12998__$1 = state_12998;var statearr_13072_13134 = state_12998__$1;(statearr_13072_13134[2] = inst_12982);
(statearr_13072_13134[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 30))
{var inst_12935 = (state_12998[10]);var inst_12934 = (state_12998[11]);var inst_12937 = (state_12998[12]);var inst_12936 = (state_12998[13]);var inst_12951 = (state_12998[2]);var inst_12952 = (inst_12937 + 1);var tmp13066 = inst_12935;var tmp13067 = inst_12934;var tmp13068 = inst_12936;var inst_12934__$1 = tmp13067;var inst_12935__$1 = tmp13066;var inst_12936__$1 = tmp13068;var inst_12937__$1 = inst_12952;var state_12998__$1 = (function (){var statearr_13073 = state_12998;(statearr_13073[31] = inst_12951);
(statearr_13073[10] = inst_12935__$1);
(statearr_13073[11] = inst_12934__$1);
(statearr_13073[12] = inst_12937__$1);
(statearr_13073[13] = inst_12936__$1);
return statearr_13073;
})();var statearr_13074_13135 = state_12998__$1;(statearr_13074_13135[2] = null);
(statearr_13074_13135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12999 === 31))
{var inst_12942 = (state_12998[7]);var inst_12943 = (state_12998[2]);var inst_12944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12945 = cljs.core.async.untap_STAR_.call(null,m,inst_12942);var state_12998__$1 = (function (){var statearr_13075 = state_12998;(statearr_13075[32] = inst_12943);
(statearr_13075[33] = inst_12944);
return statearr_13075;
})();var statearr_13076_13136 = state_12998__$1;(statearr_13076_13136[2] = inst_12945);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13080[0] = state_machine__5507__auto__);
(statearr_13080[1] = 1);
return statearr_13080;
});
var state_machine__5507__auto____1 = (function (state_12998){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13081){if((e13081 instanceof Object))
{var ex__5510__auto__ = e13081;var statearr_13082_13137 = state_12998;(statearr_13082_13137[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13138 = state_12998;
state_12998 = G__13138;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13083 = f__5522__auto__.call(null);(statearr_13083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13084);
return statearr_13083;
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
cljs.core.async.Mix = (function (){var obj13140 = {};return obj13140;
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
;var m = (function (){if(typeof cljs.core.async.t13250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13250 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13251){
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
this.meta13251 = meta13251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13250.cljs$lang$type = true;
cljs.core.async.t13250.cljs$lang$ctorStr = "cljs.core.async/t13250";
cljs.core.async.t13250.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13250");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13252){var self__ = this;
var _13252__$1 = this;return self__.meta13251;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13252,meta13251__$1){var self__ = this;
var _13252__$1 = this;return (new cljs.core.async.t13250(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13251__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13250 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13251){return (new cljs.core.async.t13250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13251));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13250(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13317){var state_val_13318 = (state_13317[1]);if((state_val_13318 === 1))
{var inst_13256 = (state_13317[7]);var inst_13256__$1 = calc_state.call(null);var inst_13257 = cljs.core.seq_QMARK_.call(null,inst_13256__$1);var state_13317__$1 = (function (){var statearr_13319 = state_13317;(statearr_13319[7] = inst_13256__$1);
return statearr_13319;
})();if(inst_13257)
{var statearr_13320_13360 = state_13317__$1;(statearr_13320_13360[1] = 2);
} else
{var statearr_13321_13361 = state_13317__$1;(statearr_13321_13361[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 2))
{var inst_13256 = (state_13317[7]);var inst_13259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13256);var state_13317__$1 = state_13317;var statearr_13322_13362 = state_13317__$1;(statearr_13322_13362[2] = inst_13259);
(statearr_13322_13362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 3))
{var inst_13256 = (state_13317[7]);var state_13317__$1 = state_13317;var statearr_13323_13363 = state_13317__$1;(statearr_13323_13363[2] = inst_13256);
(statearr_13323_13363[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 4))
{var inst_13256 = (state_13317[7]);var inst_13262 = (state_13317[2]);var inst_13263 = cljs.core.get.call(null,inst_13262,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13264 = cljs.core.get.call(null,inst_13262,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13265 = cljs.core.get.call(null,inst_13262,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13266 = inst_13256;var state_13317__$1 = (function (){var statearr_13324 = state_13317;(statearr_13324[8] = inst_13265);
(statearr_13324[9] = inst_13266);
(statearr_13324[10] = inst_13263);
(statearr_13324[11] = inst_13264);
return statearr_13324;
})();var statearr_13325_13364 = state_13317__$1;(statearr_13325_13364[2] = null);
(statearr_13325_13364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 5))
{var inst_13266 = (state_13317[9]);var inst_13269 = cljs.core.seq_QMARK_.call(null,inst_13266);var state_13317__$1 = state_13317;if(inst_13269)
{var statearr_13326_13365 = state_13317__$1;(statearr_13326_13365[1] = 7);
} else
{var statearr_13327_13366 = state_13317__$1;(statearr_13327_13366[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 6))
{var inst_13315 = (state_13317[2]);var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13317__$1,inst_13315);
} else
{if((state_val_13318 === 7))
{var inst_13266 = (state_13317[9]);var inst_13271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13266);var state_13317__$1 = state_13317;var statearr_13328_13367 = state_13317__$1;(statearr_13328_13367[2] = inst_13271);
(statearr_13328_13367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 8))
{var inst_13266 = (state_13317[9]);var state_13317__$1 = state_13317;var statearr_13329_13368 = state_13317__$1;(statearr_13329_13368[2] = inst_13266);
(statearr_13329_13368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 9))
{var inst_13274 = (state_13317[12]);var inst_13274__$1 = (state_13317[2]);var inst_13275 = cljs.core.get.call(null,inst_13274__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13276 = cljs.core.get.call(null,inst_13274__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13277 = cljs.core.get.call(null,inst_13274__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13317__$1 = (function (){var statearr_13330 = state_13317;(statearr_13330[13] = inst_13276);
(statearr_13330[14] = inst_13277);
(statearr_13330[12] = inst_13274__$1);
return statearr_13330;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13317__$1,10,inst_13275);
} else
{if((state_val_13318 === 10))
{var inst_13282 = (state_13317[15]);var inst_13281 = (state_13317[16]);var inst_13280 = (state_13317[2]);var inst_13281__$1 = cljs.core.nth.call(null,inst_13280,0,null);var inst_13282__$1 = cljs.core.nth.call(null,inst_13280,1,null);var inst_13283 = (inst_13281__$1 == null);var inst_13284 = cljs.core._EQ_.call(null,inst_13282__$1,change);var inst_13285 = (inst_13283) || (inst_13284);var state_13317__$1 = (function (){var statearr_13331 = state_13317;(statearr_13331[15] = inst_13282__$1);
(statearr_13331[16] = inst_13281__$1);
return statearr_13331;
})();if(cljs.core.truth_(inst_13285))
{var statearr_13332_13369 = state_13317__$1;(statearr_13332_13369[1] = 11);
} else
{var statearr_13333_13370 = state_13317__$1;(statearr_13333_13370[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 11))
{var inst_13281 = (state_13317[16]);var inst_13287 = (inst_13281 == null);var state_13317__$1 = state_13317;if(cljs.core.truth_(inst_13287))
{var statearr_13334_13371 = state_13317__$1;(statearr_13334_13371[1] = 14);
} else
{var statearr_13335_13372 = state_13317__$1;(statearr_13335_13372[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 12))
{var inst_13277 = (state_13317[14]);var inst_13282 = (state_13317[15]);var inst_13296 = (state_13317[17]);var inst_13296__$1 = inst_13277.call(null,inst_13282);var state_13317__$1 = (function (){var statearr_13336 = state_13317;(statearr_13336[17] = inst_13296__$1);
return statearr_13336;
})();if(cljs.core.truth_(inst_13296__$1))
{var statearr_13337_13373 = state_13317__$1;(statearr_13337_13373[1] = 17);
} else
{var statearr_13338_13374 = state_13317__$1;(statearr_13338_13374[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 13))
{var inst_13313 = (state_13317[2]);var state_13317__$1 = state_13317;var statearr_13339_13375 = state_13317__$1;(statearr_13339_13375[2] = inst_13313);
(statearr_13339_13375[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 14))
{var inst_13282 = (state_13317[15]);var inst_13289 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13282);var state_13317__$1 = state_13317;var statearr_13340_13376 = state_13317__$1;(statearr_13340_13376[2] = inst_13289);
(statearr_13340_13376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 15))
{var state_13317__$1 = state_13317;var statearr_13341_13377 = state_13317__$1;(statearr_13341_13377[2] = null);
(statearr_13341_13377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 16))
{var inst_13292 = (state_13317[2]);var inst_13293 = calc_state.call(null);var inst_13266 = inst_13293;var state_13317__$1 = (function (){var statearr_13342 = state_13317;(statearr_13342[18] = inst_13292);
(statearr_13342[9] = inst_13266);
return statearr_13342;
})();var statearr_13343_13378 = state_13317__$1;(statearr_13343_13378[2] = null);
(statearr_13343_13378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 17))
{var inst_13296 = (state_13317[17]);var state_13317__$1 = state_13317;var statearr_13344_13379 = state_13317__$1;(statearr_13344_13379[2] = inst_13296);
(statearr_13344_13379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 18))
{var inst_13276 = (state_13317[13]);var inst_13277 = (state_13317[14]);var inst_13282 = (state_13317[15]);var inst_13299 = cljs.core.empty_QMARK_.call(null,inst_13277);var inst_13300 = inst_13276.call(null,inst_13282);var inst_13301 = cljs.core.not.call(null,inst_13300);var inst_13302 = (inst_13299) && (inst_13301);var state_13317__$1 = state_13317;var statearr_13345_13380 = state_13317__$1;(statearr_13345_13380[2] = inst_13302);
(statearr_13345_13380[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 19))
{var inst_13304 = (state_13317[2]);var state_13317__$1 = state_13317;if(cljs.core.truth_(inst_13304))
{var statearr_13346_13381 = state_13317__$1;(statearr_13346_13381[1] = 20);
} else
{var statearr_13347_13382 = state_13317__$1;(statearr_13347_13382[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 20))
{var inst_13281 = (state_13317[16]);var state_13317__$1 = state_13317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13317__$1,23,out,inst_13281);
} else
{if((state_val_13318 === 21))
{var state_13317__$1 = state_13317;var statearr_13348_13383 = state_13317__$1;(statearr_13348_13383[2] = null);
(statearr_13348_13383[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 22))
{var inst_13274 = (state_13317[12]);var inst_13310 = (state_13317[2]);var inst_13266 = inst_13274;var state_13317__$1 = (function (){var statearr_13349 = state_13317;(statearr_13349[19] = inst_13310);
(statearr_13349[9] = inst_13266);
return statearr_13349;
})();var statearr_13350_13384 = state_13317__$1;(statearr_13350_13384[2] = null);
(statearr_13350_13384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13318 === 23))
{var inst_13307 = (state_13317[2]);var state_13317__$1 = state_13317;var statearr_13351_13385 = state_13317__$1;(statearr_13351_13385[2] = inst_13307);
(statearr_13351_13385[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13355[0] = state_machine__5507__auto__);
(statearr_13355[1] = 1);
return statearr_13355;
});
var state_machine__5507__auto____1 = (function (state_13317){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13356){if((e13356 instanceof Object))
{var ex__5510__auto__ = e13356;var statearr_13357_13386 = state_13317;(statearr_13357_13386[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13387 = state_13317;
state_13317 = G__13387;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13317){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13358 = f__5522__auto__.call(null);(statearr_13358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13359);
return statearr_13358;
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
cljs.core.async.Pub = (function (){var obj13389 = {};return obj13389;
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
return (function (p1__13390_SHARP_){if(cljs.core.truth_(p1__13390_SHARP_.call(null,topic)))
{return p1__13390_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13390_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13515 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13516){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13516 = meta13516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13515.cljs$lang$type = true;
cljs.core.async.t13515.cljs$lang$ctorStr = "cljs.core.async/t13515";
cljs.core.async.t13515.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13515");
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13515.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13517){var self__ = this;
var _13517__$1 = this;return self__.meta13516;
});})(mults,ensure_mult))
;
cljs.core.async.t13515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13517,meta13516__$1){var self__ = this;
var _13517__$1 = this;return (new cljs.core.async.t13515(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13516__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13515 = ((function (mults,ensure_mult){
return (function __GT_t13515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13516){return (new cljs.core.async.t13515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13516));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13515(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13591){var state_val_13592 = (state_13591[1]);if((state_val_13592 === 1))
{var state_13591__$1 = state_13591;var statearr_13593_13640 = state_13591__$1;(statearr_13593_13640[2] = null);
(statearr_13593_13640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 2))
{var state_13591__$1 = state_13591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13591__$1,4,ch);
} else
{if((state_val_13592 === 3))
{var inst_13589 = (state_13591[2]);var state_13591__$1 = state_13591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13591__$1,inst_13589);
} else
{if((state_val_13592 === 4))
{var inst_13520 = (state_13591[7]);var inst_13520__$1 = (state_13591[2]);var inst_13521 = (inst_13520__$1 == null);var state_13591__$1 = (function (){var statearr_13594 = state_13591;(statearr_13594[7] = inst_13520__$1);
return statearr_13594;
})();if(cljs.core.truth_(inst_13521))
{var statearr_13595_13641 = state_13591__$1;(statearr_13595_13641[1] = 5);
} else
{var statearr_13596_13642 = state_13591__$1;(statearr_13596_13642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 5))
{var inst_13527 = cljs.core.deref.call(null,mults);var inst_13528 = cljs.core.vals.call(null,inst_13527);var inst_13529 = cljs.core.seq.call(null,inst_13528);var inst_13530 = inst_13529;var inst_13531 = null;var inst_13532 = 0;var inst_13533 = 0;var state_13591__$1 = (function (){var statearr_13597 = state_13591;(statearr_13597[8] = inst_13530);
(statearr_13597[9] = inst_13533);
(statearr_13597[10] = inst_13532);
(statearr_13597[11] = inst_13531);
return statearr_13597;
})();var statearr_13598_13643 = state_13591__$1;(statearr_13598_13643[2] = null);
(statearr_13598_13643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 6))
{var inst_13520 = (state_13591[7]);var inst_13570 = (state_13591[12]);var inst_13568 = (state_13591[13]);var inst_13568__$1 = topic_fn.call(null,inst_13520);var inst_13569 = cljs.core.deref.call(null,mults);var inst_13570__$1 = cljs.core.get.call(null,inst_13569,inst_13568__$1);var state_13591__$1 = (function (){var statearr_13599 = state_13591;(statearr_13599[12] = inst_13570__$1);
(statearr_13599[13] = inst_13568__$1);
return statearr_13599;
})();if(cljs.core.truth_(inst_13570__$1))
{var statearr_13600_13644 = state_13591__$1;(statearr_13600_13644[1] = 19);
} else
{var statearr_13601_13645 = state_13591__$1;(statearr_13601_13645[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 7))
{var inst_13587 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13602_13646 = state_13591__$1;(statearr_13602_13646[2] = inst_13587);
(statearr_13602_13646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 8))
{var inst_13533 = (state_13591[9]);var inst_13532 = (state_13591[10]);var inst_13535 = (inst_13533 < inst_13532);var inst_13536 = inst_13535;var state_13591__$1 = state_13591;if(cljs.core.truth_(inst_13536))
{var statearr_13606_13647 = state_13591__$1;(statearr_13606_13647[1] = 10);
} else
{var statearr_13607_13648 = state_13591__$1;(statearr_13607_13648[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 9))
{var inst_13566 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13608_13649 = state_13591__$1;(statearr_13608_13649[2] = inst_13566);
(statearr_13608_13649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 10))
{var inst_13530 = (state_13591[8]);var inst_13533 = (state_13591[9]);var inst_13532 = (state_13591[10]);var inst_13531 = (state_13591[11]);var inst_13538 = cljs.core._nth.call(null,inst_13531,inst_13533);var inst_13539 = cljs.core.async.muxch_STAR_.call(null,inst_13538);var inst_13540 = cljs.core.async.close_BANG_.call(null,inst_13539);var inst_13541 = (inst_13533 + 1);var tmp13603 = inst_13530;var tmp13604 = inst_13532;var tmp13605 = inst_13531;var inst_13530__$1 = tmp13603;var inst_13531__$1 = tmp13605;var inst_13532__$1 = tmp13604;var inst_13533__$1 = inst_13541;var state_13591__$1 = (function (){var statearr_13609 = state_13591;(statearr_13609[8] = inst_13530__$1);
(statearr_13609[14] = inst_13540);
(statearr_13609[9] = inst_13533__$1);
(statearr_13609[10] = inst_13532__$1);
(statearr_13609[11] = inst_13531__$1);
return statearr_13609;
})();var statearr_13610_13650 = state_13591__$1;(statearr_13610_13650[2] = null);
(statearr_13610_13650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 11))
{var inst_13530 = (state_13591[8]);var inst_13544 = (state_13591[15]);var inst_13544__$1 = cljs.core.seq.call(null,inst_13530);var state_13591__$1 = (function (){var statearr_13611 = state_13591;(statearr_13611[15] = inst_13544__$1);
return statearr_13611;
})();if(inst_13544__$1)
{var statearr_13612_13651 = state_13591__$1;(statearr_13612_13651[1] = 13);
} else
{var statearr_13613_13652 = state_13591__$1;(statearr_13613_13652[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 12))
{var inst_13564 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13614_13653 = state_13591__$1;(statearr_13614_13653[2] = inst_13564);
(statearr_13614_13653[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 13))
{var inst_13544 = (state_13591[15]);var inst_13546 = cljs.core.chunked_seq_QMARK_.call(null,inst_13544);var state_13591__$1 = state_13591;if(inst_13546)
{var statearr_13615_13654 = state_13591__$1;(statearr_13615_13654[1] = 16);
} else
{var statearr_13616_13655 = state_13591__$1;(statearr_13616_13655[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 14))
{var state_13591__$1 = state_13591;var statearr_13617_13656 = state_13591__$1;(statearr_13617_13656[2] = null);
(statearr_13617_13656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 15))
{var inst_13562 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13618_13657 = state_13591__$1;(statearr_13618_13657[2] = inst_13562);
(statearr_13618_13657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 16))
{var inst_13544 = (state_13591[15]);var inst_13548 = cljs.core.chunk_first.call(null,inst_13544);var inst_13549 = cljs.core.chunk_rest.call(null,inst_13544);var inst_13550 = cljs.core.count.call(null,inst_13548);var inst_13530 = inst_13549;var inst_13531 = inst_13548;var inst_13532 = inst_13550;var inst_13533 = 0;var state_13591__$1 = (function (){var statearr_13619 = state_13591;(statearr_13619[8] = inst_13530);
(statearr_13619[9] = inst_13533);
(statearr_13619[10] = inst_13532);
(statearr_13619[11] = inst_13531);
return statearr_13619;
})();var statearr_13620_13658 = state_13591__$1;(statearr_13620_13658[2] = null);
(statearr_13620_13658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 17))
{var inst_13544 = (state_13591[15]);var inst_13553 = cljs.core.first.call(null,inst_13544);var inst_13554 = cljs.core.async.muxch_STAR_.call(null,inst_13553);var inst_13555 = cljs.core.async.close_BANG_.call(null,inst_13554);var inst_13556 = cljs.core.next.call(null,inst_13544);var inst_13530 = inst_13556;var inst_13531 = null;var inst_13532 = 0;var inst_13533 = 0;var state_13591__$1 = (function (){var statearr_13621 = state_13591;(statearr_13621[16] = inst_13555);
(statearr_13621[8] = inst_13530);
(statearr_13621[9] = inst_13533);
(statearr_13621[10] = inst_13532);
(statearr_13621[11] = inst_13531);
return statearr_13621;
})();var statearr_13622_13659 = state_13591__$1;(statearr_13622_13659[2] = null);
(statearr_13622_13659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 18))
{var inst_13559 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13623_13660 = state_13591__$1;(statearr_13623_13660[2] = inst_13559);
(statearr_13623_13660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 19))
{var state_13591__$1 = state_13591;var statearr_13624_13661 = state_13591__$1;(statearr_13624_13661[2] = null);
(statearr_13624_13661[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 20))
{var state_13591__$1 = state_13591;var statearr_13625_13662 = state_13591__$1;(statearr_13625_13662[2] = null);
(statearr_13625_13662[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 21))
{var inst_13584 = (state_13591[2]);var state_13591__$1 = (function (){var statearr_13626 = state_13591;(statearr_13626[17] = inst_13584);
return statearr_13626;
})();var statearr_13627_13663 = state_13591__$1;(statearr_13627_13663[2] = null);
(statearr_13627_13663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 22))
{var inst_13581 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13628_13664 = state_13591__$1;(statearr_13628_13664[2] = inst_13581);
(statearr_13628_13664[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 23))
{var inst_13568 = (state_13591[13]);var inst_13572 = (state_13591[2]);var inst_13573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13568);var state_13591__$1 = (function (){var statearr_13629 = state_13591;(statearr_13629[18] = inst_13572);
return statearr_13629;
})();var statearr_13630_13665 = state_13591__$1;(statearr_13630_13665[2] = inst_13573);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13591__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13592 === 24))
{var inst_13520 = (state_13591[7]);var inst_13570 = (state_13591[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13591,23,Object,null,22);var inst_13577 = cljs.core.async.muxch_STAR_.call(null,inst_13570);var state_13591__$1 = state_13591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13591__$1,25,inst_13577,inst_13520);
} else
{if((state_val_13592 === 25))
{var inst_13579 = (state_13591[2]);var state_13591__$1 = state_13591;var statearr_13631_13666 = state_13591__$1;(statearr_13631_13666[2] = inst_13579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13591__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13635[0] = state_machine__5507__auto__);
(statearr_13635[1] = 1);
return statearr_13635;
});
var state_machine__5507__auto____1 = (function (state_13591){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13636){if((e13636 instanceof Object))
{var ex__5510__auto__ = e13636;var statearr_13637_13667 = state_13591;(statearr_13637_13667[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13668 = state_13591;
state_13591 = G__13668;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13591){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13638 = f__5522__auto__.call(null);(statearr_13638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13639);
return statearr_13638;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13775){var state_val_13776 = (state_13775[1]);if((state_val_13776 === 1))
{var state_13775__$1 = state_13775;var statearr_13777_13806 = state_13775__$1;(statearr_13777_13806[2] = null);
(statearr_13777_13806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 2))
{var inst_13738 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13739 = 0;var state_13775__$1 = (function (){var statearr_13778 = state_13775;(statearr_13778[7] = inst_13738);
(statearr_13778[8] = inst_13739);
return statearr_13778;
})();var statearr_13779_13807 = state_13775__$1;(statearr_13779_13807[2] = null);
(statearr_13779_13807[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 3))
{var inst_13773 = (state_13775[2]);var state_13775__$1 = state_13775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13775__$1,inst_13773);
} else
{if((state_val_13776 === 4))
{var inst_13739 = (state_13775[8]);var inst_13741 = (inst_13739 < cnt);var state_13775__$1 = state_13775;if(cljs.core.truth_(inst_13741))
{var statearr_13780_13808 = state_13775__$1;(statearr_13780_13808[1] = 6);
} else
{var statearr_13781_13809 = state_13775__$1;(statearr_13781_13809[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 5))
{var inst_13759 = (state_13775[2]);var state_13775__$1 = (function (){var statearr_13782 = state_13775;(statearr_13782[9] = inst_13759);
return statearr_13782;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13775__$1,12,dchan);
} else
{if((state_val_13776 === 6))
{var state_13775__$1 = state_13775;var statearr_13783_13810 = state_13775__$1;(statearr_13783_13810[2] = null);
(statearr_13783_13810[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 7))
{var state_13775__$1 = state_13775;var statearr_13784_13811 = state_13775__$1;(statearr_13784_13811[2] = null);
(statearr_13784_13811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 8))
{var inst_13757 = (state_13775[2]);var state_13775__$1 = state_13775;var statearr_13785_13812 = state_13775__$1;(statearr_13785_13812[2] = inst_13757);
(statearr_13785_13812[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 9))
{var inst_13739 = (state_13775[8]);var inst_13752 = (state_13775[2]);var inst_13753 = (inst_13739 + 1);var inst_13739__$1 = inst_13753;var state_13775__$1 = (function (){var statearr_13786 = state_13775;(statearr_13786[8] = inst_13739__$1);
(statearr_13786[10] = inst_13752);
return statearr_13786;
})();var statearr_13787_13813 = state_13775__$1;(statearr_13787_13813[2] = null);
(statearr_13787_13813[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 10))
{var inst_13743 = (state_13775[2]);var inst_13744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13775__$1 = (function (){var statearr_13788 = state_13775;(statearr_13788[11] = inst_13743);
return statearr_13788;
})();var statearr_13789_13814 = state_13775__$1;(statearr_13789_13814[2] = inst_13744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 11))
{var inst_13739 = (state_13775[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13775,10,Object,null,9);var inst_13748 = chs__$1.call(null,inst_13739);var inst_13749 = done.call(null,inst_13739);var inst_13750 = cljs.core.async.take_BANG_.call(null,inst_13748,inst_13749);var state_13775__$1 = state_13775;var statearr_13790_13815 = state_13775__$1;(statearr_13790_13815[2] = inst_13750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 12))
{var inst_13761 = (state_13775[12]);var inst_13761__$1 = (state_13775[2]);var inst_13762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13761__$1);var state_13775__$1 = (function (){var statearr_13791 = state_13775;(statearr_13791[12] = inst_13761__$1);
return statearr_13791;
})();if(cljs.core.truth_(inst_13762))
{var statearr_13792_13816 = state_13775__$1;(statearr_13792_13816[1] = 13);
} else
{var statearr_13793_13817 = state_13775__$1;(statearr_13793_13817[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 13))
{var inst_13764 = cljs.core.async.close_BANG_.call(null,out);var state_13775__$1 = state_13775;var statearr_13794_13818 = state_13775__$1;(statearr_13794_13818[2] = inst_13764);
(statearr_13794_13818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 14))
{var inst_13761 = (state_13775[12]);var inst_13766 = cljs.core.apply.call(null,f,inst_13761);var state_13775__$1 = state_13775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13775__$1,16,out,inst_13766);
} else
{if((state_val_13776 === 15))
{var inst_13771 = (state_13775[2]);var state_13775__$1 = state_13775;var statearr_13795_13819 = state_13775__$1;(statearr_13795_13819[2] = inst_13771);
(statearr_13795_13819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13776 === 16))
{var inst_13768 = (state_13775[2]);var state_13775__$1 = (function (){var statearr_13796 = state_13775;(statearr_13796[13] = inst_13768);
return statearr_13796;
})();var statearr_13797_13820 = state_13775__$1;(statearr_13797_13820[2] = null);
(statearr_13797_13820[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13801[0] = state_machine__5507__auto__);
(statearr_13801[1] = 1);
return statearr_13801;
});
var state_machine__5507__auto____1 = (function (state_13775){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13802){if((e13802 instanceof Object))
{var ex__5510__auto__ = e13802;var statearr_13803_13821 = state_13775;(statearr_13803_13821[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13822 = state_13775;
state_13775 = G__13822;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13775){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13804 = f__5522__auto__.call(null);(statearr_13804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13805);
return statearr_13804;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13906){var state_val_13907 = (state_13906[1]);if((state_val_13907 === 1))
{var inst_13877 = cljs.core.vec.call(null,chs);var inst_13878 = inst_13877;var state_13906__$1 = (function (){var statearr_13908 = state_13906;(statearr_13908[7] = inst_13878);
return statearr_13908;
})();var statearr_13909_13931 = state_13906__$1;(statearr_13909_13931[2] = null);
(statearr_13909_13931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 2))
{var inst_13878 = (state_13906[7]);var inst_13880 = cljs.core.count.call(null,inst_13878);var inst_13881 = (inst_13880 > 0);var state_13906__$1 = state_13906;if(cljs.core.truth_(inst_13881))
{var statearr_13910_13932 = state_13906__$1;(statearr_13910_13932[1] = 4);
} else
{var statearr_13911_13933 = state_13906__$1;(statearr_13911_13933[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 3))
{var inst_13904 = (state_13906[2]);var state_13906__$1 = state_13906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13906__$1,inst_13904);
} else
{if((state_val_13907 === 4))
{var inst_13878 = (state_13906[7]);var state_13906__$1 = state_13906;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13906__$1,7,inst_13878);
} else
{if((state_val_13907 === 5))
{var inst_13900 = cljs.core.async.close_BANG_.call(null,out);var state_13906__$1 = state_13906;var statearr_13912_13934 = state_13906__$1;(statearr_13912_13934[2] = inst_13900);
(statearr_13912_13934[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 6))
{var inst_13902 = (state_13906[2]);var state_13906__$1 = state_13906;var statearr_13913_13935 = state_13906__$1;(statearr_13913_13935[2] = inst_13902);
(statearr_13913_13935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 7))
{var inst_13886 = (state_13906[8]);var inst_13885 = (state_13906[9]);var inst_13885__$1 = (state_13906[2]);var inst_13886__$1 = cljs.core.nth.call(null,inst_13885__$1,0,null);var inst_13887 = cljs.core.nth.call(null,inst_13885__$1,1,null);var inst_13888 = (inst_13886__$1 == null);var state_13906__$1 = (function (){var statearr_13914 = state_13906;(statearr_13914[8] = inst_13886__$1);
(statearr_13914[9] = inst_13885__$1);
(statearr_13914[10] = inst_13887);
return statearr_13914;
})();if(cljs.core.truth_(inst_13888))
{var statearr_13915_13936 = state_13906__$1;(statearr_13915_13936[1] = 8);
} else
{var statearr_13916_13937 = state_13906__$1;(statearr_13916_13937[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 8))
{var inst_13886 = (state_13906[8]);var inst_13885 = (state_13906[9]);var inst_13878 = (state_13906[7]);var inst_13887 = (state_13906[10]);var inst_13890 = (function (){var c = inst_13887;var v = inst_13886;var vec__13883 = inst_13885;var cs = inst_13878;return ((function (c,v,vec__13883,cs,inst_13886,inst_13885,inst_13878,inst_13887,state_val_13907){
return (function (p1__13823_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13823_SHARP_);
});
;})(c,v,vec__13883,cs,inst_13886,inst_13885,inst_13878,inst_13887,state_val_13907))
})();var inst_13891 = cljs.core.filterv.call(null,inst_13890,inst_13878);var inst_13878__$1 = inst_13891;var state_13906__$1 = (function (){var statearr_13917 = state_13906;(statearr_13917[7] = inst_13878__$1);
return statearr_13917;
})();var statearr_13918_13938 = state_13906__$1;(statearr_13918_13938[2] = null);
(statearr_13918_13938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 9))
{var inst_13886 = (state_13906[8]);var state_13906__$1 = state_13906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13906__$1,11,out,inst_13886);
} else
{if((state_val_13907 === 10))
{var inst_13898 = (state_13906[2]);var state_13906__$1 = state_13906;var statearr_13920_13939 = state_13906__$1;(statearr_13920_13939[2] = inst_13898);
(statearr_13920_13939[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13907 === 11))
{var inst_13878 = (state_13906[7]);var inst_13895 = (state_13906[2]);var tmp13919 = inst_13878;var inst_13878__$1 = tmp13919;var state_13906__$1 = (function (){var statearr_13921 = state_13906;(statearr_13921[7] = inst_13878__$1);
(statearr_13921[11] = inst_13895);
return statearr_13921;
})();var statearr_13922_13940 = state_13906__$1;(statearr_13922_13940[2] = null);
(statearr_13922_13940[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13926 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13926[0] = state_machine__5507__auto__);
(statearr_13926[1] = 1);
return statearr_13926;
});
var state_machine__5507__auto____1 = (function (state_13906){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13927){if((e13927 instanceof Object))
{var ex__5510__auto__ = e13927;var statearr_13928_13941 = state_13906;(statearr_13928_13941[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13906);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13942 = state_13906;
state_13906 = G__13942;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13906){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13929 = f__5522__auto__.call(null);(statearr_13929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13930);
return statearr_13929;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14012){var state_val_14013 = (state_14012[1]);if((state_val_14013 === 1))
{var inst_13989 = 0;var state_14012__$1 = (function (){var statearr_14014 = state_14012;(statearr_14014[7] = inst_13989);
return statearr_14014;
})();var statearr_14015_14036 = state_14012__$1;(statearr_14015_14036[2] = null);
(statearr_14015_14036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 2))
{var inst_13989 = (state_14012[7]);var inst_13991 = (inst_13989 < n);var state_14012__$1 = state_14012;if(cljs.core.truth_(inst_13991))
{var statearr_14016_14037 = state_14012__$1;(statearr_14016_14037[1] = 4);
} else
{var statearr_14017_14038 = state_14012__$1;(statearr_14017_14038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 3))
{var inst_14009 = (state_14012[2]);var inst_14010 = cljs.core.async.close_BANG_.call(null,out);var state_14012__$1 = (function (){var statearr_14018 = state_14012;(statearr_14018[8] = inst_14009);
return statearr_14018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14012__$1,inst_14010);
} else
{if((state_val_14013 === 4))
{var state_14012__$1 = state_14012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14012__$1,7,ch);
} else
{if((state_val_14013 === 5))
{var state_14012__$1 = state_14012;var statearr_14019_14039 = state_14012__$1;(statearr_14019_14039[2] = null);
(statearr_14019_14039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 6))
{var inst_14007 = (state_14012[2]);var state_14012__$1 = state_14012;var statearr_14020_14040 = state_14012__$1;(statearr_14020_14040[2] = inst_14007);
(statearr_14020_14040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 7))
{var inst_13994 = (state_14012[9]);var inst_13994__$1 = (state_14012[2]);var inst_13995 = (inst_13994__$1 == null);var inst_13996 = cljs.core.not.call(null,inst_13995);var state_14012__$1 = (function (){var statearr_14021 = state_14012;(statearr_14021[9] = inst_13994__$1);
return statearr_14021;
})();if(inst_13996)
{var statearr_14022_14041 = state_14012__$1;(statearr_14022_14041[1] = 8);
} else
{var statearr_14023_14042 = state_14012__$1;(statearr_14023_14042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 8))
{var inst_13994 = (state_14012[9]);var state_14012__$1 = state_14012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14012__$1,11,out,inst_13994);
} else
{if((state_val_14013 === 9))
{var state_14012__$1 = state_14012;var statearr_14024_14043 = state_14012__$1;(statearr_14024_14043[2] = null);
(statearr_14024_14043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 10))
{var inst_14004 = (state_14012[2]);var state_14012__$1 = state_14012;var statearr_14025_14044 = state_14012__$1;(statearr_14025_14044[2] = inst_14004);
(statearr_14025_14044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14013 === 11))
{var inst_13989 = (state_14012[7]);var inst_13999 = (state_14012[2]);var inst_14000 = (inst_13989 + 1);var inst_13989__$1 = inst_14000;var state_14012__$1 = (function (){var statearr_14026 = state_14012;(statearr_14026[10] = inst_13999);
(statearr_14026[7] = inst_13989__$1);
return statearr_14026;
})();var statearr_14027_14045 = state_14012__$1;(statearr_14027_14045[2] = null);
(statearr_14027_14045[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14031 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14031[0] = state_machine__5507__auto__);
(statearr_14031[1] = 1);
return statearr_14031;
});
var state_machine__5507__auto____1 = (function (state_14012){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14032){if((e14032 instanceof Object))
{var ex__5510__auto__ = e14032;var statearr_14033_14046 = state_14012;(statearr_14033_14046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14047 = state_14012;
state_14012 = G__14047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14012){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14034 = f__5522__auto__.call(null);(statearr_14034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14035);
return statearr_14034;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14119){var state_val_14120 = (state_14119[1]);if((state_val_14120 === 1))
{var inst_14096 = null;var state_14119__$1 = (function (){var statearr_14121 = state_14119;(statearr_14121[7] = inst_14096);
return statearr_14121;
})();var statearr_14122_14145 = state_14119__$1;(statearr_14122_14145[2] = null);
(statearr_14122_14145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 2))
{var state_14119__$1 = state_14119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14119__$1,4,ch);
} else
{if((state_val_14120 === 3))
{var inst_14116 = (state_14119[2]);var inst_14117 = cljs.core.async.close_BANG_.call(null,out);var state_14119__$1 = (function (){var statearr_14123 = state_14119;(statearr_14123[8] = inst_14116);
return statearr_14123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14119__$1,inst_14117);
} else
{if((state_val_14120 === 4))
{var inst_14099 = (state_14119[9]);var inst_14099__$1 = (state_14119[2]);var inst_14100 = (inst_14099__$1 == null);var inst_14101 = cljs.core.not.call(null,inst_14100);var state_14119__$1 = (function (){var statearr_14124 = state_14119;(statearr_14124[9] = inst_14099__$1);
return statearr_14124;
})();if(inst_14101)
{var statearr_14125_14146 = state_14119__$1;(statearr_14125_14146[1] = 5);
} else
{var statearr_14126_14147 = state_14119__$1;(statearr_14126_14147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 5))
{var inst_14099 = (state_14119[9]);var inst_14096 = (state_14119[7]);var inst_14103 = cljs.core._EQ_.call(null,inst_14099,inst_14096);var state_14119__$1 = state_14119;if(inst_14103)
{var statearr_14127_14148 = state_14119__$1;(statearr_14127_14148[1] = 8);
} else
{var statearr_14128_14149 = state_14119__$1;(statearr_14128_14149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 6))
{var state_14119__$1 = state_14119;var statearr_14130_14150 = state_14119__$1;(statearr_14130_14150[2] = null);
(statearr_14130_14150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 7))
{var inst_14114 = (state_14119[2]);var state_14119__$1 = state_14119;var statearr_14131_14151 = state_14119__$1;(statearr_14131_14151[2] = inst_14114);
(statearr_14131_14151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 8))
{var inst_14096 = (state_14119[7]);var tmp14129 = inst_14096;var inst_14096__$1 = tmp14129;var state_14119__$1 = (function (){var statearr_14132 = state_14119;(statearr_14132[7] = inst_14096__$1);
return statearr_14132;
})();var statearr_14133_14152 = state_14119__$1;(statearr_14133_14152[2] = null);
(statearr_14133_14152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 9))
{var inst_14099 = (state_14119[9]);var state_14119__$1 = state_14119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14119__$1,11,out,inst_14099);
} else
{if((state_val_14120 === 10))
{var inst_14111 = (state_14119[2]);var state_14119__$1 = state_14119;var statearr_14134_14153 = state_14119__$1;(statearr_14134_14153[2] = inst_14111);
(statearr_14134_14153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14120 === 11))
{var inst_14099 = (state_14119[9]);var inst_14108 = (state_14119[2]);var inst_14096 = inst_14099;var state_14119__$1 = (function (){var statearr_14135 = state_14119;(statearr_14135[7] = inst_14096);
(statearr_14135[10] = inst_14108);
return statearr_14135;
})();var statearr_14136_14154 = state_14119__$1;(statearr_14136_14154[2] = null);
(statearr_14136_14154[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14140 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14140[0] = state_machine__5507__auto__);
(statearr_14140[1] = 1);
return statearr_14140;
});
var state_machine__5507__auto____1 = (function (state_14119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14141){if((e14141 instanceof Object))
{var ex__5510__auto__ = e14141;var statearr_14142_14155 = state_14119;(statearr_14142_14155[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14156 = state_14119;
state_14119 = G__14156;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14143 = f__5522__auto__.call(null);(statearr_14143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14144);
return statearr_14143;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14261){var state_val_14262 = (state_14261[1]);if((state_val_14262 === 1))
{var inst_14224 = (new Array(n));var inst_14225 = inst_14224;var inst_14226 = 0;var state_14261__$1 = (function (){var statearr_14263 = state_14261;(statearr_14263[7] = inst_14226);
(statearr_14263[8] = inst_14225);
return statearr_14263;
})();var statearr_14264_14292 = state_14261__$1;(statearr_14264_14292[2] = null);
(statearr_14264_14292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 2))
{var state_14261__$1 = state_14261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14261__$1,4,ch);
} else
{if((state_val_14262 === 3))
{var inst_14259 = (state_14261[2]);var state_14261__$1 = state_14261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14261__$1,inst_14259);
} else
{if((state_val_14262 === 4))
{var inst_14229 = (state_14261[9]);var inst_14229__$1 = (state_14261[2]);var inst_14230 = (inst_14229__$1 == null);var inst_14231 = cljs.core.not.call(null,inst_14230);var state_14261__$1 = (function (){var statearr_14265 = state_14261;(statearr_14265[9] = inst_14229__$1);
return statearr_14265;
})();if(inst_14231)
{var statearr_14266_14293 = state_14261__$1;(statearr_14266_14293[1] = 5);
} else
{var statearr_14267_14294 = state_14261__$1;(statearr_14267_14294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 5))
{var inst_14229 = (state_14261[9]);var inst_14234 = (state_14261[10]);var inst_14226 = (state_14261[7]);var inst_14225 = (state_14261[8]);var inst_14233 = (inst_14225[inst_14226] = inst_14229);var inst_14234__$1 = (inst_14226 + 1);var inst_14235 = (inst_14234__$1 < n);var state_14261__$1 = (function (){var statearr_14268 = state_14261;(statearr_14268[11] = inst_14233);
(statearr_14268[10] = inst_14234__$1);
return statearr_14268;
})();if(cljs.core.truth_(inst_14235))
{var statearr_14269_14295 = state_14261__$1;(statearr_14269_14295[1] = 8);
} else
{var statearr_14270_14296 = state_14261__$1;(statearr_14270_14296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 6))
{var inst_14226 = (state_14261[7]);var inst_14247 = (inst_14226 > 0);var state_14261__$1 = state_14261;if(cljs.core.truth_(inst_14247))
{var statearr_14272_14297 = state_14261__$1;(statearr_14272_14297[1] = 12);
} else
{var statearr_14273_14298 = state_14261__$1;(statearr_14273_14298[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 7))
{var inst_14257 = (state_14261[2]);var state_14261__$1 = state_14261;var statearr_14274_14299 = state_14261__$1;(statearr_14274_14299[2] = inst_14257);
(statearr_14274_14299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 8))
{var inst_14234 = (state_14261[10]);var inst_14225 = (state_14261[8]);var tmp14271 = inst_14225;var inst_14225__$1 = tmp14271;var inst_14226 = inst_14234;var state_14261__$1 = (function (){var statearr_14275 = state_14261;(statearr_14275[7] = inst_14226);
(statearr_14275[8] = inst_14225__$1);
return statearr_14275;
})();var statearr_14276_14300 = state_14261__$1;(statearr_14276_14300[2] = null);
(statearr_14276_14300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 9))
{var inst_14225 = (state_14261[8]);var inst_14239 = cljs.core.vec.call(null,inst_14225);var state_14261__$1 = state_14261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14261__$1,11,out,inst_14239);
} else
{if((state_val_14262 === 10))
{var inst_14245 = (state_14261[2]);var state_14261__$1 = state_14261;var statearr_14277_14301 = state_14261__$1;(statearr_14277_14301[2] = inst_14245);
(statearr_14277_14301[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 11))
{var inst_14241 = (state_14261[2]);var inst_14242 = (new Array(n));var inst_14225 = inst_14242;var inst_14226 = 0;var state_14261__$1 = (function (){var statearr_14278 = state_14261;(statearr_14278[12] = inst_14241);
(statearr_14278[7] = inst_14226);
(statearr_14278[8] = inst_14225);
return statearr_14278;
})();var statearr_14279_14302 = state_14261__$1;(statearr_14279_14302[2] = null);
(statearr_14279_14302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 12))
{var inst_14225 = (state_14261[8]);var inst_14249 = cljs.core.vec.call(null,inst_14225);var state_14261__$1 = state_14261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14261__$1,15,out,inst_14249);
} else
{if((state_val_14262 === 13))
{var state_14261__$1 = state_14261;var statearr_14280_14303 = state_14261__$1;(statearr_14280_14303[2] = null);
(statearr_14280_14303[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 14))
{var inst_14254 = (state_14261[2]);var inst_14255 = cljs.core.async.close_BANG_.call(null,out);var state_14261__$1 = (function (){var statearr_14281 = state_14261;(statearr_14281[13] = inst_14254);
return statearr_14281;
})();var statearr_14282_14304 = state_14261__$1;(statearr_14282_14304[2] = inst_14255);
(statearr_14282_14304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14262 === 15))
{var inst_14251 = (state_14261[2]);var state_14261__$1 = state_14261;var statearr_14283_14305 = state_14261__$1;(statearr_14283_14305[2] = inst_14251);
(statearr_14283_14305[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14287[0] = state_machine__5507__auto__);
(statearr_14287[1] = 1);
return statearr_14287;
});
var state_machine__5507__auto____1 = (function (state_14261){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14288){if((e14288 instanceof Object))
{var ex__5510__auto__ = e14288;var statearr_14289_14306 = state_14261;(statearr_14289_14306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14307 = state_14261;
state_14261 = G__14307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14261){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14290 = f__5522__auto__.call(null);(statearr_14290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14291);
return statearr_14290;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14450 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14420){var state_val_14421 = (state_14420[1]);if((state_val_14421 === 1))
{var inst_14379 = [];var inst_14380 = inst_14379;var inst_14381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14420__$1 = (function (){var statearr_14422 = state_14420;(statearr_14422[7] = inst_14380);
(statearr_14422[8] = inst_14381);
return statearr_14422;
})();var statearr_14423_14451 = state_14420__$1;(statearr_14423_14451[2] = null);
(statearr_14423_14451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 2))
{var state_14420__$1 = state_14420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14420__$1,4,ch);
} else
{if((state_val_14421 === 3))
{var inst_14418 = (state_14420[2]);var state_14420__$1 = state_14420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14420__$1,inst_14418);
} else
{if((state_val_14421 === 4))
{var inst_14384 = (state_14420[9]);var inst_14384__$1 = (state_14420[2]);var inst_14385 = (inst_14384__$1 == null);var inst_14386 = cljs.core.not.call(null,inst_14385);var state_14420__$1 = (function (){var statearr_14424 = state_14420;(statearr_14424[9] = inst_14384__$1);
return statearr_14424;
})();if(inst_14386)
{var statearr_14425_14452 = state_14420__$1;(statearr_14425_14452[1] = 5);
} else
{var statearr_14426_14453 = state_14420__$1;(statearr_14426_14453[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 5))
{var inst_14388 = (state_14420[10]);var inst_14381 = (state_14420[8]);var inst_14384 = (state_14420[9]);var inst_14388__$1 = f.call(null,inst_14384);var inst_14389 = cljs.core._EQ_.call(null,inst_14388__$1,inst_14381);var inst_14390 = cljs.core.keyword_identical_QMARK_.call(null,inst_14381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14391 = (inst_14389) || (inst_14390);var state_14420__$1 = (function (){var statearr_14427 = state_14420;(statearr_14427[10] = inst_14388__$1);
return statearr_14427;
})();if(cljs.core.truth_(inst_14391))
{var statearr_14428_14454 = state_14420__$1;(statearr_14428_14454[1] = 8);
} else
{var statearr_14429_14455 = state_14420__$1;(statearr_14429_14455[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 6))
{var inst_14380 = (state_14420[7]);var inst_14405 = inst_14380.length;var inst_14406 = (inst_14405 > 0);var state_14420__$1 = state_14420;if(cljs.core.truth_(inst_14406))
{var statearr_14431_14456 = state_14420__$1;(statearr_14431_14456[1] = 12);
} else
{var statearr_14432_14457 = state_14420__$1;(statearr_14432_14457[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 7))
{var inst_14416 = (state_14420[2]);var state_14420__$1 = state_14420;var statearr_14433_14458 = state_14420__$1;(statearr_14433_14458[2] = inst_14416);
(statearr_14433_14458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 8))
{var inst_14380 = (state_14420[7]);var inst_14388 = (state_14420[10]);var inst_14384 = (state_14420[9]);var inst_14393 = inst_14380.push(inst_14384);var tmp14430 = inst_14380;var inst_14380__$1 = tmp14430;var inst_14381 = inst_14388;var state_14420__$1 = (function (){var statearr_14434 = state_14420;(statearr_14434[7] = inst_14380__$1);
(statearr_14434[8] = inst_14381);
(statearr_14434[11] = inst_14393);
return statearr_14434;
})();var statearr_14435_14459 = state_14420__$1;(statearr_14435_14459[2] = null);
(statearr_14435_14459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 9))
{var inst_14380 = (state_14420[7]);var inst_14396 = cljs.core.vec.call(null,inst_14380);var state_14420__$1 = state_14420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14420__$1,11,out,inst_14396);
} else
{if((state_val_14421 === 10))
{var inst_14403 = (state_14420[2]);var state_14420__$1 = state_14420;var statearr_14436_14460 = state_14420__$1;(statearr_14436_14460[2] = inst_14403);
(statearr_14436_14460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 11))
{var inst_14388 = (state_14420[10]);var inst_14384 = (state_14420[9]);var inst_14398 = (state_14420[2]);var inst_14399 = [];var inst_14400 = inst_14399.push(inst_14384);var inst_14380 = inst_14399;var inst_14381 = inst_14388;var state_14420__$1 = (function (){var statearr_14437 = state_14420;(statearr_14437[7] = inst_14380);
(statearr_14437[12] = inst_14400);
(statearr_14437[8] = inst_14381);
(statearr_14437[13] = inst_14398);
return statearr_14437;
})();var statearr_14438_14461 = state_14420__$1;(statearr_14438_14461[2] = null);
(statearr_14438_14461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 12))
{var inst_14380 = (state_14420[7]);var inst_14408 = cljs.core.vec.call(null,inst_14380);var state_14420__$1 = state_14420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14420__$1,15,out,inst_14408);
} else
{if((state_val_14421 === 13))
{var state_14420__$1 = state_14420;var statearr_14439_14462 = state_14420__$1;(statearr_14439_14462[2] = null);
(statearr_14439_14462[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 14))
{var inst_14413 = (state_14420[2]);var inst_14414 = cljs.core.async.close_BANG_.call(null,out);var state_14420__$1 = (function (){var statearr_14440 = state_14420;(statearr_14440[14] = inst_14413);
return statearr_14440;
})();var statearr_14441_14463 = state_14420__$1;(statearr_14441_14463[2] = inst_14414);
(statearr_14441_14463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14421 === 15))
{var inst_14410 = (state_14420[2]);var state_14420__$1 = state_14420;var statearr_14442_14464 = state_14420__$1;(statearr_14442_14464[2] = inst_14410);
(statearr_14442_14464[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14446[0] = state_machine__5507__auto__);
(statearr_14446[1] = 1);
return statearr_14446;
});
var state_machine__5507__auto____1 = (function (state_14420){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14447){if((e14447 instanceof Object))
{var ex__5510__auto__ = e14447;var statearr_14448_14465 = state_14420;(statearr_14448_14465[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14466 = state_14420;
state_14420 = G__14466;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14420){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14449 = f__5522__auto__.call(null);(statearr_14449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14450);
return statearr_14449;
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