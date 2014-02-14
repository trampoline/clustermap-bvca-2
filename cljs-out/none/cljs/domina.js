// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_16946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16948 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16947,table_section_wrapper_16947,opt_wrapper_16946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16948,table_section_wrapper_16947,cell_wrapper_16948,opt_wrapper_16946,table_section_wrapper_16947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16947]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16953 = cljs.core.seq.call(null,tbody);var chunk__16954 = null;var count__16955 = 0;var i__16956 = 0;while(true){
if((i__16956 < count__16955))
{var child = cljs.core._nth.call(null,chunk__16954,i__16956);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16957 = seq__16953;
var G__16958 = chunk__16954;
var G__16959 = count__16955;
var G__16960 = (i__16956 + 1);
seq__16953 = G__16957;
chunk__16954 = G__16958;
count__16955 = G__16959;
i__16956 = G__16960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16953);if(temp__4092__auto__)
{var seq__16953__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16953__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16953__$1);{
var G__16961 = cljs.core.chunk_rest.call(null,seq__16953__$1);
var G__16962 = c__4148__auto__;
var G__16963 = cljs.core.count.call(null,c__4148__auto__);
var G__16964 = 0;
seq__16953 = G__16961;
chunk__16954 = G__16962;
count__16955 = G__16963;
i__16956 = G__16964;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16953__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16965 = cljs.core.next.call(null,seq__16953__$1);
var G__16966 = null;
var G__16967 = 0;
var G__16968 = 0;
seq__16953 = G__16965;
chunk__16954 = G__16966;
count__16955 = G__16967;
i__16956 = G__16968;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16970 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16970,0,null);var start_wrap = cljs.core.nth.call(null,vec__16970,1,null);var end_wrap = cljs.core.nth.call(null,vec__16970,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16971 = wrapper.lastChild;
var G__16972 = (level - 1);
wrapper = G__16971;
level = G__16972;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16974 = {};return obj16974;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16975){
var mesg = cljs.core.seq(arglist__16975);
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
log.cljs$lang$applyTo = (function (arglist__16976){
var mesg = cljs.core.seq(arglist__16976);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16977){
var contents = cljs.core.seq(arglist__16977);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16978_SHARP_){return p1__16978_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16979_SHARP_,p2__16980_SHARP_){return goog.dom.insertChildAt(p1__16979_SHARP_,p2__16980_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16982_SHARP_,p2__16981_SHARP_){return goog.dom.insertSiblingBefore(p2__16981_SHARP_,p1__16982_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16984_SHARP_,p2__16983_SHARP_){return goog.dom.insertSiblingAfter(p2__16983_SHARP_,p1__16984_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16986_SHARP_,p2__16985_SHARP_){return goog.dom.replaceNode(p2__16985_SHARP_,p1__16986_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16991_16995 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16992_16996 = null;var count__16993_16997 = 0;var i__16994_16998 = 0;while(true){
if((i__16994_16998 < count__16993_16997))
{var n_16999 = cljs.core._nth.call(null,chunk__16992_16996,i__16994_16998);goog.style.setStyle(n_16999,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17000 = seq__16991_16995;
var G__17001 = chunk__16992_16996;
var G__17002 = count__16993_16997;
var G__17003 = (i__16994_16998 + 1);
seq__16991_16995 = G__17000;
chunk__16992_16996 = G__17001;
count__16993_16997 = G__17002;
i__16994_16998 = G__17003;
continue;
}
} else
{var temp__4092__auto___17004 = cljs.core.seq.call(null,seq__16991_16995);if(temp__4092__auto___17004)
{var seq__16991_17005__$1 = temp__4092__auto___17004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16991_17005__$1))
{var c__4148__auto___17006 = cljs.core.chunk_first.call(null,seq__16991_17005__$1);{
var G__17007 = cljs.core.chunk_rest.call(null,seq__16991_17005__$1);
var G__17008 = c__4148__auto___17006;
var G__17009 = cljs.core.count.call(null,c__4148__auto___17006);
var G__17010 = 0;
seq__16991_16995 = G__17007;
chunk__16992_16996 = G__17008;
count__16993_16997 = G__17009;
i__16994_16998 = G__17010;
continue;
}
} else
{var n_17011 = cljs.core.first.call(null,seq__16991_17005__$1);goog.style.setStyle(n_17011,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17012 = cljs.core.next.call(null,seq__16991_17005__$1);
var G__17013 = null;
var G__17014 = 0;
var G__17015 = 0;
seq__16991_16995 = G__17012;
chunk__16992_16996 = G__17013;
count__16993_16997 = G__17014;
i__16994_16998 = G__17015;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17016){
var content = cljs.core.first(arglist__17016);
arglist__17016 = cljs.core.next(arglist__17016);
var name = cljs.core.first(arglist__17016);
var value = cljs.core.rest(arglist__17016);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17021_17025 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17022_17026 = null;var count__17023_17027 = 0;var i__17024_17028 = 0;while(true){
if((i__17024_17028 < count__17023_17027))
{var n_17029 = cljs.core._nth.call(null,chunk__17022_17026,i__17024_17028);n_17029.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17030 = seq__17021_17025;
var G__17031 = chunk__17022_17026;
var G__17032 = count__17023_17027;
var G__17033 = (i__17024_17028 + 1);
seq__17021_17025 = G__17030;
chunk__17022_17026 = G__17031;
count__17023_17027 = G__17032;
i__17024_17028 = G__17033;
continue;
}
} else
{var temp__4092__auto___17034 = cljs.core.seq.call(null,seq__17021_17025);if(temp__4092__auto___17034)
{var seq__17021_17035__$1 = temp__4092__auto___17034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17021_17035__$1))
{var c__4148__auto___17036 = cljs.core.chunk_first.call(null,seq__17021_17035__$1);{
var G__17037 = cljs.core.chunk_rest.call(null,seq__17021_17035__$1);
var G__17038 = c__4148__auto___17036;
var G__17039 = cljs.core.count.call(null,c__4148__auto___17036);
var G__17040 = 0;
seq__17021_17025 = G__17037;
chunk__17022_17026 = G__17038;
count__17023_17027 = G__17039;
i__17024_17028 = G__17040;
continue;
}
} else
{var n_17041 = cljs.core.first.call(null,seq__17021_17035__$1);n_17041.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17042 = cljs.core.next.call(null,seq__17021_17035__$1);
var G__17043 = null;
var G__17044 = 0;
var G__17045 = 0;
seq__17021_17025 = G__17042;
chunk__17022_17026 = G__17043;
count__17023_17027 = G__17044;
i__17024_17028 = G__17045;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17046){
var content = cljs.core.first(arglist__17046);
arglist__17046 = cljs.core.next(arglist__17046);
var name = cljs.core.first(arglist__17046);
var value = cljs.core.rest(arglist__17046);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17051_17055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17052_17056 = null;var count__17053_17057 = 0;var i__17054_17058 = 0;while(true){
if((i__17054_17058 < count__17053_17057))
{var n_17059 = cljs.core._nth.call(null,chunk__17052_17056,i__17054_17058);n_17059.removeAttribute(cljs.core.name.call(null,name));
{
var G__17060 = seq__17051_17055;
var G__17061 = chunk__17052_17056;
var G__17062 = count__17053_17057;
var G__17063 = (i__17054_17058 + 1);
seq__17051_17055 = G__17060;
chunk__17052_17056 = G__17061;
count__17053_17057 = G__17062;
i__17054_17058 = G__17063;
continue;
}
} else
{var temp__4092__auto___17064 = cljs.core.seq.call(null,seq__17051_17055);if(temp__4092__auto___17064)
{var seq__17051_17065__$1 = temp__4092__auto___17064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17051_17065__$1))
{var c__4148__auto___17066 = cljs.core.chunk_first.call(null,seq__17051_17065__$1);{
var G__17067 = cljs.core.chunk_rest.call(null,seq__17051_17065__$1);
var G__17068 = c__4148__auto___17066;
var G__17069 = cljs.core.count.call(null,c__4148__auto___17066);
var G__17070 = 0;
seq__17051_17055 = G__17067;
chunk__17052_17056 = G__17068;
count__17053_17057 = G__17069;
i__17054_17058 = G__17070;
continue;
}
} else
{var n_17071 = cljs.core.first.call(null,seq__17051_17065__$1);n_17071.removeAttribute(cljs.core.name.call(null,name));
{
var G__17072 = cljs.core.next.call(null,seq__17051_17065__$1);
var G__17073 = null;
var G__17074 = 0;
var G__17075 = 0;
seq__17051_17055 = G__17072;
chunk__17052_17056 = G__17073;
count__17053_17057 = G__17074;
i__17054_17058 = G__17075;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17077 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17077,0,null);var v = cljs.core.nth.call(null,vec__17077,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17078_SHARP_){var attr = attrs__$1.item(p1__17078_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17085_17091 = cljs.core.seq.call(null,styles);var chunk__17086_17092 = null;var count__17087_17093 = 0;var i__17088_17094 = 0;while(true){
if((i__17088_17094 < count__17087_17093))
{var vec__17089_17095 = cljs.core._nth.call(null,chunk__17086_17092,i__17088_17094);var name_17096 = cljs.core.nth.call(null,vec__17089_17095,0,null);var value_17097 = cljs.core.nth.call(null,vec__17089_17095,1,null);domina.set_style_BANG_.call(null,content,name_17096,value_17097);
{
var G__17098 = seq__17085_17091;
var G__17099 = chunk__17086_17092;
var G__17100 = count__17087_17093;
var G__17101 = (i__17088_17094 + 1);
seq__17085_17091 = G__17098;
chunk__17086_17092 = G__17099;
count__17087_17093 = G__17100;
i__17088_17094 = G__17101;
continue;
}
} else
{var temp__4092__auto___17102 = cljs.core.seq.call(null,seq__17085_17091);if(temp__4092__auto___17102)
{var seq__17085_17103__$1 = temp__4092__auto___17102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17085_17103__$1))
{var c__4148__auto___17104 = cljs.core.chunk_first.call(null,seq__17085_17103__$1);{
var G__17105 = cljs.core.chunk_rest.call(null,seq__17085_17103__$1);
var G__17106 = c__4148__auto___17104;
var G__17107 = cljs.core.count.call(null,c__4148__auto___17104);
var G__17108 = 0;
seq__17085_17091 = G__17105;
chunk__17086_17092 = G__17106;
count__17087_17093 = G__17107;
i__17088_17094 = G__17108;
continue;
}
} else
{var vec__17090_17109 = cljs.core.first.call(null,seq__17085_17103__$1);var name_17110 = cljs.core.nth.call(null,vec__17090_17109,0,null);var value_17111 = cljs.core.nth.call(null,vec__17090_17109,1,null);domina.set_style_BANG_.call(null,content,name_17110,value_17111);
{
var G__17112 = cljs.core.next.call(null,seq__17085_17103__$1);
var G__17113 = null;
var G__17114 = 0;
var G__17115 = 0;
seq__17085_17091 = G__17112;
chunk__17086_17092 = G__17113;
count__17087_17093 = G__17114;
i__17088_17094 = G__17115;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17122_17128 = cljs.core.seq.call(null,attrs);var chunk__17123_17129 = null;var count__17124_17130 = 0;var i__17125_17131 = 0;while(true){
if((i__17125_17131 < count__17124_17130))
{var vec__17126_17132 = cljs.core._nth.call(null,chunk__17123_17129,i__17125_17131);var name_17133 = cljs.core.nth.call(null,vec__17126_17132,0,null);var value_17134 = cljs.core.nth.call(null,vec__17126_17132,1,null);domina.set_attr_BANG_.call(null,content,name_17133,value_17134);
{
var G__17135 = seq__17122_17128;
var G__17136 = chunk__17123_17129;
var G__17137 = count__17124_17130;
var G__17138 = (i__17125_17131 + 1);
seq__17122_17128 = G__17135;
chunk__17123_17129 = G__17136;
count__17124_17130 = G__17137;
i__17125_17131 = G__17138;
continue;
}
} else
{var temp__4092__auto___17139 = cljs.core.seq.call(null,seq__17122_17128);if(temp__4092__auto___17139)
{var seq__17122_17140__$1 = temp__4092__auto___17139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17122_17140__$1))
{var c__4148__auto___17141 = cljs.core.chunk_first.call(null,seq__17122_17140__$1);{
var G__17142 = cljs.core.chunk_rest.call(null,seq__17122_17140__$1);
var G__17143 = c__4148__auto___17141;
var G__17144 = cljs.core.count.call(null,c__4148__auto___17141);
var G__17145 = 0;
seq__17122_17128 = G__17142;
chunk__17123_17129 = G__17143;
count__17124_17130 = G__17144;
i__17125_17131 = G__17145;
continue;
}
} else
{var vec__17127_17146 = cljs.core.first.call(null,seq__17122_17140__$1);var name_17147 = cljs.core.nth.call(null,vec__17127_17146,0,null);var value_17148 = cljs.core.nth.call(null,vec__17127_17146,1,null);domina.set_attr_BANG_.call(null,content,name_17147,value_17148);
{
var G__17149 = cljs.core.next.call(null,seq__17122_17140__$1);
var G__17150 = null;
var G__17151 = 0;
var G__17152 = 0;
seq__17122_17128 = G__17149;
chunk__17123_17129 = G__17150;
count__17124_17130 = G__17151;
i__17125_17131 = G__17152;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17157_17161 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17158_17162 = null;var count__17159_17163 = 0;var i__17160_17164 = 0;while(true){
if((i__17160_17164 < count__17159_17163))
{var node_17165 = cljs.core._nth.call(null,chunk__17158_17162,i__17160_17164);goog.dom.classes.add(node_17165,class$);
{
var G__17166 = seq__17157_17161;
var G__17167 = chunk__17158_17162;
var G__17168 = count__17159_17163;
var G__17169 = (i__17160_17164 + 1);
seq__17157_17161 = G__17166;
chunk__17158_17162 = G__17167;
count__17159_17163 = G__17168;
i__17160_17164 = G__17169;
continue;
}
} else
{var temp__4092__auto___17170 = cljs.core.seq.call(null,seq__17157_17161);if(temp__4092__auto___17170)
{var seq__17157_17171__$1 = temp__4092__auto___17170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17157_17171__$1))
{var c__4148__auto___17172 = cljs.core.chunk_first.call(null,seq__17157_17171__$1);{
var G__17173 = cljs.core.chunk_rest.call(null,seq__17157_17171__$1);
var G__17174 = c__4148__auto___17172;
var G__17175 = cljs.core.count.call(null,c__4148__auto___17172);
var G__17176 = 0;
seq__17157_17161 = G__17173;
chunk__17158_17162 = G__17174;
count__17159_17163 = G__17175;
i__17160_17164 = G__17176;
continue;
}
} else
{var node_17177 = cljs.core.first.call(null,seq__17157_17171__$1);goog.dom.classes.add(node_17177,class$);
{
var G__17178 = cljs.core.next.call(null,seq__17157_17171__$1);
var G__17179 = null;
var G__17180 = 0;
var G__17181 = 0;
seq__17157_17161 = G__17178;
chunk__17158_17162 = G__17179;
count__17159_17163 = G__17180;
i__17160_17164 = G__17181;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17186_17190 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17187_17191 = null;var count__17188_17192 = 0;var i__17189_17193 = 0;while(true){
if((i__17189_17193 < count__17188_17192))
{var node_17194 = cljs.core._nth.call(null,chunk__17187_17191,i__17189_17193);goog.dom.classes.remove(node_17194,class$);
{
var G__17195 = seq__17186_17190;
var G__17196 = chunk__17187_17191;
var G__17197 = count__17188_17192;
var G__17198 = (i__17189_17193 + 1);
seq__17186_17190 = G__17195;
chunk__17187_17191 = G__17196;
count__17188_17192 = G__17197;
i__17189_17193 = G__17198;
continue;
}
} else
{var temp__4092__auto___17199 = cljs.core.seq.call(null,seq__17186_17190);if(temp__4092__auto___17199)
{var seq__17186_17200__$1 = temp__4092__auto___17199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17186_17200__$1))
{var c__4148__auto___17201 = cljs.core.chunk_first.call(null,seq__17186_17200__$1);{
var G__17202 = cljs.core.chunk_rest.call(null,seq__17186_17200__$1);
var G__17203 = c__4148__auto___17201;
var G__17204 = cljs.core.count.call(null,c__4148__auto___17201);
var G__17205 = 0;
seq__17186_17190 = G__17202;
chunk__17187_17191 = G__17203;
count__17188_17192 = G__17204;
i__17189_17193 = G__17205;
continue;
}
} else
{var node_17206 = cljs.core.first.call(null,seq__17186_17200__$1);goog.dom.classes.remove(node_17206,class$);
{
var G__17207 = cljs.core.next.call(null,seq__17186_17200__$1);
var G__17208 = null;
var G__17209 = 0;
var G__17210 = 0;
seq__17186_17190 = G__17207;
chunk__17187_17191 = G__17208;
count__17188_17192 = G__17209;
i__17189_17193 = G__17210;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17215_17219 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17216_17220 = null;var count__17217_17221 = 0;var i__17218_17222 = 0;while(true){
if((i__17218_17222 < count__17217_17221))
{var node_17223 = cljs.core._nth.call(null,chunk__17216_17220,i__17218_17222);goog.dom.classes.toggle(node_17223,class$);
{
var G__17224 = seq__17215_17219;
var G__17225 = chunk__17216_17220;
var G__17226 = count__17217_17221;
var G__17227 = (i__17218_17222 + 1);
seq__17215_17219 = G__17224;
chunk__17216_17220 = G__17225;
count__17217_17221 = G__17226;
i__17218_17222 = G__17227;
continue;
}
} else
{var temp__4092__auto___17228 = cljs.core.seq.call(null,seq__17215_17219);if(temp__4092__auto___17228)
{var seq__17215_17229__$1 = temp__4092__auto___17228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17215_17229__$1))
{var c__4148__auto___17230 = cljs.core.chunk_first.call(null,seq__17215_17229__$1);{
var G__17231 = cljs.core.chunk_rest.call(null,seq__17215_17229__$1);
var G__17232 = c__4148__auto___17230;
var G__17233 = cljs.core.count.call(null,c__4148__auto___17230);
var G__17234 = 0;
seq__17215_17219 = G__17231;
chunk__17216_17220 = G__17232;
count__17217_17221 = G__17233;
i__17218_17222 = G__17234;
continue;
}
} else
{var node_17235 = cljs.core.first.call(null,seq__17215_17229__$1);goog.dom.classes.toggle(node_17235,class$);
{
var G__17236 = cljs.core.next.call(null,seq__17215_17229__$1);
var G__17237 = null;
var G__17238 = 0;
var G__17239 = 0;
seq__17215_17219 = G__17236;
chunk__17216_17220 = G__17237;
count__17217_17221 = G__17238;
i__17218_17222 = G__17239;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17248__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17244_17249 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17245_17250 = null;var count__17246_17251 = 0;var i__17247_17252 = 0;while(true){
if((i__17247_17252 < count__17246_17251))
{var node_17253 = cljs.core._nth.call(null,chunk__17245_17250,i__17247_17252);goog.dom.classes.set(node_17253,classes_17248__$1);
{
var G__17254 = seq__17244_17249;
var G__17255 = chunk__17245_17250;
var G__17256 = count__17246_17251;
var G__17257 = (i__17247_17252 + 1);
seq__17244_17249 = G__17254;
chunk__17245_17250 = G__17255;
count__17246_17251 = G__17256;
i__17247_17252 = G__17257;
continue;
}
} else
{var temp__4092__auto___17258 = cljs.core.seq.call(null,seq__17244_17249);if(temp__4092__auto___17258)
{var seq__17244_17259__$1 = temp__4092__auto___17258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17244_17259__$1))
{var c__4148__auto___17260 = cljs.core.chunk_first.call(null,seq__17244_17259__$1);{
var G__17261 = cljs.core.chunk_rest.call(null,seq__17244_17259__$1);
var G__17262 = c__4148__auto___17260;
var G__17263 = cljs.core.count.call(null,c__4148__auto___17260);
var G__17264 = 0;
seq__17244_17249 = G__17261;
chunk__17245_17250 = G__17262;
count__17246_17251 = G__17263;
i__17247_17252 = G__17264;
continue;
}
} else
{var node_17265 = cljs.core.first.call(null,seq__17244_17259__$1);goog.dom.classes.set(node_17265,classes_17248__$1);
{
var G__17266 = cljs.core.next.call(null,seq__17244_17259__$1);
var G__17267 = null;
var G__17268 = 0;
var G__17269 = 0;
seq__17244_17249 = G__17266;
chunk__17245_17250 = G__17267;
count__17246_17251 = G__17268;
i__17247_17252 = G__17269;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17274_17278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17275_17279 = null;var count__17276_17280 = 0;var i__17277_17281 = 0;while(true){
if((i__17277_17281 < count__17276_17280))
{var node_17282 = cljs.core._nth.call(null,chunk__17275_17279,i__17277_17281);goog.dom.setTextContent(node_17282,value);
{
var G__17283 = seq__17274_17278;
var G__17284 = chunk__17275_17279;
var G__17285 = count__17276_17280;
var G__17286 = (i__17277_17281 + 1);
seq__17274_17278 = G__17283;
chunk__17275_17279 = G__17284;
count__17276_17280 = G__17285;
i__17277_17281 = G__17286;
continue;
}
} else
{var temp__4092__auto___17287 = cljs.core.seq.call(null,seq__17274_17278);if(temp__4092__auto___17287)
{var seq__17274_17288__$1 = temp__4092__auto___17287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17274_17288__$1))
{var c__4148__auto___17289 = cljs.core.chunk_first.call(null,seq__17274_17288__$1);{
var G__17290 = cljs.core.chunk_rest.call(null,seq__17274_17288__$1);
var G__17291 = c__4148__auto___17289;
var G__17292 = cljs.core.count.call(null,c__4148__auto___17289);
var G__17293 = 0;
seq__17274_17278 = G__17290;
chunk__17275_17279 = G__17291;
count__17276_17280 = G__17292;
i__17277_17281 = G__17293;
continue;
}
} else
{var node_17294 = cljs.core.first.call(null,seq__17274_17288__$1);goog.dom.setTextContent(node_17294,value);
{
var G__17295 = cljs.core.next.call(null,seq__17274_17288__$1);
var G__17296 = null;
var G__17297 = 0;
var G__17298 = 0;
seq__17274_17278 = G__17295;
chunk__17275_17279 = G__17296;
count__17276_17280 = G__17297;
i__17277_17281 = G__17298;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17303_17307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17304_17308 = null;var count__17305_17309 = 0;var i__17306_17310 = 0;while(true){
if((i__17306_17310 < count__17305_17309))
{var node_17311 = cljs.core._nth.call(null,chunk__17304_17308,i__17306_17310);goog.dom.forms.setValue(node_17311,value);
{
var G__17312 = seq__17303_17307;
var G__17313 = chunk__17304_17308;
var G__17314 = count__17305_17309;
var G__17315 = (i__17306_17310 + 1);
seq__17303_17307 = G__17312;
chunk__17304_17308 = G__17313;
count__17305_17309 = G__17314;
i__17306_17310 = G__17315;
continue;
}
} else
{var temp__4092__auto___17316 = cljs.core.seq.call(null,seq__17303_17307);if(temp__4092__auto___17316)
{var seq__17303_17317__$1 = temp__4092__auto___17316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17303_17317__$1))
{var c__4148__auto___17318 = cljs.core.chunk_first.call(null,seq__17303_17317__$1);{
var G__17319 = cljs.core.chunk_rest.call(null,seq__17303_17317__$1);
var G__17320 = c__4148__auto___17318;
var G__17321 = cljs.core.count.call(null,c__4148__auto___17318);
var G__17322 = 0;
seq__17303_17307 = G__17319;
chunk__17304_17308 = G__17320;
count__17305_17309 = G__17321;
i__17306_17310 = G__17322;
continue;
}
} else
{var node_17323 = cljs.core.first.call(null,seq__17303_17317__$1);goog.dom.forms.setValue(node_17323,value);
{
var G__17324 = cljs.core.next.call(null,seq__17303_17317__$1);
var G__17325 = null;
var G__17326 = 0;
var G__17327 = 0;
seq__17303_17307 = G__17324;
chunk__17304_17308 = G__17325;
count__17305_17309 = G__17326;
i__17306_17310 = G__17327;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17338 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17334_17339 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17335_17340 = null;var count__17336_17341 = 0;var i__17337_17342 = 0;while(true){
if((i__17337_17342 < count__17336_17341))
{var node_17343 = cljs.core._nth.call(null,chunk__17335_17340,i__17337_17342);node_17343.innerHTML = value_17338;
{
var G__17344 = seq__17334_17339;
var G__17345 = chunk__17335_17340;
var G__17346 = count__17336_17341;
var G__17347 = (i__17337_17342 + 1);
seq__17334_17339 = G__17344;
chunk__17335_17340 = G__17345;
count__17336_17341 = G__17346;
i__17337_17342 = G__17347;
continue;
}
} else
{var temp__4092__auto___17348 = cljs.core.seq.call(null,seq__17334_17339);if(temp__4092__auto___17348)
{var seq__17334_17349__$1 = temp__4092__auto___17348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17334_17349__$1))
{var c__4148__auto___17350 = cljs.core.chunk_first.call(null,seq__17334_17349__$1);{
var G__17351 = cljs.core.chunk_rest.call(null,seq__17334_17349__$1);
var G__17352 = c__4148__auto___17350;
var G__17353 = cljs.core.count.call(null,c__4148__auto___17350);
var G__17354 = 0;
seq__17334_17339 = G__17351;
chunk__17335_17340 = G__17352;
count__17336_17341 = G__17353;
i__17337_17342 = G__17354;
continue;
}
} else
{var node_17355 = cljs.core.first.call(null,seq__17334_17349__$1);node_17355.innerHTML = value_17338;
{
var G__17356 = cljs.core.next.call(null,seq__17334_17349__$1);
var G__17357 = null;
var G__17358 = 0;
var G__17359 = 0;
seq__17334_17339 = G__17356;
chunk__17335_17340 = G__17357;
count__17336_17341 = G__17358;
i__17337_17342 = G__17359;
continue;
}
}
} else
{}
}
break;
}
}catch (e17333){if((e17333 instanceof Error))
{var e_17360 = e17333;domina.replace_children_BANG_.call(null,content,value_17338);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17333;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17367_17371 = cljs.core.seq.call(null,children);var chunk__17368_17372 = null;var count__17369_17373 = 0;var i__17370_17374 = 0;while(true){
if((i__17370_17374 < count__17369_17373))
{var child_17375 = cljs.core._nth.call(null,chunk__17368_17372,i__17370_17374);frag.appendChild(child_17375);
{
var G__17376 = seq__17367_17371;
var G__17377 = chunk__17368_17372;
var G__17378 = count__17369_17373;
var G__17379 = (i__17370_17374 + 1);
seq__17367_17371 = G__17376;
chunk__17368_17372 = G__17377;
count__17369_17373 = G__17378;
i__17370_17374 = G__17379;
continue;
}
} else
{var temp__4092__auto___17380 = cljs.core.seq.call(null,seq__17367_17371);if(temp__4092__auto___17380)
{var seq__17367_17381__$1 = temp__4092__auto___17380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17367_17381__$1))
{var c__4148__auto___17382 = cljs.core.chunk_first.call(null,seq__17367_17381__$1);{
var G__17383 = cljs.core.chunk_rest.call(null,seq__17367_17381__$1);
var G__17384 = c__4148__auto___17382;
var G__17385 = cljs.core.count.call(null,c__4148__auto___17382);
var G__17386 = 0;
seq__17367_17371 = G__17383;
chunk__17368_17372 = G__17384;
count__17369_17373 = G__17385;
i__17370_17374 = G__17386;
continue;
}
} else
{var child_17387 = cljs.core.first.call(null,seq__17367_17381__$1);frag.appendChild(child_17387);
{
var G__17388 = cljs.core.next.call(null,seq__17367_17381__$1);
var G__17389 = null;
var G__17390 = 0;
var G__17391 = 0;
seq__17367_17371 = G__17388;
chunk__17368_17372 = G__17389;
count__17369_17373 = G__17390;
i__17370_17374 = G__17391;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17361_SHARP_,p2__17362_SHARP_){return f.call(null,p1__17361_SHARP_,p2__17362_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__17393 = list_thing;if(G__17393)
{var bit__4050__auto__ = (G__17393.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17393.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17393.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17393);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17393);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__17394 = content;if(G__17394)
{var bit__4050__auto__ = (G__17394.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17394.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17394);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17394);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__17395 = content;if(G__17395)
{var bit__4050__auto__ = (G__17395.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17395.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17395);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
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

//# sourceMappingURL=domina.js.map