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
var opt_wrapper_15941 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15942 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15942,table_section_wrapper_15942,opt_wrapper_15941,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15943,table_section_wrapper_15942,cell_wrapper_15943,opt_wrapper_15941,table_section_wrapper_15942,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15942]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15948 = cljs.core.seq.call(null,tbody);var chunk__15949 = null;var count__15950 = 0;var i__15951 = 0;while(true){
if((i__15951 < count__15950))
{var child = cljs.core._nth.call(null,chunk__15949,i__15951);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15952 = seq__15948;
var G__15953 = chunk__15949;
var G__15954 = count__15950;
var G__15955 = (i__15951 + 1);
seq__15948 = G__15952;
chunk__15949 = G__15953;
count__15950 = G__15954;
i__15951 = G__15955;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15948);if(temp__4092__auto__)
{var seq__15948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15948__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15948__$1);{
var G__15956 = cljs.core.chunk_rest.call(null,seq__15948__$1);
var G__15957 = c__4148__auto__;
var G__15958 = cljs.core.count.call(null,c__4148__auto__);
var G__15959 = 0;
seq__15948 = G__15956;
chunk__15949 = G__15957;
count__15950 = G__15958;
i__15951 = G__15959;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15948__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15960 = cljs.core.next.call(null,seq__15948__$1);
var G__15961 = null;
var G__15962 = 0;
var G__15963 = 0;
seq__15948 = G__15960;
chunk__15949 = G__15961;
count__15950 = G__15962;
i__15951 = G__15963;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15965 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15965,0,null);var start_wrap = cljs.core.nth.call(null,vec__15965,1,null);var end_wrap = cljs.core.nth.call(null,vec__15965,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15966 = wrapper.lastChild;
var G__15967 = (level - 1);
wrapper = G__15966;
level = G__15967;
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
domina.DomContent = (function (){var obj15969 = {};return obj15969;
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
log_debug.cljs$lang$applyTo = (function (arglist__15970){
var mesg = cljs.core.seq(arglist__15970);
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
log.cljs$lang$applyTo = (function (arglist__15971){
var mesg = cljs.core.seq(arglist__15971);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15972){
var contents = cljs.core.seq(arglist__15972);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15973_SHARP_){return p1__15973_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15974_SHARP_,p2__15975_SHARP_){return goog.dom.insertChildAt(p1__15974_SHARP_,p2__15975_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15977_SHARP_,p2__15976_SHARP_){return goog.dom.insertSiblingBefore(p2__15976_SHARP_,p1__15977_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15979_SHARP_,p2__15978_SHARP_){return goog.dom.insertSiblingAfter(p2__15978_SHARP_,p1__15979_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15981_SHARP_,p2__15980_SHARP_){return goog.dom.replaceNode(p2__15980_SHARP_,p1__15981_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15986_15990 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15987_15991 = null;var count__15988_15992 = 0;var i__15989_15993 = 0;while(true){
if((i__15989_15993 < count__15988_15992))
{var n_15994 = cljs.core._nth.call(null,chunk__15987_15991,i__15989_15993);goog.style.setStyle(n_15994,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15995 = seq__15986_15990;
var G__15996 = chunk__15987_15991;
var G__15997 = count__15988_15992;
var G__15998 = (i__15989_15993 + 1);
seq__15986_15990 = G__15995;
chunk__15987_15991 = G__15996;
count__15988_15992 = G__15997;
i__15989_15993 = G__15998;
continue;
}
} else
{var temp__4092__auto___15999 = cljs.core.seq.call(null,seq__15986_15990);if(temp__4092__auto___15999)
{var seq__15986_16000__$1 = temp__4092__auto___15999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15986_16000__$1))
{var c__4148__auto___16001 = cljs.core.chunk_first.call(null,seq__15986_16000__$1);{
var G__16002 = cljs.core.chunk_rest.call(null,seq__15986_16000__$1);
var G__16003 = c__4148__auto___16001;
var G__16004 = cljs.core.count.call(null,c__4148__auto___16001);
var G__16005 = 0;
seq__15986_15990 = G__16002;
chunk__15987_15991 = G__16003;
count__15988_15992 = G__16004;
i__15989_15993 = G__16005;
continue;
}
} else
{var n_16006 = cljs.core.first.call(null,seq__15986_16000__$1);goog.style.setStyle(n_16006,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16007 = cljs.core.next.call(null,seq__15986_16000__$1);
var G__16008 = null;
var G__16009 = 0;
var G__16010 = 0;
seq__15986_15990 = G__16007;
chunk__15987_15991 = G__16008;
count__15988_15992 = G__16009;
i__15989_15993 = G__16010;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16011){
var content = cljs.core.first(arglist__16011);
arglist__16011 = cljs.core.next(arglist__16011);
var name = cljs.core.first(arglist__16011);
var value = cljs.core.rest(arglist__16011);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16016_16020 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16017_16021 = null;var count__16018_16022 = 0;var i__16019_16023 = 0;while(true){
if((i__16019_16023 < count__16018_16022))
{var n_16024 = cljs.core._nth.call(null,chunk__16017_16021,i__16019_16023);n_16024.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16025 = seq__16016_16020;
var G__16026 = chunk__16017_16021;
var G__16027 = count__16018_16022;
var G__16028 = (i__16019_16023 + 1);
seq__16016_16020 = G__16025;
chunk__16017_16021 = G__16026;
count__16018_16022 = G__16027;
i__16019_16023 = G__16028;
continue;
}
} else
{var temp__4092__auto___16029 = cljs.core.seq.call(null,seq__16016_16020);if(temp__4092__auto___16029)
{var seq__16016_16030__$1 = temp__4092__auto___16029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16016_16030__$1))
{var c__4148__auto___16031 = cljs.core.chunk_first.call(null,seq__16016_16030__$1);{
var G__16032 = cljs.core.chunk_rest.call(null,seq__16016_16030__$1);
var G__16033 = c__4148__auto___16031;
var G__16034 = cljs.core.count.call(null,c__4148__auto___16031);
var G__16035 = 0;
seq__16016_16020 = G__16032;
chunk__16017_16021 = G__16033;
count__16018_16022 = G__16034;
i__16019_16023 = G__16035;
continue;
}
} else
{var n_16036 = cljs.core.first.call(null,seq__16016_16030__$1);n_16036.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16037 = cljs.core.next.call(null,seq__16016_16030__$1);
var G__16038 = null;
var G__16039 = 0;
var G__16040 = 0;
seq__16016_16020 = G__16037;
chunk__16017_16021 = G__16038;
count__16018_16022 = G__16039;
i__16019_16023 = G__16040;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16041){
var content = cljs.core.first(arglist__16041);
arglist__16041 = cljs.core.next(arglist__16041);
var name = cljs.core.first(arglist__16041);
var value = cljs.core.rest(arglist__16041);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16046_16050 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16047_16051 = null;var count__16048_16052 = 0;var i__16049_16053 = 0;while(true){
if((i__16049_16053 < count__16048_16052))
{var n_16054 = cljs.core._nth.call(null,chunk__16047_16051,i__16049_16053);n_16054.removeAttribute(cljs.core.name.call(null,name));
{
var G__16055 = seq__16046_16050;
var G__16056 = chunk__16047_16051;
var G__16057 = count__16048_16052;
var G__16058 = (i__16049_16053 + 1);
seq__16046_16050 = G__16055;
chunk__16047_16051 = G__16056;
count__16048_16052 = G__16057;
i__16049_16053 = G__16058;
continue;
}
} else
{var temp__4092__auto___16059 = cljs.core.seq.call(null,seq__16046_16050);if(temp__4092__auto___16059)
{var seq__16046_16060__$1 = temp__4092__auto___16059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16046_16060__$1))
{var c__4148__auto___16061 = cljs.core.chunk_first.call(null,seq__16046_16060__$1);{
var G__16062 = cljs.core.chunk_rest.call(null,seq__16046_16060__$1);
var G__16063 = c__4148__auto___16061;
var G__16064 = cljs.core.count.call(null,c__4148__auto___16061);
var G__16065 = 0;
seq__16046_16050 = G__16062;
chunk__16047_16051 = G__16063;
count__16048_16052 = G__16064;
i__16049_16053 = G__16065;
continue;
}
} else
{var n_16066 = cljs.core.first.call(null,seq__16046_16060__$1);n_16066.removeAttribute(cljs.core.name.call(null,name));
{
var G__16067 = cljs.core.next.call(null,seq__16046_16060__$1);
var G__16068 = null;
var G__16069 = 0;
var G__16070 = 0;
seq__16046_16050 = G__16067;
chunk__16047_16051 = G__16068;
count__16048_16052 = G__16069;
i__16049_16053 = G__16070;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16072 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16072,0,null);var v = cljs.core.nth.call(null,vec__16072,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16073_SHARP_){var attr = attrs__$1.item(p1__16073_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16080_16086 = cljs.core.seq.call(null,styles);var chunk__16081_16087 = null;var count__16082_16088 = 0;var i__16083_16089 = 0;while(true){
if((i__16083_16089 < count__16082_16088))
{var vec__16084_16090 = cljs.core._nth.call(null,chunk__16081_16087,i__16083_16089);var name_16091 = cljs.core.nth.call(null,vec__16084_16090,0,null);var value_16092 = cljs.core.nth.call(null,vec__16084_16090,1,null);domina.set_style_BANG_.call(null,content,name_16091,value_16092);
{
var G__16093 = seq__16080_16086;
var G__16094 = chunk__16081_16087;
var G__16095 = count__16082_16088;
var G__16096 = (i__16083_16089 + 1);
seq__16080_16086 = G__16093;
chunk__16081_16087 = G__16094;
count__16082_16088 = G__16095;
i__16083_16089 = G__16096;
continue;
}
} else
{var temp__4092__auto___16097 = cljs.core.seq.call(null,seq__16080_16086);if(temp__4092__auto___16097)
{var seq__16080_16098__$1 = temp__4092__auto___16097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16080_16098__$1))
{var c__4148__auto___16099 = cljs.core.chunk_first.call(null,seq__16080_16098__$1);{
var G__16100 = cljs.core.chunk_rest.call(null,seq__16080_16098__$1);
var G__16101 = c__4148__auto___16099;
var G__16102 = cljs.core.count.call(null,c__4148__auto___16099);
var G__16103 = 0;
seq__16080_16086 = G__16100;
chunk__16081_16087 = G__16101;
count__16082_16088 = G__16102;
i__16083_16089 = G__16103;
continue;
}
} else
{var vec__16085_16104 = cljs.core.first.call(null,seq__16080_16098__$1);var name_16105 = cljs.core.nth.call(null,vec__16085_16104,0,null);var value_16106 = cljs.core.nth.call(null,vec__16085_16104,1,null);domina.set_style_BANG_.call(null,content,name_16105,value_16106);
{
var G__16107 = cljs.core.next.call(null,seq__16080_16098__$1);
var G__16108 = null;
var G__16109 = 0;
var G__16110 = 0;
seq__16080_16086 = G__16107;
chunk__16081_16087 = G__16108;
count__16082_16088 = G__16109;
i__16083_16089 = G__16110;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16117_16123 = cljs.core.seq.call(null,attrs);var chunk__16118_16124 = null;var count__16119_16125 = 0;var i__16120_16126 = 0;while(true){
if((i__16120_16126 < count__16119_16125))
{var vec__16121_16127 = cljs.core._nth.call(null,chunk__16118_16124,i__16120_16126);var name_16128 = cljs.core.nth.call(null,vec__16121_16127,0,null);var value_16129 = cljs.core.nth.call(null,vec__16121_16127,1,null);domina.set_attr_BANG_.call(null,content,name_16128,value_16129);
{
var G__16130 = seq__16117_16123;
var G__16131 = chunk__16118_16124;
var G__16132 = count__16119_16125;
var G__16133 = (i__16120_16126 + 1);
seq__16117_16123 = G__16130;
chunk__16118_16124 = G__16131;
count__16119_16125 = G__16132;
i__16120_16126 = G__16133;
continue;
}
} else
{var temp__4092__auto___16134 = cljs.core.seq.call(null,seq__16117_16123);if(temp__4092__auto___16134)
{var seq__16117_16135__$1 = temp__4092__auto___16134;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16117_16135__$1))
{var c__4148__auto___16136 = cljs.core.chunk_first.call(null,seq__16117_16135__$1);{
var G__16137 = cljs.core.chunk_rest.call(null,seq__16117_16135__$1);
var G__16138 = c__4148__auto___16136;
var G__16139 = cljs.core.count.call(null,c__4148__auto___16136);
var G__16140 = 0;
seq__16117_16123 = G__16137;
chunk__16118_16124 = G__16138;
count__16119_16125 = G__16139;
i__16120_16126 = G__16140;
continue;
}
} else
{var vec__16122_16141 = cljs.core.first.call(null,seq__16117_16135__$1);var name_16142 = cljs.core.nth.call(null,vec__16122_16141,0,null);var value_16143 = cljs.core.nth.call(null,vec__16122_16141,1,null);domina.set_attr_BANG_.call(null,content,name_16142,value_16143);
{
var G__16144 = cljs.core.next.call(null,seq__16117_16135__$1);
var G__16145 = null;
var G__16146 = 0;
var G__16147 = 0;
seq__16117_16123 = G__16144;
chunk__16118_16124 = G__16145;
count__16119_16125 = G__16146;
i__16120_16126 = G__16147;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16152_16156 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16153_16157 = null;var count__16154_16158 = 0;var i__16155_16159 = 0;while(true){
if((i__16155_16159 < count__16154_16158))
{var node_16160 = cljs.core._nth.call(null,chunk__16153_16157,i__16155_16159);goog.dom.classes.add(node_16160,class$);
{
var G__16161 = seq__16152_16156;
var G__16162 = chunk__16153_16157;
var G__16163 = count__16154_16158;
var G__16164 = (i__16155_16159 + 1);
seq__16152_16156 = G__16161;
chunk__16153_16157 = G__16162;
count__16154_16158 = G__16163;
i__16155_16159 = G__16164;
continue;
}
} else
{var temp__4092__auto___16165 = cljs.core.seq.call(null,seq__16152_16156);if(temp__4092__auto___16165)
{var seq__16152_16166__$1 = temp__4092__auto___16165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16152_16166__$1))
{var c__4148__auto___16167 = cljs.core.chunk_first.call(null,seq__16152_16166__$1);{
var G__16168 = cljs.core.chunk_rest.call(null,seq__16152_16166__$1);
var G__16169 = c__4148__auto___16167;
var G__16170 = cljs.core.count.call(null,c__4148__auto___16167);
var G__16171 = 0;
seq__16152_16156 = G__16168;
chunk__16153_16157 = G__16169;
count__16154_16158 = G__16170;
i__16155_16159 = G__16171;
continue;
}
} else
{var node_16172 = cljs.core.first.call(null,seq__16152_16166__$1);goog.dom.classes.add(node_16172,class$);
{
var G__16173 = cljs.core.next.call(null,seq__16152_16166__$1);
var G__16174 = null;
var G__16175 = 0;
var G__16176 = 0;
seq__16152_16156 = G__16173;
chunk__16153_16157 = G__16174;
count__16154_16158 = G__16175;
i__16155_16159 = G__16176;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16181_16185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16182_16186 = null;var count__16183_16187 = 0;var i__16184_16188 = 0;while(true){
if((i__16184_16188 < count__16183_16187))
{var node_16189 = cljs.core._nth.call(null,chunk__16182_16186,i__16184_16188);goog.dom.classes.remove(node_16189,class$);
{
var G__16190 = seq__16181_16185;
var G__16191 = chunk__16182_16186;
var G__16192 = count__16183_16187;
var G__16193 = (i__16184_16188 + 1);
seq__16181_16185 = G__16190;
chunk__16182_16186 = G__16191;
count__16183_16187 = G__16192;
i__16184_16188 = G__16193;
continue;
}
} else
{var temp__4092__auto___16194 = cljs.core.seq.call(null,seq__16181_16185);if(temp__4092__auto___16194)
{var seq__16181_16195__$1 = temp__4092__auto___16194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16181_16195__$1))
{var c__4148__auto___16196 = cljs.core.chunk_first.call(null,seq__16181_16195__$1);{
var G__16197 = cljs.core.chunk_rest.call(null,seq__16181_16195__$1);
var G__16198 = c__4148__auto___16196;
var G__16199 = cljs.core.count.call(null,c__4148__auto___16196);
var G__16200 = 0;
seq__16181_16185 = G__16197;
chunk__16182_16186 = G__16198;
count__16183_16187 = G__16199;
i__16184_16188 = G__16200;
continue;
}
} else
{var node_16201 = cljs.core.first.call(null,seq__16181_16195__$1);goog.dom.classes.remove(node_16201,class$);
{
var G__16202 = cljs.core.next.call(null,seq__16181_16195__$1);
var G__16203 = null;
var G__16204 = 0;
var G__16205 = 0;
seq__16181_16185 = G__16202;
chunk__16182_16186 = G__16203;
count__16183_16187 = G__16204;
i__16184_16188 = G__16205;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16210_16214 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16211_16215 = null;var count__16212_16216 = 0;var i__16213_16217 = 0;while(true){
if((i__16213_16217 < count__16212_16216))
{var node_16218 = cljs.core._nth.call(null,chunk__16211_16215,i__16213_16217);goog.dom.classes.toggle(node_16218,class$);
{
var G__16219 = seq__16210_16214;
var G__16220 = chunk__16211_16215;
var G__16221 = count__16212_16216;
var G__16222 = (i__16213_16217 + 1);
seq__16210_16214 = G__16219;
chunk__16211_16215 = G__16220;
count__16212_16216 = G__16221;
i__16213_16217 = G__16222;
continue;
}
} else
{var temp__4092__auto___16223 = cljs.core.seq.call(null,seq__16210_16214);if(temp__4092__auto___16223)
{var seq__16210_16224__$1 = temp__4092__auto___16223;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16210_16224__$1))
{var c__4148__auto___16225 = cljs.core.chunk_first.call(null,seq__16210_16224__$1);{
var G__16226 = cljs.core.chunk_rest.call(null,seq__16210_16224__$1);
var G__16227 = c__4148__auto___16225;
var G__16228 = cljs.core.count.call(null,c__4148__auto___16225);
var G__16229 = 0;
seq__16210_16214 = G__16226;
chunk__16211_16215 = G__16227;
count__16212_16216 = G__16228;
i__16213_16217 = G__16229;
continue;
}
} else
{var node_16230 = cljs.core.first.call(null,seq__16210_16224__$1);goog.dom.classes.toggle(node_16230,class$);
{
var G__16231 = cljs.core.next.call(null,seq__16210_16224__$1);
var G__16232 = null;
var G__16233 = 0;
var G__16234 = 0;
seq__16210_16214 = G__16231;
chunk__16211_16215 = G__16232;
count__16212_16216 = G__16233;
i__16213_16217 = G__16234;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16243__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16239_16244 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16240_16245 = null;var count__16241_16246 = 0;var i__16242_16247 = 0;while(true){
if((i__16242_16247 < count__16241_16246))
{var node_16248 = cljs.core._nth.call(null,chunk__16240_16245,i__16242_16247);goog.dom.classes.set(node_16248,classes_16243__$1);
{
var G__16249 = seq__16239_16244;
var G__16250 = chunk__16240_16245;
var G__16251 = count__16241_16246;
var G__16252 = (i__16242_16247 + 1);
seq__16239_16244 = G__16249;
chunk__16240_16245 = G__16250;
count__16241_16246 = G__16251;
i__16242_16247 = G__16252;
continue;
}
} else
{var temp__4092__auto___16253 = cljs.core.seq.call(null,seq__16239_16244);if(temp__4092__auto___16253)
{var seq__16239_16254__$1 = temp__4092__auto___16253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16239_16254__$1))
{var c__4148__auto___16255 = cljs.core.chunk_first.call(null,seq__16239_16254__$1);{
var G__16256 = cljs.core.chunk_rest.call(null,seq__16239_16254__$1);
var G__16257 = c__4148__auto___16255;
var G__16258 = cljs.core.count.call(null,c__4148__auto___16255);
var G__16259 = 0;
seq__16239_16244 = G__16256;
chunk__16240_16245 = G__16257;
count__16241_16246 = G__16258;
i__16242_16247 = G__16259;
continue;
}
} else
{var node_16260 = cljs.core.first.call(null,seq__16239_16254__$1);goog.dom.classes.set(node_16260,classes_16243__$1);
{
var G__16261 = cljs.core.next.call(null,seq__16239_16254__$1);
var G__16262 = null;
var G__16263 = 0;
var G__16264 = 0;
seq__16239_16244 = G__16261;
chunk__16240_16245 = G__16262;
count__16241_16246 = G__16263;
i__16242_16247 = G__16264;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16269_16273 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16270_16274 = null;var count__16271_16275 = 0;var i__16272_16276 = 0;while(true){
if((i__16272_16276 < count__16271_16275))
{var node_16277 = cljs.core._nth.call(null,chunk__16270_16274,i__16272_16276);goog.dom.setTextContent(node_16277,value);
{
var G__16278 = seq__16269_16273;
var G__16279 = chunk__16270_16274;
var G__16280 = count__16271_16275;
var G__16281 = (i__16272_16276 + 1);
seq__16269_16273 = G__16278;
chunk__16270_16274 = G__16279;
count__16271_16275 = G__16280;
i__16272_16276 = G__16281;
continue;
}
} else
{var temp__4092__auto___16282 = cljs.core.seq.call(null,seq__16269_16273);if(temp__4092__auto___16282)
{var seq__16269_16283__$1 = temp__4092__auto___16282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16269_16283__$1))
{var c__4148__auto___16284 = cljs.core.chunk_first.call(null,seq__16269_16283__$1);{
var G__16285 = cljs.core.chunk_rest.call(null,seq__16269_16283__$1);
var G__16286 = c__4148__auto___16284;
var G__16287 = cljs.core.count.call(null,c__4148__auto___16284);
var G__16288 = 0;
seq__16269_16273 = G__16285;
chunk__16270_16274 = G__16286;
count__16271_16275 = G__16287;
i__16272_16276 = G__16288;
continue;
}
} else
{var node_16289 = cljs.core.first.call(null,seq__16269_16283__$1);goog.dom.setTextContent(node_16289,value);
{
var G__16290 = cljs.core.next.call(null,seq__16269_16283__$1);
var G__16291 = null;
var G__16292 = 0;
var G__16293 = 0;
seq__16269_16273 = G__16290;
chunk__16270_16274 = G__16291;
count__16271_16275 = G__16292;
i__16272_16276 = G__16293;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16298_16302 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16299_16303 = null;var count__16300_16304 = 0;var i__16301_16305 = 0;while(true){
if((i__16301_16305 < count__16300_16304))
{var node_16306 = cljs.core._nth.call(null,chunk__16299_16303,i__16301_16305);goog.dom.forms.setValue(node_16306,value);
{
var G__16307 = seq__16298_16302;
var G__16308 = chunk__16299_16303;
var G__16309 = count__16300_16304;
var G__16310 = (i__16301_16305 + 1);
seq__16298_16302 = G__16307;
chunk__16299_16303 = G__16308;
count__16300_16304 = G__16309;
i__16301_16305 = G__16310;
continue;
}
} else
{var temp__4092__auto___16311 = cljs.core.seq.call(null,seq__16298_16302);if(temp__4092__auto___16311)
{var seq__16298_16312__$1 = temp__4092__auto___16311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16298_16312__$1))
{var c__4148__auto___16313 = cljs.core.chunk_first.call(null,seq__16298_16312__$1);{
var G__16314 = cljs.core.chunk_rest.call(null,seq__16298_16312__$1);
var G__16315 = c__4148__auto___16313;
var G__16316 = cljs.core.count.call(null,c__4148__auto___16313);
var G__16317 = 0;
seq__16298_16302 = G__16314;
chunk__16299_16303 = G__16315;
count__16300_16304 = G__16316;
i__16301_16305 = G__16317;
continue;
}
} else
{var node_16318 = cljs.core.first.call(null,seq__16298_16312__$1);goog.dom.forms.setValue(node_16318,value);
{
var G__16319 = cljs.core.next.call(null,seq__16298_16312__$1);
var G__16320 = null;
var G__16321 = 0;
var G__16322 = 0;
seq__16298_16302 = G__16319;
chunk__16299_16303 = G__16320;
count__16300_16304 = G__16321;
i__16301_16305 = G__16322;
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
{var value_16333 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16329_16334 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16330_16335 = null;var count__16331_16336 = 0;var i__16332_16337 = 0;while(true){
if((i__16332_16337 < count__16331_16336))
{var node_16338 = cljs.core._nth.call(null,chunk__16330_16335,i__16332_16337);node_16338.innerHTML = value_16333;
{
var G__16339 = seq__16329_16334;
var G__16340 = chunk__16330_16335;
var G__16341 = count__16331_16336;
var G__16342 = (i__16332_16337 + 1);
seq__16329_16334 = G__16339;
chunk__16330_16335 = G__16340;
count__16331_16336 = G__16341;
i__16332_16337 = G__16342;
continue;
}
} else
{var temp__4092__auto___16343 = cljs.core.seq.call(null,seq__16329_16334);if(temp__4092__auto___16343)
{var seq__16329_16344__$1 = temp__4092__auto___16343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16329_16344__$1))
{var c__4148__auto___16345 = cljs.core.chunk_first.call(null,seq__16329_16344__$1);{
var G__16346 = cljs.core.chunk_rest.call(null,seq__16329_16344__$1);
var G__16347 = c__4148__auto___16345;
var G__16348 = cljs.core.count.call(null,c__4148__auto___16345);
var G__16349 = 0;
seq__16329_16334 = G__16346;
chunk__16330_16335 = G__16347;
count__16331_16336 = G__16348;
i__16332_16337 = G__16349;
continue;
}
} else
{var node_16350 = cljs.core.first.call(null,seq__16329_16344__$1);node_16350.innerHTML = value_16333;
{
var G__16351 = cljs.core.next.call(null,seq__16329_16344__$1);
var G__16352 = null;
var G__16353 = 0;
var G__16354 = 0;
seq__16329_16334 = G__16351;
chunk__16330_16335 = G__16352;
count__16331_16336 = G__16353;
i__16332_16337 = G__16354;
continue;
}
}
} else
{}
}
break;
}
}catch (e16328){if((e16328 instanceof Error))
{var e_16355 = e16328;domina.replace_children_BANG_.call(null,content,value_16333);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16328;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16362_16366 = cljs.core.seq.call(null,children);var chunk__16363_16367 = null;var count__16364_16368 = 0;var i__16365_16369 = 0;while(true){
if((i__16365_16369 < count__16364_16368))
{var child_16370 = cljs.core._nth.call(null,chunk__16363_16367,i__16365_16369);frag.appendChild(child_16370);
{
var G__16371 = seq__16362_16366;
var G__16372 = chunk__16363_16367;
var G__16373 = count__16364_16368;
var G__16374 = (i__16365_16369 + 1);
seq__16362_16366 = G__16371;
chunk__16363_16367 = G__16372;
count__16364_16368 = G__16373;
i__16365_16369 = G__16374;
continue;
}
} else
{var temp__4092__auto___16375 = cljs.core.seq.call(null,seq__16362_16366);if(temp__4092__auto___16375)
{var seq__16362_16376__$1 = temp__4092__auto___16375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16362_16376__$1))
{var c__4148__auto___16377 = cljs.core.chunk_first.call(null,seq__16362_16376__$1);{
var G__16378 = cljs.core.chunk_rest.call(null,seq__16362_16376__$1);
var G__16379 = c__4148__auto___16377;
var G__16380 = cljs.core.count.call(null,c__4148__auto___16377);
var G__16381 = 0;
seq__16362_16366 = G__16378;
chunk__16363_16367 = G__16379;
count__16364_16368 = G__16380;
i__16365_16369 = G__16381;
continue;
}
} else
{var child_16382 = cljs.core.first.call(null,seq__16362_16376__$1);frag.appendChild(child_16382);
{
var G__16383 = cljs.core.next.call(null,seq__16362_16376__$1);
var G__16384 = null;
var G__16385 = 0;
var G__16386 = 0;
seq__16362_16366 = G__16383;
chunk__16363_16367 = G__16384;
count__16364_16368 = G__16385;
i__16365_16369 = G__16386;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16356_SHARP_,p2__16357_SHARP_){return f.call(null,p1__16356_SHARP_,p2__16357_SHARP_);
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
{if((function (){var G__16388 = list_thing;if(G__16388)
{var bit__4050__auto__ = (G__16388.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16388.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16388.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16388);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16388);
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
{if((function (){var G__16389 = content;if(G__16389)
{var bit__4050__auto__ = (G__16389.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16389.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16389.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16389);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16389);
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
{if((function (){var G__16390 = content;if(G__16390)
{var bit__4050__auto__ = (G__16390.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16390.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16390.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16390);
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