// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_31925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31926 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_31927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_31927,opt_wrapper_31925,table_section_wrapper_31926,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_31925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_31926,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_31926,cell_wrapper_31927,table_section_wrapper_31926,table_section_wrapper_31926]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__31932 = cljs.core.seq.call(null,tbody);var chunk__31933 = null;var count__31934 = (0);var i__31935 = (0);while(true){
if((i__31935 < count__31934))
{var child = cljs.core._nth.call(null,chunk__31933,i__31935);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31936 = seq__31932;
var G__31937 = chunk__31933;
var G__31938 = count__31934;
var G__31939 = (i__31935 + (1));
seq__31932 = G__31936;
chunk__31933 = G__31937;
count__31934 = G__31938;
i__31935 = G__31939;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31932);if(temp__4126__auto__)
{var seq__31932__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31932__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__31932__$1);{
var G__31940 = cljs.core.chunk_rest.call(null,seq__31932__$1);
var G__31941 = c__4314__auto__;
var G__31942 = cljs.core.count.call(null,c__4314__auto__);
var G__31943 = (0);
seq__31932 = G__31940;
chunk__31933 = G__31941;
count__31934 = G__31942;
i__31935 = G__31943;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31932__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31944 = cljs.core.next.call(null,seq__31932__$1);
var G__31945 = null;
var G__31946 = (0);
var G__31947 = (0);
seq__31932 = G__31944;
chunk__31933 = G__31945;
count__31934 = G__31946;
i__31935 = G__31947;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__31949 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31949,(0),null);var start_wrap = cljs.core.nth.call(null,vec__31949,(1),null);var end_wrap = cljs.core.nth.call(null,vec__31949,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__31950 = wrapper.lastChild;
var G__31951 = (level - (1));
wrapper = G__31950;
level = G__31951;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj31953 = {};return obj31953;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__31954){
var mesg = cljs.core.seq(arglist__31954);
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
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__31955){
var mesg = cljs.core.seq(arglist__31955);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__31956){
var contents = cljs.core.seq(arglist__31956);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31957_SHARP_){return p1__31957_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31958_SHARP_,p2__31959_SHARP_){return goog.dom.insertChildAt(p1__31958_SHARP_,p2__31959_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31961_SHARP_,p2__31960_SHARP_){return goog.dom.insertSiblingBefore(p2__31960_SHARP_,p1__31961_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31963_SHARP_,p2__31962_SHARP_){return goog.dom.insertSiblingAfter(p2__31962_SHARP_,p1__31963_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31965_SHARP_,p2__31964_SHARP_){return goog.dom.replaceNode(p2__31964_SHARP_,p1__31965_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__31970_31974 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31971_31975 = null;var count__31972_31976 = (0);var i__31973_31977 = (0);while(true){
if((i__31973_31977 < count__31972_31976))
{var n_31978 = cljs.core._nth.call(null,chunk__31971_31975,i__31973_31977);goog.style.setStyle(n_31978,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31979 = seq__31970_31974;
var G__31980 = chunk__31971_31975;
var G__31981 = count__31972_31976;
var G__31982 = (i__31973_31977 + (1));
seq__31970_31974 = G__31979;
chunk__31971_31975 = G__31980;
count__31972_31976 = G__31981;
i__31973_31977 = G__31982;
continue;
}
} else
{var temp__4126__auto___31983 = cljs.core.seq.call(null,seq__31970_31974);if(temp__4126__auto___31983)
{var seq__31970_31984__$1 = temp__4126__auto___31983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31970_31984__$1))
{var c__4314__auto___31985 = cljs.core.chunk_first.call(null,seq__31970_31984__$1);{
var G__31986 = cljs.core.chunk_rest.call(null,seq__31970_31984__$1);
var G__31987 = c__4314__auto___31985;
var G__31988 = cljs.core.count.call(null,c__4314__auto___31985);
var G__31989 = (0);
seq__31970_31974 = G__31986;
chunk__31971_31975 = G__31987;
count__31972_31976 = G__31988;
i__31973_31977 = G__31989;
continue;
}
} else
{var n_31990 = cljs.core.first.call(null,seq__31970_31984__$1);goog.style.setStyle(n_31990,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31991 = cljs.core.next.call(null,seq__31970_31984__$1);
var G__31992 = null;
var G__31993 = (0);
var G__31994 = (0);
seq__31970_31974 = G__31991;
chunk__31971_31975 = G__31992;
count__31972_31976 = G__31993;
i__31973_31977 = G__31994;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31995){
var content = cljs.core.first(arglist__31995);
arglist__31995 = cljs.core.next(arglist__31995);
var name = cljs.core.first(arglist__31995);
var value = cljs.core.rest(arglist__31995);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32000_32004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32001_32005 = null;var count__32002_32006 = (0);var i__32003_32007 = (0);while(true){
if((i__32003_32007 < count__32002_32006))
{var n_32008 = cljs.core._nth.call(null,chunk__32001_32005,i__32003_32007);n_32008.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32009 = seq__32000_32004;
var G__32010 = chunk__32001_32005;
var G__32011 = count__32002_32006;
var G__32012 = (i__32003_32007 + (1));
seq__32000_32004 = G__32009;
chunk__32001_32005 = G__32010;
count__32002_32006 = G__32011;
i__32003_32007 = G__32012;
continue;
}
} else
{var temp__4126__auto___32013 = cljs.core.seq.call(null,seq__32000_32004);if(temp__4126__auto___32013)
{var seq__32000_32014__$1 = temp__4126__auto___32013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32000_32014__$1))
{var c__4314__auto___32015 = cljs.core.chunk_first.call(null,seq__32000_32014__$1);{
var G__32016 = cljs.core.chunk_rest.call(null,seq__32000_32014__$1);
var G__32017 = c__4314__auto___32015;
var G__32018 = cljs.core.count.call(null,c__4314__auto___32015);
var G__32019 = (0);
seq__32000_32004 = G__32016;
chunk__32001_32005 = G__32017;
count__32002_32006 = G__32018;
i__32003_32007 = G__32019;
continue;
}
} else
{var n_32020 = cljs.core.first.call(null,seq__32000_32014__$1);n_32020.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32021 = cljs.core.next.call(null,seq__32000_32014__$1);
var G__32022 = null;
var G__32023 = (0);
var G__32024 = (0);
seq__32000_32004 = G__32021;
chunk__32001_32005 = G__32022;
count__32002_32006 = G__32023;
i__32003_32007 = G__32024;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32025){
var content = cljs.core.first(arglist__32025);
arglist__32025 = cljs.core.next(arglist__32025);
var name = cljs.core.first(arglist__32025);
var value = cljs.core.rest(arglist__32025);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32030_32034 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32031_32035 = null;var count__32032_32036 = (0);var i__32033_32037 = (0);while(true){
if((i__32033_32037 < count__32032_32036))
{var n_32038 = cljs.core._nth.call(null,chunk__32031_32035,i__32033_32037);n_32038.removeAttribute(cljs.core.name.call(null,name));
{
var G__32039 = seq__32030_32034;
var G__32040 = chunk__32031_32035;
var G__32041 = count__32032_32036;
var G__32042 = (i__32033_32037 + (1));
seq__32030_32034 = G__32039;
chunk__32031_32035 = G__32040;
count__32032_32036 = G__32041;
i__32033_32037 = G__32042;
continue;
}
} else
{var temp__4126__auto___32043 = cljs.core.seq.call(null,seq__32030_32034);if(temp__4126__auto___32043)
{var seq__32030_32044__$1 = temp__4126__auto___32043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32030_32044__$1))
{var c__4314__auto___32045 = cljs.core.chunk_first.call(null,seq__32030_32044__$1);{
var G__32046 = cljs.core.chunk_rest.call(null,seq__32030_32044__$1);
var G__32047 = c__4314__auto___32045;
var G__32048 = cljs.core.count.call(null,c__4314__auto___32045);
var G__32049 = (0);
seq__32030_32034 = G__32046;
chunk__32031_32035 = G__32047;
count__32032_32036 = G__32048;
i__32033_32037 = G__32049;
continue;
}
} else
{var n_32050 = cljs.core.first.call(null,seq__32030_32044__$1);n_32050.removeAttribute(cljs.core.name.call(null,name));
{
var G__32051 = cljs.core.next.call(null,seq__32030_32044__$1);
var G__32052 = null;
var G__32053 = (0);
var G__32054 = (0);
seq__32030_32034 = G__32051;
chunk__32031_32035 = G__32052;
count__32032_32036 = G__32053;
i__32033_32037 = G__32054;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32056 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32056,(0),null);var v = cljs.core.nth.call(null,vec__32056,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__32057_SHARP_){var attr = attrs__$1.item(p1__32057_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32064_32070 = cljs.core.seq.call(null,styles);var chunk__32065_32071 = null;var count__32066_32072 = (0);var i__32067_32073 = (0);while(true){
if((i__32067_32073 < count__32066_32072))
{var vec__32068_32074 = cljs.core._nth.call(null,chunk__32065_32071,i__32067_32073);var name_32075 = cljs.core.nth.call(null,vec__32068_32074,(0),null);var value_32076 = cljs.core.nth.call(null,vec__32068_32074,(1),null);domina.set_style_BANG_.call(null,content,name_32075,value_32076);
{
var G__32077 = seq__32064_32070;
var G__32078 = chunk__32065_32071;
var G__32079 = count__32066_32072;
var G__32080 = (i__32067_32073 + (1));
seq__32064_32070 = G__32077;
chunk__32065_32071 = G__32078;
count__32066_32072 = G__32079;
i__32067_32073 = G__32080;
continue;
}
} else
{var temp__4126__auto___32081 = cljs.core.seq.call(null,seq__32064_32070);if(temp__4126__auto___32081)
{var seq__32064_32082__$1 = temp__4126__auto___32081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32064_32082__$1))
{var c__4314__auto___32083 = cljs.core.chunk_first.call(null,seq__32064_32082__$1);{
var G__32084 = cljs.core.chunk_rest.call(null,seq__32064_32082__$1);
var G__32085 = c__4314__auto___32083;
var G__32086 = cljs.core.count.call(null,c__4314__auto___32083);
var G__32087 = (0);
seq__32064_32070 = G__32084;
chunk__32065_32071 = G__32085;
count__32066_32072 = G__32086;
i__32067_32073 = G__32087;
continue;
}
} else
{var vec__32069_32088 = cljs.core.first.call(null,seq__32064_32082__$1);var name_32089 = cljs.core.nth.call(null,vec__32069_32088,(0),null);var value_32090 = cljs.core.nth.call(null,vec__32069_32088,(1),null);domina.set_style_BANG_.call(null,content,name_32089,value_32090);
{
var G__32091 = cljs.core.next.call(null,seq__32064_32082__$1);
var G__32092 = null;
var G__32093 = (0);
var G__32094 = (0);
seq__32064_32070 = G__32091;
chunk__32065_32071 = G__32092;
count__32066_32072 = G__32093;
i__32067_32073 = G__32094;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32101_32107 = cljs.core.seq.call(null,attrs);var chunk__32102_32108 = null;var count__32103_32109 = (0);var i__32104_32110 = (0);while(true){
if((i__32104_32110 < count__32103_32109))
{var vec__32105_32111 = cljs.core._nth.call(null,chunk__32102_32108,i__32104_32110);var name_32112 = cljs.core.nth.call(null,vec__32105_32111,(0),null);var value_32113 = cljs.core.nth.call(null,vec__32105_32111,(1),null);domina.set_attr_BANG_.call(null,content,name_32112,value_32113);
{
var G__32114 = seq__32101_32107;
var G__32115 = chunk__32102_32108;
var G__32116 = count__32103_32109;
var G__32117 = (i__32104_32110 + (1));
seq__32101_32107 = G__32114;
chunk__32102_32108 = G__32115;
count__32103_32109 = G__32116;
i__32104_32110 = G__32117;
continue;
}
} else
{var temp__4126__auto___32118 = cljs.core.seq.call(null,seq__32101_32107);if(temp__4126__auto___32118)
{var seq__32101_32119__$1 = temp__4126__auto___32118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32101_32119__$1))
{var c__4314__auto___32120 = cljs.core.chunk_first.call(null,seq__32101_32119__$1);{
var G__32121 = cljs.core.chunk_rest.call(null,seq__32101_32119__$1);
var G__32122 = c__4314__auto___32120;
var G__32123 = cljs.core.count.call(null,c__4314__auto___32120);
var G__32124 = (0);
seq__32101_32107 = G__32121;
chunk__32102_32108 = G__32122;
count__32103_32109 = G__32123;
i__32104_32110 = G__32124;
continue;
}
} else
{var vec__32106_32125 = cljs.core.first.call(null,seq__32101_32119__$1);var name_32126 = cljs.core.nth.call(null,vec__32106_32125,(0),null);var value_32127 = cljs.core.nth.call(null,vec__32106_32125,(1),null);domina.set_attr_BANG_.call(null,content,name_32126,value_32127);
{
var G__32128 = cljs.core.next.call(null,seq__32101_32119__$1);
var G__32129 = null;
var G__32130 = (0);
var G__32131 = (0);
seq__32101_32107 = G__32128;
chunk__32102_32108 = G__32129;
count__32103_32109 = G__32130;
i__32104_32110 = G__32131;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32136_32140 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32137_32141 = null;var count__32138_32142 = (0);var i__32139_32143 = (0);while(true){
if((i__32139_32143 < count__32138_32142))
{var node_32144 = cljs.core._nth.call(null,chunk__32137_32141,i__32139_32143);goog.dom.classes.add(node_32144,class$);
{
var G__32145 = seq__32136_32140;
var G__32146 = chunk__32137_32141;
var G__32147 = count__32138_32142;
var G__32148 = (i__32139_32143 + (1));
seq__32136_32140 = G__32145;
chunk__32137_32141 = G__32146;
count__32138_32142 = G__32147;
i__32139_32143 = G__32148;
continue;
}
} else
{var temp__4126__auto___32149 = cljs.core.seq.call(null,seq__32136_32140);if(temp__4126__auto___32149)
{var seq__32136_32150__$1 = temp__4126__auto___32149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32136_32150__$1))
{var c__4314__auto___32151 = cljs.core.chunk_first.call(null,seq__32136_32150__$1);{
var G__32152 = cljs.core.chunk_rest.call(null,seq__32136_32150__$1);
var G__32153 = c__4314__auto___32151;
var G__32154 = cljs.core.count.call(null,c__4314__auto___32151);
var G__32155 = (0);
seq__32136_32140 = G__32152;
chunk__32137_32141 = G__32153;
count__32138_32142 = G__32154;
i__32139_32143 = G__32155;
continue;
}
} else
{var node_32156 = cljs.core.first.call(null,seq__32136_32150__$1);goog.dom.classes.add(node_32156,class$);
{
var G__32157 = cljs.core.next.call(null,seq__32136_32150__$1);
var G__32158 = null;
var G__32159 = (0);
var G__32160 = (0);
seq__32136_32140 = G__32157;
chunk__32137_32141 = G__32158;
count__32138_32142 = G__32159;
i__32139_32143 = G__32160;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32165_32169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32166_32170 = null;var count__32167_32171 = (0);var i__32168_32172 = (0);while(true){
if((i__32168_32172 < count__32167_32171))
{var node_32173 = cljs.core._nth.call(null,chunk__32166_32170,i__32168_32172);goog.dom.classes.remove(node_32173,class$);
{
var G__32174 = seq__32165_32169;
var G__32175 = chunk__32166_32170;
var G__32176 = count__32167_32171;
var G__32177 = (i__32168_32172 + (1));
seq__32165_32169 = G__32174;
chunk__32166_32170 = G__32175;
count__32167_32171 = G__32176;
i__32168_32172 = G__32177;
continue;
}
} else
{var temp__4126__auto___32178 = cljs.core.seq.call(null,seq__32165_32169);if(temp__4126__auto___32178)
{var seq__32165_32179__$1 = temp__4126__auto___32178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32165_32179__$1))
{var c__4314__auto___32180 = cljs.core.chunk_first.call(null,seq__32165_32179__$1);{
var G__32181 = cljs.core.chunk_rest.call(null,seq__32165_32179__$1);
var G__32182 = c__4314__auto___32180;
var G__32183 = cljs.core.count.call(null,c__4314__auto___32180);
var G__32184 = (0);
seq__32165_32169 = G__32181;
chunk__32166_32170 = G__32182;
count__32167_32171 = G__32183;
i__32168_32172 = G__32184;
continue;
}
} else
{var node_32185 = cljs.core.first.call(null,seq__32165_32179__$1);goog.dom.classes.remove(node_32185,class$);
{
var G__32186 = cljs.core.next.call(null,seq__32165_32179__$1);
var G__32187 = null;
var G__32188 = (0);
var G__32189 = (0);
seq__32165_32169 = G__32186;
chunk__32166_32170 = G__32187;
count__32167_32171 = G__32188;
i__32168_32172 = G__32189;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32194_32198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32195_32199 = null;var count__32196_32200 = (0);var i__32197_32201 = (0);while(true){
if((i__32197_32201 < count__32196_32200))
{var node_32202 = cljs.core._nth.call(null,chunk__32195_32199,i__32197_32201);goog.dom.classes.toggle(node_32202,class$);
{
var G__32203 = seq__32194_32198;
var G__32204 = chunk__32195_32199;
var G__32205 = count__32196_32200;
var G__32206 = (i__32197_32201 + (1));
seq__32194_32198 = G__32203;
chunk__32195_32199 = G__32204;
count__32196_32200 = G__32205;
i__32197_32201 = G__32206;
continue;
}
} else
{var temp__4126__auto___32207 = cljs.core.seq.call(null,seq__32194_32198);if(temp__4126__auto___32207)
{var seq__32194_32208__$1 = temp__4126__auto___32207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32194_32208__$1))
{var c__4314__auto___32209 = cljs.core.chunk_first.call(null,seq__32194_32208__$1);{
var G__32210 = cljs.core.chunk_rest.call(null,seq__32194_32208__$1);
var G__32211 = c__4314__auto___32209;
var G__32212 = cljs.core.count.call(null,c__4314__auto___32209);
var G__32213 = (0);
seq__32194_32198 = G__32210;
chunk__32195_32199 = G__32211;
count__32196_32200 = G__32212;
i__32197_32201 = G__32213;
continue;
}
} else
{var node_32214 = cljs.core.first.call(null,seq__32194_32208__$1);goog.dom.classes.toggle(node_32214,class$);
{
var G__32215 = cljs.core.next.call(null,seq__32194_32208__$1);
var G__32216 = null;
var G__32217 = (0);
var G__32218 = (0);
seq__32194_32198 = G__32215;
chunk__32195_32199 = G__32216;
count__32196_32200 = G__32217;
i__32197_32201 = G__32218;
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
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32227__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__32223_32228 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32224_32229 = null;var count__32225_32230 = (0);var i__32226_32231 = (0);while(true){
if((i__32226_32231 < count__32225_32230))
{var node_32232 = cljs.core._nth.call(null,chunk__32224_32229,i__32226_32231);goog.dom.classes.set(node_32232,classes_32227__$1);
{
var G__32233 = seq__32223_32228;
var G__32234 = chunk__32224_32229;
var G__32235 = count__32225_32230;
var G__32236 = (i__32226_32231 + (1));
seq__32223_32228 = G__32233;
chunk__32224_32229 = G__32234;
count__32225_32230 = G__32235;
i__32226_32231 = G__32236;
continue;
}
} else
{var temp__4126__auto___32237 = cljs.core.seq.call(null,seq__32223_32228);if(temp__4126__auto___32237)
{var seq__32223_32238__$1 = temp__4126__auto___32237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32223_32238__$1))
{var c__4314__auto___32239 = cljs.core.chunk_first.call(null,seq__32223_32238__$1);{
var G__32240 = cljs.core.chunk_rest.call(null,seq__32223_32238__$1);
var G__32241 = c__4314__auto___32239;
var G__32242 = cljs.core.count.call(null,c__4314__auto___32239);
var G__32243 = (0);
seq__32223_32228 = G__32240;
chunk__32224_32229 = G__32241;
count__32225_32230 = G__32242;
i__32226_32231 = G__32243;
continue;
}
} else
{var node_32244 = cljs.core.first.call(null,seq__32223_32238__$1);goog.dom.classes.set(node_32244,classes_32227__$1);
{
var G__32245 = cljs.core.next.call(null,seq__32223_32238__$1);
var G__32246 = null;
var G__32247 = (0);
var G__32248 = (0);
seq__32223_32228 = G__32245;
chunk__32224_32229 = G__32246;
count__32225_32230 = G__32247;
i__32226_32231 = G__32248;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32253_32257 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32254_32258 = null;var count__32255_32259 = (0);var i__32256_32260 = (0);while(true){
if((i__32256_32260 < count__32255_32259))
{var node_32261 = cljs.core._nth.call(null,chunk__32254_32258,i__32256_32260);goog.dom.setTextContent(node_32261,value);
{
var G__32262 = seq__32253_32257;
var G__32263 = chunk__32254_32258;
var G__32264 = count__32255_32259;
var G__32265 = (i__32256_32260 + (1));
seq__32253_32257 = G__32262;
chunk__32254_32258 = G__32263;
count__32255_32259 = G__32264;
i__32256_32260 = G__32265;
continue;
}
} else
{var temp__4126__auto___32266 = cljs.core.seq.call(null,seq__32253_32257);if(temp__4126__auto___32266)
{var seq__32253_32267__$1 = temp__4126__auto___32266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32253_32267__$1))
{var c__4314__auto___32268 = cljs.core.chunk_first.call(null,seq__32253_32267__$1);{
var G__32269 = cljs.core.chunk_rest.call(null,seq__32253_32267__$1);
var G__32270 = c__4314__auto___32268;
var G__32271 = cljs.core.count.call(null,c__4314__auto___32268);
var G__32272 = (0);
seq__32253_32257 = G__32269;
chunk__32254_32258 = G__32270;
count__32255_32259 = G__32271;
i__32256_32260 = G__32272;
continue;
}
} else
{var node_32273 = cljs.core.first.call(null,seq__32253_32267__$1);goog.dom.setTextContent(node_32273,value);
{
var G__32274 = cljs.core.next.call(null,seq__32253_32267__$1);
var G__32275 = null;
var G__32276 = (0);
var G__32277 = (0);
seq__32253_32257 = G__32274;
chunk__32254_32258 = G__32275;
count__32255_32259 = G__32276;
i__32256_32260 = G__32277;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32282_32286 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32283_32287 = null;var count__32284_32288 = (0);var i__32285_32289 = (0);while(true){
if((i__32285_32289 < count__32284_32288))
{var node_32290 = cljs.core._nth.call(null,chunk__32283_32287,i__32285_32289);goog.dom.forms.setValue(node_32290,value);
{
var G__32291 = seq__32282_32286;
var G__32292 = chunk__32283_32287;
var G__32293 = count__32284_32288;
var G__32294 = (i__32285_32289 + (1));
seq__32282_32286 = G__32291;
chunk__32283_32287 = G__32292;
count__32284_32288 = G__32293;
i__32285_32289 = G__32294;
continue;
}
} else
{var temp__4126__auto___32295 = cljs.core.seq.call(null,seq__32282_32286);if(temp__4126__auto___32295)
{var seq__32282_32296__$1 = temp__4126__auto___32295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32282_32296__$1))
{var c__4314__auto___32297 = cljs.core.chunk_first.call(null,seq__32282_32296__$1);{
var G__32298 = cljs.core.chunk_rest.call(null,seq__32282_32296__$1);
var G__32299 = c__4314__auto___32297;
var G__32300 = cljs.core.count.call(null,c__4314__auto___32297);
var G__32301 = (0);
seq__32282_32286 = G__32298;
chunk__32283_32287 = G__32299;
count__32284_32288 = G__32300;
i__32285_32289 = G__32301;
continue;
}
} else
{var node_32302 = cljs.core.first.call(null,seq__32282_32296__$1);goog.dom.forms.setValue(node_32302,value);
{
var G__32303 = cljs.core.next.call(null,seq__32282_32296__$1);
var G__32304 = null;
var G__32305 = (0);
var G__32306 = (0);
seq__32282_32286 = G__32303;
chunk__32283_32287 = G__32304;
count__32284_32288 = G__32305;
i__32285_32289 = G__32306;
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
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_32317 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32313_32318 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32314_32319 = null;var count__32315_32320 = (0);var i__32316_32321 = (0);while(true){
if((i__32316_32321 < count__32315_32320))
{var node_32322 = cljs.core._nth.call(null,chunk__32314_32319,i__32316_32321);node_32322.innerHTML = value_32317;
{
var G__32323 = seq__32313_32318;
var G__32324 = chunk__32314_32319;
var G__32325 = count__32315_32320;
var G__32326 = (i__32316_32321 + (1));
seq__32313_32318 = G__32323;
chunk__32314_32319 = G__32324;
count__32315_32320 = G__32325;
i__32316_32321 = G__32326;
continue;
}
} else
{var temp__4126__auto___32327 = cljs.core.seq.call(null,seq__32313_32318);if(temp__4126__auto___32327)
{var seq__32313_32328__$1 = temp__4126__auto___32327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32313_32328__$1))
{var c__4314__auto___32329 = cljs.core.chunk_first.call(null,seq__32313_32328__$1);{
var G__32330 = cljs.core.chunk_rest.call(null,seq__32313_32328__$1);
var G__32331 = c__4314__auto___32329;
var G__32332 = cljs.core.count.call(null,c__4314__auto___32329);
var G__32333 = (0);
seq__32313_32318 = G__32330;
chunk__32314_32319 = G__32331;
count__32315_32320 = G__32332;
i__32316_32321 = G__32333;
continue;
}
} else
{var node_32334 = cljs.core.first.call(null,seq__32313_32328__$1);node_32334.innerHTML = value_32317;
{
var G__32335 = cljs.core.next.call(null,seq__32313_32328__$1);
var G__32336 = null;
var G__32337 = (0);
var G__32338 = (0);
seq__32313_32318 = G__32335;
chunk__32314_32319 = G__32336;
count__32315_32320 = G__32337;
i__32316_32321 = G__32338;
continue;
}
}
} else
{}
}
break;
}
}catch (e32312){if((e32312 instanceof Error))
{var e_32339 = e32312;domina.replace_children_BANG_.call(null,content,value_32317);
} else
{throw e32312;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__32346_32350 = cljs.core.seq.call(null,children);var chunk__32347_32351 = null;var count__32348_32352 = (0);var i__32349_32353 = (0);while(true){
if((i__32349_32353 < count__32348_32352))
{var child_32354 = cljs.core._nth.call(null,chunk__32347_32351,i__32349_32353);frag.appendChild(child_32354);
{
var G__32355 = seq__32346_32350;
var G__32356 = chunk__32347_32351;
var G__32357 = count__32348_32352;
var G__32358 = (i__32349_32353 + (1));
seq__32346_32350 = G__32355;
chunk__32347_32351 = G__32356;
count__32348_32352 = G__32357;
i__32349_32353 = G__32358;
continue;
}
} else
{var temp__4126__auto___32359 = cljs.core.seq.call(null,seq__32346_32350);if(temp__4126__auto___32359)
{var seq__32346_32360__$1 = temp__4126__auto___32359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32346_32360__$1))
{var c__4314__auto___32361 = cljs.core.chunk_first.call(null,seq__32346_32360__$1);{
var G__32362 = cljs.core.chunk_rest.call(null,seq__32346_32360__$1);
var G__32363 = c__4314__auto___32361;
var G__32364 = cljs.core.count.call(null,c__4314__auto___32361);
var G__32365 = (0);
seq__32346_32350 = G__32362;
chunk__32347_32351 = G__32363;
count__32348_32352 = G__32364;
i__32349_32353 = G__32365;
continue;
}
} else
{var child_32366 = cljs.core.first.call(null,seq__32346_32360__$1);frag.appendChild(child_32366);
{
var G__32367 = cljs.core.next.call(null,seq__32346_32360__$1);
var G__32368 = null;
var G__32369 = (0);
var G__32370 = (0);
seq__32346_32350 = G__32367;
chunk__32347_32351 = G__32368;
count__32348_32352 = G__32369;
i__32349_32353 = G__32370;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__32340_SHARP_,p2__32341_SHARP_){return f.call(null,p1__32340_SHARP_,p2__32341_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__32372 = list_thing;if(G__32372)
{var bit__4208__auto__ = (G__32372.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32372.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32372.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32372);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32372);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__32373 = content;if(G__32373)
{var bit__4208__auto__ = (G__32373.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32373.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32373);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__32374 = content;if(G__32374)
{var bit__4208__auto__ = (G__32374.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__32374.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32374);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
