// Compiled by ClojureScript 0.0-2261
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_40897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40898 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_40899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$737,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40899,opt_wrapper_40897,table_section_wrapper_40898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_40897,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_40898,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40898,cell_wrapper_40899,table_section_wrapper_40898,table_section_wrapper_40898]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40904 = cljs.core.seq(tbody);var chunk__40905 = null;var count__40906 = (0);var i__40907 = (0);while(true){
if((i__40907 < count__40906))
{var child = chunk__40905.cljs$core$IIndexed$_nth$arity$2(null,i__40907);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40908 = seq__40904;
var G__40909 = chunk__40905;
var G__40910 = count__40906;
var G__40911 = (i__40907 + (1));
seq__40904 = G__40908;
chunk__40905 = G__40909;
count__40906 = G__40910;
i__40907 = G__40911;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40904);if(temp__4126__auto__)
{var seq__40904__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40904__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40904__$1);{
var G__40912 = cljs.core.chunk_rest(seq__40904__$1);
var G__40913 = c__4299__auto__;
var G__40914 = cljs.core.count(c__4299__auto__);
var G__40915 = (0);
seq__40904 = G__40912;
chunk__40905 = G__40913;
count__40906 = G__40914;
i__40907 = G__40915;
continue;
}
} else
{var child = cljs.core.first(seq__40904__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40916 = cljs.core.next(seq__40904__$1);
var G__40917 = null;
var G__40918 = (0);
var G__40919 = (0);
seq__40904 = G__40916;
chunk__40905 = G__40917;
count__40906 = G__40918;
i__40907 = G__40919;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__40921 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$737.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40921,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40921,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40921,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__40922 = wrapper.lastChild;
var G__40923 = (level - (1));
wrapper = G__40922;
level = G__40923;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj40925 = {};return obj40925;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__40926){
var mesg = cljs.core.seq(arglist__40926);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__40927){
var mesg = cljs.core.seq(arglist__40927);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__40928){
var contents = cljs.core.seq(arglist__40928);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40929_SHARP_){return p1__40929_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40930_SHARP_,p2__40931_SHARP_){return goog.dom.insertChildAt(p1__40930_SHARP_,p2__40931_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__40930_SHARP_,p2__40931_SHARP_){return goog.dom.insertChildAt(p1__40930_SHARP_,p2__40931_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40933_SHARP_,p2__40932_SHARP_){return goog.dom.insertSiblingBefore(p2__40932_SHARP_,p1__40933_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40933_SHARP_,p2__40932_SHARP_){return goog.dom.insertSiblingBefore(p2__40932_SHARP_,p1__40933_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40935_SHARP_,p2__40934_SHARP_){return goog.dom.insertSiblingAfter(p2__40934_SHARP_,p1__40935_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40935_SHARP_,p2__40934_SHARP_){return goog.dom.insertSiblingAfter(p2__40934_SHARP_,p1__40935_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40937_SHARP_,p2__40936_SHARP_){return goog.dom.replaceNode(p2__40936_SHARP_,p1__40937_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40937_SHARP_,p2__40936_SHARP_){return goog.dom.replaceNode(p2__40936_SHARP_,p1__40937_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__40942_40946 = cljs.core.seq(domina.nodes(content));var chunk__40943_40947 = null;var count__40944_40948 = (0);var i__40945_40949 = (0);while(true){
if((i__40945_40949 < count__40944_40948))
{var n_40950 = chunk__40943_40947.cljs$core$IIndexed$_nth$arity$2(null,i__40945_40949);goog.style.setStyle(n_40950,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40951 = seq__40942_40946;
var G__40952 = chunk__40943_40947;
var G__40953 = count__40944_40948;
var G__40954 = (i__40945_40949 + (1));
seq__40942_40946 = G__40951;
chunk__40943_40947 = G__40952;
count__40944_40948 = G__40953;
i__40945_40949 = G__40954;
continue;
}
} else
{var temp__4126__auto___40955 = cljs.core.seq(seq__40942_40946);if(temp__4126__auto___40955)
{var seq__40942_40956__$1 = temp__4126__auto___40955;if(cljs.core.chunked_seq_QMARK_(seq__40942_40956__$1))
{var c__4299__auto___40957 = cljs.core.chunk_first(seq__40942_40956__$1);{
var G__40958 = cljs.core.chunk_rest(seq__40942_40956__$1);
var G__40959 = c__4299__auto___40957;
var G__40960 = cljs.core.count(c__4299__auto___40957);
var G__40961 = (0);
seq__40942_40946 = G__40958;
chunk__40943_40947 = G__40959;
count__40944_40948 = G__40960;
i__40945_40949 = G__40961;
continue;
}
} else
{var n_40962 = cljs.core.first(seq__40942_40956__$1);goog.style.setStyle(n_40962,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40963 = cljs.core.next(seq__40942_40956__$1);
var G__40964 = null;
var G__40965 = (0);
var G__40966 = (0);
seq__40942_40946 = G__40963;
chunk__40943_40947 = G__40964;
count__40944_40948 = G__40965;
i__40945_40949 = G__40966;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40967){
var content = cljs.core.first(arglist__40967);
arglist__40967 = cljs.core.next(arglist__40967);
var name = cljs.core.first(arglist__40967);
var value = cljs.core.rest(arglist__40967);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__40972_40976 = cljs.core.seq(domina.nodes(content));var chunk__40973_40977 = null;var count__40974_40978 = (0);var i__40975_40979 = (0);while(true){
if((i__40975_40979 < count__40974_40978))
{var n_40980 = chunk__40973_40977.cljs$core$IIndexed$_nth$arity$2(null,i__40975_40979);n_40980.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40981 = seq__40972_40976;
var G__40982 = chunk__40973_40977;
var G__40983 = count__40974_40978;
var G__40984 = (i__40975_40979 + (1));
seq__40972_40976 = G__40981;
chunk__40973_40977 = G__40982;
count__40974_40978 = G__40983;
i__40975_40979 = G__40984;
continue;
}
} else
{var temp__4126__auto___40985 = cljs.core.seq(seq__40972_40976);if(temp__4126__auto___40985)
{var seq__40972_40986__$1 = temp__4126__auto___40985;if(cljs.core.chunked_seq_QMARK_(seq__40972_40986__$1))
{var c__4299__auto___40987 = cljs.core.chunk_first(seq__40972_40986__$1);{
var G__40988 = cljs.core.chunk_rest(seq__40972_40986__$1);
var G__40989 = c__4299__auto___40987;
var G__40990 = cljs.core.count(c__4299__auto___40987);
var G__40991 = (0);
seq__40972_40976 = G__40988;
chunk__40973_40977 = G__40989;
count__40974_40978 = G__40990;
i__40975_40979 = G__40991;
continue;
}
} else
{var n_40992 = cljs.core.first(seq__40972_40986__$1);n_40992.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40993 = cljs.core.next(seq__40972_40986__$1);
var G__40994 = null;
var G__40995 = (0);
var G__40996 = (0);
seq__40972_40976 = G__40993;
chunk__40973_40977 = G__40994;
count__40974_40978 = G__40995;
i__40975_40979 = G__40996;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40997){
var content = cljs.core.first(arglist__40997);
arglist__40997 = cljs.core.next(arglist__40997);
var name = cljs.core.first(arglist__40997);
var value = cljs.core.rest(arglist__40997);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__41002_41006 = cljs.core.seq(domina.nodes(content));var chunk__41003_41007 = null;var count__41004_41008 = (0);var i__41005_41009 = (0);while(true){
if((i__41005_41009 < count__41004_41008))
{var n_41010 = chunk__41003_41007.cljs$core$IIndexed$_nth$arity$2(null,i__41005_41009);n_41010.removeAttribute(cljs.core.name(name));
{
var G__41011 = seq__41002_41006;
var G__41012 = chunk__41003_41007;
var G__41013 = count__41004_41008;
var G__41014 = (i__41005_41009 + (1));
seq__41002_41006 = G__41011;
chunk__41003_41007 = G__41012;
count__41004_41008 = G__41013;
i__41005_41009 = G__41014;
continue;
}
} else
{var temp__4126__auto___41015 = cljs.core.seq(seq__41002_41006);if(temp__4126__auto___41015)
{var seq__41002_41016__$1 = temp__4126__auto___41015;if(cljs.core.chunked_seq_QMARK_(seq__41002_41016__$1))
{var c__4299__auto___41017 = cljs.core.chunk_first(seq__41002_41016__$1);{
var G__41018 = cljs.core.chunk_rest(seq__41002_41016__$1);
var G__41019 = c__4299__auto___41017;
var G__41020 = cljs.core.count(c__4299__auto___41017);
var G__41021 = (0);
seq__41002_41006 = G__41018;
chunk__41003_41007 = G__41019;
count__41004_41008 = G__41020;
i__41005_41009 = G__41021;
continue;
}
} else
{var n_41022 = cljs.core.first(seq__41002_41016__$1);n_41022.removeAttribute(cljs.core.name(name));
{
var G__41023 = cljs.core.next(seq__41002_41016__$1);
var G__41024 = null;
var G__41025 = (0);
var G__41026 = (0);
seq__41002_41006 = G__41023;
chunk__41003_41007 = G__41024;
count__41004_41008 = G__41025;
i__41005_41009 = G__41026;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__41028 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$736)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__41029_SHARP_){var attr = attrs__$1.item(p1__41029_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__41036_41042 = cljs.core.seq(styles);var chunk__41037_41043 = null;var count__41038_41044 = (0);var i__41039_41045 = (0);while(true){
if((i__41039_41045 < count__41038_41044))
{var vec__41040_41046 = chunk__41037_41043.cljs$core$IIndexed$_nth$arity$2(null,i__41039_41045);var name_41047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41040_41046,(0),null);var value_41048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41040_41046,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_41047,cljs.core.array_seq([value_41048], 0));
{
var G__41049 = seq__41036_41042;
var G__41050 = chunk__41037_41043;
var G__41051 = count__41038_41044;
var G__41052 = (i__41039_41045 + (1));
seq__41036_41042 = G__41049;
chunk__41037_41043 = G__41050;
count__41038_41044 = G__41051;
i__41039_41045 = G__41052;
continue;
}
} else
{var temp__4126__auto___41053 = cljs.core.seq(seq__41036_41042);if(temp__4126__auto___41053)
{var seq__41036_41054__$1 = temp__4126__auto___41053;if(cljs.core.chunked_seq_QMARK_(seq__41036_41054__$1))
{var c__4299__auto___41055 = cljs.core.chunk_first(seq__41036_41054__$1);{
var G__41056 = cljs.core.chunk_rest(seq__41036_41054__$1);
var G__41057 = c__4299__auto___41055;
var G__41058 = cljs.core.count(c__4299__auto___41055);
var G__41059 = (0);
seq__41036_41042 = G__41056;
chunk__41037_41043 = G__41057;
count__41038_41044 = G__41058;
i__41039_41045 = G__41059;
continue;
}
} else
{var vec__41041_41060 = cljs.core.first(seq__41036_41054__$1);var name_41061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041_41060,(0),null);var value_41062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41041_41060,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_41061,cljs.core.array_seq([value_41062], 0));
{
var G__41063 = cljs.core.next(seq__41036_41054__$1);
var G__41064 = null;
var G__41065 = (0);
var G__41066 = (0);
seq__41036_41042 = G__41063;
chunk__41037_41043 = G__41064;
count__41038_41044 = G__41065;
i__41039_41045 = G__41066;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__41073_41079 = cljs.core.seq(attrs);var chunk__41074_41080 = null;var count__41075_41081 = (0);var i__41076_41082 = (0);while(true){
if((i__41076_41082 < count__41075_41081))
{var vec__41077_41083 = chunk__41074_41080.cljs$core$IIndexed$_nth$arity$2(null,i__41076_41082);var name_41084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077_41083,(0),null);var value_41085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41077_41083,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_41084,cljs.core.array_seq([value_41085], 0));
{
var G__41086 = seq__41073_41079;
var G__41087 = chunk__41074_41080;
var G__41088 = count__41075_41081;
var G__41089 = (i__41076_41082 + (1));
seq__41073_41079 = G__41086;
chunk__41074_41080 = G__41087;
count__41075_41081 = G__41088;
i__41076_41082 = G__41089;
continue;
}
} else
{var temp__4126__auto___41090 = cljs.core.seq(seq__41073_41079);if(temp__4126__auto___41090)
{var seq__41073_41091__$1 = temp__4126__auto___41090;if(cljs.core.chunked_seq_QMARK_(seq__41073_41091__$1))
{var c__4299__auto___41092 = cljs.core.chunk_first(seq__41073_41091__$1);{
var G__41093 = cljs.core.chunk_rest(seq__41073_41091__$1);
var G__41094 = c__4299__auto___41092;
var G__41095 = cljs.core.count(c__4299__auto___41092);
var G__41096 = (0);
seq__41073_41079 = G__41093;
chunk__41074_41080 = G__41094;
count__41075_41081 = G__41095;
i__41076_41082 = G__41096;
continue;
}
} else
{var vec__41078_41097 = cljs.core.first(seq__41073_41091__$1);var name_41098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41078_41097,(0),null);var value_41099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41078_41097,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_41098,cljs.core.array_seq([value_41099], 0));
{
var G__41100 = cljs.core.next(seq__41073_41091__$1);
var G__41101 = null;
var G__41102 = (0);
var G__41103 = (0);
seq__41073_41079 = G__41100;
chunk__41074_41080 = G__41101;
count__41075_41081 = G__41102;
i__41076_41082 = G__41103;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__41108_41112 = cljs.core.seq(domina.nodes(content));var chunk__41109_41113 = null;var count__41110_41114 = (0);var i__41111_41115 = (0);while(true){
if((i__41111_41115 < count__41110_41114))
{var node_41116 = chunk__41109_41113.cljs$core$IIndexed$_nth$arity$2(null,i__41111_41115);goog.dom.classes.add(node_41116,class$);
{
var G__41117 = seq__41108_41112;
var G__41118 = chunk__41109_41113;
var G__41119 = count__41110_41114;
var G__41120 = (i__41111_41115 + (1));
seq__41108_41112 = G__41117;
chunk__41109_41113 = G__41118;
count__41110_41114 = G__41119;
i__41111_41115 = G__41120;
continue;
}
} else
{var temp__4126__auto___41121 = cljs.core.seq(seq__41108_41112);if(temp__4126__auto___41121)
{var seq__41108_41122__$1 = temp__4126__auto___41121;if(cljs.core.chunked_seq_QMARK_(seq__41108_41122__$1))
{var c__4299__auto___41123 = cljs.core.chunk_first(seq__41108_41122__$1);{
var G__41124 = cljs.core.chunk_rest(seq__41108_41122__$1);
var G__41125 = c__4299__auto___41123;
var G__41126 = cljs.core.count(c__4299__auto___41123);
var G__41127 = (0);
seq__41108_41112 = G__41124;
chunk__41109_41113 = G__41125;
count__41110_41114 = G__41126;
i__41111_41115 = G__41127;
continue;
}
} else
{var node_41128 = cljs.core.first(seq__41108_41122__$1);goog.dom.classes.add(node_41128,class$);
{
var G__41129 = cljs.core.next(seq__41108_41122__$1);
var G__41130 = null;
var G__41131 = (0);
var G__41132 = (0);
seq__41108_41112 = G__41129;
chunk__41109_41113 = G__41130;
count__41110_41114 = G__41131;
i__41111_41115 = G__41132;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__41137_41141 = cljs.core.seq(domina.nodes(content));var chunk__41138_41142 = null;var count__41139_41143 = (0);var i__41140_41144 = (0);while(true){
if((i__41140_41144 < count__41139_41143))
{var node_41145 = chunk__41138_41142.cljs$core$IIndexed$_nth$arity$2(null,i__41140_41144);goog.dom.classes.remove(node_41145,class$);
{
var G__41146 = seq__41137_41141;
var G__41147 = chunk__41138_41142;
var G__41148 = count__41139_41143;
var G__41149 = (i__41140_41144 + (1));
seq__41137_41141 = G__41146;
chunk__41138_41142 = G__41147;
count__41139_41143 = G__41148;
i__41140_41144 = G__41149;
continue;
}
} else
{var temp__4126__auto___41150 = cljs.core.seq(seq__41137_41141);if(temp__4126__auto___41150)
{var seq__41137_41151__$1 = temp__4126__auto___41150;if(cljs.core.chunked_seq_QMARK_(seq__41137_41151__$1))
{var c__4299__auto___41152 = cljs.core.chunk_first(seq__41137_41151__$1);{
var G__41153 = cljs.core.chunk_rest(seq__41137_41151__$1);
var G__41154 = c__4299__auto___41152;
var G__41155 = cljs.core.count(c__4299__auto___41152);
var G__41156 = (0);
seq__41137_41141 = G__41153;
chunk__41138_41142 = G__41154;
count__41139_41143 = G__41155;
i__41140_41144 = G__41156;
continue;
}
} else
{var node_41157 = cljs.core.first(seq__41137_41151__$1);goog.dom.classes.remove(node_41157,class$);
{
var G__41158 = cljs.core.next(seq__41137_41151__$1);
var G__41159 = null;
var G__41160 = (0);
var G__41161 = (0);
seq__41137_41141 = G__41158;
chunk__41138_41142 = G__41159;
count__41139_41143 = G__41160;
i__41140_41144 = G__41161;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__41166_41170 = cljs.core.seq(domina.nodes(content));var chunk__41167_41171 = null;var count__41168_41172 = (0);var i__41169_41173 = (0);while(true){
if((i__41169_41173 < count__41168_41172))
{var node_41174 = chunk__41167_41171.cljs$core$IIndexed$_nth$arity$2(null,i__41169_41173);goog.dom.classes.toggle(node_41174,class$);
{
var G__41175 = seq__41166_41170;
var G__41176 = chunk__41167_41171;
var G__41177 = count__41168_41172;
var G__41178 = (i__41169_41173 + (1));
seq__41166_41170 = G__41175;
chunk__41167_41171 = G__41176;
count__41168_41172 = G__41177;
i__41169_41173 = G__41178;
continue;
}
} else
{var temp__4126__auto___41179 = cljs.core.seq(seq__41166_41170);if(temp__4126__auto___41179)
{var seq__41166_41180__$1 = temp__4126__auto___41179;if(cljs.core.chunked_seq_QMARK_(seq__41166_41180__$1))
{var c__4299__auto___41181 = cljs.core.chunk_first(seq__41166_41180__$1);{
var G__41182 = cljs.core.chunk_rest(seq__41166_41180__$1);
var G__41183 = c__4299__auto___41181;
var G__41184 = cljs.core.count(c__4299__auto___41181);
var G__41185 = (0);
seq__41166_41170 = G__41182;
chunk__41167_41171 = G__41183;
count__41168_41172 = G__41184;
i__41169_41173 = G__41185;
continue;
}
} else
{var node_41186 = cljs.core.first(seq__41166_41180__$1);goog.dom.classes.toggle(node_41186,class$);
{
var G__41187 = cljs.core.next(seq__41166_41180__$1);
var G__41188 = null;
var G__41189 = (0);
var G__41190 = (0);
seq__41166_41170 = G__41187;
chunk__41167_41171 = G__41188;
count__41168_41172 = G__41189;
i__41169_41173 = G__41190;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_41199__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__41195_41200 = cljs.core.seq(domina.nodes(content));var chunk__41196_41201 = null;var count__41197_41202 = (0);var i__41198_41203 = (0);while(true){
if((i__41198_41203 < count__41197_41202))
{var node_41204 = chunk__41196_41201.cljs$core$IIndexed$_nth$arity$2(null,i__41198_41203);goog.dom.classes.set(node_41204,classes_41199__$1);
{
var G__41205 = seq__41195_41200;
var G__41206 = chunk__41196_41201;
var G__41207 = count__41197_41202;
var G__41208 = (i__41198_41203 + (1));
seq__41195_41200 = G__41205;
chunk__41196_41201 = G__41206;
count__41197_41202 = G__41207;
i__41198_41203 = G__41208;
continue;
}
} else
{var temp__4126__auto___41209 = cljs.core.seq(seq__41195_41200);if(temp__4126__auto___41209)
{var seq__41195_41210__$1 = temp__4126__auto___41209;if(cljs.core.chunked_seq_QMARK_(seq__41195_41210__$1))
{var c__4299__auto___41211 = cljs.core.chunk_first(seq__41195_41210__$1);{
var G__41212 = cljs.core.chunk_rest(seq__41195_41210__$1);
var G__41213 = c__4299__auto___41211;
var G__41214 = cljs.core.count(c__4299__auto___41211);
var G__41215 = (0);
seq__41195_41200 = G__41212;
chunk__41196_41201 = G__41213;
count__41197_41202 = G__41214;
i__41198_41203 = G__41215;
continue;
}
} else
{var node_41216 = cljs.core.first(seq__41195_41210__$1);goog.dom.classes.set(node_41216,classes_41199__$1);
{
var G__41217 = cljs.core.next(seq__41195_41210__$1);
var G__41218 = null;
var G__41219 = (0);
var G__41220 = (0);
seq__41195_41200 = G__41217;
chunk__41196_41201 = G__41218;
count__41197_41202 = G__41219;
i__41198_41203 = G__41220;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__41225_41229 = cljs.core.seq(domina.nodes(content));var chunk__41226_41230 = null;var count__41227_41231 = (0);var i__41228_41232 = (0);while(true){
if((i__41228_41232 < count__41227_41231))
{var node_41233 = chunk__41226_41230.cljs$core$IIndexed$_nth$arity$2(null,i__41228_41232);goog.dom.setTextContent(node_41233,value);
{
var G__41234 = seq__41225_41229;
var G__41235 = chunk__41226_41230;
var G__41236 = count__41227_41231;
var G__41237 = (i__41228_41232 + (1));
seq__41225_41229 = G__41234;
chunk__41226_41230 = G__41235;
count__41227_41231 = G__41236;
i__41228_41232 = G__41237;
continue;
}
} else
{var temp__4126__auto___41238 = cljs.core.seq(seq__41225_41229);if(temp__4126__auto___41238)
{var seq__41225_41239__$1 = temp__4126__auto___41238;if(cljs.core.chunked_seq_QMARK_(seq__41225_41239__$1))
{var c__4299__auto___41240 = cljs.core.chunk_first(seq__41225_41239__$1);{
var G__41241 = cljs.core.chunk_rest(seq__41225_41239__$1);
var G__41242 = c__4299__auto___41240;
var G__41243 = cljs.core.count(c__4299__auto___41240);
var G__41244 = (0);
seq__41225_41229 = G__41241;
chunk__41226_41230 = G__41242;
count__41227_41231 = G__41243;
i__41228_41232 = G__41244;
continue;
}
} else
{var node_41245 = cljs.core.first(seq__41225_41239__$1);goog.dom.setTextContent(node_41245,value);
{
var G__41246 = cljs.core.next(seq__41225_41239__$1);
var G__41247 = null;
var G__41248 = (0);
var G__41249 = (0);
seq__41225_41229 = G__41246;
chunk__41226_41230 = G__41247;
count__41227_41231 = G__41248;
i__41228_41232 = G__41249;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__41254_41258 = cljs.core.seq(domina.nodes(content));var chunk__41255_41259 = null;var count__41256_41260 = (0);var i__41257_41261 = (0);while(true){
if((i__41257_41261 < count__41256_41260))
{var node_41262 = chunk__41255_41259.cljs$core$IIndexed$_nth$arity$2(null,i__41257_41261);goog.dom.forms.setValue(node_41262,value);
{
var G__41263 = seq__41254_41258;
var G__41264 = chunk__41255_41259;
var G__41265 = count__41256_41260;
var G__41266 = (i__41257_41261 + (1));
seq__41254_41258 = G__41263;
chunk__41255_41259 = G__41264;
count__41256_41260 = G__41265;
i__41257_41261 = G__41266;
continue;
}
} else
{var temp__4126__auto___41267 = cljs.core.seq(seq__41254_41258);if(temp__4126__auto___41267)
{var seq__41254_41268__$1 = temp__4126__auto___41267;if(cljs.core.chunked_seq_QMARK_(seq__41254_41268__$1))
{var c__4299__auto___41269 = cljs.core.chunk_first(seq__41254_41268__$1);{
var G__41270 = cljs.core.chunk_rest(seq__41254_41268__$1);
var G__41271 = c__4299__auto___41269;
var G__41272 = cljs.core.count(c__4299__auto___41269);
var G__41273 = (0);
seq__41254_41258 = G__41270;
chunk__41255_41259 = G__41271;
count__41256_41260 = G__41272;
i__41257_41261 = G__41273;
continue;
}
} else
{var node_41274 = cljs.core.first(seq__41254_41268__$1);goog.dom.forms.setValue(node_41274,value);
{
var G__41275 = cljs.core.next(seq__41254_41268__$1);
var G__41276 = null;
var G__41277 = (0);
var G__41278 = (0);
seq__41254_41258 = G__41275;
chunk__41255_41259 = G__41276;
count__41256_41260 = G__41277;
i__41257_41261 = G__41278;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_41289 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__41285_41290 = cljs.core.seq(domina.nodes(content));var chunk__41286_41291 = null;var count__41287_41292 = (0);var i__41288_41293 = (0);while(true){
if((i__41288_41293 < count__41287_41292))
{var node_41294 = chunk__41286_41291.cljs$core$IIndexed$_nth$arity$2(null,i__41288_41293);node_41294.innerHTML = value_41289;
{
var G__41295 = seq__41285_41290;
var G__41296 = chunk__41286_41291;
var G__41297 = count__41287_41292;
var G__41298 = (i__41288_41293 + (1));
seq__41285_41290 = G__41295;
chunk__41286_41291 = G__41296;
count__41287_41292 = G__41297;
i__41288_41293 = G__41298;
continue;
}
} else
{var temp__4126__auto___41299 = cljs.core.seq(seq__41285_41290);if(temp__4126__auto___41299)
{var seq__41285_41300__$1 = temp__4126__auto___41299;if(cljs.core.chunked_seq_QMARK_(seq__41285_41300__$1))
{var c__4299__auto___41301 = cljs.core.chunk_first(seq__41285_41300__$1);{
var G__41302 = cljs.core.chunk_rest(seq__41285_41300__$1);
var G__41303 = c__4299__auto___41301;
var G__41304 = cljs.core.count(c__4299__auto___41301);
var G__41305 = (0);
seq__41285_41290 = G__41302;
chunk__41286_41291 = G__41303;
count__41287_41292 = G__41304;
i__41288_41293 = G__41305;
continue;
}
} else
{var node_41306 = cljs.core.first(seq__41285_41300__$1);node_41306.innerHTML = value_41289;
{
var G__41307 = cljs.core.next(seq__41285_41300__$1);
var G__41308 = null;
var G__41309 = (0);
var G__41310 = (0);
seq__41285_41290 = G__41307;
chunk__41286_41291 = G__41308;
count__41287_41292 = G__41309;
i__41288_41293 = G__41310;
continue;
}
}
} else
{}
}
break;
}
}catch (e41284){if((e41284 instanceof Error))
{var e_41311 = e41284;domina.replace_children_BANG_(content,value_41289);
} else
{if(cljs.core.constant$keyword$736)
{throw e41284;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__41318_41322 = cljs.core.seq(children);var chunk__41319_41323 = null;var count__41320_41324 = (0);var i__41321_41325 = (0);while(true){
if((i__41321_41325 < count__41320_41324))
{var child_41326 = chunk__41319_41323.cljs$core$IIndexed$_nth$arity$2(null,i__41321_41325);frag.appendChild(child_41326);
{
var G__41327 = seq__41318_41322;
var G__41328 = chunk__41319_41323;
var G__41329 = count__41320_41324;
var G__41330 = (i__41321_41325 + (1));
seq__41318_41322 = G__41327;
chunk__41319_41323 = G__41328;
count__41320_41324 = G__41329;
i__41321_41325 = G__41330;
continue;
}
} else
{var temp__4126__auto___41331 = cljs.core.seq(seq__41318_41322);if(temp__4126__auto___41331)
{var seq__41318_41332__$1 = temp__4126__auto___41331;if(cljs.core.chunked_seq_QMARK_(seq__41318_41332__$1))
{var c__4299__auto___41333 = cljs.core.chunk_first(seq__41318_41332__$1);{
var G__41334 = cljs.core.chunk_rest(seq__41318_41332__$1);
var G__41335 = c__4299__auto___41333;
var G__41336 = cljs.core.count(c__4299__auto___41333);
var G__41337 = (0);
seq__41318_41322 = G__41334;
chunk__41319_41323 = G__41335;
count__41320_41324 = G__41336;
i__41321_41325 = G__41337;
continue;
}
} else
{var child_41338 = cljs.core.first(seq__41318_41332__$1);frag.appendChild(child_41338);
{
var G__41339 = cljs.core.next(seq__41318_41332__$1);
var G__41340 = null;
var G__41341 = (0);
var G__41342 = (0);
seq__41318_41322 = G__41339;
chunk__41319_41323 = G__41340;
count__41320_41324 = G__41341;
i__41321_41325 = G__41342;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__41312_SHARP_,p2__41313_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__41312_SHARP_,p2__41313_SHARP_) : f.call(null,p1__41312_SHARP_,p2__41313_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__41344 = list_thing;if(G__41344)
{var bit__4193__auto__ = (G__41344.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__41344.cljs$core$ISeqable$))
{return true;
} else
{if((!G__41344.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41344);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41344);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$737)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__41345 = content;if(G__41345)
{var bit__4193__auto__ = (G__41345.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__41345.cljs$core$ISeqable$))
{return true;
} else
{if((!G__41345.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41345);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41345);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$737)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__41346 = content;if(G__41346)
{var bit__4193__auto__ = (G__41346.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__41346.cljs$core$ISeqable$))
{return true;
} else
{if((!G__41346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41346);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__41346);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$737)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
