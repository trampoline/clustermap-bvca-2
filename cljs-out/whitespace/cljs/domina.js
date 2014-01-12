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
var opt_wrapper_32983 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32984 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32985 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32984,table_section_wrapper_32984,opt_wrapper_32983,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32985,table_section_wrapper_32984,cell_wrapper_32985,opt_wrapper_32983,table_section_wrapper_32984,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32984]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32990 = cljs.core.seq.call(null,tbody);var chunk__32991 = null;var count__32992 = 0;var i__32993 = 0;while(true){
if((i__32993 < count__32992))
{var child = cljs.core._nth.call(null,chunk__32991,i__32993);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32994 = seq__32990;
var G__32995 = chunk__32991;
var G__32996 = count__32992;
var G__32997 = (i__32993 + 1);
seq__32990 = G__32994;
chunk__32991 = G__32995;
count__32992 = G__32996;
i__32993 = G__32997;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32990);if(temp__4092__auto__)
{var seq__32990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32990__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32990__$1);{
var G__32998 = cljs.core.chunk_rest.call(null,seq__32990__$1);
var G__32999 = c__4148__auto__;
var G__33000 = cljs.core.count.call(null,c__4148__auto__);
var G__33001 = 0;
seq__32990 = G__32998;
chunk__32991 = G__32999;
count__32992 = G__33000;
i__32993 = G__33001;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32990__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33002 = cljs.core.next.call(null,seq__32990__$1);
var G__33003 = null;
var G__33004 = 0;
var G__33005 = 0;
seq__32990 = G__33002;
chunk__32991 = G__33003;
count__32992 = G__33004;
i__32993 = G__33005;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__33007 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33007,0,null);var start_wrap = cljs.core.nth.call(null,vec__33007,1,null);var end_wrap = cljs.core.nth.call(null,vec__33007,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__33008 = wrapper.lastChild;
var G__33009 = (level - 1);
wrapper = G__33008;
level = G__33009;
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
domina.DomContent = (function (){var obj33011 = {};return obj33011;
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
log_debug.cljs$lang$applyTo = (function (arglist__33012){
var mesg = cljs.core.seq(arglist__33012);
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
log.cljs$lang$applyTo = (function (arglist__33013){
var mesg = cljs.core.seq(arglist__33013);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__33014){
var contents = cljs.core.seq(arglist__33014);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33015_SHARP_){return p1__33015_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33016_SHARP_,p2__33017_SHARP_){return goog.dom.insertChildAt(p1__33016_SHARP_,p2__33017_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33019_SHARP_,p2__33018_SHARP_){return goog.dom.insertSiblingBefore(p2__33018_SHARP_,p1__33019_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33021_SHARP_,p2__33020_SHARP_){return goog.dom.insertSiblingAfter(p2__33020_SHARP_,p1__33021_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33023_SHARP_,p2__33022_SHARP_){return goog.dom.replaceNode(p2__33022_SHARP_,p1__33023_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__33028_33032 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33029_33033 = null;var count__33030_33034 = 0;var i__33031_33035 = 0;while(true){
if((i__33031_33035 < count__33030_33034))
{var n_33036 = cljs.core._nth.call(null,chunk__33029_33033,i__33031_33035);goog.style.setStyle(n_33036,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33037 = seq__33028_33032;
var G__33038 = chunk__33029_33033;
var G__33039 = count__33030_33034;
var G__33040 = (i__33031_33035 + 1);
seq__33028_33032 = G__33037;
chunk__33029_33033 = G__33038;
count__33030_33034 = G__33039;
i__33031_33035 = G__33040;
continue;
}
} else
{var temp__4092__auto___33041 = cljs.core.seq.call(null,seq__33028_33032);if(temp__4092__auto___33041)
{var seq__33028_33042__$1 = temp__4092__auto___33041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33028_33042__$1))
{var c__4148__auto___33043 = cljs.core.chunk_first.call(null,seq__33028_33042__$1);{
var G__33044 = cljs.core.chunk_rest.call(null,seq__33028_33042__$1);
var G__33045 = c__4148__auto___33043;
var G__33046 = cljs.core.count.call(null,c__4148__auto___33043);
var G__33047 = 0;
seq__33028_33032 = G__33044;
chunk__33029_33033 = G__33045;
count__33030_33034 = G__33046;
i__33031_33035 = G__33047;
continue;
}
} else
{var n_33048 = cljs.core.first.call(null,seq__33028_33042__$1);goog.style.setStyle(n_33048,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33049 = cljs.core.next.call(null,seq__33028_33042__$1);
var G__33050 = null;
var G__33051 = 0;
var G__33052 = 0;
seq__33028_33032 = G__33049;
chunk__33029_33033 = G__33050;
count__33030_33034 = G__33051;
i__33031_33035 = G__33052;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33053){
var content = cljs.core.first(arglist__33053);
arglist__33053 = cljs.core.next(arglist__33053);
var name = cljs.core.first(arglist__33053);
var value = cljs.core.rest(arglist__33053);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33058_33062 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33059_33063 = null;var count__33060_33064 = 0;var i__33061_33065 = 0;while(true){
if((i__33061_33065 < count__33060_33064))
{var n_33066 = cljs.core._nth.call(null,chunk__33059_33063,i__33061_33065);n_33066.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33067 = seq__33058_33062;
var G__33068 = chunk__33059_33063;
var G__33069 = count__33060_33064;
var G__33070 = (i__33061_33065 + 1);
seq__33058_33062 = G__33067;
chunk__33059_33063 = G__33068;
count__33060_33064 = G__33069;
i__33061_33065 = G__33070;
continue;
}
} else
{var temp__4092__auto___33071 = cljs.core.seq.call(null,seq__33058_33062);if(temp__4092__auto___33071)
{var seq__33058_33072__$1 = temp__4092__auto___33071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33058_33072__$1))
{var c__4148__auto___33073 = cljs.core.chunk_first.call(null,seq__33058_33072__$1);{
var G__33074 = cljs.core.chunk_rest.call(null,seq__33058_33072__$1);
var G__33075 = c__4148__auto___33073;
var G__33076 = cljs.core.count.call(null,c__4148__auto___33073);
var G__33077 = 0;
seq__33058_33062 = G__33074;
chunk__33059_33063 = G__33075;
count__33060_33064 = G__33076;
i__33061_33065 = G__33077;
continue;
}
} else
{var n_33078 = cljs.core.first.call(null,seq__33058_33072__$1);n_33078.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33079 = cljs.core.next.call(null,seq__33058_33072__$1);
var G__33080 = null;
var G__33081 = 0;
var G__33082 = 0;
seq__33058_33062 = G__33079;
chunk__33059_33063 = G__33080;
count__33060_33064 = G__33081;
i__33061_33065 = G__33082;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33083){
var content = cljs.core.first(arglist__33083);
arglist__33083 = cljs.core.next(arglist__33083);
var name = cljs.core.first(arglist__33083);
var value = cljs.core.rest(arglist__33083);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33088_33092 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33089_33093 = null;var count__33090_33094 = 0;var i__33091_33095 = 0;while(true){
if((i__33091_33095 < count__33090_33094))
{var n_33096 = cljs.core._nth.call(null,chunk__33089_33093,i__33091_33095);n_33096.removeAttribute(cljs.core.name.call(null,name));
{
var G__33097 = seq__33088_33092;
var G__33098 = chunk__33089_33093;
var G__33099 = count__33090_33094;
var G__33100 = (i__33091_33095 + 1);
seq__33088_33092 = G__33097;
chunk__33089_33093 = G__33098;
count__33090_33094 = G__33099;
i__33091_33095 = G__33100;
continue;
}
} else
{var temp__4092__auto___33101 = cljs.core.seq.call(null,seq__33088_33092);if(temp__4092__auto___33101)
{var seq__33088_33102__$1 = temp__4092__auto___33101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33088_33102__$1))
{var c__4148__auto___33103 = cljs.core.chunk_first.call(null,seq__33088_33102__$1);{
var G__33104 = cljs.core.chunk_rest.call(null,seq__33088_33102__$1);
var G__33105 = c__4148__auto___33103;
var G__33106 = cljs.core.count.call(null,c__4148__auto___33103);
var G__33107 = 0;
seq__33088_33092 = G__33104;
chunk__33089_33093 = G__33105;
count__33090_33094 = G__33106;
i__33091_33095 = G__33107;
continue;
}
} else
{var n_33108 = cljs.core.first.call(null,seq__33088_33102__$1);n_33108.removeAttribute(cljs.core.name.call(null,name));
{
var G__33109 = cljs.core.next.call(null,seq__33088_33102__$1);
var G__33110 = null;
var G__33111 = 0;
var G__33112 = 0;
seq__33088_33092 = G__33109;
chunk__33089_33093 = G__33110;
count__33090_33094 = G__33111;
i__33091_33095 = G__33112;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33114 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33114,0,null);var v = cljs.core.nth.call(null,vec__33114,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__33115_SHARP_){var attr = attrs__$1.item(p1__33115_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33122_33128 = cljs.core.seq.call(null,styles);var chunk__33123_33129 = null;var count__33124_33130 = 0;var i__33125_33131 = 0;while(true){
if((i__33125_33131 < count__33124_33130))
{var vec__33126_33132 = cljs.core._nth.call(null,chunk__33123_33129,i__33125_33131);var name_33133 = cljs.core.nth.call(null,vec__33126_33132,0,null);var value_33134 = cljs.core.nth.call(null,vec__33126_33132,1,null);domina.set_style_BANG_.call(null,content,name_33133,value_33134);
{
var G__33135 = seq__33122_33128;
var G__33136 = chunk__33123_33129;
var G__33137 = count__33124_33130;
var G__33138 = (i__33125_33131 + 1);
seq__33122_33128 = G__33135;
chunk__33123_33129 = G__33136;
count__33124_33130 = G__33137;
i__33125_33131 = G__33138;
continue;
}
} else
{var temp__4092__auto___33139 = cljs.core.seq.call(null,seq__33122_33128);if(temp__4092__auto___33139)
{var seq__33122_33140__$1 = temp__4092__auto___33139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33122_33140__$1))
{var c__4148__auto___33141 = cljs.core.chunk_first.call(null,seq__33122_33140__$1);{
var G__33142 = cljs.core.chunk_rest.call(null,seq__33122_33140__$1);
var G__33143 = c__4148__auto___33141;
var G__33144 = cljs.core.count.call(null,c__4148__auto___33141);
var G__33145 = 0;
seq__33122_33128 = G__33142;
chunk__33123_33129 = G__33143;
count__33124_33130 = G__33144;
i__33125_33131 = G__33145;
continue;
}
} else
{var vec__33127_33146 = cljs.core.first.call(null,seq__33122_33140__$1);var name_33147 = cljs.core.nth.call(null,vec__33127_33146,0,null);var value_33148 = cljs.core.nth.call(null,vec__33127_33146,1,null);domina.set_style_BANG_.call(null,content,name_33147,value_33148);
{
var G__33149 = cljs.core.next.call(null,seq__33122_33140__$1);
var G__33150 = null;
var G__33151 = 0;
var G__33152 = 0;
seq__33122_33128 = G__33149;
chunk__33123_33129 = G__33150;
count__33124_33130 = G__33151;
i__33125_33131 = G__33152;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33159_33165 = cljs.core.seq.call(null,attrs);var chunk__33160_33166 = null;var count__33161_33167 = 0;var i__33162_33168 = 0;while(true){
if((i__33162_33168 < count__33161_33167))
{var vec__33163_33169 = cljs.core._nth.call(null,chunk__33160_33166,i__33162_33168);var name_33170 = cljs.core.nth.call(null,vec__33163_33169,0,null);var value_33171 = cljs.core.nth.call(null,vec__33163_33169,1,null);domina.set_attr_BANG_.call(null,content,name_33170,value_33171);
{
var G__33172 = seq__33159_33165;
var G__33173 = chunk__33160_33166;
var G__33174 = count__33161_33167;
var G__33175 = (i__33162_33168 + 1);
seq__33159_33165 = G__33172;
chunk__33160_33166 = G__33173;
count__33161_33167 = G__33174;
i__33162_33168 = G__33175;
continue;
}
} else
{var temp__4092__auto___33176 = cljs.core.seq.call(null,seq__33159_33165);if(temp__4092__auto___33176)
{var seq__33159_33177__$1 = temp__4092__auto___33176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33159_33177__$1))
{var c__4148__auto___33178 = cljs.core.chunk_first.call(null,seq__33159_33177__$1);{
var G__33179 = cljs.core.chunk_rest.call(null,seq__33159_33177__$1);
var G__33180 = c__4148__auto___33178;
var G__33181 = cljs.core.count.call(null,c__4148__auto___33178);
var G__33182 = 0;
seq__33159_33165 = G__33179;
chunk__33160_33166 = G__33180;
count__33161_33167 = G__33181;
i__33162_33168 = G__33182;
continue;
}
} else
{var vec__33164_33183 = cljs.core.first.call(null,seq__33159_33177__$1);var name_33184 = cljs.core.nth.call(null,vec__33164_33183,0,null);var value_33185 = cljs.core.nth.call(null,vec__33164_33183,1,null);domina.set_attr_BANG_.call(null,content,name_33184,value_33185);
{
var G__33186 = cljs.core.next.call(null,seq__33159_33177__$1);
var G__33187 = null;
var G__33188 = 0;
var G__33189 = 0;
seq__33159_33165 = G__33186;
chunk__33160_33166 = G__33187;
count__33161_33167 = G__33188;
i__33162_33168 = G__33189;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33194_33198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33195_33199 = null;var count__33196_33200 = 0;var i__33197_33201 = 0;while(true){
if((i__33197_33201 < count__33196_33200))
{var node_33202 = cljs.core._nth.call(null,chunk__33195_33199,i__33197_33201);goog.dom.classes.add(node_33202,class$);
{
var G__33203 = seq__33194_33198;
var G__33204 = chunk__33195_33199;
var G__33205 = count__33196_33200;
var G__33206 = (i__33197_33201 + 1);
seq__33194_33198 = G__33203;
chunk__33195_33199 = G__33204;
count__33196_33200 = G__33205;
i__33197_33201 = G__33206;
continue;
}
} else
{var temp__4092__auto___33207 = cljs.core.seq.call(null,seq__33194_33198);if(temp__4092__auto___33207)
{var seq__33194_33208__$1 = temp__4092__auto___33207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33194_33208__$1))
{var c__4148__auto___33209 = cljs.core.chunk_first.call(null,seq__33194_33208__$1);{
var G__33210 = cljs.core.chunk_rest.call(null,seq__33194_33208__$1);
var G__33211 = c__4148__auto___33209;
var G__33212 = cljs.core.count.call(null,c__4148__auto___33209);
var G__33213 = 0;
seq__33194_33198 = G__33210;
chunk__33195_33199 = G__33211;
count__33196_33200 = G__33212;
i__33197_33201 = G__33213;
continue;
}
} else
{var node_33214 = cljs.core.first.call(null,seq__33194_33208__$1);goog.dom.classes.add(node_33214,class$);
{
var G__33215 = cljs.core.next.call(null,seq__33194_33208__$1);
var G__33216 = null;
var G__33217 = 0;
var G__33218 = 0;
seq__33194_33198 = G__33215;
chunk__33195_33199 = G__33216;
count__33196_33200 = G__33217;
i__33197_33201 = G__33218;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33223_33227 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33224_33228 = null;var count__33225_33229 = 0;var i__33226_33230 = 0;while(true){
if((i__33226_33230 < count__33225_33229))
{var node_33231 = cljs.core._nth.call(null,chunk__33224_33228,i__33226_33230);goog.dom.classes.remove(node_33231,class$);
{
var G__33232 = seq__33223_33227;
var G__33233 = chunk__33224_33228;
var G__33234 = count__33225_33229;
var G__33235 = (i__33226_33230 + 1);
seq__33223_33227 = G__33232;
chunk__33224_33228 = G__33233;
count__33225_33229 = G__33234;
i__33226_33230 = G__33235;
continue;
}
} else
{var temp__4092__auto___33236 = cljs.core.seq.call(null,seq__33223_33227);if(temp__4092__auto___33236)
{var seq__33223_33237__$1 = temp__4092__auto___33236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33223_33237__$1))
{var c__4148__auto___33238 = cljs.core.chunk_first.call(null,seq__33223_33237__$1);{
var G__33239 = cljs.core.chunk_rest.call(null,seq__33223_33237__$1);
var G__33240 = c__4148__auto___33238;
var G__33241 = cljs.core.count.call(null,c__4148__auto___33238);
var G__33242 = 0;
seq__33223_33227 = G__33239;
chunk__33224_33228 = G__33240;
count__33225_33229 = G__33241;
i__33226_33230 = G__33242;
continue;
}
} else
{var node_33243 = cljs.core.first.call(null,seq__33223_33237__$1);goog.dom.classes.remove(node_33243,class$);
{
var G__33244 = cljs.core.next.call(null,seq__33223_33237__$1);
var G__33245 = null;
var G__33246 = 0;
var G__33247 = 0;
seq__33223_33227 = G__33244;
chunk__33224_33228 = G__33245;
count__33225_33229 = G__33246;
i__33226_33230 = G__33247;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33252_33256 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33253_33257 = null;var count__33254_33258 = 0;var i__33255_33259 = 0;while(true){
if((i__33255_33259 < count__33254_33258))
{var node_33260 = cljs.core._nth.call(null,chunk__33253_33257,i__33255_33259);goog.dom.classes.toggle(node_33260,class$);
{
var G__33261 = seq__33252_33256;
var G__33262 = chunk__33253_33257;
var G__33263 = count__33254_33258;
var G__33264 = (i__33255_33259 + 1);
seq__33252_33256 = G__33261;
chunk__33253_33257 = G__33262;
count__33254_33258 = G__33263;
i__33255_33259 = G__33264;
continue;
}
} else
{var temp__4092__auto___33265 = cljs.core.seq.call(null,seq__33252_33256);if(temp__4092__auto___33265)
{var seq__33252_33266__$1 = temp__4092__auto___33265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33252_33266__$1))
{var c__4148__auto___33267 = cljs.core.chunk_first.call(null,seq__33252_33266__$1);{
var G__33268 = cljs.core.chunk_rest.call(null,seq__33252_33266__$1);
var G__33269 = c__4148__auto___33267;
var G__33270 = cljs.core.count.call(null,c__4148__auto___33267);
var G__33271 = 0;
seq__33252_33256 = G__33268;
chunk__33253_33257 = G__33269;
count__33254_33258 = G__33270;
i__33255_33259 = G__33271;
continue;
}
} else
{var node_33272 = cljs.core.first.call(null,seq__33252_33266__$1);goog.dom.classes.toggle(node_33272,class$);
{
var G__33273 = cljs.core.next.call(null,seq__33252_33266__$1);
var G__33274 = null;
var G__33275 = 0;
var G__33276 = 0;
seq__33252_33256 = G__33273;
chunk__33253_33257 = G__33274;
count__33254_33258 = G__33275;
i__33255_33259 = G__33276;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33285__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33281_33286 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33282_33287 = null;var count__33283_33288 = 0;var i__33284_33289 = 0;while(true){
if((i__33284_33289 < count__33283_33288))
{var node_33290 = cljs.core._nth.call(null,chunk__33282_33287,i__33284_33289);goog.dom.classes.set(node_33290,classes_33285__$1);
{
var G__33291 = seq__33281_33286;
var G__33292 = chunk__33282_33287;
var G__33293 = count__33283_33288;
var G__33294 = (i__33284_33289 + 1);
seq__33281_33286 = G__33291;
chunk__33282_33287 = G__33292;
count__33283_33288 = G__33293;
i__33284_33289 = G__33294;
continue;
}
} else
{var temp__4092__auto___33295 = cljs.core.seq.call(null,seq__33281_33286);if(temp__4092__auto___33295)
{var seq__33281_33296__$1 = temp__4092__auto___33295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33281_33296__$1))
{var c__4148__auto___33297 = cljs.core.chunk_first.call(null,seq__33281_33296__$1);{
var G__33298 = cljs.core.chunk_rest.call(null,seq__33281_33296__$1);
var G__33299 = c__4148__auto___33297;
var G__33300 = cljs.core.count.call(null,c__4148__auto___33297);
var G__33301 = 0;
seq__33281_33286 = G__33298;
chunk__33282_33287 = G__33299;
count__33283_33288 = G__33300;
i__33284_33289 = G__33301;
continue;
}
} else
{var node_33302 = cljs.core.first.call(null,seq__33281_33296__$1);goog.dom.classes.set(node_33302,classes_33285__$1);
{
var G__33303 = cljs.core.next.call(null,seq__33281_33296__$1);
var G__33304 = null;
var G__33305 = 0;
var G__33306 = 0;
seq__33281_33286 = G__33303;
chunk__33282_33287 = G__33304;
count__33283_33288 = G__33305;
i__33284_33289 = G__33306;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33311_33315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33312_33316 = null;var count__33313_33317 = 0;var i__33314_33318 = 0;while(true){
if((i__33314_33318 < count__33313_33317))
{var node_33319 = cljs.core._nth.call(null,chunk__33312_33316,i__33314_33318);goog.dom.setTextContent(node_33319,value);
{
var G__33320 = seq__33311_33315;
var G__33321 = chunk__33312_33316;
var G__33322 = count__33313_33317;
var G__33323 = (i__33314_33318 + 1);
seq__33311_33315 = G__33320;
chunk__33312_33316 = G__33321;
count__33313_33317 = G__33322;
i__33314_33318 = G__33323;
continue;
}
} else
{var temp__4092__auto___33324 = cljs.core.seq.call(null,seq__33311_33315);if(temp__4092__auto___33324)
{var seq__33311_33325__$1 = temp__4092__auto___33324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33311_33325__$1))
{var c__4148__auto___33326 = cljs.core.chunk_first.call(null,seq__33311_33325__$1);{
var G__33327 = cljs.core.chunk_rest.call(null,seq__33311_33325__$1);
var G__33328 = c__4148__auto___33326;
var G__33329 = cljs.core.count.call(null,c__4148__auto___33326);
var G__33330 = 0;
seq__33311_33315 = G__33327;
chunk__33312_33316 = G__33328;
count__33313_33317 = G__33329;
i__33314_33318 = G__33330;
continue;
}
} else
{var node_33331 = cljs.core.first.call(null,seq__33311_33325__$1);goog.dom.setTextContent(node_33331,value);
{
var G__33332 = cljs.core.next.call(null,seq__33311_33325__$1);
var G__33333 = null;
var G__33334 = 0;
var G__33335 = 0;
seq__33311_33315 = G__33332;
chunk__33312_33316 = G__33333;
count__33313_33317 = G__33334;
i__33314_33318 = G__33335;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33340_33344 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33341_33345 = null;var count__33342_33346 = 0;var i__33343_33347 = 0;while(true){
if((i__33343_33347 < count__33342_33346))
{var node_33348 = cljs.core._nth.call(null,chunk__33341_33345,i__33343_33347);goog.dom.forms.setValue(node_33348,value);
{
var G__33349 = seq__33340_33344;
var G__33350 = chunk__33341_33345;
var G__33351 = count__33342_33346;
var G__33352 = (i__33343_33347 + 1);
seq__33340_33344 = G__33349;
chunk__33341_33345 = G__33350;
count__33342_33346 = G__33351;
i__33343_33347 = G__33352;
continue;
}
} else
{var temp__4092__auto___33353 = cljs.core.seq.call(null,seq__33340_33344);if(temp__4092__auto___33353)
{var seq__33340_33354__$1 = temp__4092__auto___33353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33340_33354__$1))
{var c__4148__auto___33355 = cljs.core.chunk_first.call(null,seq__33340_33354__$1);{
var G__33356 = cljs.core.chunk_rest.call(null,seq__33340_33354__$1);
var G__33357 = c__4148__auto___33355;
var G__33358 = cljs.core.count.call(null,c__4148__auto___33355);
var G__33359 = 0;
seq__33340_33344 = G__33356;
chunk__33341_33345 = G__33357;
count__33342_33346 = G__33358;
i__33343_33347 = G__33359;
continue;
}
} else
{var node_33360 = cljs.core.first.call(null,seq__33340_33354__$1);goog.dom.forms.setValue(node_33360,value);
{
var G__33361 = cljs.core.next.call(null,seq__33340_33354__$1);
var G__33362 = null;
var G__33363 = 0;
var G__33364 = 0;
seq__33340_33344 = G__33361;
chunk__33341_33345 = G__33362;
count__33342_33346 = G__33363;
i__33343_33347 = G__33364;
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
{var value_33375 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33371_33376 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33372_33377 = null;var count__33373_33378 = 0;var i__33374_33379 = 0;while(true){
if((i__33374_33379 < count__33373_33378))
{var node_33380 = cljs.core._nth.call(null,chunk__33372_33377,i__33374_33379);node_33380.innerHTML = value_33375;
{
var G__33381 = seq__33371_33376;
var G__33382 = chunk__33372_33377;
var G__33383 = count__33373_33378;
var G__33384 = (i__33374_33379 + 1);
seq__33371_33376 = G__33381;
chunk__33372_33377 = G__33382;
count__33373_33378 = G__33383;
i__33374_33379 = G__33384;
continue;
}
} else
{var temp__4092__auto___33385 = cljs.core.seq.call(null,seq__33371_33376);if(temp__4092__auto___33385)
{var seq__33371_33386__$1 = temp__4092__auto___33385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33371_33386__$1))
{var c__4148__auto___33387 = cljs.core.chunk_first.call(null,seq__33371_33386__$1);{
var G__33388 = cljs.core.chunk_rest.call(null,seq__33371_33386__$1);
var G__33389 = c__4148__auto___33387;
var G__33390 = cljs.core.count.call(null,c__4148__auto___33387);
var G__33391 = 0;
seq__33371_33376 = G__33388;
chunk__33372_33377 = G__33389;
count__33373_33378 = G__33390;
i__33374_33379 = G__33391;
continue;
}
} else
{var node_33392 = cljs.core.first.call(null,seq__33371_33386__$1);node_33392.innerHTML = value_33375;
{
var G__33393 = cljs.core.next.call(null,seq__33371_33386__$1);
var G__33394 = null;
var G__33395 = 0;
var G__33396 = 0;
seq__33371_33376 = G__33393;
chunk__33372_33377 = G__33394;
count__33373_33378 = G__33395;
i__33374_33379 = G__33396;
continue;
}
}
} else
{}
}
break;
}
}catch (e33370){if((e33370 instanceof Error))
{var e_33397 = e33370;domina.replace_children_BANG_.call(null,content,value_33375);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33370;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33404_33408 = cljs.core.seq.call(null,children);var chunk__33405_33409 = null;var count__33406_33410 = 0;var i__33407_33411 = 0;while(true){
if((i__33407_33411 < count__33406_33410))
{var child_33412 = cljs.core._nth.call(null,chunk__33405_33409,i__33407_33411);frag.appendChild(child_33412);
{
var G__33413 = seq__33404_33408;
var G__33414 = chunk__33405_33409;
var G__33415 = count__33406_33410;
var G__33416 = (i__33407_33411 + 1);
seq__33404_33408 = G__33413;
chunk__33405_33409 = G__33414;
count__33406_33410 = G__33415;
i__33407_33411 = G__33416;
continue;
}
} else
{var temp__4092__auto___33417 = cljs.core.seq.call(null,seq__33404_33408);if(temp__4092__auto___33417)
{var seq__33404_33418__$1 = temp__4092__auto___33417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33404_33418__$1))
{var c__4148__auto___33419 = cljs.core.chunk_first.call(null,seq__33404_33418__$1);{
var G__33420 = cljs.core.chunk_rest.call(null,seq__33404_33418__$1);
var G__33421 = c__4148__auto___33419;
var G__33422 = cljs.core.count.call(null,c__4148__auto___33419);
var G__33423 = 0;
seq__33404_33408 = G__33420;
chunk__33405_33409 = G__33421;
count__33406_33410 = G__33422;
i__33407_33411 = G__33423;
continue;
}
} else
{var child_33424 = cljs.core.first.call(null,seq__33404_33418__$1);frag.appendChild(child_33424);
{
var G__33425 = cljs.core.next.call(null,seq__33404_33418__$1);
var G__33426 = null;
var G__33427 = 0;
var G__33428 = 0;
seq__33404_33408 = G__33425;
chunk__33405_33409 = G__33426;
count__33406_33410 = G__33427;
i__33407_33411 = G__33428;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33398_SHARP_,p2__33399_SHARP_){return f.call(null,p1__33398_SHARP_,p2__33399_SHARP_);
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
{if((function (){var G__33430 = list_thing;if(G__33430)
{var bit__4050__auto__ = (G__33430.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33430.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33430.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33430);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33430);
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
{if((function (){var G__33431 = content;if(G__33431)
{var bit__4050__auto__ = (G__33431.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33431.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33431.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33431);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33431);
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
{if((function (){var G__33432 = content;if(G__33432)
{var bit__4050__auto__ = (G__33432.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33432.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33432);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33432);
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
