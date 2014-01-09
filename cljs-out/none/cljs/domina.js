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
var opt_wrapper_14925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_14926 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_14927 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_14926,table_section_wrapper_14926,opt_wrapper_14925,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_14927,table_section_wrapper_14926,cell_wrapper_14927,opt_wrapper_14925,table_section_wrapper_14926,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_14926]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__14932 = cljs.core.seq.call(null,tbody);var chunk__14933 = null;var count__14934 = 0;var i__14935 = 0;while(true){
if((i__14935 < count__14934))
{var child = cljs.core._nth.call(null,chunk__14933,i__14935);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14936 = seq__14932;
var G__14937 = chunk__14933;
var G__14938 = count__14934;
var G__14939 = (i__14935 + 1);
seq__14932 = G__14936;
chunk__14933 = G__14937;
count__14934 = G__14938;
i__14935 = G__14939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14932);if(temp__4092__auto__)
{var seq__14932__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14932__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14932__$1);{
var G__14940 = cljs.core.chunk_rest.call(null,seq__14932__$1);
var G__14941 = c__4148__auto__;
var G__14942 = cljs.core.count.call(null,c__4148__auto__);
var G__14943 = 0;
seq__14932 = G__14940;
chunk__14933 = G__14941;
count__14934 = G__14942;
i__14935 = G__14943;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__14932__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__14944 = cljs.core.next.call(null,seq__14932__$1);
var G__14945 = null;
var G__14946 = 0;
var G__14947 = 0;
seq__14932 = G__14944;
chunk__14933 = G__14945;
count__14934 = G__14946;
i__14935 = G__14947;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__14949 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__14949,0,null);var start_wrap = cljs.core.nth.call(null,vec__14949,1,null);var end_wrap = cljs.core.nth.call(null,vec__14949,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__14950 = wrapper.lastChild;
var G__14951 = (level - 1);
wrapper = G__14950;
level = G__14951;
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
domina.DomContent = (function (){var obj14953 = {};return obj14953;
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
log_debug.cljs$lang$applyTo = (function (arglist__14954){
var mesg = cljs.core.seq(arglist__14954);
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
log.cljs$lang$applyTo = (function (arglist__14955){
var mesg = cljs.core.seq(arglist__14955);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__14956){
var contents = cljs.core.seq(arglist__14956);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__14957_SHARP_){return p1__14957_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__14958_SHARP_,p2__14959_SHARP_){return goog.dom.insertChildAt(p1__14958_SHARP_,p2__14959_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14961_SHARP_,p2__14960_SHARP_){return goog.dom.insertSiblingBefore(p2__14960_SHARP_,p1__14961_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__14963_SHARP_,p2__14962_SHARP_){return goog.dom.insertSiblingAfter(p2__14962_SHARP_,p1__14963_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__14965_SHARP_,p2__14964_SHARP_){return goog.dom.replaceNode(p2__14964_SHARP_,p1__14965_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__14970_14974 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14971_14975 = null;var count__14972_14976 = 0;var i__14973_14977 = 0;while(true){
if((i__14973_14977 < count__14972_14976))
{var n_14978 = cljs.core._nth.call(null,chunk__14971_14975,i__14973_14977);goog.style.setStyle(n_14978,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14979 = seq__14970_14974;
var G__14980 = chunk__14971_14975;
var G__14981 = count__14972_14976;
var G__14982 = (i__14973_14977 + 1);
seq__14970_14974 = G__14979;
chunk__14971_14975 = G__14980;
count__14972_14976 = G__14981;
i__14973_14977 = G__14982;
continue;
}
} else
{var temp__4092__auto___14983 = cljs.core.seq.call(null,seq__14970_14974);if(temp__4092__auto___14983)
{var seq__14970_14984__$1 = temp__4092__auto___14983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14970_14984__$1))
{var c__4148__auto___14985 = cljs.core.chunk_first.call(null,seq__14970_14984__$1);{
var G__14986 = cljs.core.chunk_rest.call(null,seq__14970_14984__$1);
var G__14987 = c__4148__auto___14985;
var G__14988 = cljs.core.count.call(null,c__4148__auto___14985);
var G__14989 = 0;
seq__14970_14974 = G__14986;
chunk__14971_14975 = G__14987;
count__14972_14976 = G__14988;
i__14973_14977 = G__14989;
continue;
}
} else
{var n_14990 = cljs.core.first.call(null,seq__14970_14984__$1);goog.style.setStyle(n_14990,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__14991 = cljs.core.next.call(null,seq__14970_14984__$1);
var G__14992 = null;
var G__14993 = 0;
var G__14994 = 0;
seq__14970_14974 = G__14991;
chunk__14971_14975 = G__14992;
count__14972_14976 = G__14993;
i__14973_14977 = G__14994;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14995){
var content = cljs.core.first(arglist__14995);
arglist__14995 = cljs.core.next(arglist__14995);
var name = cljs.core.first(arglist__14995);
var value = cljs.core.rest(arglist__14995);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15000_15004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15001_15005 = null;var count__15002_15006 = 0;var i__15003_15007 = 0;while(true){
if((i__15003_15007 < count__15002_15006))
{var n_15008 = cljs.core._nth.call(null,chunk__15001_15005,i__15003_15007);n_15008.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15009 = seq__15000_15004;
var G__15010 = chunk__15001_15005;
var G__15011 = count__15002_15006;
var G__15012 = (i__15003_15007 + 1);
seq__15000_15004 = G__15009;
chunk__15001_15005 = G__15010;
count__15002_15006 = G__15011;
i__15003_15007 = G__15012;
continue;
}
} else
{var temp__4092__auto___15013 = cljs.core.seq.call(null,seq__15000_15004);if(temp__4092__auto___15013)
{var seq__15000_15014__$1 = temp__4092__auto___15013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15000_15014__$1))
{var c__4148__auto___15015 = cljs.core.chunk_first.call(null,seq__15000_15014__$1);{
var G__15016 = cljs.core.chunk_rest.call(null,seq__15000_15014__$1);
var G__15017 = c__4148__auto___15015;
var G__15018 = cljs.core.count.call(null,c__4148__auto___15015);
var G__15019 = 0;
seq__15000_15004 = G__15016;
chunk__15001_15005 = G__15017;
count__15002_15006 = G__15018;
i__15003_15007 = G__15019;
continue;
}
} else
{var n_15020 = cljs.core.first.call(null,seq__15000_15014__$1);n_15020.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15021 = cljs.core.next.call(null,seq__15000_15014__$1);
var G__15022 = null;
var G__15023 = 0;
var G__15024 = 0;
seq__15000_15004 = G__15021;
chunk__15001_15005 = G__15022;
count__15002_15006 = G__15023;
i__15003_15007 = G__15024;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15025){
var content = cljs.core.first(arglist__15025);
arglist__15025 = cljs.core.next(arglist__15025);
var name = cljs.core.first(arglist__15025);
var value = cljs.core.rest(arglist__15025);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15030_15034 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15031_15035 = null;var count__15032_15036 = 0;var i__15033_15037 = 0;while(true){
if((i__15033_15037 < count__15032_15036))
{var n_15038 = cljs.core._nth.call(null,chunk__15031_15035,i__15033_15037);n_15038.removeAttribute(cljs.core.name.call(null,name));
{
var G__15039 = seq__15030_15034;
var G__15040 = chunk__15031_15035;
var G__15041 = count__15032_15036;
var G__15042 = (i__15033_15037 + 1);
seq__15030_15034 = G__15039;
chunk__15031_15035 = G__15040;
count__15032_15036 = G__15041;
i__15033_15037 = G__15042;
continue;
}
} else
{var temp__4092__auto___15043 = cljs.core.seq.call(null,seq__15030_15034);if(temp__4092__auto___15043)
{var seq__15030_15044__$1 = temp__4092__auto___15043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15030_15044__$1))
{var c__4148__auto___15045 = cljs.core.chunk_first.call(null,seq__15030_15044__$1);{
var G__15046 = cljs.core.chunk_rest.call(null,seq__15030_15044__$1);
var G__15047 = c__4148__auto___15045;
var G__15048 = cljs.core.count.call(null,c__4148__auto___15045);
var G__15049 = 0;
seq__15030_15034 = G__15046;
chunk__15031_15035 = G__15047;
count__15032_15036 = G__15048;
i__15033_15037 = G__15049;
continue;
}
} else
{var n_15050 = cljs.core.first.call(null,seq__15030_15044__$1);n_15050.removeAttribute(cljs.core.name.call(null,name));
{
var G__15051 = cljs.core.next.call(null,seq__15030_15044__$1);
var G__15052 = null;
var G__15053 = 0;
var G__15054 = 0;
seq__15030_15034 = G__15051;
chunk__15031_15035 = G__15052;
count__15032_15036 = G__15053;
i__15033_15037 = G__15054;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15056 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15056,0,null);var v = cljs.core.nth.call(null,vec__15056,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15057_SHARP_){var attr = attrs__$1.item(p1__15057_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15064_15070 = cljs.core.seq.call(null,styles);var chunk__15065_15071 = null;var count__15066_15072 = 0;var i__15067_15073 = 0;while(true){
if((i__15067_15073 < count__15066_15072))
{var vec__15068_15074 = cljs.core._nth.call(null,chunk__15065_15071,i__15067_15073);var name_15075 = cljs.core.nth.call(null,vec__15068_15074,0,null);var value_15076 = cljs.core.nth.call(null,vec__15068_15074,1,null);domina.set_style_BANG_.call(null,content,name_15075,value_15076);
{
var G__15077 = seq__15064_15070;
var G__15078 = chunk__15065_15071;
var G__15079 = count__15066_15072;
var G__15080 = (i__15067_15073 + 1);
seq__15064_15070 = G__15077;
chunk__15065_15071 = G__15078;
count__15066_15072 = G__15079;
i__15067_15073 = G__15080;
continue;
}
} else
{var temp__4092__auto___15081 = cljs.core.seq.call(null,seq__15064_15070);if(temp__4092__auto___15081)
{var seq__15064_15082__$1 = temp__4092__auto___15081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15064_15082__$1))
{var c__4148__auto___15083 = cljs.core.chunk_first.call(null,seq__15064_15082__$1);{
var G__15084 = cljs.core.chunk_rest.call(null,seq__15064_15082__$1);
var G__15085 = c__4148__auto___15083;
var G__15086 = cljs.core.count.call(null,c__4148__auto___15083);
var G__15087 = 0;
seq__15064_15070 = G__15084;
chunk__15065_15071 = G__15085;
count__15066_15072 = G__15086;
i__15067_15073 = G__15087;
continue;
}
} else
{var vec__15069_15088 = cljs.core.first.call(null,seq__15064_15082__$1);var name_15089 = cljs.core.nth.call(null,vec__15069_15088,0,null);var value_15090 = cljs.core.nth.call(null,vec__15069_15088,1,null);domina.set_style_BANG_.call(null,content,name_15089,value_15090);
{
var G__15091 = cljs.core.next.call(null,seq__15064_15082__$1);
var G__15092 = null;
var G__15093 = 0;
var G__15094 = 0;
seq__15064_15070 = G__15091;
chunk__15065_15071 = G__15092;
count__15066_15072 = G__15093;
i__15067_15073 = G__15094;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15101_15107 = cljs.core.seq.call(null,attrs);var chunk__15102_15108 = null;var count__15103_15109 = 0;var i__15104_15110 = 0;while(true){
if((i__15104_15110 < count__15103_15109))
{var vec__15105_15111 = cljs.core._nth.call(null,chunk__15102_15108,i__15104_15110);var name_15112 = cljs.core.nth.call(null,vec__15105_15111,0,null);var value_15113 = cljs.core.nth.call(null,vec__15105_15111,1,null);domina.set_attr_BANG_.call(null,content,name_15112,value_15113);
{
var G__15114 = seq__15101_15107;
var G__15115 = chunk__15102_15108;
var G__15116 = count__15103_15109;
var G__15117 = (i__15104_15110 + 1);
seq__15101_15107 = G__15114;
chunk__15102_15108 = G__15115;
count__15103_15109 = G__15116;
i__15104_15110 = G__15117;
continue;
}
} else
{var temp__4092__auto___15118 = cljs.core.seq.call(null,seq__15101_15107);if(temp__4092__auto___15118)
{var seq__15101_15119__$1 = temp__4092__auto___15118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15101_15119__$1))
{var c__4148__auto___15120 = cljs.core.chunk_first.call(null,seq__15101_15119__$1);{
var G__15121 = cljs.core.chunk_rest.call(null,seq__15101_15119__$1);
var G__15122 = c__4148__auto___15120;
var G__15123 = cljs.core.count.call(null,c__4148__auto___15120);
var G__15124 = 0;
seq__15101_15107 = G__15121;
chunk__15102_15108 = G__15122;
count__15103_15109 = G__15123;
i__15104_15110 = G__15124;
continue;
}
} else
{var vec__15106_15125 = cljs.core.first.call(null,seq__15101_15119__$1);var name_15126 = cljs.core.nth.call(null,vec__15106_15125,0,null);var value_15127 = cljs.core.nth.call(null,vec__15106_15125,1,null);domina.set_attr_BANG_.call(null,content,name_15126,value_15127);
{
var G__15128 = cljs.core.next.call(null,seq__15101_15119__$1);
var G__15129 = null;
var G__15130 = 0;
var G__15131 = 0;
seq__15101_15107 = G__15128;
chunk__15102_15108 = G__15129;
count__15103_15109 = G__15130;
i__15104_15110 = G__15131;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15136_15140 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15137_15141 = null;var count__15138_15142 = 0;var i__15139_15143 = 0;while(true){
if((i__15139_15143 < count__15138_15142))
{var node_15144 = cljs.core._nth.call(null,chunk__15137_15141,i__15139_15143);goog.dom.classes.add(node_15144,class$);
{
var G__15145 = seq__15136_15140;
var G__15146 = chunk__15137_15141;
var G__15147 = count__15138_15142;
var G__15148 = (i__15139_15143 + 1);
seq__15136_15140 = G__15145;
chunk__15137_15141 = G__15146;
count__15138_15142 = G__15147;
i__15139_15143 = G__15148;
continue;
}
} else
{var temp__4092__auto___15149 = cljs.core.seq.call(null,seq__15136_15140);if(temp__4092__auto___15149)
{var seq__15136_15150__$1 = temp__4092__auto___15149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15136_15150__$1))
{var c__4148__auto___15151 = cljs.core.chunk_first.call(null,seq__15136_15150__$1);{
var G__15152 = cljs.core.chunk_rest.call(null,seq__15136_15150__$1);
var G__15153 = c__4148__auto___15151;
var G__15154 = cljs.core.count.call(null,c__4148__auto___15151);
var G__15155 = 0;
seq__15136_15140 = G__15152;
chunk__15137_15141 = G__15153;
count__15138_15142 = G__15154;
i__15139_15143 = G__15155;
continue;
}
} else
{var node_15156 = cljs.core.first.call(null,seq__15136_15150__$1);goog.dom.classes.add(node_15156,class$);
{
var G__15157 = cljs.core.next.call(null,seq__15136_15150__$1);
var G__15158 = null;
var G__15159 = 0;
var G__15160 = 0;
seq__15136_15140 = G__15157;
chunk__15137_15141 = G__15158;
count__15138_15142 = G__15159;
i__15139_15143 = G__15160;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15165_15169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15166_15170 = null;var count__15167_15171 = 0;var i__15168_15172 = 0;while(true){
if((i__15168_15172 < count__15167_15171))
{var node_15173 = cljs.core._nth.call(null,chunk__15166_15170,i__15168_15172);goog.dom.classes.remove(node_15173,class$);
{
var G__15174 = seq__15165_15169;
var G__15175 = chunk__15166_15170;
var G__15176 = count__15167_15171;
var G__15177 = (i__15168_15172 + 1);
seq__15165_15169 = G__15174;
chunk__15166_15170 = G__15175;
count__15167_15171 = G__15176;
i__15168_15172 = G__15177;
continue;
}
} else
{var temp__4092__auto___15178 = cljs.core.seq.call(null,seq__15165_15169);if(temp__4092__auto___15178)
{var seq__15165_15179__$1 = temp__4092__auto___15178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15165_15179__$1))
{var c__4148__auto___15180 = cljs.core.chunk_first.call(null,seq__15165_15179__$1);{
var G__15181 = cljs.core.chunk_rest.call(null,seq__15165_15179__$1);
var G__15182 = c__4148__auto___15180;
var G__15183 = cljs.core.count.call(null,c__4148__auto___15180);
var G__15184 = 0;
seq__15165_15169 = G__15181;
chunk__15166_15170 = G__15182;
count__15167_15171 = G__15183;
i__15168_15172 = G__15184;
continue;
}
} else
{var node_15185 = cljs.core.first.call(null,seq__15165_15179__$1);goog.dom.classes.remove(node_15185,class$);
{
var G__15186 = cljs.core.next.call(null,seq__15165_15179__$1);
var G__15187 = null;
var G__15188 = 0;
var G__15189 = 0;
seq__15165_15169 = G__15186;
chunk__15166_15170 = G__15187;
count__15167_15171 = G__15188;
i__15168_15172 = G__15189;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15194_15198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15195_15199 = null;var count__15196_15200 = 0;var i__15197_15201 = 0;while(true){
if((i__15197_15201 < count__15196_15200))
{var node_15202 = cljs.core._nth.call(null,chunk__15195_15199,i__15197_15201);goog.dom.classes.toggle(node_15202,class$);
{
var G__15203 = seq__15194_15198;
var G__15204 = chunk__15195_15199;
var G__15205 = count__15196_15200;
var G__15206 = (i__15197_15201 + 1);
seq__15194_15198 = G__15203;
chunk__15195_15199 = G__15204;
count__15196_15200 = G__15205;
i__15197_15201 = G__15206;
continue;
}
} else
{var temp__4092__auto___15207 = cljs.core.seq.call(null,seq__15194_15198);if(temp__4092__auto___15207)
{var seq__15194_15208__$1 = temp__4092__auto___15207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15194_15208__$1))
{var c__4148__auto___15209 = cljs.core.chunk_first.call(null,seq__15194_15208__$1);{
var G__15210 = cljs.core.chunk_rest.call(null,seq__15194_15208__$1);
var G__15211 = c__4148__auto___15209;
var G__15212 = cljs.core.count.call(null,c__4148__auto___15209);
var G__15213 = 0;
seq__15194_15198 = G__15210;
chunk__15195_15199 = G__15211;
count__15196_15200 = G__15212;
i__15197_15201 = G__15213;
continue;
}
} else
{var node_15214 = cljs.core.first.call(null,seq__15194_15208__$1);goog.dom.classes.toggle(node_15214,class$);
{
var G__15215 = cljs.core.next.call(null,seq__15194_15208__$1);
var G__15216 = null;
var G__15217 = 0;
var G__15218 = 0;
seq__15194_15198 = G__15215;
chunk__15195_15199 = G__15216;
count__15196_15200 = G__15217;
i__15197_15201 = G__15218;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15227__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15223_15228 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15224_15229 = null;var count__15225_15230 = 0;var i__15226_15231 = 0;while(true){
if((i__15226_15231 < count__15225_15230))
{var node_15232 = cljs.core._nth.call(null,chunk__15224_15229,i__15226_15231);goog.dom.classes.set(node_15232,classes_15227__$1);
{
var G__15233 = seq__15223_15228;
var G__15234 = chunk__15224_15229;
var G__15235 = count__15225_15230;
var G__15236 = (i__15226_15231 + 1);
seq__15223_15228 = G__15233;
chunk__15224_15229 = G__15234;
count__15225_15230 = G__15235;
i__15226_15231 = G__15236;
continue;
}
} else
{var temp__4092__auto___15237 = cljs.core.seq.call(null,seq__15223_15228);if(temp__4092__auto___15237)
{var seq__15223_15238__$1 = temp__4092__auto___15237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15223_15238__$1))
{var c__4148__auto___15239 = cljs.core.chunk_first.call(null,seq__15223_15238__$1);{
var G__15240 = cljs.core.chunk_rest.call(null,seq__15223_15238__$1);
var G__15241 = c__4148__auto___15239;
var G__15242 = cljs.core.count.call(null,c__4148__auto___15239);
var G__15243 = 0;
seq__15223_15228 = G__15240;
chunk__15224_15229 = G__15241;
count__15225_15230 = G__15242;
i__15226_15231 = G__15243;
continue;
}
} else
{var node_15244 = cljs.core.first.call(null,seq__15223_15238__$1);goog.dom.classes.set(node_15244,classes_15227__$1);
{
var G__15245 = cljs.core.next.call(null,seq__15223_15238__$1);
var G__15246 = null;
var G__15247 = 0;
var G__15248 = 0;
seq__15223_15228 = G__15245;
chunk__15224_15229 = G__15246;
count__15225_15230 = G__15247;
i__15226_15231 = G__15248;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15253_15257 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15254_15258 = null;var count__15255_15259 = 0;var i__15256_15260 = 0;while(true){
if((i__15256_15260 < count__15255_15259))
{var node_15261 = cljs.core._nth.call(null,chunk__15254_15258,i__15256_15260);goog.dom.setTextContent(node_15261,value);
{
var G__15262 = seq__15253_15257;
var G__15263 = chunk__15254_15258;
var G__15264 = count__15255_15259;
var G__15265 = (i__15256_15260 + 1);
seq__15253_15257 = G__15262;
chunk__15254_15258 = G__15263;
count__15255_15259 = G__15264;
i__15256_15260 = G__15265;
continue;
}
} else
{var temp__4092__auto___15266 = cljs.core.seq.call(null,seq__15253_15257);if(temp__4092__auto___15266)
{var seq__15253_15267__$1 = temp__4092__auto___15266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15253_15267__$1))
{var c__4148__auto___15268 = cljs.core.chunk_first.call(null,seq__15253_15267__$1);{
var G__15269 = cljs.core.chunk_rest.call(null,seq__15253_15267__$1);
var G__15270 = c__4148__auto___15268;
var G__15271 = cljs.core.count.call(null,c__4148__auto___15268);
var G__15272 = 0;
seq__15253_15257 = G__15269;
chunk__15254_15258 = G__15270;
count__15255_15259 = G__15271;
i__15256_15260 = G__15272;
continue;
}
} else
{var node_15273 = cljs.core.first.call(null,seq__15253_15267__$1);goog.dom.setTextContent(node_15273,value);
{
var G__15274 = cljs.core.next.call(null,seq__15253_15267__$1);
var G__15275 = null;
var G__15276 = 0;
var G__15277 = 0;
seq__15253_15257 = G__15274;
chunk__15254_15258 = G__15275;
count__15255_15259 = G__15276;
i__15256_15260 = G__15277;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15282_15286 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15283_15287 = null;var count__15284_15288 = 0;var i__15285_15289 = 0;while(true){
if((i__15285_15289 < count__15284_15288))
{var node_15290 = cljs.core._nth.call(null,chunk__15283_15287,i__15285_15289);goog.dom.forms.setValue(node_15290,value);
{
var G__15291 = seq__15282_15286;
var G__15292 = chunk__15283_15287;
var G__15293 = count__15284_15288;
var G__15294 = (i__15285_15289 + 1);
seq__15282_15286 = G__15291;
chunk__15283_15287 = G__15292;
count__15284_15288 = G__15293;
i__15285_15289 = G__15294;
continue;
}
} else
{var temp__4092__auto___15295 = cljs.core.seq.call(null,seq__15282_15286);if(temp__4092__auto___15295)
{var seq__15282_15296__$1 = temp__4092__auto___15295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15282_15296__$1))
{var c__4148__auto___15297 = cljs.core.chunk_first.call(null,seq__15282_15296__$1);{
var G__15298 = cljs.core.chunk_rest.call(null,seq__15282_15296__$1);
var G__15299 = c__4148__auto___15297;
var G__15300 = cljs.core.count.call(null,c__4148__auto___15297);
var G__15301 = 0;
seq__15282_15286 = G__15298;
chunk__15283_15287 = G__15299;
count__15284_15288 = G__15300;
i__15285_15289 = G__15301;
continue;
}
} else
{var node_15302 = cljs.core.first.call(null,seq__15282_15296__$1);goog.dom.forms.setValue(node_15302,value);
{
var G__15303 = cljs.core.next.call(null,seq__15282_15296__$1);
var G__15304 = null;
var G__15305 = 0;
var G__15306 = 0;
seq__15282_15286 = G__15303;
chunk__15283_15287 = G__15304;
count__15284_15288 = G__15305;
i__15285_15289 = G__15306;
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
{var value_15317 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15313_15318 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15314_15319 = null;var count__15315_15320 = 0;var i__15316_15321 = 0;while(true){
if((i__15316_15321 < count__15315_15320))
{var node_15322 = cljs.core._nth.call(null,chunk__15314_15319,i__15316_15321);node_15322.innerHTML = value_15317;
{
var G__15323 = seq__15313_15318;
var G__15324 = chunk__15314_15319;
var G__15325 = count__15315_15320;
var G__15326 = (i__15316_15321 + 1);
seq__15313_15318 = G__15323;
chunk__15314_15319 = G__15324;
count__15315_15320 = G__15325;
i__15316_15321 = G__15326;
continue;
}
} else
{var temp__4092__auto___15327 = cljs.core.seq.call(null,seq__15313_15318);if(temp__4092__auto___15327)
{var seq__15313_15328__$1 = temp__4092__auto___15327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15313_15328__$1))
{var c__4148__auto___15329 = cljs.core.chunk_first.call(null,seq__15313_15328__$1);{
var G__15330 = cljs.core.chunk_rest.call(null,seq__15313_15328__$1);
var G__15331 = c__4148__auto___15329;
var G__15332 = cljs.core.count.call(null,c__4148__auto___15329);
var G__15333 = 0;
seq__15313_15318 = G__15330;
chunk__15314_15319 = G__15331;
count__15315_15320 = G__15332;
i__15316_15321 = G__15333;
continue;
}
} else
{var node_15334 = cljs.core.first.call(null,seq__15313_15328__$1);node_15334.innerHTML = value_15317;
{
var G__15335 = cljs.core.next.call(null,seq__15313_15328__$1);
var G__15336 = null;
var G__15337 = 0;
var G__15338 = 0;
seq__15313_15318 = G__15335;
chunk__15314_15319 = G__15336;
count__15315_15320 = G__15337;
i__15316_15321 = G__15338;
continue;
}
}
} else
{}
}
break;
}
}catch (e15312){if((e15312 instanceof Error))
{var e_15339 = e15312;domina.replace_children_BANG_.call(null,content,value_15317);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15312;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15346_15350 = cljs.core.seq.call(null,children);var chunk__15347_15351 = null;var count__15348_15352 = 0;var i__15349_15353 = 0;while(true){
if((i__15349_15353 < count__15348_15352))
{var child_15354 = cljs.core._nth.call(null,chunk__15347_15351,i__15349_15353);frag.appendChild(child_15354);
{
var G__15355 = seq__15346_15350;
var G__15356 = chunk__15347_15351;
var G__15357 = count__15348_15352;
var G__15358 = (i__15349_15353 + 1);
seq__15346_15350 = G__15355;
chunk__15347_15351 = G__15356;
count__15348_15352 = G__15357;
i__15349_15353 = G__15358;
continue;
}
} else
{var temp__4092__auto___15359 = cljs.core.seq.call(null,seq__15346_15350);if(temp__4092__auto___15359)
{var seq__15346_15360__$1 = temp__4092__auto___15359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15346_15360__$1))
{var c__4148__auto___15361 = cljs.core.chunk_first.call(null,seq__15346_15360__$1);{
var G__15362 = cljs.core.chunk_rest.call(null,seq__15346_15360__$1);
var G__15363 = c__4148__auto___15361;
var G__15364 = cljs.core.count.call(null,c__4148__auto___15361);
var G__15365 = 0;
seq__15346_15350 = G__15362;
chunk__15347_15351 = G__15363;
count__15348_15352 = G__15364;
i__15349_15353 = G__15365;
continue;
}
} else
{var child_15366 = cljs.core.first.call(null,seq__15346_15360__$1);frag.appendChild(child_15366);
{
var G__15367 = cljs.core.next.call(null,seq__15346_15360__$1);
var G__15368 = null;
var G__15369 = 0;
var G__15370 = 0;
seq__15346_15350 = G__15367;
chunk__15347_15351 = G__15368;
count__15348_15352 = G__15369;
i__15349_15353 = G__15370;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15340_SHARP_,p2__15341_SHARP_){return f.call(null,p1__15340_SHARP_,p2__15341_SHARP_);
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
{if((function (){var G__15372 = list_thing;if(G__15372)
{var bit__4050__auto__ = (G__15372.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15372.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15372.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15372);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15372);
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
{if((function (){var G__15373 = content;if(G__15373)
{var bit__4050__auto__ = (G__15373.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15373.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15373.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15373);
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
{if((function (){var G__15374 = content;if(G__15374)
{var bit__4050__auto__ = (G__15374.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15374.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15374.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15374);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15374);
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